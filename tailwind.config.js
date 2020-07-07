// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
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
        accentThree: {
          "200": "var(--color-accentThree-200)",
          "600": "var(--color-accentThree-600)",
          "800": "var(--color-accentThree-800)",
        },
        focusable: {
          "900": "var(--color-focusable-900)",
        },
      },
      opacity: {
        "10": "0.1",
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "0.5": "2px",
      },
    },
  },
  variants: {
    // Add focus
    textColor: ["responsive", "hover", "focus", "group-focus"],
    borderWidth: ["responsive", "hover", "focus"],
  },
};
