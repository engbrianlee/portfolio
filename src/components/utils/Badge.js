import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Badge = ({ children, className, as: As, ...props }) => {
  const badgeClassName = classNames(
    "inline-block px-2 text-xs font-semibold tracking-wide uppercase rounded-full truncate w-full",
    className
  );
  if (As) {
    return (
      <As className={badgeClassName} {...props}>
        {children}
      </As>
    );
  }
  return <span className={badgeClassName}>{children}</span>;
};
Badge.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  as: PropTypes.any,
};
Badge.defaultProps = {
  inverted: false,
};

export default Badge;
