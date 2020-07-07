import classNames from "classnames";
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// eslint-disable-next-line react/prop-types
const Logo = ({ className }) => {
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
        "text-primary-900 hover:text-focusable-900 inline-block p-2 font-serif text-xl xl:text-2xl",
        className
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
        <span className="md:text-xl">Brian Lee</span>
      </div>
    </Link>
  );
};

export default Logo;
