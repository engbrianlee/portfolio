/* eslint-disable react/prop-types */
import React, { useState } from "react";
import classNames from "classnames";
import Badge from "../../../utils/Badge";
import { css } from "twin.macro";
import { useInView } from "react-intersection-observer";
import { keyframes } from "styled-components";
import PropTypes from "prop-types";
import GithubCorner from "react-github-corner";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Image from "../../../utils/Image";

const bounceAnimation = keyframes`{
   0% {
    opacity: 0;
    transform: scale(0.5);
  }

  60% {
    opacity: 1;
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}`;

const ProjectCard = ({ project, className, intersectionObserverProps }) => {
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView(intersectionObserverProps);
  if (!visible && inView) {
    setVisible(true);
  }

  return (
    <div
      className={classNames(
        className,
        "ease-out transform hover:scale-105 duration-300"
      )}
      ref={ref}
      css={css`
        visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
        animation: ${(props) =>
          props.isVisible
            ? css`
                ${bounceAnimation} 0.6s
              `
            : "none"};
      `}
      isVisible={visible}
    >
      <a href={project.to || "/"}>
        <Image
          imgName={project.imgName}
          className="rounded-lg shadow-md"
          alt={`${project.title}: ${project.description}`}
        />
      </a>
      <div className="relative px-4 -mt-16">
        <div className="relative p-6 space-y-2 overflow-hidden bg-white rounded-lg shadow-lg">
          <GithubCorner
            href={project.githubSrc || "https://github.com/engbrianlee"}
          />
          <div className="space-y-1">
            <div className="flex flex-wrap -mx-1 overflow-hidden">
              {project.badges.map((badge) => (
                <div key={badge} className="px-1 my-px overflow-hidden">
                  <Badge className={project.badgeClassName}>{badge}</Badge>
                </div>
              ))}
            </div>
            <div className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
              {project.type}
            </div>
          </div>
          <div className="text-gray-900">
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <p className="text-sm lg:text-base">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
  intersectionObserverProps: PropTypes.object,
};
ProjectCard.defaultProps = {
  intersectionObserverProps: { rootMargin: "0px 0px -40px 0px" },
};

export default ProjectCard;
