import React, { useState, useEffect, useRef } from "react";
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
// Swap primary and secondary properties in CSS
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

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

const THEMES = {
  whiteBlack: "theme-white-black",
  airBnb: "theme-airbnb",
  gold: "theme-gold",
};
const ThemeContext = React.createContext();
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(THEMES.whiteBlack);
  const prevTheme = usePrevious(currentTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => document.documentElement.classList.add(currentTheme), []);

  // Change Theme
  useEffect(() => {}, [currentTheme]);

  useEffect(() => {
    if (currentTheme !== prevTheme) {
      // Clear out any styles that were created
      // document.documentElement.style = null;
      document.documentElement.removeAttribute("style");
      // remove any previous theme classnames
      document.documentElement.classList.remove(
        ...document.documentElement.classList
      );
      // Finally add the theme classname
      document.documentElement.classList.add(currentTheme);

      if (isDarkMode) {
        invertThemeCss();
      }
    }
  }, [currentTheme, prevTheme, isDarkMode]);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
  };

  const invertTheme = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    invertThemeCss();
  };

  return (
    <ThemeContext.Provider
      value={{
        invertTheme,
        changeTheme,
        isDarkMode,
        themes: THEMES,
        currentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
