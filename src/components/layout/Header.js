import classNames from "classnames";
import React, { useContext, useState } from "react";
import ThemeContext from "../../styles/theme";
import { Link } from "gatsby";

const Header = () => {
  const { invertTheme, isDarkMode } = useContext(ThemeContext);
  const [navIsOpen, setNavIsOpen] = useState(false);

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
    <div className={classNames("bg-secondary-900", "fixed z-10 w-full shadow")}>
      <header className="width-full global-padding">
        <div className="relative flex items-center justify-center py-3 lg:justify-between">
          <button
            className={classNames(
              "text-primary-900",
              "focusable",
              "absolute left-0 flex items-center lg:hidden"
            )}
            onClick={() => setNavIsOpen((navIsOpen) => !navIsOpen)}
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
          <Link
            to="/"
            className={classNames(
              "text-primary-900",
              "focusable",
              "inline-block p-2 font-serif text-xl font-bold xl:text-2xl"
            )}
          >
            <svg
              width="81"
              height="22"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.16 9.048L9.28 3v2.568L2.488 9.984v.096l6.792 4.416v2.568L.16 11.016V9.048zm13.047 3.072c0-.96.168-1.824.504-2.592a6.165 6.165 0 011.368-1.944c.56-.544 1.2-.952 1.92-1.224a6.142 6.142 0 012.256-.432c.88 0 1.656.144 2.328.432a4.715 4.715 0 012.784 2.904c.24.688.36 1.44.36 2.256 0 .272-.016.528-.048.768a3.99 3.99 0 01-.072.576h-8.568c.096 1.056.512 1.872 1.248 2.448.736.56 1.64.84 2.712.84.608 0 1.176-.08 1.704-.24a9.395 9.395 0 001.608-.72l.936 1.728c-.64.4-1.352.728-2.136.984a7.913 7.913 0 01-2.472.384 7.635 7.635 0 01-2.52-.408 6.088 6.088 0 01-2.04-1.224 5.753 5.753 0 01-1.368-1.92c-.336-.768-.504-1.64-.504-2.616zm8.976-1.128c0-.912-.24-1.624-.72-2.136-.48-.528-1.192-.792-2.136-.792-.8 0-1.512.248-2.136.744-.624.496-1.016 1.224-1.176 2.184h6.168zm5.894-9.936h2.784v4.368l-.096 2.064a5.86 5.86 0 011.728-1.128 4.645 4.645 0 011.92-.432c.768 0 1.448.144 2.04.432a4.065 4.065 0 011.512 1.2c.416.512.728 1.136.936 1.872.224.736.336 1.56.336 2.472 0 1.008-.144 1.912-.432 2.712-.288.784-.68 1.448-1.176 1.992-.48.544-1.04.96-1.68 1.248a4.589 4.589 0 01-1.944.432c-.56 0-1.144-.136-1.752-.408a5.615 5.615 0 01-1.68-1.176h-.072L30.261 18h-2.184V1.056zm2.784 13.872c.432.4.88.68 1.344.84.464.16.88.24 1.248.24.832 0 1.528-.336 2.088-1.008.56-.688.84-1.704.84-3.048 0-1.184-.216-2.104-.648-2.76-.432-.656-1.128-.984-2.088-.984a3.13 3.13 0 00-1.368.336c-.464.224-.936.584-1.416 1.08v5.304zM42.204 1.056h6.48v12.792c0 .8.2 1.368.6 1.704.4.32.904.48 1.512.48.576 0 1.248-.152 2.016-.456l.648 2.04a21.37 21.37 0 01-1.584.48c-.48.128-1.064.192-1.752.192-1.392 0-2.44-.4-3.144-1.2-.704-.8-1.056-1.928-1.056-3.384V3.24h-3.72V1.056zM59.331 21.84h-2.376L64.85.96h2.376L59.33 21.84zm21.518-10.824l-9.12 6.048v-2.568l6.792-4.416v-.096L71.73 5.568V3l9.12 6.048v1.968z" />
            </svg>
          </Link>
          <nav className="items-center hidden space-x-8 text-sm font-semibold lg:space-x-16 lg:flex xl:text-base">
            <a
              href="#resume"
              className={classNames("focusable", "hover:underline")}
            >
              Resume
            </a>
            <a
              href="#projects"
              className={classNames("focusable", "hover:underline")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={classNames("focusable", "hover:underline")}
            >
              Contact
            </a>
            <button
              className={classNames(
                "text-primary-900",
                "focusable",
                "hidden lg:flex items-center"
              )}
              onClick={() => invertTheme()}
            >
              <ThemeIcon />
            </button>
          </nav>
          <button
            className={classNames(
              "text-primary-900",
              "focusable",
              "absolute right-0 flex items-center lg:hidden"
            )}
            onClick={() => invertTheme()}
          >
            <ThemeIcon />
          </button>
        </div>
        <nav
          className={classNames(
            { hidden: !navIsOpen },
            "text-sm font-semibold text-center space-y-1 pb-2"
          )}
        >
          <a
            href="#resume"
            className={classNames(
              "block py-4 rounded-lg hover:underline",
              "focusable"
            )}
          >
            Resume
          </a>
          <a
            href="#projects"
            className={classNames(
              "block py-4 rounded-lg hover:underline",
              "focusable"
            )}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={classNames(
              "block py-4 rounded-lg hover:underline",
              "focusable"
            )}
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
