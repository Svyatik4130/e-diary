module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"]
      },
      borderRadius: {
        "xl": "1rem",
        "3xl": "3rem" 
      },
      colors: {
        indigo: {
          450: "#8F86F0"
        }
      },
      boxShadow: {
        "2xl": "0px 0px 30px rgba(0, 0, 0, 0.1);"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
