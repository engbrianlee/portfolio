import React, { useState } from "react";
import _ from "lodash";

const ThemeContext = React.createContext();
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    color: {
      primary: "gray-900",
      // Need to have the full tailwind classnames so purge css does not purge
      primaryBg: "bg-gray-900",
      primaryText: "text-gray-900",
      primaryBorder: "border-gray-900",
      secondary: "white",
      // Need to have the full tailwind classnames so purge css does not purge
      secondaryBg: "bg-white",
      secondaryText: "text-white",
      secondaryBorder: "border-white",
      focusable:
        "hover:text-gray-600 focus:border-opacity-100 focus:outline-none border-2 border-opacity-0 rounded-md border-gray-600 py-1 px-1",
    },
  });
  const invertTheme = () => {
    const suffixes = ["", "Bg", "Text", "Border"];

    setTheme((theme) => {
      const themeCopy = _.cloneDeep(theme);
      for (let suffix of suffixes) {
        themeCopy.color[`primary${suffix}`] =
          themeCopy.color[`secondary${suffix}`];
        themeCopy.color[`secondary${suffix}`] = theme.color[`primary${suffix}`];
      }
      return themeCopy;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, invertTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
