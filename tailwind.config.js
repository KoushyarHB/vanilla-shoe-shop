/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./main.js"],
  theme: {
    extend: {
      width: {
        428: "428px",
      },
    },
  },
  plugins: [],
};
