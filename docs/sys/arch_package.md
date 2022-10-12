# 软件包

<br>

## 概述

Arch Linux 中的软件包是通过 makepkg 工具以及存储在 PKGBUILD 文件中的信息编译的。运行 `makepkg` 时，系统将自动在当前目录下搜索 PKGBUILD 文件，然后根据 PKGBUILD 把软件源码重新打包。成功编译后得到的二进制文件，以及可以得到的其他信息如包的版本信息和依赖关系等，都将被打包到 name.pkg.tar.zst 文件里，可以通过 `pacman -U <package file>` 进行安装

一个 Arch 软件包仅仅是一个使用 zstd 压缩的 tar 压缩包，或者叫 tarball。它包含了以下由 makepkg 生成的文件

* 要安装的二进制文件
* `.PKGINFO`：包含所有 pacman 处理软件包的元数据，依赖等等
* `.BUILDINFO`：包含了可复现编译所需要的信息，仅存在于 pacman 5.1 及之后编译的软件包中，更多请参阅 [BUILDINFO](https://man.archlinux.org/man/BUILDINFO.5)
* `.MTREE`：包含了文件的哈希值与时间戳. pacman 能够根据这些储存在本地数据库的信息校验软件包的完整性
* `.INSTALL`：可选的文件，可以用来在安装/升级/删除操作之后运行命令（ 本文件只有在 PKGBUILD 中制定才会存在 ）
* `.Changelog`：一个可选的文件，保存了包管理员描述软件更新的日志（ 不是所有包中都存在 ）

## PKGBUILD

PKGBUILD 是一个 shell 脚本，包含 Arch Linux 在构建软件包时需要的信息。`pkgname`，`pkgver`，`pkgrel`，`arch` 是必须包含的变量，`license` 在构建包时并不强制要求，但若要分享 PKGBUILD 文件，推荐加上该变量，否则 makepkg 会产生警告

::: details 简单的示例
```ini
pkgname=test
pkgver=1
pkgrel=1
arch=('x86_64')
package() {
  mkdir -p $pkgdir/usr/bin
  echo 'echo Hello World' > $pkgdir/usr/bin/test
  chmod +x $pkgdir/usr/bin/test
}
```
:::

[ArchWiki_PKGBUILD](https://wiki.archlinux.org/title/PKGBUILD)，[官方 PKGBUILD 示例](https://gitlab.archlinux.org/pacman/pacman/raw/master/proto/PKGBUILD.proto)

## 记录

此处所列出来的包是 __显示安装__ 的应用，也就是用户明确使用 `pacman` 所安装的应用，可以在终端中使用 `pacman -Qqe` 指令进行查看，可使用 `--asdeps` 与 `--asexplicit` 参数更改包的显隐状态

::: tip PS：
左侧表格中的是我个人已安装的软件包，右侧表格中的是仅作记录的软件包，

其中加粗的内容 `base-devel` 和 `fcitx5-im` 是软件包组，它们是一个组合，包含了很多个的软件包。如 `base-devel` 包含了一些基本的编译工具，`fcitx5-im` 包含了 fcitx 输入法的框架
:::

::: details 基础
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| base | 基础系统 |dhcpcd | DHCP 管理 |
| linux | 内核 | linux-lts | 长期支持的内核 |
| linux-firmware | 固件驱动 |||
| __base-devel:__ archlinux-keyring autoconf automake binutils bison fakeroot file findutils flex gawk gcc gettext grep groff gzip libtool m4 make pacman patch pkgconf sed sudo texinfo which | 编译工具包 |||
| vim | 编辑器 |||
| networkmanager | 网络管理 |||
| nm-connection-editor | 高级网络配置 |||
| rp-pppoe | pppoe 拨号 |||
| intel-ucode | intel 微码固件 |||
:::

::: details 开机引导
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
||| grub | 引导 |
||| efibootmgr ||
||| os-prober | 检测 win |
||| refind | 引导 |

PS：建议使用 systemd-boot 引导
:::

::: details AUR
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| archlinuxcn-keyring | CN 源密钥环 |||
| yay | aur 助手 |||
:::

::: details 显卡驱动
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| vulkan-intel | intel 核显驱动 |||
| mesa ||||
| nvidia | nvdia 独显驱动 |||
| nvidia-prime ||||
| nvidia-settings ||||
:::

::: details Shell
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| zsh | shell| zsh-autosuggestions | 自动补全插件 |
||| zsh-syntax-highlighting | 语法高亮插件 |
||| oh-my-zsh-git | 主题框架 |
:::

::: details 字体
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| adobe-source-han-sans-otc-fonts | 思源黑体 | noto-fonts-emoji | emoji 表情 |
| adobe-source-han-serif-otc-fonts | 思源宋体 |||

在安装思源 cjk 全集后，如出现部分文字显示为日文异形字体，可参看 [Arch Linux Localization #修正简体中文显示为异体（日文）字形](https://wiki.archlinux.org/title/Localization_(简体中文)/Simplified_Chinese_(简体中文)#修正简体中文显示为异体（日文）字形) 进行解决。

PS：可以考虑复制 Windows 的系统字体使用
:::

::: details Gnome 桌面环境
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| alacritty | 终端 |||
| gdm | 登陆管理器 |||
| gnome-keyring | 密钥环 |||
| gnome-shell | 基础桌面 |||
| gnome-backgrounds | 壁纸 |||
| gnome-control-center | 设置 |||
| nautilus | 文件管理器 |||
| xdg-user-dirs-gtk | 用户目录 |||
| gnome-system-monitor | 任务管理器 |||
:::

::: details Gnome 高级设置
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| gnome-tweaks | 优化 |||
| gtk-engine-murrine ||||
| gtk-engines ||||
| gnome-shell-extensions | 扩展 |||
:::

::: details Gnome 扩展
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| gnome-shell-extension-appindicator | 应用托盘 | gnome-shell-extension-lunar-calendar | 农历日历 |
| gnome-shell-extension-dash-to-dock | Dock 栏 | gnome-shell-extension-clipboard-indicator | 剪切板 |
:::

::: details 输入法
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| __fcitx5-im:__ fcitx5 fcitx5-configtool fcitx5-gtk fcitx5-qt | 输入法框架 | fcitx5-material-color | 主题 |
| fcitx5-chinese-addons | 中文输入法 |||
:::

::: details 桌面日常工具
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| gedit | 记事本 | cheese | 相机 |
| eog | 照片 | evince | 文档 |
| mpv | 视频 |||
| deadbeef-static | 本地音乐 |||

PS: 源里的 deadbeef 无法播放 mp3，建议前往 [官方下载地址](https://sourceforge.net/projects/deadbeef/files/travis/linux) 下载 pkg.tar.xz 安装
:::

::: details 常用软件
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| microsoft-edge-stable-bin | 浏览器 | watt-toolkit-bin | steam 工具箱 |
| icalingua++ | QQ | dingtalk-bin | 钉钉 |
| flatpak | 通用软件源 | wemeet-bin | 腾讯会议 |
| visual-studio-code-bin | 代码编辑器 | steam | 游戏平台 |
| wps-office | 办公套件 |||
| wps-office-mui-zh-cn ||||
:::

::: details 其他
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| aria2 | 下载器 | feh | 图片查看 |
| v2raya | 代理 | picom | 窗口透明 |
| v2ray || proxychains-ng | 命令行代理 |
| fuse2 | 运行库 | pandoc-bin | 文档格式转换 |
| jdk-openjdk | JAVA环境 | rclone | 云盘挂载 |
| game-devices-udev | steam设备 | ventoy-bin | u 盘引导 |
||| tlp-rdw | 功耗管理 |
||| ldr-translate-gtk | 截图翻译工具 |
||| ntfs-3g | ntfs硬盘挂载 |

PS: 不再建议使用 ntfs-3g，建议使用 linux 5.15 以来的 [ntfs3](https://wiki.archlinux.org/title/NTFS) 内核模块
:::

::: details 虚拟机
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
||| linux-headers | 系统头文件 |
||| vmware-workstation | vmware |
||| virtualbox | virtualbox |
||| virtualbox-host-modules-arch ||
||| gnome-boxes | gnome盒子 |
:::

::: details 手机
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
||| android-tools | android |
:::

::: details 终端工具
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| uwufetch | 系统信息 | neofetch | 系统信息 |
| tree | 目录树 | translate-shell | 终端翻译工具 |
| dust | 内存占用查看 | intel-gpu-tools | intel 核显负载信息 |
| nano | 文本编辑器 | screen | 终端后台分离 |
||| p7zip | 7z 解压缩 |
:::

::: details ASCII 艺术
| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
||| sl | 小火车 |
||| cmatrix | 代码屏幕 |
:::
