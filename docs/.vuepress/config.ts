import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import { seoPlugin } from 'vuepress-plugin-seo2';
import { commentPlugin } from 'vuepress-plugin-comment2';

const __dirname = getDirname(import.meta.url);

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
          '/SUN/KiwixTools.md',
        ],
      },
      {
        text: 'Arch Linux',
        children: [
          '/MON/LinuxShellCmd.md',
          '/MON/ArchInstall.md',
          '/MON/ArchInstallPro.md',
          '/MON/ArchIssus.md',
          '/MON/ArchInstallVPS.md',
        ],
      },
      {
        text: 'Windows',
        children: [
          '/MON/WindowsNote.md',
          '/MON/WindowsEnv.md',
        ],
      },
      {
        text: '道路施工中',
        children: [
          '/TUE/DonotKnowWhere.md',
          '/TUE/GiscusDiscuss.md',
        ],
      },
    ],
    lastUpdated: false,
    contributors: false,
    navbar: false,
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
    mdEnhancePlugin({
      tabs: true,
    }),
    sitemapPlugin({
      hostname: 'https://www.atri.ml',
    }),
    seoPlugin({
      hostname: 'https://www.atri.ml',
    }),
    commentPlugin({
      provider: 'Giscus',
      repo: 'nibazshab/wiki',
      repoId: 'MDEwOlJlcG9zaXRvcnkxOTg2NTY0NTU=',
      category: 'Announcements',
      categoryId: 'DIC_kwDOC9dBx84CRUCg',
    }),
  ],
})
