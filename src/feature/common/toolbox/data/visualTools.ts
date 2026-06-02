export const sampleSvg = `<svg width="160" height="120" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
  <rect width="160" height="120" rx="12" fill="#2563eb"/>
  <circle cx="52" cy="58" r="24" fill="#facc15"/>
  <path d="M82 76 L126 34 L136 84 Z" fill="#22c55e"/>
</svg>`

export function optimizeSvg(svg: string) {
  return svg
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export function hexToRgb(hex: string) {
  const clean = hex.replace('#', '')
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((char) => char + char)
          .join('')
      : clean.padEnd(6, '0').slice(0, 6)
  const num = Number.parseInt(full, 16)
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
}

export function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`
}

export function mixHex(hex: string, percent: number) {
  const { r, g, b } = hexToRgb(hex)
  const target = percent > 0 ? 255 : 0
  const ratio = Math.abs(percent)
  return rgbToHex(
    Math.round(r + (target - r) * ratio),
    Math.round(g + (target - g) * ratio),
    Math.round(b + (target - b) * ratio),
  )
}

export function rotateHue(hex: string, degrees: number) {
  const { r, g, b } = hexToRgb(hex)
  const max = Math.max(r, g, b) / 255
  const min = Math.min(r, g, b) / 255
  const delta = max - min
  let hue = 0
  if (delta !== 0) {
    if (max === r / 255) hue = 60 * (((g - b) / 255 / delta) % 6)
    if (max === g / 255) hue = 60 * ((b - r) / 255 / delta + 2)
    if (max === b / 255) hue = 60 * ((r - g) / 255 / delta + 4)
  }
  const light = (max + min) / 2
  const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * light - 1))
  return hslToHex((hue + degrees + 360) % 360, saturation, light)
}

function hslToHex(hue: number, saturation: number, light: number) {
  const chroma = (1 - Math.abs(2 * light - 1)) * saturation
  const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1))
  const m = light - chroma / 2
  const [r, g, b] =
    hue < 60
      ? [chroma, x, 0]
      : hue < 120
        ? [x, chroma, 0]
        : hue < 180
          ? [0, chroma, x]
          : hue < 240
            ? [0, x, chroma]
            : hue < 300
              ? [x, 0, chroma]
              : [chroma, 0, x]
  return rgbToHex(
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  )
}

function luminance(hex: string) {
  const { r, g, b } = hexToRgb(hex)
  return [r, g, b]
    .map((value) => {
      const channel = value / 255
      return channel <= 0.03928
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4
    })
    .reduce(
      (sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index]!,
      0,
    )
}

export function contrastRatio(a: string, b: string) {
  const l1 = luminance(a)
  const l2 = luminance(b)
  return ((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)).toFixed(2)
}
