/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        helpBg: "url('help.jpg')",
        howCanHelp: "url('howCanHelp.jpg')",
        contactBg: "url('contactBg.jpg')",
      },
      borderRadius: {
        6: "6px",
        12: "12px",
        20: "20px",
        100: "100%",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          sm: "680px",
          md: "808px",
          lg: "1064px",
          xl: "1320px",
        },
      },
    },
  },
  plugins: [],
};
