import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

export default defineUserConfig({
  theme: defaultTheme({
    sidebar: [
      {
        text: '首页',
        children: ['/'],
      },
      {
        text: '奇怪的工具',
        children: [
          '/SUN/Aria2.md',
          '/SUN/VisualStudioCode.md',
          '/SUN/Minecraft.md',
          '/SUN/Steam.md',
          '/SUN/WallpaperEngine.md',
        ],
      },
      {
        text: 'Virtual Private Server',
        children: [
          '/WED/VpsSysteml.md',
        ],
      },
      {
        text: 'Arch Linux',
        children: [
          '/MON/ArchInstall.md',
          '/MON/ArchPackage.md',
          '/MON/ArchIssus.md',
        ],
      },
      {
        text: 'Windows',
        children: [
          '/MON/Windows.md',
        ],
      },
      {
        text: '热芝士',
        children: [
          '/TUE/CMD.md',
          '/TUE/Note.md',
          '/TUE/Trash.md',
        ],
      },
      {
        text: '最后',
        children: ['/end.md'],
      }
    ],
    lastUpdated: false,
    contributors: false,
    navbar: false,
    sidebarDepth: 0
  }),
  base: '/',
  title: '_Wiki',
  head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
  plugins: [
    sitemapPlugin({
      hostname: 'https://www.atri.ml'
    }),
    shikiPlugin({
      theme: 'github-dark'
    }),
    googleAnalyticsPlugin({
      id: 'G-770W6J0TQD'
    })
  ]
})
