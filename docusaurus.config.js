// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jason Torres\'s Portfolio',
  tagline: 'Seasoned Level Designer & VFX artist',
  favicon: 'img/favicon.ico',
  url: 'https://jaceportfolio-site.com',
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JaceCascade', // Usually your GitHub org/user name.
  projectName: 'JacePortfolio', // Usually your repo name.
  onBrokenLinks: 'throw',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: {
                routeBasePath: '/',
                sidebarPath: require.resolve('./sidebars.js'),
            },
            blog: {
                showReadingTime: true,
            },
            theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
        }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      navbar: {
          title: 'Jason Torres\'s Portfolio',
          logo: {
              alt: 'JacePortfolio Logo',
              src: 'img/logo.svg',
              href: '/',
          },
          items: [{
                  to: '/',
                  docId: 'intro',
                  position: 'left',
                  label: 'Portfolio',
              },
              { to: '/resume', label: 'Resume', position: 'left' },
              { to: '/contact_me', label: 'Contact Me', position: 'left' },
              { to: '/about_me', label: 'About Me', position: 'left' },
              {
                  href: 'https://github.com/JaceDaDorito',
                  label: 'My GitHub',
                  position: 'right',
              },
          ],
      },
      /*footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },*/
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
