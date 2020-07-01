import PropTypes from "prop-types";
import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeContext from "../../styles/theme";
import classNames from "classnames";

function Layout({ children, footerBgColor }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        theme.color.primaryText,
        theme.color.secondaryBg,
        "antialiased"
      )}
    >
      <Header />
      <main className="global-padding sm:pt-10">{children}</main>
      <Footer bgColor={footerBgColor} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footerBgColor: PropTypes.string,
};

export default Layout;
