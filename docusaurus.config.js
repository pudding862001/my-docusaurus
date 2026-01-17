// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
import {themes as prismThemes} from 'prism-react-renderer';

// Docusaurus 3+ 建議全部使用 import 語法
import math from 'remark-math';
import katex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "William's Profile",
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, 
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook', 
  projectName: 'docusaurus', 

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // 這是 docs-only 模式的設定
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 確保使用的 CSS 版本與你的需求一致，建議使用較新的 0.16.x 版本以獲得更好的支持
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "William's Profile",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [], 
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;