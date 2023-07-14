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
        '/idroidos/',
        '/webnet/',
        '/docker/',
      ],},{
      text: '离', children: [
        '/visualstudiocode/',
        '/aria2/',
        '/minecraft/',
        '/steam/',
        '/wallpaperengine/',
      ],},{
      text: '震', children: [
        '/winapp/',
        '/winissus/',
        '/winenv/',
      ],},{
      text: '巽', children: [
        '/archissus/',
        '/archinstall/',
      ],},{
      text: '坎', children: [
        '/link/',
      ],},{
      text: '艮', children: [
        '/own/',
      ],},],
    lastUpdated: false,
    contributors: false,
    navbar: [{ text: '说书人叹天下旧事如潮，听书人悲欢不过一壶新茶', link: '.', activeMatch: '^/own/'},],
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
