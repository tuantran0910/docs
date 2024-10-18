import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tran Ngoc Tuan Portfolio',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://tuantrann.work',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tuantran0910', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      }
    ]
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Tntuan\'s Portfolio',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'right',
          label: 'Projects',
        },
        {
          to: 'docs/category/some-interesting-guides',
          label: 'Guides',
          position: 'right',
        },
        {
          href: 'https://github.com/tuantran0910',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://t.me/tntuan0910',
          label: 'Contact',
          position: 'right',
        }
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      disableSwitch: true,
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
