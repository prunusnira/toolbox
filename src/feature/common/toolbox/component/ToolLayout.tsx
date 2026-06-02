import { useState } from 'react'
import type { ReactNode } from 'react'

export const textareaClass =
  'w-full min-h-72 resize-y rounded border border-gray-200 bg-white p-3 font-mono text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300'

export const inputClass =
  'rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300'

export const buttonClass =
  'rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100'

export const primaryButtonClass =
  'rounded bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600'

export function ToolPage({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <article className="h-full w-full overflow-auto p-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <header className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
        </header>
        {children}
      </div>
    </article>
  )
}

export function Panel({
  title,
  actions,
  children,
}: {
  title: string
  actions?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white">
      <div className="flex min-h-12 flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-3 py-2">
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
        {actions}
      </div>
      <div className="p-3">{children}</div>
    </section>
  )
}

export function CopyButton({
  text,
  label,
  copiedLabel,
}: {
  text: string
  label: string
  copiedLabel: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button type="button" className={buttonClass} onClick={copy}>
      {copied ? copiedLabel : label}
    </button>
  )
}

export function ResultBox({ value }: { value: string }) {
  return (
    <pre className="min-h-72 overflow-auto rounded border border-gray-200 bg-gray-50 p-3 font-mono text-sm text-gray-800">
      {value}
    </pre>
  )
}
