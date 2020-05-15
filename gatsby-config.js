module.exports = {
  siteMetadata: {
    // edit below
    title: `Design & Code`,
    author: `Grace Yang`,
    description: `Grace | Design & Code Portfolio`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `yaycake`,
    },
  },
  plugins: [
    // `gatsby-remark-relative-images`,
   
    `gatsby-plugin-styled-components`,
 
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
   
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-transformer-remark`, 
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`, 
            options: {
              name: 'images'
            }
          },
          
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            },
          }
        ]
      }
    }, 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve:  `gatsby-plugin-netlify-cms`,
      options: {}
    },
   
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Grace | Design & Code`,
        short_name: `Grace`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
