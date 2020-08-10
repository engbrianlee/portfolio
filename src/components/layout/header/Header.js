/* eslint-disable react/prop-types */
import classNames from "classnames";
import React, { useContext, useEffect, useRef } from "react";
import ThemeContext, { VIEWS } from "../../../styles/theme";
import Logo from "./Logo";
import Transition from "../../utils/Transition";
import { Link } from "gatsby";
import moon from "./moon.png";
import sun from "./sun.png";
import Toggle from "./Toggle";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const VIEW_CLASSNAMES = [
  "bg-accentOne-600",
  "bg-accentTwo-600",
  "bg-accentThree-600",
];
const HOVER_CLASSNAMES = [
  "hover:bg-accentOne-600",
  "hover:bg-accentTwo-600",
  "hover:bg-accentThree-600",
];

const NavLink = ({
  name,
  view,
  currentView,
  className,
  hoverClassName,
  viewClassName,
  normalLink,
  externalLink,
  ...props
}) =>
  externalLink ? (
    <a
      {...props}
      className={classNames(
        "px-2 rounded-md",
        normalLink
          ? "text-primary-900 hover:underline"
          : {
              "text-navLink-900": currentView === view,
              [viewClassName]: currentView === view,
              [hoverClassName]: currentView !== view,
            },
        className
      )}
    >
      {name}
    </a>
  ) : (
    <Link
      {...props}
      className={classNames(
        "px-2 rounded-md",
        normalLink
          ? "text-primary-900 hover:underline"
          : {
              "text-navLink-900": currentView === view,
              [viewClassName]: currentView === view,
              [hoverClassName]: currentView !== view,
            },
        className
      )}
    >
      {name}
    </Link>
  );
const LINKS = [
  { to: "/#resume", name: "Resume", view: VIEWS.resume },
  { to: "/#projects", name: "Projects", view: VIEWS.projects },
  { to: "/#contact", name: "Contact", view: VIEWS.contact },
  {
    href: "https://blog.engbrianlee.vercel.app/",
    name: "Blog",
    normalLink: true,
    externalLink: true,
  },
];
const Header = () => {
  const {
    invertTheme,
    isDarkMode,
    currentView,
    navIsOpen,
    setNavIsOpen,
    isHeaderColorChange,
  } = useContext(ThemeContext);

  const modalRef = useRef();
  useEffect(() => {
    if (navIsOpen) {
      disableBodyScroll(modalRef.current);
    } else {
      enableBodyScroll(modalRef.current);
    }
    return () => clearAllBodyScrollLocks();
  }, [navIsOpen]);
  return (
    <div>
      <Transition
        show={navIsOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 z-10 transition-opacity"
          onClick={() => setNavIsOpen(false)}
        >
          <div
            className="absolute inset-0 bg-gray-600 opacity-75"
            aria-label="Close navigation."
          ></div>
        </div>
      </Transition>
      <div
        className={classNames(
          "fixed z-10 w-full py-3",
          { shadow: isHeaderColorChange && !navIsOpen },
          isHeaderColorChange
            ? "bg-secondary-900 border-b border-white border-opacity-10"
            : "bg-secondary-800"
        )}
      >
        <header className="width-full global-padding">
          <div className="relative flex items-center justify-center">
            <div className="flex items-center flex-1 w-0 lg:hidden">
              <button
                className={classNames(
                  "text-primary-900 hover:text-focusable-900 "
                )}
                onClick={() => setNavIsOpen((navIsOpen) => !navIsOpen)}
                aria-label="Toggle Navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className={"w-6 h-6"}
                >
                  <path
                    className={classNames({ hidden: navIsOpen })}
                    d="M3 12h18M3 6h18M3 18h18"
                  />
                  <path
                    className={classNames({ hidden: !navIsOpen })}
                    d="M18 6L6 18M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex lg:flex-1 lg:w-0">
              <Logo className=" text-primary-900 hover:text-focusable-900" />
            </div>
            <nav className="items-center hidden text-xl lg:flex">
              {LINKS.map((link, i) => (
                <NavLink
                  hoverClassName="hover:underline"
                  viewClassName={classNames(
                    VIEW_CLASSNAMES[i % VIEW_CLASSNAMES.length]
                  )}
                  currentView={currentView}
                  key={link.to || link.href}
                  {...link}
                />
              ))}
            </nav>
            <div className="flex justify-end flex-1 w-0">
              <Toggle
                icons={{
                  checked: (
                    <img
                      src={moon}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: "none" }}
                    />
                  ),
                  unchecked: (
                    <img
                      src={sun}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: "none" }}
                    />
                  ),
                }}
                checked={isDarkMode}
                onChange={() => invertTheme()}
              />
            </div>
          </div>
          <Transition
            show={navIsOpen}
            enter="ease-in-out duration-300 transform"
            enterFrom="scale-y-0"
            enterTo="scale-y-100"
            leave="ease-in-out duration-300 transform"
            leaveFrom="scale-y-100"
            leaveTo="scale-y-0"
          >
            <nav
              className={classNames(
                { hidden: !navIsOpen },
                "text-center text-lg pt-5 flex flex-col origin-top absolute left-0 rounded-b-lg shadow-lg bg-secondary-900 w-screen"
              )}
              ref={modalRef}
            >
              {LINKS.map((link, i) => (
                <NavLink
                  className={classNames(
                    "py-4",
                    HOVER_CLASSNAMES[i % HOVER_CLASSNAMES.length]
                  )}
                  currentView={false}
                  key={link.to || link.href}
                  onClick={() => setNavIsOpen(false)}
                  {...link}
                />
              ))}
            </nav>
          </Transition>
        </header>
      </div>
    </div>
  );
};

export default Header;
