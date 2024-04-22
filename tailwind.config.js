/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BeVietnamPro: ["Be Vietnam Pro", "sans-serif"],
        NotoSans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
