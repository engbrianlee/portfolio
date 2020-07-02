import React, { useState } from "react";
import _ from "lodash";
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../../tailwind.config");

const fullConfig = resolveConfig(tailwindConfig);

const getHex = (tailwindName) =>
  _.get(fullConfig.theme.colors, tailwindName.replace("-", "."));
const THEME_TYPES = {
  light: "light",
  dark: "dark",
};

const ThemeContext = React.createContext();
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    type: THEME_TYPES.light,
    color: {
      primary: "gray-900",
      // Need to have the full tailwind classnames so purge css does not purge
      primaryBg: "bg-gray-900",
      primaryText: "text-gray-900",
      primaryBorder: "border-gray-900",
      primaryHex: getHex("gray-900"),
      primaryBgLighter: "bg-gray-850",

      secondary: "white",
      secondaryBg: "bg-white",
      secondaryText: "text-white",
      secondaryBorder: "border-white",
      secondaryHex: getHex("white"),
      secondaryBgLighter: "bg-gray-50",

      accentOne: "blue-600",
      accentOneHex: getHex("blue-600"),
      accentTwo: "green-600",
      accentTwoHex: getHex("green-600"),

      focusable:
        "hover:text-gray-600 focus:border-opacity-100 focus:outline-none border-2 border-opacity-0 rounded-md border-gray-600 py-1 px-1",
    },
  });
  const invertTheme = () => {
    setTheme((theme) => {
      const suffixes = ["", "Bg", "Text", "Border", "Hex", "BgLighter"];
      const themeCopy = _.cloneDeep(theme);
      for (let suffix of suffixes) {
        themeCopy.color[`primary${suffix}`] =
          themeCopy.color[`secondary${suffix}`];
        themeCopy.color[`secondary${suffix}`] = theme.color[`primary${suffix}`];
      }
      themeCopy.type =
        themeCopy.type === THEME_TYPES.light
          ? THEME_TYPES.dark
          : THEME_TYPES.light;
      return themeCopy;
    });
  };

  const isDarkTheme = theme.type === THEME_TYPES.dark;

  return (
    <ThemeContext.Provider value={{ theme, invertTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
