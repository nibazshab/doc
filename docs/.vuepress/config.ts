import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { commentPlugin } from 'vuepress-plugin-comment2';
import { componentsPlugin } from "vuepress-plugin-components";
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import { seoPlugin } from 'vuepress-plugin-seo2';
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  theme: defaultTheme({
    sidebar: [{
        text: '乾',children: [
          '/index.md',
          '/chat.md',
        ],},{
        text: '兑',children: [
          '/sun/visualstudiocode.md',
          '/sun/aria2.md',
          '/sun/minecraft.md',
          '/sun/steam.md',
          '/sun/wallpaperengine.md',
          '/sun/kiwixtools.md',
        ],},{
        text: '离',children: [
          '/mon/archissus.md',
          '/mon/archinstall.md',
          '/mon/archinstallpro.md',
          '/mon/archinstallvps.md',
        ],},{
        text: '震',children: [
          '/mon/windowsissus.md',
          '/mon/windowsenv.md',
        ],},{
        text: '巽',children: [
          '/tue/clinote.md',
          '/tue/donotknowhat.md',
        ],},],
    lastUpdated: false,
    contributors: false,
    //navbar: false,
    sidebarDepth: 0,
  }),
  lang: 'zh-CN',
  base: '/',
  title: '_Wiki',
  head: [['link', {rel: 'icon', href: '/favicon.ico',},]],
  alias: {
    '@theme/PageNav.vue': path.resolve(__dirname, './components/PageNav.vue'),
  },
  plugins: [
    shikiPlugin({
      theme: 'github-dark',
    }),
    googleAnalyticsPlugin({
      id: 'G-770W6J0TQD',
    }),
    commentPlugin({
      provider: 'Giscus',
      repo: 'nibazshab/doc',
      repoId: 'MDEwOlJlcG9zaXRvcnkxOTg2NTY0NTU=',
      category: 'Announcements',
      categoryId: 'DIC_kwDOC9dBx84CRUCg',
    }),
    componentsPlugin({
      components: [
        "SiteInfo",
      ],
    }),
    sitemapPlugin({
      hostname: 'https://www.atri.ml',
    }),
    seoPlugin({
      hostname: 'https://www.atri.ml',
    }),
  ],
})
