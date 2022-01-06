module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Darker Grotesque"],
        body: ["Outfit"],
      },
    },

    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#eeeff7",
      magnolia: "#f2f2ff",
      secondary: "#373a5b",
      tertiary: "#ff7e7e",
    }),

    borderColor: (theme) => ({
      primary: "#ff7e7e",
      secondary: "#373a5b",
      tertiary: "#ff9e9e",
    }),

    gradientColorStops: (theme) => ({
      ...theme("colors"),
      gradstart: "#1C3452",
      gradend: "#2A243D",
    }),

    textColor: {
      magnolia: "#f2f2ff",
      sienna: "#f57e5e",
      lcoral: "#f79393",
      bcoral: "#ff7e7e",
      aquamarine: "#55d99d",
      han: "#5e71cd",
      rhythm: "#7d80a2",
      space: "#373a5b",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
