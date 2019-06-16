// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: 'https://codeigniter-id.github.io',
  siteName: "Codeigniter Indonesia",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/**/*.md",
        typeName: "Post",
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-142214360-1'
      }
    }
  ],


  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
};
