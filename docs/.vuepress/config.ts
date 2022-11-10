import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import { shikiPlugin } from '@vuepress/plugin-shiki';

export default defineUserConfig({
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    navbar: false,
    sidebarDepth: 0,
    sidebar: [
      {
        text: '首页',
        children: ['/'],
      },
      {
        text: '奇怪的工具',
        children: [
          '/app/Aria2.md',
          '/app/VisualStudioCode.md',
          '/app/Minecraft.md',
        ],
      },
      {
        text: 'Arch Linux',
        children: [
          '/sys/ArchInstall.md',
          '/sys/ArchInstallServer.md',
          '/sys/ArchPackage.md',
          '/sys/ArchIssus.md',
        ],
      },
      {
        text: 'Windows 10',
        children: [
          '/sys/Windows.md',
        ],
      },
      {
        text: '热芝士',
        children: [
          '/tip/CMD.md',
          '/tip/Note.md',
        ],
      },
      {
        text: '游戏/软件相关',
        children: [
          '/van/Steam.md',
          '/van/WallpaperEngine.md',
          '/van/Trash.md',
        ],
      },
      {
        text: '最后',
        children: ['/end.md'],
      }
    ]
  }),
  base: '/',
  title: '_Wiki',
  head: [
    [
      'link',{
        rel: 'icon',
        href: 'https://user-images.githubusercontent.com/44338441/159110560-773788e6-c8f8-4acf-9fbe-57c12f840d00.png'
      }
    ]
  ],
  plugins: [
    sitemapPlugin({
      hostname: 'https://www.atri.ml'
    }),
    shikiPlugin({
      theme: 'github-dark'
    })
  ]
})
