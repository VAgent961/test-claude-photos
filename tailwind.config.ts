import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary-container": "#C68E17",
  "on-primary": "#FFFFFF",
  "on-primary-fixed-variant": "#5F4100",
  "error": "#BA1A1A",
  "surface-container-lowest": "#FFFFFF",
  "on-surface": "#111418",
  "secondary-fixed": "#E8E1D9",
  "on-primary-fixed": "#271900",
  "on-tertiary-fixed": "#25190F",
  "surface-container-high": "#EAE8E3",
  "secondary-fixed-dim": "#CCC5BE",
  "tertiary-container": "#A89585",
  "outline-variant": "#D4C4AF",
  "surface-tint": "#C68E17",
  "inverse-primary": "#FABC46",
  "error-container": "#FFDAD6",
  "inverse-on-surface": "#F2F1EC",
  "on-primary-container": "#422C00",
  "on-surface-variant": "#6B7280",
  "on-tertiary-fixed-variant": "#534437",
  "on-error": "#FFFFFF",
  "inverse-surface": "#30312E",
  "surface-variant": "#E4E2DD",
  "surface-container-highest": "#E4E2DD",
  "tertiary": "#6C5B4D",
  "on-error-container": "#93000A",
  "surface-bright": "#F9F7F2",
  "on-tertiary": "#FFFFFF",
  "primary-fixed-dim": "#FABC46",
  "surface-container": "#F0EEE9",
  "on-tertiary-container": "#3B2E22",
  "on-secondary-fixed-variant": "#4A4641",
  "tertiary-fixed": "#F5DECD",
  "on-background": "#111418",
  "on-secondary": "#FFFFFF",
  "outline": "#827563",
  "surface-container-low": "#F5F3EE",
  "secondary-container": "#E8E1D9",
  "on-secondary-fixed": "#1E1B17",
  "primary-fixed": "#FFDEAB",
  "surface-dim": "#DBDAD5",
  "on-secondary-container": "#68645E",
  "tertiary-fixed-dim": "#D8C3B2",
  "primary": "#C68E17",
  "secondary": "#625e58",
  "accent": "#a89585",
  "background": "#F9F7F2",
  "surface": "#FFFFFF",
  "ink": "#111418",
  "muted": "#6B7280",
  "dark": "#30312e"
},
      fontFamily: {
  "heading": [
    "Syne",
    "sans-serif"
  ],
  "body": [
    "Archivo",
    "sans-serif"
  ],
  "headline-sm": [
    "Syne",
    "sans-serif"
  ],
  "headline-lg-mobile": [
    "Syne",
    "sans-serif"
  ],
  "body-sm": [
    "Archivo",
    "sans-serif"
  ],
  "body-md": [
    "Archivo",
    "sans-serif"
  ],
  "display-hero": [
    "Syne",
    "sans-serif"
  ],
  "headline-md": [
    "Syne",
    "sans-serif"
  ],
  "display-hero-mobile": [
    "Syne",
    "sans-serif"
  ],
  "label-md": [
    "Archivo",
    "sans-serif"
  ],
  "title-md": [
    "Syne",
    "sans-serif"
  ],
  "headline-lg": [
    "Syne",
    "sans-serif"
  ],
  "body-lg": [
    "Archivo",
    "sans-serif"
  ],
  "label-sm": [
    "Archivo",
    "sans-serif"
  ]
},
      fontSize: {
  "headline-sm": [
    "1.375rem",
    {
      "lineHeight": "1.75rem",
      "letterSpacing": "0em",
      "fontWeight": "600"
    }
  ],
  "headline-lg-mobile": [
    "2rem",
    {
      "lineHeight": "2.375rem",
      "letterSpacing": "-0.01em",
      "fontWeight": "700"
    }
  ],
  "body-sm": [
    "0.875rem",
    {
      "lineHeight": "1.25rem",
      "letterSpacing": "0.01em",
      "fontWeight": "400"
    }
  ],
  "body-md": [
    "1rem",
    {
      "lineHeight": "1.5rem",
      "letterSpacing": "0em",
      "fontWeight": "400"
    }
  ],
  "display-hero": [
    "4.5rem",
    {
      "lineHeight": "4.75rem",
      "letterSpacing": "-0.03em",
      "fontWeight": "800"
    }
  ],
  "headline-md": [
    "2rem",
    {
      "lineHeight": "2.5rem",
      "letterSpacing": "-0.015em",
      "fontWeight": "700"
    }
  ],
  "display-hero-mobile": [
    "2.75rem",
    {
      "lineHeight": "3rem",
      "letterSpacing": "-0.02em",
      "fontWeight": "800"
    }
  ],
  "label-md": [
    "0.75rem",
    {
      "lineHeight": "1rem",
      "letterSpacing": "0.12em",
      "fontWeight": "600"
    }
  ],
  "title-md": [
    "1.125rem",
    {
      "lineHeight": "1.5rem",
      "letterSpacing": "0.01em",
      "fontWeight": "600"
    }
  ],
  "headline-lg": [
    "3rem",
    {
      "lineHeight": "3.5rem",
      "letterSpacing": "-0.02em",
      "fontWeight": "700"
    }
  ],
  "body-lg": [
    "1.125rem",
    {
      "lineHeight": "1.75rem",
      "letterSpacing": "0.005em",
      "fontWeight": "400"
    }
  ],
  "label-sm": [
    "0.6875rem",
    {
      "lineHeight": "0.875rem",
      "letterSpacing": "0.14em",
      "fontWeight": "600"
    }
  ]
},
      spacing: {
  "space-xs": "0.25rem",
  "margin-mobile": "1.25rem",
  "space-lg": "1.5rem",
  "space-sm": "0.5rem",
  "space-md": "1rem",
  "gutter-mobile": "1rem",
  "margin": "3rem",
  "space-xl": "2.5rem",
  "gutter": "1.5rem"
},
      borderRadius: {
  "DEFAULT": "0rem",
  "lg": "0rem",
  "xl": "0rem",
  "full": "0rem"
},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
