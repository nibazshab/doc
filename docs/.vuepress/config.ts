import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  theme: defaultTheme({
    sidebar: [{
      text: '乾', children: [
        '/index.md',
      ],},{
      text: '兑', children: [
        '/dui/visualstudiocode.md',
        '/dui/aria2.md',
        '/dui/minecraft.md',
        '/dui/steam.md',
        '/dui/wallpaperengine.md',
      ],},{
      text: '离', children: [
        '/li/worldwideweb.md',
        '/li/clinote.md',
      ],},{
      text: '震', children: [
        '/zhen/windowsissus.md',
        '/zhen/windowsenv.md',
        '/zhen/windowsapp.md',
      ],},{
      text: '巽', children: [
        '/xun/archissus.md',
        '/xun/archinstall.md',
        '/xun/archinstallpro.md',
      ],},{
      text: '坎', children: [
        '/kan/donotknowhat.md',
      ],},{
      text: '艮', children: [
        '/note.md',
      ],},],
    lastUpdated: false,
    contributors: false,
    navbar: [],
    sidebarDepth: 0,
  }),
  lang: 'en-US',
  base: '/',
  title: 'ATRI Doc',
  head: [['link', { rel: 'icon', href: '/favicon.ico', },]],
  alias: {
    '@theme/PageNav.vue': path.resolve(__dirname, './components/PageNav.vue'),
  },
  plugins: [
    shikiPlugin({
      theme: 'github-dark',
    }),
    mdEnhancePlugin({
      card: true,
    }),
  ],
})
