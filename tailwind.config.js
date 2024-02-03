/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
