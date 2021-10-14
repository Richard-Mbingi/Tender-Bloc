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
    textColor: {
      'primary': '#373a5b',
      'secondary': '#ff9e9e',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
