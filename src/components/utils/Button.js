import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, className, as: As, inverted, ...props }) => {
  const buttonStyle = classNames(
    inverted
      ? "bg-secondary-900 text-primary-900 hover:bg-primary-900 hover:text-secondary-900 hover:border-secondary-900"
      : "bg-primary-900 text-secondary-900 hover:bg-secondary-900 hover:text-primary-900 hover:border-primary-900",
    "border font-semibold rounded-lg transition duration-300 ease-in-out focusable",
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
  inverted: PropTypes.bool,
};
Button.defaultProps = {
  inverted: false,
};

export default Button;
