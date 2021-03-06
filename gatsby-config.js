const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Brian Lee • Software Engineer`,
    description: `Hi! I'm Brian, Software Engineer. Currently working @ Citadel. This is my personal site showcasing my resume, projects, and blog.`,
    author: `@engbrianlee`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        options: {
          emitWarning: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brian Lee • Software Engineer`,
        short_name: `Brian Lee`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.white,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
  ],
};
