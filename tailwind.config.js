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
        primary: {
          "900": "var(--color-primary-900)",
          "800": "var(--color-primary-800)",
        },
        secondary: {
          "900": "var(--color-secondary-900)",
          "800": "var(--color-secondary-800)",
        },
        accentOne: {
          "200": "var(--color-accentOne-200)",
          "600": "var(--color-accentOne-600)",
          "800": "var(--color-accentOne-800)",
        },
        accentTwo: {
          "200": "var(--color-accentTwo-200)",
          "600": "var(--color-accentTwo-600)",
          "800": "var(--color-accentTwo-800)",
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
