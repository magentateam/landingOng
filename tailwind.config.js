module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#9B51E0",
        secondary: "#FE7360",
        tertiary: "#F2F2F2",
        gradients: {
          primary: {
            1: "#7129E4",
            2: "#9B51E0",
          },
          secondary: {
            1: "#FE7360",
            2: "#EB5757",
          },
        },
      },
      fontFamily: {
<<<<<<< HEAD
        domine: ["Domine"],
        trispace: ["Trispace"],
        roboto: ["Roboto"],
=======
        titulo:['Domine'],
        'linksNav': ['Roboto', 'sans-serif'],
        'headerTitle': ['Trispace', 'sans-serif']
      },
      fontSize: {
        '7xl': ['8rem', 'responsive'],
>>>>>>> 7e31220... Header
      },
    },
  },
  variants: {},
  plugins: [],
};
