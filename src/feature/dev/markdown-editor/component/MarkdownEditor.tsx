import { useRef, useState, useCallback } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { useAtomValue } from 'jotai';
import { languageAtom } from '@/i18n/languageAtom.ts';
import { mdEditorTranslations } from '../i18n/translations.ts';

type ViewMode = 'edit' | 'preview' | 'split';

// Sanitize schema: common markdown HTML + img with width/height
const sanitizeSchema = {
  tagNames: [
    // Standard markdown elements
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'br', 'hr',
    'em', 'strong', 'del', 'ins',
    'blockquote',
    'ul', 'ol', 'li',
    'code', 'pre',
    'a',
    'img',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'input',
    // Extra commonly allowed HTML in markdown
    'sub', 'sup',
    'kbd', 'mark',
    'details', 'summary',
    'abbr',
    'span', 'div',
    'u', 's',
  ],
  attributes: {
    '*': ['className'],
    a: ['href', 'title', 'target', 'rel'],
    img: ['src', 'alt', 'title', 'width', 'height'],
    th: ['align'],
    td: ['align'],
    input: ['type', 'checked', 'disabled'],
    abbr: ['title'],
    details: ['open'],
    span: ['style'],
    div: ['style'],
    code: ['language'],
    pre: ['language'],
  },
};

const defaultMarkdown = `# Hello Markdown!

## Features
- **Bold** and *italic* text
- Lists and checkboxes
- [Links](https://example.com)
- Code blocks

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Table
| Feature | Status |
|---------|--------|
| Edit    | ✅     |
| Preview | ✅     |
| Export  | ✅     |

> Blockquote example

---

Enjoy writing! ✨
`;

