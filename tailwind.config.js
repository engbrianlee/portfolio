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
        },
      },
      opacity: {
        "10": "0.1",
      },
    },
  },
  variants: {
    space: ["responsive", "odd"],
    flexDirection: ["responsive", "odd"],
    textColor: ["responsive", "hover", "focus"],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
