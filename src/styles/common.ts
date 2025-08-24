import { createGlobalStyle, css } from 'styled-components'

export const colors = {
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  white: '#ffffff',
  black: '#0b0b0b',
  brand: '#6d5df6',
  accentPink: '#ff74c6',
  accentOrange: '#ffb36b',
  accentBlue: '#5ac8fa',
  surface: '#f8fafc',
  surfaceAlt: '#eef2ff',
  border: '#e2e8f0',
}

export const breakpoints = {
  xs: 360,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1280,
}

export const media = {
  xs: `(max-width: ${breakpoints.xs}px)`,
  sm: `(max-width: ${breakpoints.sm}px)`,
  md: `(max-width: ${breakpoints.md}px)`,
  lg: `(max-width: ${breakpoints.lg}px)`,
  xl: `(max-width: ${breakpoints.xl}px)`,
}

export const container = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media ${media.sm} {
    padding: 0 16px;
  }
`

export const section = css`
  padding: 72px 0;
  @media ${media.md} {
    padding: 56px 0;
  }
`

export const card = css`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(2, 8, 23, 0.06);
`

export const gradientBg = css`
  background: radial-gradient(1200px 600px at -10% -30%, rgba(109, 93, 246, 0.18), transparent 60%),
    radial-gradient(1200px 600px at 110% -30%, rgba(255, 116, 198, 0.18), transparent 60%),
    radial-gradient(1200px 600px at 50% 120%, rgba(90, 200, 250, 0.18), transparent 60%);
`

export const GlobalStyle = createGlobalStyle`
  :root {
    --brand: ${colors.brand};
    --text: ${colors.textPrimary};
    --muted: ${colors.textSecondary};
    --surface: ${colors.surface};
  }
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    color: ${colors.textPrimary};
    background: ${colors.surface};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }
`