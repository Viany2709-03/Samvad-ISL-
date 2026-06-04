/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F4EDE0",
        indigo: "#1B1F3B",
        charcoal: "#3A3A3A",
        saffron: "#E07A2C",
        'gold-leaf': "#C9A961",
        teal: "#2B7A78",
        aubergine: "#4A2C4A",
        // Legacy aliases used by module2/module3 inline styles — keep for compat
        background: {
          primary: "#F4EDE0",
          secondary: "#EDE4D3",
          card: "rgba(244, 237, 224, 0.7)",
        },
        accent: {
          primary: "#E07A2C",
          secondary: "#C9A961",
        },
        success: "#10B981",
        error: "#EF4444",
        text: {
          primary: "#1B1F3B",
          secondary: "#3A3A3A",
        },
        border: {
          subtle: "rgba(27, 31, 59, 0.08)",
        }
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        heading: ["Satoshi", "sans-serif"],
        body: ["General Sans", "sans-serif"],
      },
      fontSize: {
        'hero-devanagari': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'hero-latin': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.4em' }],
        'hero-tagline': ['1rem', { lineHeight: '1.6', letterSpacing: '0.05em' }],
        'module-devanagari': ['2rem', { lineHeight: '1.3' }],
        'module-label': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        'section': '6rem',
      },
      animation: {
        'mandala-rotate': 'mandala-rotate 90s linear infinite',
      },
      keyframes: {
        'mandala-rotate': {
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
