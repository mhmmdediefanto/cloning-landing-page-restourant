/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./about.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          karla: ['"Karla"', 'sans-serif'],
          tinos: ['"Tinos"', 'serif'],
        },
      },
    },
    plugins: [],
  }
  