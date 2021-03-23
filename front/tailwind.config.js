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
      },
      keyframes: {
        activeurlout: {
          '0%': { "margin-left": "2rem" },
          '50%': { "margin-left": "94%", "background-color": "rgb(243, 244, 246)" },
          '100%': { "margin-left": "2rem", "background-color": "rgb(143, 134, 240)" },
        },
        activeurlin: {
          '0%': { "margin-left": "2rem" },
          '50%': { "margin-left": "94%", "background-color": "rgb(143, 134, 240)" },
          '100%': { "margin-left": "2rem", "background-color": "rgb(243, 244, 246)" },
        },
        activeurlouttext: {
          '0%': { "border-top-left-radius": "90px", "border-bottom-left-radius": "90px" },
          '50%': { "color": "rgba(76, 175, 80, 0)", "background-color": "rgb(243, 244, 246)" },
          '68%': { "color": "rgba(76, 175, 80, 0)" },
          '100%': { "color": "rgb(199, 210, 254)", "background-color": "rgb(143, 134, 240)" },
        },
        activeurlintext: {
          '0%': { "border-top-left-radius": "90px", "border-bottom-left-radius": "90px" },
          '50%': { "color": "rgba(76, 175, 80, 0)", "background-color": "rgb(143, 134, 240)" },
          '68%': { "color": "rgba(76, 175, 80, 0)" },
          '100%': { "color": "#8e85f0", "background-color": "rgb(243, 244, 246)" },
        }
      },
      animation: {
        activeurlout: 'activeurlout 1.4s ease-in-out ',
        activeurlin: 'activeurlin 1.4s ease-in-out ',
        activeurlouttext: 'activeurlouttext 1.4s ease-in-out ',
        activeurlintext: 'activeurlintext 1.4s ease-in-out ',
      }
    },
    variants: {
      extend: {
        borderRadius: ['hover', 'focus'],
      },
    },
    plugins: [],
  }
}
