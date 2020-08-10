/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { css } from "twin.macro";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import ThemeContext, { VIEWS } from "../../../../styles/theme";
import classNames from "classnames";

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
    imgName: "basket.png",
    badges: [
      "React",
      "Apollo Client",
      "GraphQL",
      "Hasura",
      "Postgres",
      "Storybook",
      "Typescript",
      "Cypress.io",
    ],
    type: "Full Stack",
    to: "https://github.com/engbrianlee/basket",
    githubSrc: "https://github.com/engbrianlee/basket",
  },
  // {
  //   title: "HydroHomie",
  //   description: "A site that reminds you to drink your water!",
  //   imgName: "jana-sabeth-7b1W1mcwekw-unsplash.jpg",
  //   badges: ["GraphQL", "React", "Prisma"],
  //   type: "Full Stack",
  //   to: "https://github.com/engbrianlee/basket",
  //   githubSrc: "https://github.com/engbrianlee/hydro-homie",
  // },
  // {
  //   title: "Caf-fiend",
  //   description: "Ease the pain of reducing your caffiene intake.",
  //   imgName: "mike-kenneally-tNALoIZhqVM-unsplash.jpg",
  //   badges: ["React"],
  //   type: "Frontend",
  //   // to: "https://github.com/engbrianlee/basket",
  //   githubSrc: "https://github.com/engbrianlee/caffiend",
  // },

  {
    title: "Edge Vision Engine",
    description:
      "An AI surveillance system that provides real-time alerts and analysis of detected events.",
    imgName: "alan-j-hendry-KNt4zd8HPb0-unsplash.jpg",
    badges: ["React", "AWS", "Deep Learning", "Systems Programming", "Python"],
    type: "Deep Learning",
    to: "https://www.youtube.com/watch?v=me34dZgAJzU",
    githubSrc: "https://engbrianlee.github.io/EVE_frontend/#/",
  },

  {
    title: "Personal Blog",
    description: "Dev logs, notes, and whatever I'm working on at the moment!",
    imgName: "blog.png",
    badges: ["NextJS", "TailWindCSS"],
    type: "Frontend",
    to: "https://blog.engbrianlee.vercel.app/",
    githubSrc: "https://github.com/engbrianlee/blog",
  },

  {
    title: "Personal Site",
    description: "You're looking at it!",
    imgName: "personal-site.png",
    badges: ["Gatsby", "TailWindCSS"],
    type: "Frontend",
    to: "https://engbrianlee.vercel.app/",
    githubSrc: "https://github.com/engbrianlee/portfolio",
  },
  // {
  //   title: "Conway's Game Of Life",
  //   description: "The iconic Game of Life.",
  //   imgName: "erik-mclean-C3T8KTZxTFM-unsplash.jpg",
  //   badges: ["React"],
  //   type: "Frontend",
  //   githubSrc: "https://codesandbox.io/s/game-of-life-8qwhk",
  //   to: "https://8qwhk.csb.app/",
  // },
];

const Projects = () => {
  const { setCurrentViews } = useContext(ThemeContext);
  const [ref, inView] = useInView();
  const [refHeader, inViewHeader] = useInView();
  useEffect(() => {
    setCurrentViews((view) => ({ ...view, [VIEWS.projects]: inView }));
  }, [inView, setCurrentViews]);

  return (
    <div id="projects" className="py-24 space-y-10" ref={ref}>
      <h2 className="pb-4 text-4xl font-semibold text-center" ref={refHeader}>
        <span
          className={classNames(
            "inline-block border-accentTwo-600 border-b-4 transform transition duration-300",
            inViewHeader ? "scale-100" : "scale-0"
          )}
        >
          Projects
        </span>
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
};

export default Projects;
