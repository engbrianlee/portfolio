import React, { useContext, useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";
import ThemeContext from "../../styles/theme";
import PropTypes from "prop-types";
import _ from "lodash";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

const Underline = ({ children, strokeWidth, hover }) => {
  const { theme } = useContext(ThemeContext);
  const color = _.get(
    fullConfig.theme.colors,
    theme.color.primary.replace("-", ".")
  );
  const [showUnderline, setShowUnderline] = useState(false);
  // Quick fix to ensure that children have rendered
  // before line is drawn, without this delay
  // the line may be drawn before children are rendered
  // and be wrong length/position
  const [hoverDelay, setHoverDelay] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setHoverDelay(true), 500);
    return () => clearTimeout(id);
  }, []);
  const show = (!hover && hoverDelay) || showUnderline;
  return (
    <RoughNotation
      type="underline"
      show={show}
      strokeWidth={strokeWidth}
      onMouseEnter={() => setShowUnderline(true)}
      onMouseLeave={() => setShowUnderline(false)}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
Underline.propTypes = {
  strokeWidth: PropTypes.number,
  hover: PropTypes.bool,
  children: PropTypes.element,
};
Underline.defaultProps = {
  strokeWidth: 3,
  hover: true,
};

export default Underline;
