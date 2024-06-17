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
      }
    },
  },
  plugins: [],
}
