# 软件包

<br>

## 概述

Arch Linux 中的软件包是通过 makepkg 工具以及存储在 PKGBUILD 文件中的信息编译的。运行 `makepkg` 时，系统将自动在当前目录下搜索 PKGBUILD 文件,然后根据 PKGBUILD 把软件源码重新打包。成功编译后得到的二进制文件，以及可以得到的其他信息如包的版本信息和依赖关系等，都将被打包到 name.pkg.tar.zst 文件里，可以通过 `pacman -Up <package file>` 进行安装

一个 Arch 软件包仅仅是一个使用 zstd 压缩的 tar 压缩包，或者叫 tarball。它包含了以下由 makepkg 生成的文件

* 要安装的二进制文件
* `.PKGINFO`：包含所有 pacman 处理软件包的元数据，依赖等等
* `.BUILDINFO`：包含可复现编译需要的信息，仅在 pacman 5.1 及之后编译的软件包中。请参阅 [BUILDINFO](https://man.archlinux.org/man/BUILDINFO.5)
* `.MTREE`：包含了文件的哈希值与时间戳. pacman 能够根据这些储存在本地数据库的信息校验软件包的完整性
* `.INSTALL`：可选的文件，可以用来在安装/升级/删除操作之后运行命令（ 本文件只有在 PKGBUILD 中制定才会存在 ）
* `.Changelog`：一个可选的文件，保存了包管理员描述软件更新的日志（ 不是所有包中都存在 ）

## 我的软件包

此处所列出来的包是 __显示安装__ 的应用，也就是用户明确使用 `pacman -S` 所安装的应用，可以在终端中使用 `pacman -Qqe` 指令进行查看

::: tip PS：
左侧表格中的是我个人已安装的软件包，右侧表格中的是仅作记录的软件包，

其中 `base-devel` 和 `fcitx5-im` 是软件包组，它们是一个组合，包含了一些基本的软件包。如 `base-devel` 包含了一些基本的编译工具，`fcitx5-im` 包含了 fcitx 输入法的框架
:::

### 基础

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| base | 基础系统 |||
| linux | 内核 |||
||| linux-lts | 长期支持的内核 |
| linux-firmware | 固件驱动 |||
| base-devel | 编译工具包 |||
| vim, nano | 编辑器 |||
||| dhcpcd | DHCP 管理 |
| networkmanager | 网络管理 |||
| nm-connection-editor | 高级网络配置 |||
| rp-pppoe | pppoe 拨号 |||
| intel-ucode | intel 微码固件 |||

### 开机引导

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
||| grub | 引导 |
||| efibootmgr ||
||| os-prober | 检测 win |
||| refind | 引导 |

PS：建议使用 systemd-boot 引导

### AUR

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| archlinuxcn-keyring | CN 源密钥环 |||
| yay | aur 助手 |||

### 显卡驱动

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| vulkan-intel | intel 核显驱动 |||
| lib32-mesa ||||
| nvidia | nvdia 独显驱动 |||
| lib32-nvidia-utils ||||
| nvidia-settings ||||

### Shell

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| zsh | shell |||
||| zsh-autosuggestions | 自动补全插件 |
||| zsh-syntax-highlighting | 语法高亮插件 |
||| oh-my-zsh-git | 主题框架 |

### 字体

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| adobe-source-han-sans-otc-fonts | 思源黑体 | noto-fonts-emoji | emoji 表情 |
| adobe-source-han-serif-otc-fonts | 思源宋体 |||

在安装思源 cjk 全集后，如出现部分文字显示为日文异形字体，可参看 [Arch Linux Localization #修正简体中文显示为异体（日文）字形](https://wiki.archlinux.org/title/Localization_(简体中文)/Simplified_Chinese_(简体中文)#修正简体中文显示为异体（日文）字形) 进行解决。

PS：可以考虑复制 Windows 的系统字体使用

### Gnome 桌面环境

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
| gnome-screenshot | 截屏 |||

### Gnome 高级设置

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| gnome-tweaks | 优化 |||
| gtk-engine-murrine ||||
| gtk-engines ||||
| gnome-shell-extensions | 扩展 |||

### Gnome 扩展

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| gnome-shell-extension-appindicator | 应用托盘 | gnome-shell-extension-lunar-calendar | 农历日历 |
| gnome-shell-extension-clipboard-indicator | 剪切板 |||
| gnome-shell-extension-dash-to-dock | Dock 栏 |||


### 输入法

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| fcitx5-im | 输入法框架 | fcitx5-material-color | 主题 |
| fcitx5-chinese-addons | 中文输入法 |||

### 桌面日常工具

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| gedit | 记事本 | cheese | 相机 |
| eog | 照片 | evince | 文档 |
| mpv | 视频 |||
| deadbeef-static | 本地音乐 |||

PS: 源里的 deadbeef 无法播放 mp3，建议前往 [官方下载地址](https://sourceforge.net/projects/deadbeef/files/travis/linux) 下载 pkg.tar.xz 安装

### 常用软件

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| microsoft-edge-stable-bin | 浏览器 | watt-toolkit-bin | steam 工具箱 |
| icalingua++ | QQ |||
| steam | 游戏 |||
| visual-studio-code-bin | 代码编辑器 |||
| wps-office | 办公套件 |||
| wps-office-mui-zh-cn ||||
||| dingtalk-bin | 钉钉 |
||| wemeet-bin | 腾讯会议 |

### 其他

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| aria2 | 下载器 | feh | 图片查看 |
| v2raya | 代理 | picom | 窗口透明 |
| v2ray || proxychains-ng | 命令行代理 |
||| pandoc-bin | 文档格式转换 |
||| rclone | 云盘挂载 |
||| ventoy-bin | u 盘引导 |
||| tlp-rdw | 功耗管理 |
||| ldr-translate-gtk | 截图翻译工具 |

### 虚拟机

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
||| linux-headers | 系统头文件 |
||| vmware-workstation | vmware |
||| virtualbox | virtualbox |
||| virtualbox-host-modules-arch ||

### 手机

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
||| android-tools | android |

### 终端工具

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
| neofetch | 系统信息 | p7zip | 7z 解压缩 |
| tree | 目录树 | translate-shell | 终端翻译工具 |
||| intel-gpu-tools | intel 核显负载信息 |

### ASCII 艺术

| 名称 | 介绍 | 名称 | 介绍 |
|-|-|-|-|
||| sl | 小火车 |
||| cmatrix | 代码屏幕 |
