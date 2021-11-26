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
      primary: "#373a5b",
      secondary: "#ff9e9e",
      tertiary: "#ffffff",
      subheading: "#676a8b",
      subtext: "#86A0C7",
      transparent: "#eeeff7"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
