import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/dev/json-formatter')({
  component: JsonFormatter,
});

function JsonFormatter() {
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, 2);
      setFormattedJson(formatted);
      setError('');
    } catch (e: any) {
      setFormattedJson('');
      setError('Invalid JSON: ' + e.message);
    }
  };

  return (
    <div className="p-4 h-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold">JSON Formatter</h1>
      <div className="flex-1 grid grid-cols-2 gap-4 overflow-hidden">
        <div className="flex flex-col">
          <textarea
            className="w-full flex-1 p-2 border rounded-md resize-none"
            value={inputJson}
            onChange={(e) => setInputJson(e.target.value)}
            placeholder="Enter JSON here..."
          />
          <button
            onClick={handleFormat}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Format JSON
          </button>
        </div>
        <div className="flex flex-col">
          <pre className="w-full flex-1 p-2 border rounded-md bg-gray-50 overflow-auto">
            {error ? (
              <span className="text-red-500">{error}</span>
            ) : (
              <code>{formattedJson}</code>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}
