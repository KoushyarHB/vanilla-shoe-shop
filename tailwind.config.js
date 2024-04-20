/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./main.js"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      width: {
        428: "428px",
        182: "182px",
        142: "142px",
        378: "378.2px",
      },
      height: {
        926: "926px",
        784: "784px",
        428: "428px",
        182: "182px",
        142: "142px",
      },
      fontSize: {
        xxs: "0.625rem",
        "4.5xl": "40px",
        "3.5xl": "32px",
      },
      maxWidth: {
        64: "64px",
      },
      maxHeight: {
        784: "784px",
        926: "926px",
      },
      minHeight: {
        926: "926px",
      },
      opacity: {
        65: "0.65",
      },
      // colors: {
      //   white: "#ffffff",
      //   red: "#ff0000",
      //   black: "#000000",
      //   brown: "#A52A2A",
      //   blue: "#0000FF",
      // },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
