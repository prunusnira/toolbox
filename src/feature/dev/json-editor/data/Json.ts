import { atom } from 'jotai'

// ===== Types =====
export type JsonNodeType = 'string' | 'number' | 'boolean' | 'null' | 'object' | 'array'

export type JsonNode = {
  id: string
  key: string
  type: JsonNodeType
  value: string
  children: JsonNode[]
  expanded: boolean
}

// ===== ID Generator =====
let counter = 0
export const generateId = () => `node_${Date.now()}_${++counter}`

// ===== Default Node Creators =====
export const createDefaultNode = (key: string = '', type: JsonNodeType = 'string'): JsonNode => ({
  id: generateId(),
  key,
  type,
  value: type === 'string' ? '' : type === 'number' ? '0' : type === 'boolean' ? 'true' : '',
  children: type === 'object' || type === 'array' ? [] : [],
  expanded: true,
})

export const createRootNode = (type: 'object' | 'array' = 'object'): JsonNode => ({
  id: 'root',
  key: '',
  type,
  value: '',
  children: [],
  expanded: true,
})

// ===== JSON Parser: Text -> Tree =====
export const parseJsonToTree = (text: string): JsonNode | null => {
  try {
    const parsed = JSON.parse(text)
    return valueToNode('', parsed, true)
  } catch {
    return null
  }
}

const valueToNode = (key: string, value: unknown, isRoot = false): JsonNode => {
  const id = isRoot ? 'root' : generateId()

  if (value === null || value === undefined) {
    return { id, key, type: 'null', value: 'null', children: [], expanded: false }
  }
  if (typeof value === 'string') {
    return { id, key, type: 'string', value, children: [], expanded: false }
  }
  if (typeof value === 'number') {
    return { id, key, type: 'number', value: String(value), children: [], expanded: false }
  }
  if (typeof value === 'boolean') {
    return { id, key, type: 'boolean', value: String(value), children: [], expanded: false }
  }
  if (Array.isArray(value)) {
    return {
      id,
      key,
      type: 'array',
      value: '',
      children: value.map((item, index) => valueToNode(String(index), item)),
      expanded: true,
    }
  }
  if (typeof value === 'object') {
    return {
      id,
      key,
      type: 'object',
      value: '',
      children: Object.entries(value).map(([k, v]) => valueToNode(k, v)),
      expanded: true,
    }
  }

  return { id, key, type: 'string', value: String(value), children: [], expanded: false }
}

// ===== Tree -> JSON Value =====
export const treeToJsonValue = (node: JsonNode): unknown => {
  switch (node.type) {
    case 'string':
      return node.value
    case 'number': {
      const num = Number(node.value)
      return isNaN(num) ? 0 : num
    }
    case 'boolean':
      return node.value === 'true'
    case 'null':
      return null
    case 'array':
      return node.children.map((child) => treeToJsonValue(child))
    case 'object': {
      const obj: Record<string, unknown> = {}
      node.children.forEach((child) => {
        obj[child.key] = treeToJsonValue(child)
      })
      return obj
    }
  }
}

// ===== Tree -> JSON String =====
export const treeToJsonString = (node: JsonNode, indent: number = 2): string => {
  const value = treeToJsonValue(node)
  return JSON.stringify(value, null, indent)
}

// ===== Tree Mutation Helpers =====
export type TreePath = string[]

export const findNodeByPath = (root: JsonNode, path: TreePath): JsonNode | null => {
  if (path.length === 0) return root
  const [first, ...rest] = path
  const child = root.children.find((c) => c.id === first)
  if (!child) return null
  return rest.length === 0 ? child : findNodeByPath(child, rest)
}

export const updateNodeInTree = (root: JsonNode, path: TreePath, updater: (node: JsonNode) => JsonNode): JsonNode => {
  if (path.length === 0) return updater(root)

  const [first, ...rest] = path
  return {
    ...root,
    children: root.children.map((child) => {
      if (child.id === first) {
        if (rest.length === 0) return updater(child)
        return updateNodeInTree(child, rest, updater)
      }
      return child
    }),
  }
}

export const deleteNodeFromTree = (root: JsonNode, path: TreePath): JsonNode => {
  if (path.length === 0) return root

  const [first, ...rest] = path
  if (rest.length === 0) {
    return {
      ...root,
      children: root.children.filter((child) => child.id !== first),
    }
  }

  return {
    ...root,
    children: root.children.map((child) => {
      if (child.id === first) {
        return deleteNodeFromTree(child, rest)
      }
      return child
    }),
  }
}

export const addChildToNode = (root: JsonNode, path: TreePath, child: JsonNode): JsonNode => {
  return updateNodeInTree(root, path, (node) => ({
    ...node,
    children: [...node.children, child],
    expanded: true,
  }))
}

export const toggleNodeExpansion = (root: JsonNode, path: TreePath): JsonNode => {
  return updateNodeInTree(root, path, (node) => ({
    ...node,
    expanded: !node.expanded,
  }))
}

// ===== Atoms =====
export const jsonRootAtom = atom<JsonNode>(createRootNode('object'))

export const jsonErrorAtom = atom<string>('')

export const viewModeAtom = atom<'gui' | 'text'>('gui')

export const jsonTextAtom = atom<string>('{}')