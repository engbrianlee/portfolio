import classNames from "classnames";
import React, { useContext, useState, useEffect } from "react";
import ThemeContext, { VIEWS } from "../../../styles/theme";
import Logo from "./Logo";
import Transition from "../../utils/Transition";

const useIsScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        document.body !== undefined ? document.body.scrollTop : 0;
      const isScrolled = (window.pageYOffset || scrollTop) > 0;

      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    () => window.removeEventListener("scroll", onScroll, { passive: true });
  }, [scrolled]);

  return scrolled;
};

const Header = () => {
  const { invertTheme, isDarkMode, currentView } = useContext(ThemeContext);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const isScrolled = useIsScrolled() || navIsOpen;

  const ThemeIcon = () => (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6"
    >
      {isDarkMode ? (
        <>
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </>
      ) : (
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      )}
    </svg>
  );

  return (
    <div
      className={classNames(
        "fixed z-10 w-full transition-colors duration-100 ease-in",
        isScrolled ? "bg-secondary-900 shadow" : "bg-secondary-800"
      )}
    >
      <header className="width-full global-padding">
        <div className="relative flex items-center justify-center py-1 lg:justify-between">
          <button
            className={classNames(
              "text-primary-900 focusable absolute left-0 flex items-center lg:hidden"
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
          <Logo isScrolled={isScrolled} />
          <nav className="items-center hidden text-sm font-semibold lg:flex xl:text-base">
            <a
              href="#resume"
              className={classNames(
                "px-2 rounded-md hover:bg-accentOne-600 hover:text-white",
                { "bg-accentOne-600 text-white": currentView === VIEWS.resume }
              )}
            >
              Resume
            </a>
            <a
              href="#projects"
              className={classNames(
                "px-2 rounded-md hover:bg-accentTwo-600 hover:text-white",
                {
                  "bg-accentTwo-600 text-white": currentView === VIEWS.projects,
                }
              )}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={classNames(
                "px-2 rounded-md hover:bg-accentThree-600 hover:text-white",
                {
                  "bg-accentThree-600 text-white":
                    currentView === VIEWS.contact,
                }
              )}
            >
              Contact
            </a>
            <button
              className={classNames(
                "text-primary-900 focusable hidden lg:flex items-center ml-10"
              )}
              onClick={() => invertTheme()}
              aria-label="Toggle Dark Mode"
            >
              <ThemeIcon />
            </button>
          </nav>
          <button
            className={classNames(
              "text-primary-900 focusable absolute right-0 flex items-center lg:hidden"
            )}
            onClick={() => invertTheme()}
            aria-label="Toggle Dark Mode"
          >
            <ThemeIcon />
          </button>
        </div>
        <Transition
          show={navIsOpen}
          enter="ease-in-out duration-500 transform"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 scale-100"
          leave="ease-in-out duration-500 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-0"
        >
          <nav
            className={classNames(
              { hidden: !navIsOpen },
              "text-sm font-semibold text-center space-y-1 pb-2"
            )}
          >
            <a
              href="#resume"
              className={classNames(
                { "bg-accentOne-600 text-white": currentView === VIEWS.resume },
                "block py-4 rounded-lg focusable hover:bg-accentOne-600 hover:text-white"
              )}
            >
              Resume
            </a>
            <a
              href="#projects"
              className={classNames(
                {
                  "bg-accentTwo-600 text-white": currentView === VIEWS.projects,
                },
                "block py-4 rounded-lg focusable hover:bg-accentTwo-600 hover:text-white"
              )}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={classNames(
                {
                  "bg-accentThree-600 text-white":
                    currentView === VIEWS.contact,
                },
                "block py-4 rounded-lg focusable hover:bg-accentThree-600 hover:text-white"
              )}
            >
              Contact
            </a>
          </nav>
        </Transition>
      </header>
    </div>
  );
};

export default Header;
