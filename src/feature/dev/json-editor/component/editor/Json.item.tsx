import { useState, useCallback } from 'react'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/i18n/languageAtom.ts'
import { jsonEditorTranslations } from '../../i18n/translations.ts'
import type { JsonNode, JsonNodeType, TreePath } from '@/feature/dev/json-editor/data/Json.ts'
import {
  createDefaultNode,
  addChildToNode,
  toggleNodeExpansion,
} from '@/feature/dev/json-editor/data/Json.ts'

const TYPE_OPTIONS: JsonNodeType[] = ['string', 'number', 'boolean', 'null', 'object', 'array']

const TYPE_COLORS: Record<JsonNodeType, string> = {
  string: 'bg-green-100 text-green-800',
  number: 'bg-blue-100 text-blue-800',
  boolean: 'bg-yellow-100 text-yellow-800',
  null: 'bg-gray-100 text-gray-800',
  object: 'bg-purple-100 text-purple-800',
  array: 'bg-orange-100 text-orange-800',
}

type NodeEditorProps = {
  node: JsonNode
  path: TreePath
  isRoot: boolean
  parentType: 'object' | 'array'
  onChange: (path: TreePath, updater: (node: JsonNode) => JsonNode) => void
  onDelete: (path: TreePath) => void
}

export const JsonNodeEditor = ({ node, path, isRoot, parentType, onChange, onDelete }: NodeEditorProps) => {
  const lang = useAtomValue(languageAtom)
  const t = jsonEditorTranslations[lang]
  const [newChildType, setNewChildType] = useState<JsonNodeType>('string')

  const isContainer = node.type === 'object' || node.type === 'array'
  const showKey = parentType === 'object'

  const handleKeyChange = useCallback(
    (newKey: string) => {
      onChange(path, (n) => ({ ...n, key: newKey }))
    },
    [onChange, path],
  )

  const handleValueChange = useCallback(
    (newValue: string) => {
      onChange(path, (n) => ({ ...n, value: newValue }))
    },
    [onChange, path],
  )

  const handleTypeChange = useCallback(
    (newType: JsonNodeType) => {
      onChange(path, (n) => {
        const updated: JsonNode = {
          ...n,
          type: newType,
          value:
            newType === 'string'
              ? String(n.value || '')
              : newType === 'number'
                ? '0'
                : newType === 'boolean'
                  ? 'true'
                  : newType === 'null'
                    ? 'null'
                    : '',
          children: newType === 'object' || newType === 'array' ? n.children || [] : [],
          expanded: newType === 'object' || newType === 'array',
        }
        return updated
      })
    },
    [onChange, path],
  )

  const handleToggleExpand = useCallback(() => {
    onChange([], (_root) => toggleNodeExpansion(_root, path))
  }, [onChange, path])

  const handleAddChild = useCallback(() => {
    const newChild = createDefaultNode(
      node.type === 'array' ? String(node.children.length) : '',
      newChildType,
    )
    onChange([], (_root) => addChildToNode(_root, path, newChild))
  }, [onChange, path, node, newChildType])

  const handleDelete = useCallback(() => {
    onDelete(path)
  }, [onDelete, path])

  const handleChildChange = useCallback(
    (childPath: TreePath, updater: (node: JsonNode) => JsonNode) => {
      onChange(childPath, updater)
    },
    [onChange],
  )

  const handleChildDelete = useCallback(
    (childPath: TreePath) => {
      onDelete(childPath)
    },
    [onDelete],
  )

  return (
    <div className="ml-0">
      {/* Node Row */}
      <div className="group flex items-center gap-1.5 py-1 px-2 rounded hover:bg-gray-50 border-l-2 border-transparent hover:border-blue-300 transition-all">
        {/* Expand/Collapse button for containers */}
        {isContainer ? (
          <button
            onClick={handleToggleExpand}
            className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 text-xs font-bold transition-colors"
            title={node.expanded ? t.collapse : t.expand}
          >
            {node.expanded ? '▼' : '▶'}
          </button>
        ) : (
          <span className="flex-shrink-0 w-5" />
        )}

        {/* Key input (only for object children) */}
        {showKey && (
          <input
            type="text"
            value={node.key}
            onChange={(e) => handleKeyChange(e.target.value)}
            placeholder={t.keyName}
            className="flex-shrink-0 w-28 px-1.5 py-0.5 text-sm font-medium bg-blue-50 border border-blue-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
          />
        )}

        {/* Type selector */}
        <select
          value={node.type}
          onChange={(e) => handleTypeChange(e.target.value as JsonNodeType)}
          className={`flex-shrink-0 px-1.5 py-0.5 text-xs font-semibold rounded border border-transparent cursor-pointer ${TYPE_COLORS[node.type]}`}
        >
          {TYPE_OPTIONS.map((typeOpt) => (
            <option key={typeOpt} value={typeOpt}>
              {typeOpt}
            </option>
          ))}
        </select>

        {/* Value input (only for primitives) */}
        {!isContainer && node.type !== 'null' && (
          <>
            {node.type === 'boolean' ? (
              <select
                value={node.value}
                onChange={(e) => handleValueChange(e.target.value)}
                className="flex-1 min-w-0 px-1.5 py-0.5 text-sm bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            ) : (
              <input
                type={node.type === 'number' ? 'number' : 'text'}
                value={node.value}
                onChange={(e) => handleValueChange(e.target.value)}
                placeholder={node.type === 'string' ? t.stringValue : t.numberValue}
                className="flex-1 min-w-0 px-1.5 py-0.5 text-sm bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            )}
          </>
        )}

        {/* Container label */}
        {isContainer && (
          <span className="flex-1 text-xs text-gray-400 italic">
            {node.type === 'object' ? `{ ${node.children.length}${t.items} }` : `[ ${node.children.length}${t.items} ]`}
          </span>
        )}

        {/* Delete button (hidden for root) */}
        {!isRoot && (
          <button
            onClick={handleDelete}
            className="flex-shrink-0 opacity-0 group-hover:opacity-100 w-6 h-6 flex items-center justify-center rounded text-red-400 hover:bg-red-100 hover:text-red-600 text-sm transition-all"
            title={t.delete}
          >
            ✕
          </button>
        )}
      </div>

      {/* Children + Add Child */}
      {isContainer && node.expanded && (
        <div className="ml-5 border-l border-gray-200 pl-1">
          {/* Children */}
          {node.children.map((child) => (
            <JsonNodeEditor
              key={child.id}
              node={child}
              path={[...path, child.id]}
              isRoot={false}
              parentType={node.type as 'object' | 'array'}
              onChange={handleChildChange}
              onDelete={handleChildDelete}
            />
          ))}

          {/* Add child controls */}
          <div className="flex items-center gap-1.5 py-1 px-2">
            <button
              onClick={handleAddChild}
              className="px-2 py-0.5 text-xs font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100 border border-blue-200 transition-colors"
              title={t.addItem}
            >
              + {t.addItem}
            </button>
            <select
              value={newChildType}
              onChange={(e) => setNewChildType(e.target.value as JsonNodeType)}
              className="px-1 py-0.5 text-xs rounded border border-gray-200 bg-white"
            >
              {TYPE_OPTIONS.map((typeOpt) => (
                <option key={typeOpt} value={typeOpt}>
                  {typeOpt}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}