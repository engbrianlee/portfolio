import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, className, as: As, inverted, ...props }) => {
  const buttonClassName = classNames(
    inverted
      ? "bg-primary-900 text-secondary-900 hover:bg-secondary-900 hover:text-primary-900 hover:border-primary-900"
      : "bg-secondary-900 text-primary-900 hover:bg-primary-900 hover:text-secondary-900 hover:border-secondary-900",
    "border-2 border-primary-900 font-semibold rounded-lg transition duration-300 ease-in-out",
    className
  );
  if (As) {
    return (
      <As className={buttonClassName} {...props}>
        {children}
      </As>
    );
  }
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  as: PropTypes.any,
  inverted: PropTypes.bool,
};
Button.defaultProps = {
  inverted: false,
};

export default Button;
