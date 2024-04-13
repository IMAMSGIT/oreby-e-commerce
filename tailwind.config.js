/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        primary: "#262626",
        secondary: "#767676",
        headerbg: "#F5F5F3",
      },
    },
    plugins: [],
  },
};
