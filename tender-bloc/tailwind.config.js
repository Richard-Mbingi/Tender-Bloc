module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Darker Grotesque"],
        body: ["Source Sans Pro"],
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#eeeff7",
      secondary: "#373a5b",
      tertiary: "#ff7e7e"
    }),
    borderColor: (theme) => ({
      primary: "#ff7e7e",
      secondary: "#373a5b",
    }),
    textColor: {
      primary: "#373a5b",
      secondary: "#ff9e9e",
      tertiary: "#ffffff",
      subheading: "#676a8b",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
