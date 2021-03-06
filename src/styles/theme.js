import React, { useState, useEffect, useRef } from "react";
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../../tailwind.config");

const VIEWS = {
  hero: "#hero",
  resume: "#resume",
  projects: "#projects",
  contact: "#contact",
};
// Which view takes priority, higher number has priority
const VIEW_PRIORITY = {
  [VIEWS.hero]: 0,
  [VIEWS.resume]: 1,
  [VIEWS.projects]: 2,
  [VIEWS.contact]: 3,
};
const DARK_MODE_CLASS_NAME = "dark";
const THEMES_CLASS_NAME = {
  whiteBlack: "theme-white-black",
  airBnb: "theme-airbnb",
  gold: "theme-gold",
};

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

const invertThemeCss = () => {
  const isDarkMode = [...document.documentElement.classList].find(
    (className) => className === DARK_MODE_CLASS_NAME
  );
  if (isDarkMode) {
    document.documentElement.classList.remove(DARK_MODE_CLASS_NAME);
  } else {
    document.documentElement.classList.add(DARK_MODE_CLASS_NAME);
  }
};
const getColors = () => {
  if (typeof window === "undefined") return {};

  const primary = Object.fromEntries(
    Object.entries(PRIMARY_CSS_VARIABLES).map(([shade, primaryCssVariable]) => {
      const primaryColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue(primaryCssVariable);
      return [shade, primaryColor];
    })
  );
  const secondary = Object.fromEntries(
    Object.entries(SECONDARY_CSS_VARIABLES).map(
      ([shade, secondaryCssVariable]) => {
        const secondaryColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue(secondaryCssVariable);
        return [shade, secondaryColor];
      }
    )
  );
  return { primary, secondary };
};

const useIsScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        document.body !== undefined ? document.body.scrollTop : 0;
      const isScrolled = (window.pageYOffset || scrollTop) > 0;

      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    () => window.removeEventListener("scroll", onScroll, { passive: true });
  }, [scrolled]);

  return scrolled;
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
const ThemeContext = React.createContext();
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    (typeof window !== "undefined" && localStorage.getItem("theme")) ||
      THEMES_CLASS_NAME.whiteBlack
  );
  const [colors, setColors] = useState(getColors());
  const [navIsOpen, setNavIsOpen] = useState(false);
  const prevTheme = usePrevious(currentTheme);
  const [isDarkMode, setIsDarkMode] = useState(
    (typeof window !== "undefined" && localStorage.getItem("isDarkMode")) ===
      "true" ||
      ((typeof window !== "undefined" && localStorage.getItem("isDarkMode")) ===
        null &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [currentViews, setCurrentViews] = useState(
    Object.fromEntries(Object.values(VIEWS).map((view) => [view, false]))
  );
  const currentView = Object.entries(currentViews).reduce(
    (accum, [view, isInView]) => {
      return isInView && VIEW_PRIORITY[view] > VIEW_PRIORITY[accum]
        ? view
        : accum;
    },
    [VIEWS.hero]
  );

  // Save to local storage
  useEffect(
    () =>
      typeof window !== "undefined" &&
      localStorage.setItem("theme", currentTheme),
    [currentTheme]
  );
  useEffect(
    () =>
      typeof window !== "undefined" &&
      localStorage.setItem("isDarkMode", isDarkMode),
    [isDarkMode]
  );

  useEffect(() => {
    if (currentTheme !== prevTheme) {
      // remove any previous theme classnames
      document.documentElement.classList.remove(
        ...document.documentElement.classList
      );
      document.documentElement.classList.add(currentTheme);

      if (isDarkMode) {
        invertThemeCss();
      }
      setColors(getColors());
    }
  }, [currentTheme, prevTheme, isDarkMode]);

  const isHeaderColorChange = useIsScrolled() || navIsOpen;

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
  };

  const invertTheme = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    invertThemeCss();
    setColors(getColors());
  };

  return (
    <ThemeContext.Provider
      value={{
        invertTheme,
        changeTheme,
        colors,
        isDarkMode,
        themes: THEMES_CLASS_NAME,
        currentTheme,
        currentView,
        setCurrentViews,
        navIsOpen,
        setNavIsOpen,
        isHeaderColorChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export { VIEWS };
