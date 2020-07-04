/* eslint-disable react/prop-types */
import React from "react";
import { css } from "twin.macro";
import ProjectCard from "./ProjectCard";

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
    to: "https://github.com/engbrianlee/basket",
    githubSrc: "https://github.com/engbrianlee/basket",
  },
  {
    title: "HydroHomie",
    description: "A site that reminds you to drink your water!",
    imgSrc:
      "https://images.unsplash.com/photo-1588250674913-e28f0351f855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    badges: ["GraphQL", "React", "Prisma"],
    type: "Full Stack",
    to: "https://github.com/engbrianlee/basket",
    githubSrc: "https://github.com/engbrianlee/hydro-homie",
  },
  {
    title: "Caf-fiend",
    description: "Ease the pain of reducing your caffiene intake.",
    imgSrc:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80",
    badges: ["React"],
    type: "Frontend",
    // to: "https://github.com/engbrianlee/basket",
    githubSrc: "https://github.com/engbrianlee/caffiend",
  },
  {
    title: "Personal Site",
    description: "You're looking at it!",
    imgSrc:
      "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    badges: ["Gatsby", "TailWindCSS"],
    type: "Frontend",
    to: "https://github.com/engbrianlee/basket",
    githubSrc: "https://github.com/engbrianlee/portfolio",
  },
  {
    title: "Edge Vision Engine",
    description:
      "An AI surveillance system that provides real-time alerts and analysis of detected events.",
    imgSrc:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    badges: ["Rasp Pi", "AWS", "Deep Learning"],
    type: "Deep Learning",
    to: "https://engbrianlee.github.io/EVE_frontend/#/",
  },
];

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
            <ProjectCard
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
