/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: ['Montserrat', 'sans-serif'],
      'gotham-rounded': ['Gotham Rounded', 'sans-serif'],
      'gotham-rounded-book':['Gotham Rounded Book', 'sans-serif'],
      'gotham-rounded-light':['Gotham Rounded Light', 'sans-serif'],
      'gotham-rounded-bold':['Gotham Rounded Bold', 'sans-serif']
    },
    extend: {
      container: {
        center: true,
        padding: "4rem",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          blue: {
            100: '#558bff',
            200: '#2a4783',
            300: '#0a192f',
          },
          gray: {
            100: '#ccd6f6',
            200: '#8892b0',
          }
        }
      },
      boxShadow: {
        glow: "0 0 50px -12px rgba(85, 139, 255, 0.45)",
        "glow-sm": "0 0 30px -8px rgba(85, 139, 255, 0.35)",
        card: "0 25px 50px -15px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(85, 139, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(85, 139, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(8px, -12px)" },
        },
      },
    },
  },
  plugins: [],
}
