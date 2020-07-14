import PropTypes from "prop-types";
import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./header/Header";
import { Helmet } from "react-helmet";
import "intersection-observer";
import ThemeContext from "../../styles/theme";
import "typeface-inter";
import defaultTheme from "tailwindcss/defaultTheme";

function Layout({ children, footerBgColor }) {
  const { colors, isHeaderColorChange, isDarkMode } = useContext(ThemeContext);
  let themeColor = defaultTheme.colors.pink["200"];
  if (isDarkMode) {
    themeColor = isHeaderColorChange
      ? colors.secondary && colors.secondary["900"]
      : colors.secondary && colors.secondary["800"];
  }
  return (
    <div className="antialiased text-primary-900 bg-secondary-900">
      <Helmet
        meta={[
          {
            name: "theme-color",
            content: themeColor,
          },
        ]}
      />
      <Header />
      <main className="pt-20 overflow-hidden bg-secondary-800 global-padding">
        {children}
      </main>
      <Footer bgColor={footerBgColor} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footerBgColor: PropTypes.string,
};

export default Layout;
