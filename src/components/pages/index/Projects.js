import React, { useState } from "react";
import classNames from "classnames";
import Badge from "../../utils/Badge";
import { css } from "twin.macro";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";
import { keyframes } from "styled-components";

let currentBadgeClassName = 0;
const BADGES_CLASSNAMES = [
  "text-accentOne-800 bg-accentOne-200",
  "text-accentTwo-800 bg-accentTwo-200",
  "text-accentThree-800 bg-accentThree-200",
];
const PROJECTS = [
  {
    title: "Basket",
    description: "A real-time, collaborative shopping list.",
    imgSrc:
      "https://images.unsplash.com/photo-1499881696443-e66dd9a7b496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
    badges: ["GraphQL", "React", "Prisma"],
    type: "Full Stack",
  },
  {
    title: "HydroHomie",
    description: "A site that reminds you to drink your water!",
    imgSrc:
      "https://images.unsplash.com/photo-1588250674913-e28f0351f855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    badges: ["GraphQL", "React", "Prisma"],
    type: "Full Stack",
  },
  {
    title: "Caf-fiend",
    description: "Ease the pain of reducing your caffiene intake.",
    imgSrc:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80",
    badges: ["React"],
    type: "Frontend",
  },
  {
    title: "Personal Site",
    description: "You're looking at it!",
    imgSrc:
      "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    badges: ["Gatsby", "TailWindCSS"],
    type: "Frontend",
  },
  {
    title: "Edge Vision Engine",
    description:
      "An AI surveillance system that provides real-time alerts and analysis of detected events.",
    imgSrc:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    badges: ["Rasp Pi", "AWS", "Deep Learning"],
    demoSrc: "https://engbrianlee.github.io/EVE_frontend/#/",
    type: "Deep Learning",
  },
];

const bounce = keyframes`{
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
const animation = () =>
  css`
    ${bounce} 0.6s
  `;
const Card = ({ project, className, intersectionObserverProps }) => {
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView(intersectionObserverProps);
  if (!visible && inView) {
    setVisible(true);
  }

  return (
    <div
      className={classNames(
        className,
        "ease-out transform hover:scale-105 duration-300",
        {
          "bounce-in": visible,
          "is-hidden": !visible,
        }
      )}
      ref={ref}
      css={css`
        visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
        animation: ${(props) => (props.isVisible ? animation : "none")};
      `}
      isVisible={visible}
    >
      <div className="relative pb-5/6">
        <img
          className="absolute object-cover w-full h-full rounded-lg shadow-md"
          src={project.imgSrc}
          alt={`${project.title}: ${project.description}`}
        />
      </div>
      <div className="relative px-4 -mt-16">
        <div className="p-6 space-y-2 bg-white rounded-lg shadow-lg">
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
            <p className="text-sm lg:text-md">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.defaultProps = {
  intersectionObserverProps: { rootMargin: "0px 0px -40px 0px" },
};
const Projects = () => (
  <div id="projects" className="py-24 space-y-10">
    <h2 className="pb-4 text-4xl font-semibold text-center underline">
      Projects
    </h2>
    <div
      className="grid gap-8"
      css={css`
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        @media (min-width: 450px) {
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }
      `}
    >
      {PROJECTS.map((project) => {
        {
          if (!project.badgeClassName) {
            project.badgeClassName =
              BADGES_CLASSNAMES[
                currentBadgeClassName++ % BADGES_CLASSNAMES.length
              ];
          }
          return (
            <Card
              key={[project.title, project.description].join()}
              project={project}
            />
          );
        }
      })}
    </div>
  </div>
);

export default Projects;
