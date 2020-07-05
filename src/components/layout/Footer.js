import React, { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import ThemeContext, { VIEWS } from "../../styles/theme";
import classNames from "classnames";

const Footer = () => {
  const { setCurrentViews } = useContext(ThemeContext);
  const [ref, inView] = useInView();
  const [refHeader, inViewHeader] = useInView();
  useEffect(
    () => setCurrentViews((view) => ({ ...view, [VIEWS.contact]: inView })),
    [inView, setCurrentViews]
  );
  return (
    <footer
      id="contact"
      ref={ref}
      className="py-4 space-y-4 border-t border-white shadow xl:space-y-6 border-opacity-10"
    >
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-2xl font-semibold xl:text-3xl" ref={refHeader}>
          <span
            className={classNames(
              "inline-block border-accentThree-600 border-b-2 xl:border-b-4 transform transition duration-300",
              inViewHeader ? "scale-100" : "scale-0"
            )}
          >
            Contact
          </span>
        </h2>

        <nav className="flex items-center">
          <a
            href="https://www.linkedin.com/in/engbrianlee/"
            className="inline-block p-2 hover:text-focusable-900"
            aria-label="My Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={
                "w-6 h-6 xl:w-8 xl:h-8 ease-out transform hover:scale-110"
              }
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/engbrianlee"
            className="inline-block p-2 hover:text-focusable-900"
            aria-label="My LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={
                "w-6 h-6 xl:w-8 xl:h-8 ease-out transform hover:scale-110"
              }
            >
              <g clipPath="url(#clip0)">
                <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </nav>
      </div>
      <div className={"text-xs font-hairline xl:text-sm text-center"}>
        <p>Made with ❤️ and ☕. </p>
        <p>
          With design help from the talented{" "}
          <a
            href="https://www.crystalchu.me/"
            className="font-semibold underline hover:text-focusable-900"
          >
            Crystal Chu
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
