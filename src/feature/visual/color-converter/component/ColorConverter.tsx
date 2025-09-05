import { useState, useCallback, useEffect } from 'react'
import type { RGB, RGBA, HSV, HSL } from '@/feature/visual/color-converter/data/ColorConverter.ts'
import {
  rgbToHex,
  hexToRgb,
  rgbaToRgb,
  rgbaToRgbWithBackground,
  rgbToRgbaForBackground,
  rgbToHsv,
  hsvToRgb,
  rgbToHsl,
  hslToRgb,
  rgbaToHex,
  rgbToCssString,
  rgbaToCssString,
  hslToCssString,
  hsvToCssString,
} from '@/feature/visual/color-converter/data/ColorConverter.ts'

// ===== Reusable Input Component =====
const NumberInput = ({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = '',
}: {
  label: string
  value: number
  onChange: (val: number) => void
  min: number
  max: number
  step?: number
  unit?: string
}) => (
  <div className="flex items-center gap-2">
    <label className="w-8 text-xs font-semibold text-gray-500 flex-shrink-0">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      min={min}
      max={max}
      step={step}
      className="w-20 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
    />
    <input
      type="range"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      min={min}
      max={max}
      step={step}
      className="flex-1 accent-blue-500"
    />
    {unit && <span className="text-xs text-gray-400 w-6">{unit}</span>}
  </div>
)

// ===== Copy Button =====
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* ignore */
    }
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className="px-2 py-0.5 text-xs rounded border border-gray-200 hover:bg-gray-100 transition-colors"
    >
      {copied ? '✓' : '📋'}
    </button>
  )
}

// ===== Color Format Card =====
const FormatCard = ({
  title,
  children,
  cssString,
  color,
}: {
  title: string
  children: React.ReactNode
  cssString: string
  color?: string
}) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-100">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      <div className="flex items-center gap-2">
        {color && (
          <div className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: color }} />
        )}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{cssString}</code>
        <CopyButton text={cssString} />
      </div>
    </div>
    <div className="p-3 space-y-2">{children}</div>
  </div>
)

