import type { ReactNode } from 'react'

export type DiffLine = {
  type: 'same' | 'added' | 'removed'
  text: string
}

export const sampleJson = `{
  "name": "Nira's Toolbox",
  "features": ["fast", "local", "useful"],
  "enabled": true
}`

export function encodeBase64Url(value: string) {
  const padding = '='.repeat((4 - (value.length % 4)) % 4)
  const normalized = `${value}${padding}`.replace(/-/g, '+').replace(/_/g, '/')
  return decodeURIComponent(
    Array.from(atob(normalized))
      .map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`)
      .join(''),
  )
}

export function formatMaybeTimestamp(value: unknown) {
  if (typeof value !== 'number') return ''
  const ms = value > 10_000_000_000 ? value : value * 1000
  const date = new Date(ms)
  return Number.isNaN(date.getTime()) ? '' : date.toLocaleString()
}

function buildRegex(pattern: string, flags: string) {
  const cleanFlags = Array.from(
    new Set(flags.replace(/[^dgimsuvy]/g, '').split('')),
  ).join('')
  return new RegExp(
    pattern,
    cleanFlags.includes('g') ? cleanFlags : `${cleanFlags}g`,
  )
}

export function getRegexMatches(input: string, pattern: string, flags: string) {
  if (!pattern) return { matches: [] as RegExpMatchArray[], error: '' }
  try {
    const regex = buildRegex(pattern, flags)
    return { matches: Array.from(input.matchAll(regex)), error: '' }
  } catch (error) {
    return {
      matches: [] as RegExpMatchArray[],
      error: error instanceof Error ? error.message : 'Invalid pattern',
    }
  }
}

export function renderHighlightedText(
  input: string,
  matches: RegExpMatchArray[],
): ReactNode[] {
  const parts: ReactNode[] = []
  let cursor = 0

  matches.forEach((match, index) => {
    const start = match.index ?? 0
    const text = match[0]
    if (text.length === 0) return
    if (start > cursor) parts.push(input.slice(cursor, start))
    parts.push(
      <mark
        key={`${start}-${index}`}
        className="rounded bg-yellow-100 px-0.5 text-yellow-900"
      >
        {text}
      </mark>,
    )
    cursor = start + text.length
  })

  if (cursor < input.length) parts.push(input.slice(cursor))
  return parts
}

export function diffLines(left: string, right: string): DiffLine[] {
  const a = left.split('\n')
  const b = right.split('\n')
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array<number>(b.length + 1).fill(0),
  )

  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      dp[i][j] =
        a[i] === b[j]
          ? dp[i + 1][j + 1] + 1
          : Math.max(dp[i + 1][j], dp[i][j + 1])
    }
  }

  const result: DiffLine[] = []
  let i = 0
  let j = 0
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      result.push({ type: 'same', text: a[i] ?? '' })
      i += 1
      j += 1
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      result.push({ type: 'removed', text: a[i] ?? '' })
      i += 1
    } else {
      result.push({ type: 'added', text: b[j] ?? '' })
      j += 1
    }
  }
  while (i < a.length) {
    result.push({ type: 'removed', text: a[i] ?? '' })
    i += 1
  }
  while (j < b.length) {
    result.push({ type: 'added', text: b[j] ?? '' })
    j += 1
  }
  return result
}

export function jsonToYaml(value: unknown, depth = 0): string {
  const indent = '  '.repeat(depth)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    return value
      .map((item) => {
        if (item !== null && typeof item === 'object') {
          return `${indent}-\n${jsonToYaml(item, depth + 1)}`
        }
        return `${indent}- ${formatYamlScalar(item)}`
      })
      .join('\n')
  }
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value)
    if (entries.length === 0) return '{}'
    return entries
      .map(([key, item]) => {
        if (item !== null && typeof item === 'object') {
          return `${indent}${key}:\n${jsonToYaml(item, depth + 1)}`
        }
        return `${indent}${key}: ${formatYamlScalar(item)}`
      })
      .join('\n')
  }
  return `${indent}${formatYamlScalar(value)}`
}

function formatYamlScalar(value: unknown) {
  if (typeof value === 'string') {
    return /[:#\n]|^\s|\s$|^$/.test(value) ? JSON.stringify(value) : value
  }
  return String(value)
}

function parseYamlScalar(value: string): unknown {
  if (value === 'true') return true
  if (value === 'false') return false
  if (value === 'null') return null
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value)
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    try {
      return JSON.parse(value)
    } catch {
      return value.slice(1, -1)
    }
  }
  return value
}

export function yamlToJson(yaml: string) {
  const root: Record<string, unknown> = {}
  const lines = yaml
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  for (const line of lines) {
    const index = line.indexOf(':')
    if (index === -1)
      throw new Error(
        'Only simple key/value YAML is supported in this quick converter.',
      )
    const key = line.slice(0, index).trim()
    const value = line.slice(index + 1).trim()
    root[key] = value ? parseYamlScalar(value) : null
  }

  return root
}
