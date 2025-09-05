// ===== Color Types =====
export type RGB = { r: number; g: number; b: number }
export type RGBA = { r: number; g: number; b: number; a: number }
export type HSV = { h: number; s: number; v: number }
export type HSL = { h: number; s: number; l: number }
export type HEX = string

// ===== Clamp helper =====
const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max)

// ===== RGB ↔ HEX =====
export const rgbToHex = (rgb: RGB): HEX => {
  const toHex = (n: number) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, '0')
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`
}

export const hexToRgb = (hex: HEX): RGB => {
  const cleaned = hex.replace('#', '')
  const full = cleaned.length === 3
    ? cleaned.split('').map((c) => c + c).join('')
    : cleaned
  const num = parseInt(full, 16)
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  }
}

// ===== RGB ↔ RGBA =====
export const rgbToRgba = (rgb: RGB, alpha: number = 1): RGBA => ({
  ...rgb,
  a: clamp(alpha, 0, 1),
})

export const rgbaToRgb = (rgba: RGBA): RGB => ({
  r: rgba.r,
  g: rgba.g,
  b: rgba.b,
})

// ===== RGBA with Background (Alpha Compositing) =====
// When an RGBA color is rendered on top of a background, the resulting visible color is:
// result = foreground * alpha + background * (1 - alpha)
export const rgbaToRgbWithBackground = (rgba: RGBA, background: RGB): RGB => ({
  r: Math.round(rgba.r * rgba.a + background.r * (1 - rgba.a)),
  g: Math.round(rgba.g * rgba.a + background.g * (1 - rgba.a)),
  b: Math.round(rgba.b * rgba.a + background.b * (1 - rgba.a)),
})

// Reverse: Given an RGB result and a background, find the RGBA that produces it
// This is underconstrained (alpha can be anything), so we let the user choose alpha
// and compute the foreground RGB that would produce the target on that background.
// If alpha is 0, we return the target as-is (no foreground effect).
// Formula: foreground = (result - background * (1 - alpha)) / alpha
export const rgbToRgbaForBackground = (target: RGB, background: RGB, alpha: number): RGBA => {
  if (alpha === 0) {
    return { r: target.r, g: target.g, b: target.b, a: 0 }
  }
  return {
    r: clamp(Math.round((target.r - background.r * (1 - alpha)) / alpha), 0, 255),
    g: clamp(Math.round((target.g - background.g * (1 - alpha)) / alpha), 0, 255),
    b: clamp(Math.round((target.b - background.b * (1 - alpha)) / alpha), 0, 255),
    a: alpha,
  }
}

// ===== RGB ↔ HSV =====
export const rgbToHsv = (rgb: RGB): HSV => {
  const r = clamp(rgb.r, 0, 255) / 255
  const g = clamp(rgb.g, 0, 255) / 255
  const b = clamp(rgb.b, 0, 255) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min

  let h = 0
  if (d !== 0) {
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round((max === 0 ? 0 : d / max) * 100),
    v: Math.round(max * 100),
  }
}

export const hsvToRgb = (hsv: HSV): RGB => {
  const h = clamp(hsv.h, 0, 360) / 360
  const s = clamp(hsv.s, 0, 100) / 100
  const v = clamp(hsv.v, 0, 100) / 100

  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  let r: number, g: number, b: number
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break
    case 1: r = q; g = v; b = p; break
    case 2: r = p; g = v; b = t; break
    case 3: r = p; g = q; b = v; break
    case 4: r = t; g = p; b = v; break
    case 5: r = v; g = p; b = q; break
    default: r = v; g = t; b = p
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

// ===== RGB ↔ HSL =====
export const rgbToHsl = (rgb: RGB): HSL => {
  const r = clamp(rgb.r, 0, 255) / 255
  const g = clamp(rgb.g, 0, 255) / 255
  const b = clamp(rgb.b, 0, 255) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  const d = max - min

  let h = 0
  let s = 0

  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

export const hslToRgb = (hsl: HSL): RGB => {
  const h = clamp(hsl.h, 0, 360) / 360
  const s = clamp(hsl.s, 0, 100) / 100
  const l = clamp(hsl.l, 0, 100) / 100

  if (s === 0) {
    const val = Math.round(l * 255)
    return { r: val, g: val, b: val }
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q

  return {
    r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  }
}

// ===== RGBA ↔ HEX (8-digit) =====
export const rgbaToHex = (rgba: RGBA): HEX => {
  const hex = rgbToHex(rgba)
  const alphaHex = clamp(Math.round(rgba.a * 255), 0, 255).toString(16).padStart(2, '0')
  return `${hex}${alphaHex}`
}

export const hexToRgba = (hex: HEX): RGBA => {
  const cleaned = hex.replace('#', '')
  if (cleaned.length <= 6) {
    return { ...hexToRgb(hex), a: 1 }
  }
  const rgbPart = cleaned.slice(0, 6)
  const alphaPart = cleaned.slice(6, 8)
  const rgb = hexToRgb(`#${rgbPart}`)
  const a = Math.round((parseInt(alphaPart, 16) / 255) * 100) / 100
  return { ...rgb, a }
}

// ===== CSS String helpers =====
export const rgbToCssString = (rgb: RGB): string => `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
export const rgbaToCssString = (rgba: RGBA): string => `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
export const hsvToCssString = (hsv: HSV): string => `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`
export const hslToCssString = (hsl: HSL): string => `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`