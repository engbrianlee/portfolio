const { colors } = require("tailwindcss/defaultTheme");
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          "50": "#f6f7f8",
          "850": "#212736",
        },
      },
      opacity: {
        "10": "0.1",
      },
    },
  },
  variants: {
    // Add focus
    textColor: ["responsive", "hover", "focus"],
    borderWidth: ["responsive", "focus"],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
