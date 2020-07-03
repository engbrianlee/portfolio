import React from "react";
import classNames from "classnames";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";
import tw, { css } from "twin.macro";
import Badge from "../../utils/Badge";

const WorkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);
const SchoolIcon = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    className="text-white"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
);

const TimelineElement = ({
  date,
  icon,
  company,
  title,
  description,
  iconClassName,
  contentStyle,
  badges,
  badgeClassName,
}) => (
  <VerticalTimelineElement
    date={date}
    iconClassName={iconClassName}
    contentStyle={contentStyle}
    icon={icon}
    dateClassName="text-primary-900 date-timeline-ebl"
    css={css`
      @media (max-width: 1170px) {
        .date-timeline-ebl {
          ${tw`text-gray-600`}
        }
      }
    `}
  >
    <h4 className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
      {title}
    </h4>
    <h3 className="text-xl font-semibold">{company}</h3>
    <p>{description}</p>
    <div className="mt-2 space-x-1">
      {badges &&
        badges.map((badge) => (
          <Badge key={badge} className={badgeClassName}>
            {badge}
          </Badge>
        ))}
    </div>
  </VerticalTimelineElement>
);
TimelineElement.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  company: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contentStyle: PropTypes.object,
  badgeClassName: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.any,
};

const Timeline = () => {
  const TIMELINE_EVENTS = [
    {
      date: "Aug 2020 - present",
      company: "Citadel",
      title: "Software Engineer",
      description: "Just started! I'll have to let you know later 😃!",
      icon: <WorkIcon />,
      badges: ["C++", "Python"],
      badgeClassName: classNames("text-accentOne-800", "bg-accentOne-200"),
      iconClassName: "bg-accentOne-600",
      contentStyle: tw`text-gray-900 border-t-4 border-accentOne-600`,
    },
    {
      date: "May 2019 - Sept 2019",
      company: "Wish",
      title: "Software Engineering Intern",
      description: (
        <>
          Automation pipelines for{" "}
          <a
            href="https://www.wish.com/local"
            className={classNames(
              "focusable",
              "border-accentOne-600",
              "text-accentOne-600",
              "underline"
            )}
          >
            Wish Local
          </a>
          . Increased total approved stores by 5x as well as approval rate and
          time by 2x!
        </>
      ),
      icon: <WorkIcon />,
      badges: ["Fullstack", "Python", "React"],
      badgeClassName: classNames("text-accentOne-800", "bg-accentOne-200"),
      iconClassName: "bg-accentOne-600",
      contentStyle: tw`text-gray-900 border-t-4 border-accentOne-600`,
    },
    {
      date: "May 2018 - Dec 2019",
      company: "Intel",
      title: "Software Engineering Intern",
      description: (
        <>
          Cache-friendly and memory efficient algorithms & data structures for
          FPGA CAD software,{" "}
          <a
            href="https://www.intel.ca/content/www/ca/en/software/programmable/quartus-prime/overview.html"
            className={classNames(
              "focusable",
              "border-accentOne-600",
              "text-accentOne-600",
              "underline"
            )}
          >
            Quartus
          </a>
          .
        </>
      ),
      icon: <WorkIcon />,
      badges: ["C++"],
      badgeClassName: classNames("text-accentOne-800", "bg-accentOne-200"),
      iconClassName: "bg-accentOne-600",
      contentStyle: tw`text-gray-900 border-t-4 border-accentOne-600`,
    },
    {
      date: "June 2020",
      company: "McMaster University",
      title: "B.Eng Computer Engineering",
      description:
        "Graduated with the highest GPA in the Faculty of Engineering; I love learning 😛!",
      icon: <SchoolIcon />,
      badgeClassName: classNames("text-accentTwo-800", "bg-accentTwo-200"),
      iconClassName: "bg-accentTwo-600",
      contentStyle: tw`text-gray-900 border-t-4 border-accentTwo-600`,
    },
  ];

  return (
    <VerticalTimeline
    // Style the line: https://github.com/stephane-monnot/react-vertical-timeline/issues/66
    // css={tw`before:bg-primary-900`}
    >
      {TIMELINE_EVENTS.map((timelineEvent) => (
        <TimelineElement
          {...timelineEvent}
          key={[
            timelineEvent.date,
            timelineEvent.company,
            timelineEvent.title,
          ].join()}
        />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
