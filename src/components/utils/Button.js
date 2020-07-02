import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../../styles/theme";
import classNames from "classnames";

const Button = ({ children, className, as: As, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const buttonStyle = classNames(
    theme.color.primaryBg,
    theme.color.secondaryText,
    "hover:bg-white hover:text-gray-900 border-gray-900 border",
    "font-semibold rounded transition duration-300 ease-in-out",
    className
  );
  if (As) {
    return (
      <As className={buttonStyle} {...props}>
        {children}
      </As>
    );
  }
  return <button className={buttonStyle}>{children}</button>;
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  as: PropTypes.element,
};

export default Button;
