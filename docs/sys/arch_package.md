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

[ArchWiki PKGBUILD](https://wiki.archlinux.org/title/PKGBUILD)，[官方 PKGBUILD 示例](https://gitlab.archlinux.org/pacman/pacman/raw/master/proto/PKGBUILD.proto)

## 记录

此处所列出来的包是 __显性安装__ 的应用，也就是用户明确使用 `pacman` 所安装的应用，可以在终端中使用 `pacman -Qqe` 指令进行查看，可使用 `--asdeps` 与 `--asexplicit` 参数更改包的显隐状态

上表格中的是我个人已显性安装的软件包，下表格中的是仅作记录或隐性的软件包

名称|介绍|名称|介绍
-|-|-|-
base|基础系统|linux|内核
archlinux-keyring autoconf automake binutils bison fakeroot file findutils flex gawk gcc gettext grep groff gzip libtool m4 make pacman patch pkgconf sed sudo texinfo which|BASE-DEVEL 编译包组|vim|文本编辑器
networkmanager|网络管理器|nm-connection-editor|网络高级管理器
rp-pppoe|拨号工具|intel-ucode|CPU 微码
linux-firmware|驱动固件|archlinuxcn-keyring|ARCH CN 仓库密钥
yay|AUR 安装器|vulkan-intel|VULKAN 驱动
mesa|OPENGL 库|nvidia|NVIDIA 驱动
nvidia-prime|PRIMUS RUN|nvidia-settings|NVIDIA 设置
zsh|SHELL|adobe-source-han-sans-otc-fonts|思源黑体
adobe-source-han-serif-otc-fonts|思源宋体|alacritty|终端
noto-fonts-emoji|GNOME 桌面包组|gnome-tweaks|GNOME 调整器
gtk-engines|GTK 引擎|gtk-engine-murrine|GTK 引擎
gnome-shell-extension-appindicator|托盘扩展|gnome-shell-extension-dash-to-dock|DOCK 扩展
gnome-shell-extension-just-perfection-desktop|UI 扩展|dust|磁盘占用
fcitx5 fcitx5-configtool fcitx5-gtk fcitx5-qt|FCITX5-IM 输入法包组|fcitx5-rime|FCITX5 RIME 扩展
mpv|视频播放器|deadbeef|音乐播放器
libmad|MP3 解码器|mpg123|MP3 解码器
microsoft-edge-stable-bin|EDGE 浏览器|icalingua++|QQ
flatpak|通用软件包管理器|visual-studio-code-bin|VS CODE
wps-office|WPS|wps-office-mui-zh-cn|WPS 中文语言包
aria2|下载工具|v2ray|代理
v2raya|代理客户端|game-devices-udev|游戏手柄驱动
sigil|EPUB 编辑器|obs-studio|录屏
uwufetch|系统信息|tree|目录树

名称|介绍|名称|介绍
-|-|-|-
dhcpcd|DHCP 客户端|linux-lts|LTS 内核
grub|引导程序|efibootmgr|EFI 管理器
os-prober|GRUB WIN 扩展|refind|引导程序
oh-my-zsh-git|ZSH 框架|zsh-autosuggestions|自动补全插件
zsh-syntax-highlighting|语法高亮插件|fcitx5-chinese-addons|中文扩展
gnome-shell-extension-lunar-calendar|农历日历扩展|gnome-shell-extension-clipboard-indicator|剪贴板扩展
gnome-shell-extension-sound-output-device-chooser|音频输出扩展|gnome-shell-extension-vitals|系统监视器扩展
gnome-shell-extension-runcat|CPU 占用扩展|gnome-shell-extension-openweather|天气扩展
fcitx5-material-color|输入法主题|cheese|摄像头|evince|文档查看器
watt-toolkit-bin|STEAM 工具箱|dingtalk|钉钉
wemeet-bin|腾讯会议|feh|图片查看器
picom|窗口透明渲染器|pandoc-bin|文档转换器
rclone|云盘挂载工具|ventoy-bin|ISO U盘引导
tlp-rdw|电源管理|ldr-translate-gtk|翻译
ntfs-3g|NTFS 驱动|linux-headers|内核头文件
vmware-workstation|VMWARE|virtualbox|VIRTUAL BOX
virtualbox-host-modules-arch|VIRTUAL BOX 扩展|intel-gpu-tools|INTEL 显卡工具
gnome-boxes|虚拟机|android-tools|ADB
neofetch|系统信息|translate-shell|翻译
screen|终端多开|htop|进程管理
p7zip|压缩工具|nano|文本编辑器
fuse2|FUSE2 库|jdk-openjdk|JAVA 库
sl|火车|cmatrix|流动代码屏
cool-retro-term|复古终端|gimp|图像编辑器
