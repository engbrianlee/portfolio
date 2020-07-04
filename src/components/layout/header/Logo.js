import classNames from "classnames";
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "portrait-face-crop.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 32, height: 32, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Link
      to="/"
      className={classNames(
        "text-primary-900 focusable inline-block p-2 font-serif text-xl xl:text-2xl"
      )}
      aria-label="Home"
    >
      <div className="flex items-center h-8 space-x-2">
        {/* <img
          src={profilePicture}
          className={classNames("w-8 h-8 border-2 border-current rounded-full")}
          alt="An image of me, Brian Lee!"
        /> */}
        <Img
          fixed={data.file.childImageSharp.fixed}
          className={classNames("border-2 border-current rounded-full")}
          alt="An image of me, Brian Lee!"
        />
        <span>Brian Lee</span>
      </div>
    </Link>
  );
};

export default Logo;
