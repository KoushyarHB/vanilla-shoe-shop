/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./main.js"],
  theme: {
    extend: {
      width: {
        428: "428px",
        182: "182px",
        142: "142px",
      },
      height: {
        784: "784px",
        182: "182px",
        142: "142px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      maxWidth: {
        64: "64px",
      },
    },
  },
  plugins: [],
};
