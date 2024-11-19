/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#910c00',
      },
      fontFamily: {
        nevrada: ["nevrada", "sans-serif"],
        sacramento: ["sacramento", "sans-serif"]
      },
  },
  plugins: [],
}
}
