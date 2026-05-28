import { useCallback, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import { jsonEditorTranslations } from '../../i18n/translations.ts'
import {
  jsonRootAtom,
  jsonErrorAtom,
  viewModeAtom,
  jsonTextAtom,
  createRootNode,
  parseJsonToTree,
  updateNodeInTree,
  deleteNodeFromTree,
  treeToJsonString,
  type TreePath,
} from '@/feature/dev/json-editor/data/Json.ts'
import { JsonNodeEditor } from '@/feature/dev/json-editor/component/editor/Json.item.tsx'

export const JsonVisualEditor = () => {
  const lang = useAtomValue(languageAtom)
  const t = jsonEditorTranslations[lang]
  const [root, setRoot] = useAtom(jsonRootAtom)
  const [error, setError] = useAtom(jsonErrorAtom)
  const [viewMode, setViewMode] = useAtom(viewModeAtom)
  const [jsonText, setJsonText] = useAtom(jsonTextAtom)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)

  const handleChange = useCallback(
    (path: TreePath, updater: (node: typeof root) => typeof root) => {
      setRoot((prev) => {
        if (path.length === 0) {
          return updater(prev)
        }
        return updateNodeInTree(prev, path, updater)
      })
    },
    [setRoot],
  )

  const handleDelete = useCallback(
    (path: TreePath) => {
      setRoot((prev) => deleteNodeFromTree(prev, path))
    },
    [setRoot],
  )

  const handleRootTypeChange = useCallback(
    (type: 'object' | 'array') => {
      setRoot((prev) => ({
        ...prev,
        type,
        children: [],
      }))
    },
    [setRoot],
  )

  const switchToGui = useCallback(() => {
    if (viewMode === 'text') {
      const parsed = parseJsonToTree(jsonText)
      if (parsed) {
        setRoot(parsed)
        setError('')
      } else {
        setError(t.parseError)
        return
      }
    }
    setViewMode('gui')
  }, [viewMode, jsonText, setRoot, setError, setViewMode, t])

  const switchToText = useCallback(() => {
    const text = treeToJsonString(root)
    setJsonText(text)
    setViewMode('text')
    setError('')
  }, [root, setJsonText, setViewMode, setError])

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setJsonText(e.target.value)
      try {
        JSON.parse(e.target.value)
        setError('')
      } catch (err) {
        setError(`${t.jsonError} ${(err as Error).message}`)
      }
    },
    [setJsonText, setError, t],
  )

  const handleNew = useCallback(
    (type: 'object' | 'array' = 'object') => {
      setRoot(createRootNode(type))
      setJsonText(type === 'object' ? '{}' : '[]')
      setError('')
    },
    [setRoot, setJsonText, setError],
  )

  const handleFileUpload = useCallback(
    (file: File) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        const parsed = parseJsonToTree(text)
        if (parsed) {
          setRoot(parsed)
          setJsonText(text)
          setError('')
          setViewMode('gui')
        } else {
          setError(t.fileParseError)
        }
      }
      reader.readAsText(file)
    },
    [setRoot, setJsonText, setError, setViewMode, t],
  )

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        handleFileUpload(file)
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    },
    [handleFileUpload],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      const file = e.dataTransfer.files[0]
      if (file && (file.type === 'application/json' || file.name.endsWith('.json'))) {
        handleFileUpload(file)
      }
    },
    [handleFileUpload],
  )

  return (
    <section className="flex-1 flex flex-col min-w-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200">
        {/* Mode tabs */}
        <div className="flex rounded-lg overflow-hidden border border-gray-300">
          <button
            onClick={switchToGui}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              viewMode === 'gui'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {t.guiEdit}
          </button>
          <button
            onClick={switchToText}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              viewMode === 'text'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {t.textEdit}
          </button>
        </div>

        <div className="h-4 w-px bg-gray-300" />

        {/* New buttons */}
        <button
          onClick={() => handleNew('object')}
          className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-white rounded border border-gray-300 hover:bg-gray-100 transition-colors"
          title={t.newObject}
        >
          {t.newObject}
        </button>
        <button
          onClick={() => handleNew('array')}
          className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-white rounded border border-gray-300 hover:bg-gray-100 transition-colors"
          title={t.newArray}
        >
          {t.newArray}
        </button>

        <div className="h-4 w-px bg-gray-300" />

        {/* File upload */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-white rounded border border-gray-300 hover:bg-gray-100 transition-colors"
          title={t.openFile}
        >
          {t.openFile}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>

      {/* Error bar */}
      {error && (
        <div className="px-3 py-2 bg-red-50 border-b border-red-200 text-red-700 text-xs">{error}</div>
      )}

      {/* Editor content */}
      <div
        className={`flex-1 overflow-auto p-3 ${dragOver ? 'bg-blue-50 ring-2 ring-blue-300 ring-inset' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {dragOver && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-blue-50/80">
            <p className="text-blue-600 text-lg font-medium">{t.dropFile}</p>
          </div>
        )}

        {viewMode === 'gui' ? (
          <div>
            {/* Root type selector */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
              <span className="text-xs font-semibold text-gray-500">{t.rootType}</span>
              <select
                value={root.type}
                onChange={(e) => handleRootTypeChange(e.target.value as 'object' | 'array')}
                className="px-2 py-0.5 text-xs font-semibold rounded border border-gray-300 cursor-pointer"
              >
                <option value="object">Object {'{}'}</option>
                <option value="array">Array []</option>
              </select>
              <span className="text-xs text-gray-400">
                {root.type === 'object' ? t.keyValueStructure : t.orderedList}
              </span>
            </div>

            {/* Root node editor */}
            <div className="text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-gray-700">
                  {root.type === 'object' ? '{ Root Object }' : '[ Root Array ]'}
                </span>
              </div>
              {root.children.length === 0 && (
                <p className="text-xs text-gray-400 italic py-2 px-4">
                  {t.addFirstItem}
                </p>
              )}
              {root.children.map((child) => (
                <JsonNodeEditor
                  key={child.id}
                  node={child}
                  path={[child.id]}
                  isRoot={false}
                  parentType={root.type as 'object' | 'array'}
                  onChange={handleChange}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        ) : (
          <textarea
            value={jsonText}
            onChange={handleTextChange}
            placeholder={t.pasteJson}
            spellCheck={false}
            className="w-full h-full min-h-[400px] p-2 font-mono text-sm bg-gray-50 border border-gray-200 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        )}
      </div>
    </section>
  )
}