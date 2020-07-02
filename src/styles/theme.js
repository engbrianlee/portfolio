import React, { useState } from "react";
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../../tailwind.config");

const fullConfig = resolveConfig(tailwindConfig);
const parseCssVariableName = (s) => s.match(/var\((.+)\)/)[1];
const PRIMARY_CSS_VARIABLES = Object.fromEntries(
  Object.entries(
    fullConfig.theme.colors.primary
  ).map(([shade, cssVariable]) => [shade, parseCssVariableName(cssVariable)])
);
const SECONDARY_CSS_VARIABLES = Object.fromEntries(
  Object.entries(
    fullConfig.theme.colors.secondary
  ).map(([shade, cssVariable]) => [shade, parseCssVariableName(cssVariable)])
);

// const getHex = (tailwindName) =>
//   _.get(fullConfig.theme.colors, tailwindName.replace("-", "."));

const ThemeContext = React.createContext();
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const invertTheme = () => {
    invertThemeCss();
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };
  const invertThemeCss = () => {
    Object.entries(PRIMARY_CSS_VARIABLES).map(([shade, primaryCssVariable]) => {
      const primaryColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue(primaryCssVariable);
      const secondaryCssVariable = SECONDARY_CSS_VARIABLES[shade];
      const secondaryColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue(secondaryCssVariable);
      document.documentElement.style.setProperty(
        primaryCssVariable,
        secondaryColor
      );
      document.documentElement.style.setProperty(
        secondaryCssVariable,
        primaryColor
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ invertTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
