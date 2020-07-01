// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {};
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
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
