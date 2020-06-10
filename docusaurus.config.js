/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Code Depot',
  tagline: 'Personal Code Storage Space for Flawless coding Experience & References',
  url: 'https://codeDepot.netlify.com',
  baseUrl: '/',
  favicon: 'img/net.ico',
  organizationName: 'Amarjit Pheiroijam', // Usually your GitHub org/user name.
  projectName: 'Code depot', // Usually your repo name.

  themeConfig: {
    navbar: {
      title: 'Code Depot',
      logo: {
        alt: 'Amarjit Pheiroijam',
        src: 'img/Amarjit.svg',
      },
      links: [
        {
          to: 'docs/css1',
          activeBasePath: 'docs',
          label: 'Documentations',
          position: 'left',
        },
        // { to: 'blog', label: 'Articles', position: 'left' },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/Amarjit-ph',
          label: 'Github',
          position: 'left',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amarjit Pheiroijam`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
