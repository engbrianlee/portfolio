import React, { useContext } from "react";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import ThemeContext from "../styles/theme";
import styled, { keyframes, css } from "styled-components";
import { Link } from "gatsby";
import Card from "../components/pages/Card";
import Hero, { RESPONSIVE_ELEMENT } from "../components/pages/Hero";
import Underline from "../components/utils/Underline";
import Button from "../components/utils/Button";
import Layout from "../components/layout/Layout";
import { SCALE_HOVER } from "../components/utils/Utils";
import classNames from "classnames";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const bobAnimation = keyframes`{
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0px);
  }
}`;

const BobAnimation = styled.div.attrs((props) => ({
  duration: props.duration || "1.5s",
}))`
  display: inline-block;
  animation: ${(props) => props.duration} ease-in-out infinite ${bobAnimation};
`;

const Welcome = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div style={{ height: "80vh" }} className="flex items-center">
        <h1 className="text-5xl font-bold text-center md:text-6xl">
          <Typist>
            Hi! <Typist.Delay ms={500} />
            I&apos;m Brian, Software Engineer @ Citadel
          </Typist>
        </h1>
      </div>
      <div style={{ height: "20vh" }}>
        <a
          href="#resume"
          className={classNames(
            theme.color.focusable,
            "block w-16 h-16 mx-auto"
          )}
        >
          <BobAnimation>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </BobAnimation>
        </a>
      </div>
    </>
  );
};

const ProjectCard = ({
  imgSrc,
  projectCompany,
  projectName,
  projectDescription,
  projectLink,
  reverse,
}) => {
  return (
    <Card
      reverse={reverse}
      media={
        <Link to={projectLink} className="w-full">
          <img
            className={`${RESPONSIVE_ELEMENT} ${SCALE_HOVER(105, 300)} ${
              !reverse && "ml-auto"
            }`}
            src={imgSrc}
            alt={projectName}
          />
        </Link>
      }
      xSpacing={24}
      contentRatio={6}
      rowContent={
        <>
          <h4 className="font-semibold uppercase">{projectCompany}</h4>
          <h3 className="mt-3 font-serif text-3xl font-bold">{projectName}</h3>
          <p className="max-w-xl mt-4">{projectDescription}</p>
          <div className="mt-8">
            <Button
              className="inline-block px-6 py-3"
              to={projectLink}
              as={Link}
            >
              View Project
            </Button>
          </div>
        </>
      }
      colContent={
        <>
          <Link to={projectLink} className="w-full h-full">
            <img
              src={imgSrc}
              alt={projectName}
              className={`py-8 ${RESPONSIVE_ELEMENT} ${SCALE_HOVER(105, 300)}`}
            />
          </Link>
          <h4 className="font-semibold uppercase">{projectCompany}</h4>
          <h3 className="mt-0 mt-3 font-serif text-3xl font-bold">
            {projectName}
          </h3>
          <p className="max-w-sm mt-4 ">{projectDescription}</p>
          <Button
            className="inline-block px-6 py-3 mt-8"
            to={projectLink}
            as={Link}
          >
            View Project
          </Button>
        </>
      }
    />
  );
};
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  projectCompany: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};
ProjectCard.defaultProps = {
  reverse: false,
};

const WorkIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="currentColor"
    className={color}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);
const SchoolIcon = (color) => (
  <svg
    fill="currentColor"
    className={color}
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
);
const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout>
      <SEO
        keywords={["Crystal Chu", "Product Designer", "Designer"]}
        title="Home"
      />
      <Welcome />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            borderTop: "4px solid rgb(33, 150, 243)",
          }}
          date="Aug 2020 - present"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: theme.color.primaryText,
          }}
          icon={<WorkIcon color={theme.color.primaryText} />}
        >
          <h3 className="vertical-timeline-element-title">Citadel</h3>
          <h4 className="text-sm">Software Engineer</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            borderTop: "rgb(33, 150, 243)",
            color: theme.color.primaryText,
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2019 - Aug 2019"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: theme.color.primaryText,
          }}
          icon={<WorkIcon color={theme.color.primaryText} />}
        >
          <h3 className="vertical-timeline-element-title">Wish</h3>
          <h4 className="text-sm">Software Engineering Intern</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: theme.color.primaryText,
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2018 - Oct 2019"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: theme.color.primaryText,
          }}
          icon={<WorkIcon color={theme.color.primaryText} />}
        >
          <h3 className="vertical-timeline-element-title">Intel</h3>
          <h4 className="text-sm">Software Engineering Intern</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            borderTop: "rgb(33, 150, 243)",
            color: theme.color.primaryText,
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2020"
          iconStyle={{
            background: "rgb(233, 30, 99)",
            color: theme.color.primaryText,
          }}
          icon={<SchoolIcon color={theme.color.primaryText} />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Eng Computer Engineering
          </h3>
          <h4 className="text-sm">McMaster University</h4>
          <p>Graduated with highest GPA in Faculty of Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* <div
        id="projects"
        className="mt-12 mb-12 space-y-40 global-padding xl:text-lg"
      >
        <h2 className="mt-12 font-serif text-4xl font-semibold text-center xl:text-5xl">
          Selected Projects
        </h2>
        <ProjectCard
          projectCompany="Capital One"
          projectName="COVID-19 Microsite"
          projectDescription="Redesigned page to improve usability and navigation of COVID-19 related information to help customers who are financially impacted by the pandemic."
          projectLink="/covid"
          imgSrc="img/home/covid-thumbnail.svg"
        />

        <ProjectCard
          projectCompany="Passion Project"
          projectName="TravelHer"
          projectDescription="Researched and designed a streamlined travel safety app for solo female travellers."
          projectLink="/travelher"
          imgSrc="img/home/travelher-thumbnail.svg"
          reverse
        />
        <ProjectCard
          projectCompany="Passion Project"
          projectName="TravelHer"
          projectDescription="Researched and designed a streamlined travel safety app for solo female travellers."
          projectLink="/travelher"
          imgSrc="img/home/travelher-thumbnail.svg"
        />
      </div> */}
    </Layout>
  );
};

export default HomePage;
