import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { commentPlugin } from "vuepress-plugin-comment2";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [{
      text: 'HEAD', children: [
        // 'CONTENTS',
      ],
    }, {
      text: 'BODY', children: [
        '/link/',
        '/message/',
      ],
    },],
    navbar: [{ text: '说书人叹天下旧事如潮，听书人悲欢不过一壶新茶', link: '/pro/' },],
    colorMode: 'light',
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,
    themePlugins: {
      externalLinkIcon: false,
    },
  },),
  lang: 'zh-CN',
  base: '/',
  title: 'ATRI Doc',
  description: '世界第一吃货殿下',
  head: [['link', { rel: 'icon', href: '/favicon.ico' },],],
  locales: {},
  alias: {
    '@theme/PageNav.vue': path.resolve(__dirname, './components/PageNav.vue'),
  },
  plugins: [
    shikiPlugin({
      langs: [
        // 'LANGS',
      ],
      themes: {
        light: 'github-light',
        dark:'github-dark-dimmed'
      },
    },),
    commentPlugin({
      provider: "Giscus",
      repo: "nibazshab/doc",
      repoId: "MDEwOlJlcG9zaXRvcnkxOTg2NTY0NTU=",
      category: "General",
      categoryId: "DIC_kwDOC9dBx84CRUCh",
    }),
  ],
},);
