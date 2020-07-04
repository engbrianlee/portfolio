import classNames from "classnames";
import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const shouldShow = (props) => {
  if (props.scrolled) {
    if (props.showOnScroll) return true;
    if (props.hideOnScroll) return false;
  }
  if (props.showOnScroll) return false;
  return true;
};

const LogoLetter = styled.span`
  transition: opacity 250ms ease-out, margin 250ms ease-in-out;
  ${(props) => {
    if (shouldShow(props)) {
      return css`
        opacity: 1;
      `;
    }
    return css`
      opacity: 0;
      margin-right: ${props.marginOnHide || "-.5em"};
    `;
  }};
`;

const Logo = ({ isScrolled }) => (
  <Link
    to="/"
    className={classNames(
      "text-primary-900 focusable inline-block p-2 font-serif text-xl xl:text-2xl"
    )}
    aria-label="Home"
  >
    <div className="flex items-center h-8">
      <img
        className={classNames("w-8 h-8 border-2 border-current rounded-full", {
          hidden: isScrolled,
        })}
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGJ-pyDnGfUiA/profile-displayphoto-shrink_400_400/0?e=1599091200&v=beta&t=RrHVkQIXD1kOg1Vsz6fQTDWZUf86Kop86JryDtT_P2c"
        alt="An image of me, Brian Lee!"
      />
      <div
        className={classNames({
          lowercase: isScrolled,
          "ml-2": isScrolled,
        })}
      >
        <LogoLetter scrolled={isScrolled} showOnScroll>
          &lt;e
        </LogoLetter>
        B
        <LogoLetter scrolled={isScrolled} hideOnScroll marginOnHide="-2.1em">
          rian&nbsp;
        </LogoLetter>
        L
        <LogoLetter scrolled={isScrolled} hideOnScroll marginOnHide="-1.2em">
          ee
        </LogoLetter>
        <LogoLetter scrolled={isScrolled} showOnScroll>
          &nbsp;/&gt;
        </LogoLetter>
      </div>
    </div>
  </Link>
);

Logo.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default Logo;
