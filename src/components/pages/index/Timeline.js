import React, { useContext } from "react";
import classNames from "classnames";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ThemeContext from "../../../styles/theme";
import PropTypes from "prop-types";

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
  color,
  textColor,
  dateClassName,
  badges,
  badgeClassName,
}) => (
  <VerticalTimelineElement
    date={date}
    iconStyle={{
      background: color,
    }}
    contentStyle={{
      borderTop: `4px solid ${color}`,
      color: textColor,
    }}
    icon={icon}
    dateClassName={dateClassName}
  >
    <h4 className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
      {title}
    </h4>
    <h3 className="text-xl font-bold">{company}</h3>
    <p>{description}</p>
    <div className="mt-2 space-x-1">
      {badges &&
        badges.map((badge) => (
          <span
            key={badge}
            className={classNames(
              badgeClassName,
              "inline-block px-2 text-xs font-semibold tracking-wide uppercase rounded-full"
            )}
          >
            {badge}
          </span>
        ))}
    </div>
  </VerticalTimelineElement>
);
TimelineElement.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  dateClassName: PropTypes.string.isRequired,
  badgeClassName: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.any,
};

const Timeline = () => {
  const { theme, getHex } = useContext(ThemeContext);

  const TIMELINE_EVENTS = [
    {
      date: "Aug 2020 - present",
      company: "Citadel",
      title: "Software Engineer",
      description: "Just started! I'll have to let you know later 😃!",
      icon: <WorkIcon />,
      color: theme.color.accentOneHex,
      badges: ["C++", "Python"],
      badgeClassName: classNames(
        theme.color.accentOneBgLighter,
        theme.color.accentOneTextDarker
      ),
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
              theme.color.focusable,
              theme.color.accentOneBorder,
              theme.color.accentOneText,
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
      color: theme.color.accentOneHex,
      badges: ["Fullstack", "Python", "React"],
      badgeClassName: classNames(
        theme.color.accentOneBgLighter,
        theme.color.accentOneTextDarker
      ),
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
              theme.color.focusable,
              theme.color.accentOneBorder,
              theme.color.accentOneText,
              "underline"
            )}
          >
            Quartus
          </a>
          .
        </>
      ),
      icon: <WorkIcon />,
      color: theme.color.accentOneHex,
      badges: ["C++"],
      badgeClassName: classNames(
        theme.color.accentOneBgLighter,
        theme.color.accentOneTextDarker
      ),
    },
    {
      date: "June 2020",
      company: "McMaster University",
      title: "B.Eng Computer Engineering",
      description:
        "Graduated with the highest GPA in the Faculty of Engineering, I love learning 😛!",
      icon: <SchoolIcon />,
      color: theme.color.accentTwoHex,
      badgeClassName: classNames(
        theme.color.accentTwoBgLighter,
        theme.color.accentTwoTextDarker
      ),
    },
  ];

  return (
    <VerticalTimeline
    // Style the line: https://github.com/stephane-monnot/react-vertical-timeline/issues/66
    // css={css`
    //   &::before {
    //     background: ${theme.color.primaryHex};
    //   }
    // `}
    >
      {TIMELINE_EVENTS.map((timelineEvent) => (
        <TimelineElement
          {...timelineEvent}
          key={[
            timelineEvent.date,
            timelineEvent.company,
            timelineEvent.title,
          ].join()}
          textColor={getHex("gray-900")}
          dateClassName={theme.color.primaryText}
        />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
