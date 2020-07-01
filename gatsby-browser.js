import "./src/styles/style.css";

import React from "react";
import { ThemeProvider } from "./src/styles/theme";

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
