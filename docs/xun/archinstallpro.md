---
sidebarDepth: 2
---

# 安装指南 进阶 <Badge text="arch linux" />

<br>

::: warning 声明

本文承接 [安装指南 基础](archinstall.md) 的内容

:::

## 进入系统

使用 root 用户登录，密码是前文中自己设置的密码

## 13. 连接网络

正常情况下，系统会自动连接有线网络，无线网络使用 NetworkManager 连接，输入 `nmtui` 进入网络管理页面进行连接

## 14. 添加普通用户

输入 `useradd -m -G wheel -s /bin/bash atri` 创建普通用户，此处创建为 `atri`，输入 `passwd atri`，为 atri 用户设置密码

输入如下指令为普通用户启用 sudo

```sh
> sed -i 's/# %wheel ALL=(ALL:ALL) ALL/%wheel ALL=(ALL:ALL) ALL/g' /etc/sudoers
```

## 15. 可选步骤

### 15.1. 启用 multilib 软件源

multilib 软件源是为了兼容 32 位程序而存在的，如跳过此步骤，请忽略后文中 32 位程序的内容

输入 `vim /etc/pacman.conf` 编辑 pacman 配置文件，找到 `[multilib]`，将该节的 `#` 删除

### 15.2. 添加 archlinuxcn 软件源

输入 `vim /etc/pacman.conf` 编辑 pacman 配置文件，将 archlinuxcn 软件源配置信息添加到末尾，推荐以下几个源，选一个即可

```ini
[archlinuxcn]
Server = https://mirrors.bfsu.edu.cn/archlinuxcn/$arch
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

输入 `pacman -Syy archlinuxcn-keyring` 同步并安装 archlinuxcn 密钥环

### 15.3. 安装 AUR 助手 yay

如果已添加 archlinuxcn 软件源，输入 `pacman -S yay` 直接安装

如果未添加 archlinuxcn 软件源，如下输入指令编译安装

```sh
> pacman -S git
> cd /tmp
> git clone https://aur.archlinux.org/yay.git
> chown nobody yay && cd yay
> su nobody -s /bin/bash -c 'makepkg -sf'
> pacman -U yay-*.pkg.tar.zst
```

## 16. 显卡驱动

### 16.1. Intel 核显

输入 `pacman -S vulkan-intel mesa` 安装 Intel 核显驱动，输入 `pacman -S lib32-vulkan-intel lib32-mesa` 安装 32 位 Intel 核显驱动

### 16.2. NVIDIA 独显

输入 `pacman -S nvidia nvidia-settings nvidia-prime` 安装 NVIDIA 独显驱动，输入 `pacman -S lib32-nvidia-utils` 安装 32 位 NVIDIA 独显驱动

## 17. 汉文字体

输入以下指令，安装简体中文、日文、韩文、台版繁体中文四种字形的思源黑体和思源宋体

```sh
> pacman -S adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts
> pacman -S adobe-source-han-sans-jp-fonts adobe-source-han-serif-jp-fonts
> pacman -S adobe-source-han-sans-kr-fonts adobe-source-han-serif-kr-fonts
> pacman -S adobe-source-han-sans-tw-fonts adobe-source-han-serif-tw-fonts
```

## 18. 图形桌面环境

输入 `pacman -S gnome` 安装 GNOME 桌面环境，输入 `systemctl enable --now gdm.service` 启动 GNOME 桌面环境，并设为开机自启

在以后的图形化使用中，请以普通用户的身份登录系统
