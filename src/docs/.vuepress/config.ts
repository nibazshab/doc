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
        '/donotknowhat/',
        '/cliscript/',
        '/gistslist/',
      ],},{
      text: '离', children: [
        '/network/',
        '/docker/',
      ],},{
      text: '震', children: [
        '/visualstudiocode/',
        '/aria2/',
        '/minecraft/',
        '/steam/',
        '/wallpaperengine/',
      ],},{
      text: '巽', children: [
        '/winapp/',
        '/winissus/',
        '/winenv/',
      ],},{
      text: '坎', children: [
        '/archissus/',
        '/archinstall/',
        '/archinstallpro/',
      ],},{
      text: '艮', children: [
        '/link/',
        ],},{
      text: '坤', children: [
        '/own/',
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