export default function MarkdownEditor() {
  const [value, setValue] = useState(defaultMarkdown);
  const [mode, setMode] = useState<ViewMode>('split');
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageWidth, setImageWidth] = useState('');
  const [imageHeight, setImageHeight] = useState('');
  const lang = useAtomValue(languageAtom);
  const t = mdEditorTranslations[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const hasImageDimensions = imageWidth || imageHeight;

  const handleDownload = () => {
    const blob = new Blob([value], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === 'string') {
        setValue(text);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const insertMarkdown = useCallback((prefix: string, suffix: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.substring(start, end);
    const replacement = `${prefix}${selected || 'text'}${suffix}`;
    const newValue = value.substring(0, start) + replacement + value.substring(end);
    setValue(newValue);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + (selected || 'text').length,
      );
    }, 0);
  }, [value]);

  const toolbarButtons = [
    { label: '**B**', title: 'Bold', action: () => insertMarkdown('**', '**') },
    { label: '*I*', title: 'Italic', action: () => insertMarkdown('*', '*') },
    { label: '~S~', title: 'Strikethrough', action: () => insertMarkdown('~~', '~~') },
    { label: 'H1', title: 'Heading 1', action: () => insertMarkdown('# ') },
    { label: 'H2', title: 'Heading 2', action: () => insertMarkdown('## ') },
    { label: 'H3', title: 'Heading 3', action: () => insertMarkdown('### ') },
    { label: '""', title: 'Blockquote', action: () => insertMarkdown('> ') },
    { label: '`</>`', title: 'Code', action: () => insertMarkdown('`', '`') },
    { label: '—', title: 'Horizontal Rule', action: () => insertMarkdown('\n---\n') },
    { label: '•', title: 'Unordered List', action: () => insertMarkdown('- ') },
    { label: '1.', title: 'Ordered List', action: () => insertMarkdown('1. ') },
    { label: '[]', title: 'Task', action: () => insertMarkdown('- [ ] ') },
    { label: '🔗', title: 'Link', action: () => insertMarkdown('[', '](url)') },
    { label: '🖼️', title: 'Image', action: () => { setImageTitle(''); setImageUrl(''); setImageWidth(''); setImageHeight(''); setShowImageDialog(true); } },
    { label: '📊', title: 'Table', action: () => insertMarkdown('\n| Header | Header |\n|--------|--------|\n| Cell   | Cell   |\n') },
  ];

  const handleImageInsert = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;

    let md: string;
    if (hasImageDimensions) {
      // Use HTML img tag when dimensions are specified
      const w = imageWidth ? ` width="${imageWidth}"` : '';
      const h = imageHeight ? ` height="${imageHeight}"` : '';
      md = `<img src="${imageUrl}" alt="${imageTitle}"${w}${h} />`;
    } else {
      // Use standard markdown image syntax
      md = `![${imageTitle}](${imageUrl})`;
    }

    const newValue = value.substring(0, start) + md + value.substring(start);
    setValue(newValue);
    setShowImageDialog(false);
    setImageTitle('');
    setImageUrl('');
    setImageWidth('');
    setImageHeight('');
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + md.length);
    }, 0);
  };

  const handleImageCancel = () => {
    setShowImageDialog(false);
    setImageTitle('');
    setImageUrl('');
    setImageWidth('');
    setImageHeight('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-white">
        {/* Left: mode buttons */}
        <div className="flex items-center gap-1">
          {(['edit', 'split', 'preview'] as ViewMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1 text-xs rounded transition ${
                mode === m
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {m === 'edit' ? '📝' : m === 'preview' ? '👁' : '⬜'} {t[m]}
            </button>
          ))}
        </div>

        {/* Center: formatting buttons (only in edit/split) */}
        {mode !== 'preview' && (
          <div className="flex items-center gap-0.5 flex-wrap">
            {toolbarButtons.map((btn, i) => (
              <button
                key={i}
                onClick={btn.action}
                title={btn.title}
                className="px-1.5 py-0.5 text-xs rounded hover:bg-gray-200 text-gray-700 font-mono transition"
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {/* Right: file actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleOpenFile}
            className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100 text-gray-700 transition"
          >
            📂 {t.openFile}
          </button>
          <button
            onClick={handleCopy}
            className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100 text-gray-700 transition"
          >
            📋 {t.copy}
          </button>
          <button
            onClick={handleDownload}
            className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            💾 {t.download}
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".md,.markdown,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Editor area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Edit pane */}
        {mode !== 'preview' && (
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`flex-1 p-4 font-mono text-sm resize-none outline-none border-r border-gray-200 bg-white text-gray-900 ${
              mode === 'split' ? 'w-1/2' : 'w-full'
            }`}
            style={mode === 'split' ? { width: '50%' } : { width: '100%' }}
            spellCheck={false}
          />
        )}

        {/* Preview pane */}
        {mode !== 'edit' && (
          <div
            className={`flex-1 overflow-auto p-6 bg-white markdown-preview ${
              mode === 'split' ? 'w-1/2' : 'w-full'
            }`}
            style={mode === 'split' ? { width: '50%' } : { width: '100%' }}
          >
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
            >
              {value}
            </Markdown>
          </div>
        )}
      </div>

      {/* Image Dialog */}
      {showImageDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-5 w-[420px] max-w-full">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">🖼️ {t.imageTitle}</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.imageAltLabel}</label>
                <input
                  type="text"
                  value={imageTitle}
                  onChange={(e) => setImageTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder={t.imageAltPlaceholder}
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.imageUrlLabel}</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  placeholder={t.imageUrlPlaceholder}
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.imageWidth}</label>
                  <input
                    type="text"
                    value={imageWidth}
                    onChange={(e) => setImageWidth(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    placeholder="e.g. 400, 80%"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.imageHeight}</label>
                  <input
                    type="text"
                    value={imageHeight}
                    onChange={(e) => setImageHeight(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    placeholder="e.g. 300, 50%"
                  />
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 rounded text-sm" style={{ backgroundColor: 'rgb(254 252 232)', border: '1px solid rgb(253 230 138)', color: 'rgb(113 63 18)' }}>
                <span>⚠️</span>
                <span>{t.imageHtmlWarning}</span>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={handleImageCancel}
                className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 text-gray-700 transition"
              >
                {t.cancel}
              </button>
              <button
                onClick={handleImageInsert}
                disabled={!imageUrl}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {t.ok}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1 text-xs border-t border-gray-200 bg-gray-50 text-gray-500">
        <span>{value.length} {t.chars}</span>
        <span>{value.split('\n').length} {t.lines}</span>
      </div>
    </div>
  );
}