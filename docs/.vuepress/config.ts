import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import { seoPlugin } from "vuepress-plugin-seo2";

export default defineUserConfig({
  theme: defaultTheme({
    sidebar: [
      {
        text: '首页',
        children: ['/index.md',],
      },
      {
        text: '难以名状的',
        children: [
          '/SUN/Aria2.md',
          '/SUN/VisualStudioCode.md',
          '/SUN/Minecraft.md',
          '/SUN/Steam.md',
          '/SUN/WallpaperEngine.md',
        ],
      },
      {
        text: 'Arch Linux',
        children: [
          '/MON/ArchInstall.md',
          '/MON/ArchInstallPro.md',
          '/MON/ArchIssus.md',
          '/MON/ArchInstallVPS.md',
        ],
      },
      {
        text: 'Windows',
        children: [
          '/MON/WindowsEnv.md',
        ],
      },
      {
        text: '热的芝士饼',
        children: [
          '/TUE/CMD.md',
          '/TUE/Note.md',
          '/TUE/Trash.md',
        ],
      },
    ],
    lastUpdated: false,
    contributors: false,
    navbar: false,
    sidebarDepth: 0,
  }),
  base: '/',
  title: '_Wiki',
  head: [['link', {rel: 'icon', href: '/favicon.ico',},]],
  plugins: [
    shikiPlugin({
      theme: 'github-dark',
    }),
    googleAnalyticsPlugin({
      id: 'G-770W6J0TQD',
    }),
    mdEnhancePlugin({
      tabs: true,
    }),
    sitemapPlugin({
      hostname: 'https://www.atri.ml',
    }),
    seoPlugin({
      hostname: 'https://www.atri.ml',
    }),
  ],
})
