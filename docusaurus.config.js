// @ts-check
// docusaurus.config.js — Main configuration for Engineering Notebook

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// ──────────────────────────────────────────────────────────────────────────────
// CHANGE THESE VALUES before deploying
// ──────────────────────────────────────────────────────────────────────────────
const GITHUB_USERNAME = 'Hasnain-3764';           // ← your GitHub username
const REPO_NAME       = 'engineering-notebook';   // ← your repo name
const SITE_TITLE      = "Mohd. Hasnain's Engineering Notebook";
const TAGLINE         = 'Study notes, learning logs, and working ideas.';
const YOUR_NAME       = 'Mohd. Hasnain';
const BASE_URL        = `/${REPO_NAME}/`;
// ──────────────────────────────────────────────────────────────────────────────

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:   SITE_TITLE,
  tagline: TAGLINE,
  favicon: 'img/logo.svg',

  // GitHub Pages URL
  url:     `https://${GITHUB_USERNAME}.github.io`,
  baseUrl: BASE_URL,

  organizationName: GITHUB_USERNAME,
  projectName:      REPO_NAME,
  trailingSlash:    false,

  onBrokenLinks:         'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales:       ['en'],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // Enable Mermaid diagrams globally
  // ────────────────────────────────────────────────────────────────────────────
  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // KaTeX stylesheet (loaded globally so math renders in docs + blog)
  // ────────────────────────────────────────────────────────────────────────────
  stylesheets: [
    {
      href:        'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type:        'text/css',
      crossorigin: 'anonymous',
    },
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // Presets
  // ────────────────────────────────────────────────────────────────────────────
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath:          './sidebars.js',
          editUrl:              `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/tree/main/`,
          remarkPlugins:        [remarkMath],
          rehypePlugins:        [rehypeKatex],
          showLastUpdateAuthor: true,
          showLastUpdateTime:   true,
          // "Docs-only" mode would hide the home page; keep false for hybrid layout
          routeBasePath:        'docs',
        },

        blog: {
          authorsMapPath:      'authors.yml',
          showReadingTime:    true,
          editUrl:            `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/tree/main/`,
          remarkPlugins:      [remarkMath],
          rehypePlugins:      [rehypeKatex],
          blogTitle:          'Learning Log',
          blogDescription:    'Short notes, progress logs, and working thoughts from Mohd. Hasnain.',
          postsPerPage:       10,
          blogSidebarCount:   'ALL',
          blogSidebarTitle:   'All Entries',
          routeBasePath:      'blog',
          feedOptions: {
            type:        'all',
            title:       `${SITE_TITLE} – Learning Log`,
            description: `RSS feed for ${SITE_TITLE}`,
            copyright:   `Copyright © ${new Date().getFullYear()} ${YOUR_NAME}`,
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },

        sitemap: {
          lastmod:      'date',
          changefreq:   'weekly',
          priority:     0.5,
          ignorePatterns: ['/tags/**'],
          filename:     'sitemap.xml',
        },
      }),
    ],
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // Theme configuration
  // ────────────────────────────────────────────────────────────────────────────
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // ── Colour mode ────────────────────────────────────────────────────────
      colorMode: {
        defaultMode:                'dark',
        disableSwitch:              false,
        respectPrefersColorScheme:  true,
      },

      // ── Announcement bar (optional — comment out if unwanted) ──────────────
      announcementBar: {
        id:              'welcome',
        content:         "Mohd. Hasnain's personal engineering notebook",
        backgroundColor: '#1a1f2e',
        textColor:       '#7aa2f7',
        isCloseable:     true,
      },

      // ── Navbar ─────────────────────────────────────────────────────────────
      navbar: {
        title: SITE_TITLE,
        logo: {
          alt: `${SITE_TITLE} logo`,
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          // Docs / Notes
          {
            type:      'docSidebar',
            sidebarId: 'notesSidebar',
            position:  'left',
            label:     '📚 Notes',
          },
          // Blog / Learning Log
          { to: '/blog', label: '📝 Learning Log', position: 'left' },

          // Right side
          {
            href:     `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
          },
        ],
      },

      // ── Footer ─────────────────────────────────────────────────────────────
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Knowledge Base',
            items: [
              { label: 'Mathematics',        to: '/docs/mathematics/intro' },
              { label: 'Operating Systems',  to: '/docs/operating-systems/intro' },
              { label: 'Machine Learning',   to: '/docs/machine-learning/intro' },
              { label: 'Java',               to: '/docs/java/intro' },
              { label: 'Systems Programming',to: '/docs/systems-programming/intro' },
              { label: 'Linux',              to: '/docs/linux/intro' },
            ],
          },
          {
            title: 'Connect',
            items: [
              { label: 'GitHub', href: `https://github.com/${GITHUB_USERNAME}` },
            ],
          },
          {
            title: 'Site',
            items: [
              { label: 'Learning Log', to: '/blog' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ${YOUR_NAME} · Built with Docusaurus · Hosted on GitHub Pages`,
      },

      // ── Code highlighting ───────────────────────────────────────────────────
      prism: {
        theme:               prismThemes.github,
        darkTheme:           prismThemes.vsDark,
        defaultLanguage:     'bash',
        additionalLanguages: [
          'java', 'c', 'cpp', 'rust', 'go', 'python',
          'bash', 'yaml', 'json', 'toml', 'makefile',
          'latex', 'diff', 'git',
        ],
      },

      // ── Docs sidebar options ────────────────────────────────────────────────
      docs: {
        sidebar: {
          hideable:              true,
          autoCollapseCategories: true,
        },
      },

      // ── Mermaid diagram theme ───────────────────────────────────────────────
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
        options: {
          maxTextSize: 5000,
        },
      },

      // ── Meta tags for SEO ───────────────────────────────────────────────────
        metadata: [
        { name: 'keywords', content: 'Mohd. Hasnain, engineering notebook, cs notes, machine learning, operating systems, mathematics, java, systems programming, linux' },
        { name: 'og:type', content: 'website' },
      ],
    }),
};

export default config;
