import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Hero = ({
  bgColor,
  contentRatio,
  colHeight,
  rowHeight,
  imgSrc,
  xSpacing,
  imgClassnameRow,
  imgClassnameCol,
  header,
  children,
}) => (
  <Card
    bgColor={bgColor}
    contentRatio={contentRatio}
    colHeight={colHeight}
    rowHeight={rowHeight}
    xSpacing={xSpacing}
    media={<img src={imgSrc} className={`${imgClassnameRow}`} alt={imgSrc} />}
    rowContent={
      <>
        <h1 className="font-serif text-4xl font-bold xl:text-5xl">{header}</h1>
        {React.Children.map(children, (child) => {
          if (child.type === "p") {
            return React.cloneElement(child, {
              className: `${RESPONSIVE_ELEMENT} mt-8`,
            });
          }
          return React.cloneElement(child, {
            className: `${child.props.className} ${RESPONSIVE_ELEMENT} mt-8`,
          });
        })}
      </>
    }
    colContent={
      <>
        <h1 className="mt-24 font-serif text-4xl font-bold xl:text-5xl">
          {header}
        </h1>
        <img src={imgSrc} className={`mt-12 ${imgClassnameCol}`} alt={imgSrc} />
        {React.Children.map(children, (child) => {
          if (child.type === "p") {
            return React.cloneElement(child, {
              className: `${RESPONSIVE_ELEMENT} mt-8`,
            });
          }
          return React.cloneElement(child, {
            className: `${child.props.className} ${RESPONSIVE_ELEMENT} mt-8`,
          });
        })}
      </>
    }
  />
);

Hero.propTypes = {
  bgColor: PropTypes.string,
  // Ex. "85vh", leave blank to let content dictate height
  colHeight: PropTypes.string,
  rowHeight: PropTypes.string,
  xSpacing: PropTypes.number,
  header: PropTypes.element.isRequired,
};

export const RESPONSIVE_ELEMENT =
  "max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl";

export default Hero;
