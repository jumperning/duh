/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instagramYellow: 'rgb(255, 214, 0)',
        instagramOrange: 'rgb(255, 122, 0)',
        instagramPurple: 'rgb(211, 0, 197)',
      },
    },
  },
  plugins: [],
}

