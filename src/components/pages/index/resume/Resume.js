import React, { useContext, useEffect } from "react";
import Timeline from "./Timeline";
import Button from "../../../utils/Button";
import ThemeContext, { VIEWS } from "../../../../styles/theme";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const Resume = () => {
  const { setCurrentViews } = useContext(ThemeContext);
  const [ref, inView] = useInView();
  const [refHeader, inViewHeader] = useInView();
  useEffect(
    () => setCurrentViews((view) => ({ ...view, [VIEWS.resume]: inView })),
    [inView, setCurrentViews]
  );
  return (
    <div id="resume" className="py-24 space-y-10" ref={ref}>
      <h2 className="pb-4 text-4xl font-semibold text-center" ref={refHeader}>
        <span
          className={classNames(
            "inline-block border-accentOne-600 border-b-4 transform transition duration-300",
            inViewHeader ? "scale-100" : "scale-0"
          )}
        >
          Resume
        </span>
      </h2>
      <Timeline />
      <Button
        className="block max-w-xs p-2 mx-auto text-center"
        as={"a"}
        href="https://www.overleaf.com/project/5d53139bdfb0583a1119f2bf"
      >
        View Full Resume
      </Button>
    </div>
  );
};

export default Resume;
