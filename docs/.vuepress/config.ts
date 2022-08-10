import { defineUserConfig } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '_Wiki',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://user-images.githubusercontent.com/44338441/159110560-773788e6-c8f8-4acf-9fbe-57c12f840d00.png'
      }
    ],
  ],
  theme: defaultTheme({
    navbar: false,
    sidebar: [
      {
        text: "首页",
        children: ["/README.md"],
      },
      {
        text: "Windows 10",
        children: [
          "/sys/win.md",
          "/sys/win_apps.md",
        ],
      },
      {
        text: "Arch Linux",
        children: [
          "/sys/linux.md",
          "/sys/arch_apps.md",
        ],
      },
      {
        text: "应用配置",
        children: [
          "/app/aria2.md",
          "/app/code.md",
        ],
      },
      {
        text: "代理",
        children: [
          "/pxy/clash.md",
        ],
      },
      {
        text: "小技巧",
        children: [
          "/tip/steam_wallpaper.md",
          "/tip/cmd.md",
          "/tip/nong.md",
        ],
      },
      {
        text: "最后",
        children: ["/END.md"],
      }
    ]
  })
})
