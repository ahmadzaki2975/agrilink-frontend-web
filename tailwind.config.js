/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green : {
          100: '#87C159',
          200: '#058240'
        },
        yellow: {
          100: '#F3C301',
        },
        gray: {
          100: '#696969'
        },
        red: {
          100: '#FF0000'
        }
      }
    },
  },
  plugins: [],
};
