import React from "react";
import PropTypes from "prop-types";

const Card = ({
  bgColor,
  contentRatio,
  colHeight,
  rowHeight,
  xSpacing,
  media,
  rowContent,
  colContent,
  reverse,
}) => {
  const contentWidth = `${contentRatio}/12`;
  const mediaWidth = `${12 - contentRatio}/12`;
  return (
    <div className={`bg-${bgColor} flex flex-col justify-center lg:px-0`}>
      <section
        className="flex flex-col items-center mx-auto lg:hidden"
        style={{ height: colHeight }}
      >
        {colContent}
      </section>
      <div
        className={`flex ${xSpacing ? `space-x-${xSpacing}` : ""} ${
          reverse && "flex-row-reverse space-x-reverse"
        }`}
      >
        <div
          style={{ height: rowHeight }}
          className={`hidden lg:flex lg:flex-col lg:justify-center lg:w-${contentWidth} xl:text-lg`}
        >
          <section className={`${reverse ? "ml-auto" : ""}`}>
            {rowContent}
          </section>
        </div>
        <div
          className={`hidden lg:items-center lg:justify-end lg:w-${mediaWidth} lg:block lg:flex`}
        >
          {media}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  bgColor: PropTypes.string,
  // >= lg bp
  // contentRatio of 6 would be w-6/12 for content w-6/12 for media
  // contentRatio of 7 would be w-7/12 for content w-5/12 for media
  contentRatio: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  // Ex. "85vh", leave blank to let content dictate height
  colHeight: PropTypes.string,
  rowHeight: PropTypes.string,
  // Ex. Spacing between content and media, Ie. "12" = space-x-12
  xSpacing: PropTypes.number,
  media: PropTypes.element.isRequired,
  rowContent: PropTypes.element.isRequired,
  // < lg bp
  colContent: PropTypes.element.isRequired,
  // Reverse flex direction
  reverse: PropTypes.bool,
};
Card.defaultProps = { bgColor: "white", contentRatio: 6, reverse: false };

export default Card;
