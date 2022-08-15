import { defineUserConfig } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
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
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    navbar: false,
    sidebar: [
      {
        text: "首页",
        children: ["/"],
      },
      {
        text: "奇怪的工具",
        children: [
          "/app/aria2.md",
          "/app/code.md",
        ],
      },
      {
        text: "Arch Linux",
        children: [
          "/sys/arch.md",
          "/sys/arch-linux.md",
          "/sys/arch_apps.md",
        ],
      },
      {
        text: "Windows 10",
        children: [
          "/sys/win.md",
          "/sys/win_apps.md",
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
        children: ["/end.md"],
      }
    ]
  })
})
