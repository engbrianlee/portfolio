import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const Image = ({ imgName, ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.allImageSharp.edges.find(
        (edge) => edge.node.fluid.originalName === imgName
      );
      if (!image) {
        return null;
      }
      return <Img fluid={image.node.fluid} {...props} />;
    }}
  />
);
Image.propTypes = {
  imgName: PropTypes.string.isRequired,
};
export default Image;
