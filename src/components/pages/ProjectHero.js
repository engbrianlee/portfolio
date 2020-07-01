import React from "react";
import PropTypes from "prop-types";
import Hero, { RESPONSIVE_ELEMENT } from "./Hero";

const ProjectHero = ({
  projectName,
  imgSrc,
  imgClassnameRow,
  xSpacing,
  role,
  tools,
  timeline,
  children,
}) => (
  <>
    <Hero
      contentRatio={6}
      rowHeight="90vh"
      imgSrc={imgSrc}
      header={projectName}
      xSpacing={xSpacing}
      imgClassnameRow={`${RESPONSIVE_ELEMENT} ${imgClassnameRow || ""}`}
    >
      {children}
    </Hero>
    <section
      className={`${RESPONSIVE_ELEMENT} flex justify-between mt-16 lg:max-w-full xl:max-w-full lg:pl-16 lg:pr-40 lg:-mt-16 mx-auto`}
    >
      <div>
        <h3 className="font-semibold uppercase">Role</h3>
        <p>{role}</p>
      </div>
      <div>
        <h3 className="font-semibold uppercase">Tools</h3>
        <p>{tools}</p>
      </div>
      <div>
        <h3 className="font-semibold uppercase">Timeline</h3>
        <p>{timeline}</p>
      </div>
    </section>
  </>
);
ProjectHero.propTypes = {
  projectName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgClassnameRow: PropTypes.string,
  xSpacing: PropTypes.number,
  role: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProjectHero;
