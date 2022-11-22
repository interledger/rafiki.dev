// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rafiki Documentation",
  tagline: "The Interledger isn't going to build itself!",
  url: "https://rafiki.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/interledger/rafiki.dev/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation",
        logo: {
          alt: `Rafiki Logo`,
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "concepts",
            label: "Concepts",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "integration",
            label: "Integration",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "reference",
            label: "API Reference",
          },
          { to: "/graphql", label: "API Explorer", position: "left" },
          {
            href: "https://github.com/interledger/rafiki.dev",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        logo: {
          alt: "Rafiki Dev Logo",
          src: "img/rafiki.png",
          href: "https://github.com/interledger/rafiki",
          width: 50,
          height: 56,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Interledger Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "docusaurus-graphql-plugin",
      {
        // can be a path, a glob or an URL
        schema:
          "https://raw.githubusercontent.com/interledger/rafiki/main/packages/backend/src/graphql/schema.graphql",
        routeBasePath: "/docs/reference",
      },
    ],
  ],
};

module.exports = config;
