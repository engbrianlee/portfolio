import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";
import Header from "./header/Header";

function Layout({ children, footerBgColor }) {
  return (
    <div className="antialiased text-primary-900 bg-secondary-900">
      <Header />
      <main className="bg-secondary-800 global-padding sm:pt-10">
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
