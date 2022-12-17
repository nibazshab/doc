---
sidebarDepth: 2
---

# Arch Linux 安装指南 2

<br>

承接上一篇 [Arch Linux 安装指南 1](/MON/ArchInstall.html)，本篇将介绍 Arch Linux 图形化环境的安装

## 13. 再次连接网络

输入 root 回车，再输入之前为 root 用户设置的密码，进入系统

注：有线网络会自动连接，无线网络需要手动连接

输入 `nmtui` 进入网络管理页面并连接 wifi

## 14. 准备普通用户

输入 `useradd -m -G wheel -s /bin/bash pig` 创建普通用户 `pig`，用户名称可自定义，不要包含空格等特殊字符

输入 `passwd pig`，为用户 `pig` 设置密码

输入 `EDITOR=vim visudo`，找到 `#%wheel ALL=(ALL) ALL` 行，将前面的 `#` 删除，保存并退出

## 15. archlinuxcn 源和 32 位支持

编辑 `/etc/pacman.conf` 文件，找到 `[multilib]` 一节，将这两行前面的 `#` 删除（ 不需要 32 位库可以跳过此步骤 ），并在文件结尾处添加 archlinuxcn 源，在下列源列表中选一个即可

```ini
[archlinuxcn]
Server = https://mirrors.bfsu.edu.cn/archlinuxcn/$arch
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

输入 `pacman -S archlinuxcn-keyring` 安装密钥环，再输入 `pacman -Syyy` 同步

输入 `pacman -S yay` 安装 aur 助手

## 16. 显卡驱动

上一步骤中没有开启 multilib 仓库的，请忽视下列带有 `lib32` 字样的包

### 16.1. intel 核显

输入 `pacman -S vulkan-intel mesa lib32-mesa`

### 16.2. nvidia 独显

输入 `pacman -S nvidia nvidia-prime nvidia-settings lib32-nvidia-utils`

## 17. 中文字体

输入以下指令，安装中文字体

```shell
> pacman -S adobe-source-han-sans-otc-fonts adobe-source-han-serif-otc-fonts
```

创建 `/etc/fonts/conf.d/64-language-selector-prefer.conf` 文件，写入以下内容

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <alias>
    <family>sans-serif</family>
    <prefer>
      <family>Source Han Sans SC</family>
      <family>Source Han Sans TC</family>
      <family>Source Han Sans HW</family>
      <family>Source Han Sans K</family>
    </prefer>
  </alias>
  <alias>
    <family>monospace</family>
    <prefer>
      <family>Source Han Sans SC</family>
      <family>Source Han Sans TC</family>
      <family>Source Han Sans HW</family>
      <family>Source Han Sans K</family>
    </prefer>
  </alias>
</fontconfig>
```

输入 `fc-cache -fv` 刷新字体缓存

## 18. 图形化环境

输入以下指令，安装 Gnome 桌面环境，并删除不需要的包（ 可选 ）

```shell
> pacman -S alactirry mpv gnome
> pacman -Rs gnome-console gnome-music gnome-maps gnome-weather gnome-photos gnome-clocks gnome-calculator gnome-calendar gnome-contacts gnome-software gnome-user-docs gnome-user-share cheese epiphany yelp simple-scan gnome-video-effects file-roller baobab totem evince sushi
> systemctl enable --now gdm.service
```

接着用 [#13. 准备普通用户](#_13-准备普通用户) 创建的 `pig` 账号登陆

## 19. 安装 Gnome 插件

输入如下指令，安装高级设置、插件工具

```shell
> yay -S gnome-tweaks gtk-engine-murrine gtk-engines
```

## 20. 中文输入法

输入 `yay -S fcitx5-im fcitx5-chinese-addons`，安装 fcitx5 输入法框架以及中文输入法

在 `/etc/environment` 文件中添加以下环境变量

```ini
XMODIFIERS=@im=fcitx
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
SDL_IM_MODULE=fcitx
```

输入 `fcitx5-configtool` 打开输入法设置，可以自定义的内容很多，也可使用默认配置