// ===== Main Component =====
export const ColorConverter = () => {
  // Primary color state (RGB is the source of truth)
  const [rgb, setRgb] = useState<RGB>({ r: 66, g: 135, b: 245 })
  const [alpha, setAlpha] = useState<number>(1)
  const [bgColor, setBgColor] = useState<RGB>({ r: 255, g: 255, b: 255 })

  // Active editor
  const [activeEditor, setActiveEditor] = useState<'rgb' | 'hsv' | 'hsl' | 'hex'>('rgb')

  // Derived values
  const hex = rgbToHex(rgb)
  const hsv = rgbToHsv(rgb)
  const hsl = rgbToHsl(rgb)
  const rgba: RGBA = { ...rgb, a: alpha }

  // Alpha compositing
  const composited = rgbaToRgbWithBackground(rgba, bgColor)
  const compositedHex = rgbToHex(composited)

  // Reverse compositing state
  const [reverseTarget, setReverseTarget] = useState<RGB>({ r: 100, g: 200, b: 150 })
  const [reverseAlpha, setReverseAlpha] = useState<number>(0.7)
  const reverseRgba = rgbToRgbaForBackground(reverseTarget, bgColor, reverseAlpha)

  // Update from RGB
  const updateRgb = useCallback((newRgb: RGB) => {
    setRgb(newRgb)
    setActiveEditor('rgb')
  }, [])

  // Update from HSV
  const updateFromHsv = useCallback((newHsv: HSV) => {
    setRgb(hsvToRgb(newHsv))
    setActiveEditor('hsv')
  }, [])

  // Update from HSL
  const updateFromHsl = useCallback((newHsl: HSL) => {
    setRgb(hslToRgb(newHsl))
    setActiveEditor('hsl')
  }, [])

  // Update from HEX
  const [hexInput, setHexInput] = useState(hex)
  useEffect(() => {
    if (activeEditor !== 'hex') setHexInput(hex)
  }, [hex, activeEditor])

  const handleHexChange = useCallback((value: string) => {
    setHexInput(value)
    const cleaned = value.replace('#', '')
    if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
      setRgb(hexToRgb(value))
      setActiveEditor('hex')
    }
  }, [])

  // Background color hex
  const bgHex = rgbToHex(bgColor)
  const [bgHexInput, setBgHexInput] = useState(bgHex)
  useEffect(() => {
    setBgHexInput(bgHex)
  }, [bgHex])

  const handleBgHexChange = useCallback((value: string) => {
    setBgHexInput(value)
    const cleaned = value.replace('#', '')
    if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
      setBgColor(hexToRgb(value))
    }
  }, [])

  // Reverse target hex
  const reverseTargetHex = rgbToHex(reverseTarget)
  const [reverseTargetHexInput, setReverseTargetHexInput] = useState(reverseTargetHex)
  useEffect(() => {
    setReverseTargetHexInput(reverseTargetHex)
  }, [reverseTargetHex])

  const handleReverseTargetHexChange = useCallback((value: string) => {
    setReverseTargetHexInput(value)
    const cleaned = value.replace('#', '')
    if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
      setReverseTarget(hexToRgb(value))
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 h-full overflow-auto">
      {/* Left: Color Picker & Controls */}
      <div className="flex-1 space-y-4 min-w-0">
        {/* Color Preview */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700">🎨 색상 미리보기</h3>
          </div>
          <div className="p-3 space-y-3">
            {/* Color picker input */}
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={hex}
                onChange={(e) => {
                  setRgb(hexToRgb(e.target.value))
                  setHexInput(e.target.value)
                }}
                className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
              />
              <div className="flex-1 space-y-1">
                <div className="text-sm font-mono font-semibold text-gray-800">{hex.toUpperCase()}</div>
                <div className="text-xs text-gray-500">
                  {rgbaToCssString(rgba)} · {hslToCssString(hsl)}
                </div>
                <div
                  className="h-8 rounded border border-gray-200"
                  style={{ backgroundColor: rgbaToCssString(rgba) }}
                />
              </div>
            </div>

            {/* Alpha slider */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">투명도 (Alpha)</span>
                <span className="text-xs text-gray-600 font-mono">
                  {alpha.toFixed(2)} ({Math.round(alpha * 100)}%)
                </span>
              </div>
              <input
                type="range"
                value={alpha}
                onChange={(e) => setAlpha(Number(e.target.value))}
                min={0}
                max={1}
                step={0.01}
                className="w-full accent-blue-500"
              />
              {/* Alpha gradient preview */}
              <div className="flex h-6 rounded overflow-hidden border border-gray-200">
                <div
                  className="flex-1"
                  style={{
                    background: `linear-gradient(to right, rgba(${rgb.r},${rgb.g},${rgb.b},0), rgba(${rgb.r},${rgb.g},${rgb.b},1))`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Format Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {/* HEX */}
          <FormatCard title="HEX" cssString={alpha < 1 ? rgbaToHex(rgba) : hex} color={rgbaToCssString(rgba)}>
            <div className="flex items-center gap-2">
              <label className="w-8 text-xs font-semibold text-gray-500 flex-shrink-0">#</label>
              <input
                type="text"
                value={hexInput.replace('#', '')}
                onChange={(e) => handleHexChange(`#${e.target.value}`)}
                placeholder="000000"
                maxLength={6}
                className="flex-1 px-2 py-1 text-sm font-mono border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
          </FormatCard>

          {/* RGB / RGBA */}
          <FormatCard
            title={alpha < 1 ? 'RGBA' : 'RGB'}
            cssString={alpha < 1 ? rgbaToCssString(rgba) : rgbToCssString(rgb)}
            color={rgbaToCssString(rgba)}
          >
            <NumberInput label="R" value={rgb.r} onChange={(v) => updateRgb({ ...rgb, r: v })} min={0} max={255} />
            <NumberInput label="G" value={rgb.g} onChange={(v) => updateRgb({ ...rgb, g: v })} min={0} max={255} />
            <NumberInput label="B" value={rgb.b} onChange={(v) => updateRgb({ ...rgb, b: v })} min={0} max={255} />
            {alpha < 1 && (
              <NumberInput label="A" value={alpha} onChange={setAlpha} min={0} max={1} step={0.01} />
            )}
          </FormatCard>

          {/* HSV */}
          <FormatCard title="HSV" cssString={hsvToCssString(hsv)} color={rgbToCssString(rgb)}>
            <NumberInput
              label="H"
              value={hsv.h}
              onChange={(v) => updateFromHsv({ ...hsv, h: v })}
              min={0}
              max={360}
              unit="°"
            />
            <NumberInput
              label="S"
              value={hsv.s}
              onChange={(v) => updateFromHsv({ ...hsv, s: v })}
              min={0}
              max={100}
              unit="%"
            />
            <NumberInput
              label="V"
              value={hsv.v}
              onChange={(v) => updateFromHsv({ ...hsv, v: v })}
              min={0}
              max={100}
              unit="%"
            />
          </FormatCard>

          {/* HSL */}
          <FormatCard title="HSL" cssString={hslToCssString(hsl)} color={rgbToCssString(rgb)}>
            <NumberInput
              label="H"
              value={hsl.h}
              onChange={(v) => updateFromHsl({ ...hsl, h: v })}
              min={0}
              max={360}
              unit="°"
            />
            <NumberInput
              label="S"
              value={hsl.s}
              onChange={(v) => updateFromHsl({ ...hsl, s: v })}
              min={0}
              max={100}
              unit="%"
            />
            <NumberInput
              label="L"
              value={hsl.l}
              onChange={(v) => updateFromHsl({ ...hsl, l: v })}
              min={0}
              max={100}
              unit="%"
            />
          </FormatCard>
        </div>
      </div>

      {/* Right: Alpha Compositing */}
      <div className="w-full lg:w-96 space-y-4 flex-shrink-0">
        {/* Background Color */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700">🔲 배경 색상</h3>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={bgHex}
                onChange={(e) => {
                  setBgColor(hexToRgb(e.target.value))
                  setBgHexInput(e.target.value)
                }}
                className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={bgHexInput.replace('#', '')}
                onChange={(e) => handleBgHexChange(`#${e.target.value}`)}
                placeholder="FFFFFF"
                maxLength={6}
                className="flex-1 px-2 py-1 text-sm font-mono border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <NumberInput label="R" value={bgColor.r} onChange={(v) => setBgColor({ ...bgColor, r: v })} min={0} max={255} />
            <NumberInput label="G" value={bgColor.g} onChange={(v) => setBgColor({ ...bgColor, g: v })} min={0} max={255} />
            <NumberInput label="B" value={bgColor.b} onChange={(v) => setBgColor({ ...bgColor, b: v })} min={0} max={255} />
          </div>
        </div>

        {/* RGBA → RGB (Alpha Compositing Result) */}
        <div className="border-2 border-blue-200 rounded-lg overflow-hidden bg-blue-50/30">
          <div className="px-3 py-2 bg-blue-50 border-b border-blue-100">
            <h3 className="text-sm font-semibold text-blue-800">➡️ RGBA → 배경 위 실제 색상</h3>
            <p className="text-xs text-blue-600 mt-0.5">
              RGBA 색상이 배경 위에서 실제로 보이는 RGB 색상
            </p>
          </div>
          <div className="p-3 space-y-3">
            {/* Visual comparison */}
            <div className="flex items-stretch gap-2 h-16">
              {/* Background only */}
              <div className="flex-1 rounded border border-gray-200 flex items-center justify-center text-xs text-gray-500"
                style={{ backgroundColor: rgbToCssString(bgColor) }}
              >
                배경
              </div>
              {/* RGBA on background */}
              <div className="flex-1 rounded border border-gray-200 flex flex-col items-center justify-center"
                style={{ backgroundColor: rgbToCssString(bgColor) }}
              >
                <div className="w-full h-full rounded" style={{ backgroundColor: rgbaToCssString(rgba) }} />
              </div>
              {/* Result */}
              <div className="flex-1 rounded border border-gray-200 flex items-center justify-center text-xs text-gray-700 font-mono"
                style={{ backgroundColor: rgbToCssString(composited) }}
              >
                {compositedHex.toUpperCase()}
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 border border-blue-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-600">결과 RGB:</span>
                <div className="flex items-center gap-1">
                  <code className="text-xs font-mono text-blue-800">{rgbToCssString(composited)}</code>
                  <CopyButton text={rgbToCssString(composited)} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-semibold text-gray-600">결과 HEX:</span>
                <div className="flex items-center gap-1">
                  <code className="text-xs font-mono text-blue-800">{compositedHex.toUpperCase()}</code>
                  <CopyButton text={compositedHex.toUpperCase()} />
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 bg-gray-50 rounded p-2">
              <strong>공식:</strong> result = fg × α + bg × (1 - α)<br />
              R: {rgb.r} × {alpha.toFixed(2)} + {bgColor.r} × {(1 - alpha).toFixed(2)} = <strong>{composited.r}</strong><br />
              G: {rgb.g} × {alpha.toFixed(2)} + {bgColor.g} × {(1 - alpha).toFixed(2)} = <strong>{composited.g}</strong><br />
              B: {rgb.b} × {alpha.toFixed(2)} + {bgColor.b} × {(1 - alpha).toFixed(2)} = <strong>{composited.b}</strong>
            </div>
          </div>
        </div>

        {/* RGB → RGBA (Reverse Compositing) */}
        <div className="border-2 border-green-200 rounded-lg overflow-hidden bg-green-50/30">
          <div className="px-3 py-2 bg-green-50 border-b border-green-100">
            <h3 className="text-sm font-semibold text-green-800">⬅️ 목표 색상 → RGBA (역산)</h3>
            <p className="text-xs text-green-600 mt-0.5">
              배경 위에서 목표 색상을 만들기 위한 전경 RGBA 계산
            </p>
          </div>
          <div className="p-3 space-y-3">
            {/* Target color input */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600 w-16">목표 색상:</span>
                <input
                  type="color"
                  value={reverseTargetHex}
                  onChange={(e) => {
                    setReverseTarget(hexToRgb(e.target.value))
                    setReverseTargetHexInput(e.target.value)
                  }}
                  className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={reverseTargetHexInput.replace('#', '')}
                  onChange={(e) => handleReverseTargetHexChange(`#${e.target.value}`)}
                  placeholder="000000"
                  maxLength={6}
                  className="flex-1 px-2 py-1 text-sm font-mono border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
                />
              </div>
              <NumberInput
                label="α"
                value={reverseAlpha}
                onChange={setReverseAlpha}
                min={0}
                max={1}
                step={0.01}
              />
            </div>

            {/* Visual preview */}
            <div className="flex items-stretch gap-2 h-12">
              <div
                className="flex-1 rounded border border-gray-200 flex items-center justify-center text-xs"
                style={{ backgroundColor: rgbToCssString(bgColor) }}
              >
                배경
              </div>
              <div
                className="flex-1 rounded border border-gray-200"
                style={{
                  backgroundColor: rgbToCssString(bgColor),
                  position: 'relative',
                }}
              >
                <div
                  className="absolute inset-0 rounded"
                  style={{ backgroundColor: rgbaToCssString(reverseRgba) }}
                />
              </div>
              <div className="flex items-center justify-center text-xs">=</div>
              <div
                className="flex-1 rounded border border-gray-200 flex items-center justify-center text-xs font-mono"
                style={{ backgroundColor: rgbToCssString(reverseTarget) }}
              >
                {reverseTargetHex.toUpperCase()}
              </div>
            </div>

            {/* Result */}
            <div className="bg-white rounded-lg p-2 border border-green-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-600">필요한 RGBA:</span>
                <div className="flex items-center gap-1">
                  <code className="text-xs font-mono text-green-800">{rgbaToCssString(reverseRgba)}</code>
                  <CopyButton text={rgbaToCssString(reverseRgba)} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-semibold text-gray-600">전경 HEX:</span>
                <div className="flex items-center gap-1">
                  <div
                    className="w-4 h-4 rounded border border-gray-200"
                    style={{ backgroundColor: rgbToCssString(rgbaToRgb(reverseRgba)) }}
                  />
                  <code className="text-xs font-mono text-green-800">
                    {rgbToHex(rgbaToRgb(reverseRgba)).toUpperCase()}
                  </code>
                  <CopyButton text={rgbToHex(rgbaToRgb(reverseRgba)).toUpperCase()} />
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 bg-gray-50 rounded p-2">
              <strong>공식:</strong> fg = (result - bg × (1 - α)) / α<br />
              R: ({reverseTarget.r} - {bgColor.r} × {(1 - reverseAlpha).toFixed(2)}) / {reverseAlpha.toFixed(2)} = <strong>{reverseRgba.r}</strong><br />
              G: ({reverseTarget.g} - {bgColor.g} × {(1 - reverseAlpha).toFixed(2)}) / {reverseAlpha.toFixed(2)} = <strong>{reverseRgba.g}</strong><br />
              B: ({reverseTarget.b} - {bgColor.b} × {(1 - reverseAlpha).toFixed(2)}) / {reverseAlpha.toFixed(2)} = <strong>{reverseRgba.b}</strong>
              {reverseAlpha === 0 && (
                <p className="text-red-500 mt-1">⚠️ Alpha가 0이면 전경색이 결과에 영향을 주지 않습니다.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}