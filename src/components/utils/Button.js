import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../../styles/theme";

const Button = ({ children, className, as: As, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const buttonStyle = `font-semibold bg-${theme.color.secondary} text-white transition duration-300 ease-in-out hover:bg-teal-700 hover:text-white rounded-sm`;
  if (As) {
    return (
      <As className={`${className} ${buttonStyle}`} {...props}>
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
