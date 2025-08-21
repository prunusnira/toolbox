
import { createFileRoute } from '@tanstack/react-router';
import React, { useState, useRef } from 'react';
import JsonView from '@uiw/react-json-view';
import { lightTheme } from '@uiw/react-json-view/light';

export const Route = createFileRoute('/dev/json-editor')({
  component: JsonEditor,
});

type JsonValue = Record<string, any> | any[] | string | number | boolean | null;

function JsonEditor() {
  const [jsonObject, setJsonObject] = useState<JsonValue>({});
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
          const parsed = JSON.parse(text);
          setJsonObject(parsed);
          setError('');
        } catch (err: any) {
          setError('Error parsing JSON file: ' + err.message);
          setJsonObject({});
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDownload = () => {
    const jsonString = JSON.stringify(jsonObject, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 h-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold">JSON Editor</h1>
      <div className="flex items-center gap-2">
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <button 
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Load from File
        </button>
        <button 
            onClick={handleDownload}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
            Download JSON
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex-1 grid grid-cols-2 gap-4 overflow-hidden">
          <textarea
            className="w-full h-full p-2 border rounded-md resize-none font-mono"
            value={JSON.stringify(jsonObject, null, 2)}
            onChange={(e) => {
                try {
                    const parsed = JSON.parse(e.target.value);
                    setJsonObject(parsed);
                    setError('');
                } catch (err) {
                    // Don't update state if JSON is invalid while typing
                }
            }}
            placeholder="Paste or type JSON here..."
          />
        <div className="w-full h-full p-2 border rounded-md bg-white overflow-auto">
          <JsonView
            value={jsonObject}
            onEdit={(edit) => {
                setJsonObject(edit.newValue as JsonValue);
            }}
            style={lightTheme}
            enableClipboard
            displayDataTypes
            editable
          />
        </div>
      </div>
    </div>
  );
}
