import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  theme: defaultTheme({
    sidebar: [{
      text: '乾', children: [
        '/',
      ],},{
      text: '兑', children: [
        '/visualstudiocode/',
        '/aria2/',
        '/minecraft/',
        '/steam/',
        '/wallpaperengine/',
      ],},{
      text: '离', children: [
        '/worldwideweb/',
        '/cliscript/',
      ],},{
      text: '震', children: [
        '/winissus/',
        '/winenv/',
        '/winapp/',
      ],},{
      text: '巽', children: [
        '/archissus/',
        '/archinstall/',
        '/archinstallpro/',
      ],},{
      text: '坎', children: [
        '/donotknowhat/',
      ],},{
      text: '艮', children: [
        '/note/',
      ],},],
    lastUpdated: false,
    contributors: false,
    navbar: [{ text: 'SHU', link: 'https://shu.lblb.eu.org'},{ text: 'INFO', link: 'https://info.lblb.eu.org'},],
    sidebarDepth: 0,
    themePlugins:{
      externalLinkIcon: false,
    },
  }),
  lang: 'en-US',
  base: '/',
  title: 'ATRI Doc',
  head: [['link', { rel: 'icon', href: '/favicon.ico'},]],
  alias: {
    '@theme/PageNav.vue': path.resolve(__dirname, './components/PageNav.vue'),
  },
  plugins: [
    shikiPlugin({
      theme: 'nord',
    }),
    mdEnhancePlugin({
      card: true,
    }),
  ],
})
