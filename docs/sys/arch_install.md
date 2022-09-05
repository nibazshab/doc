# 安装步骤记录

<br>

:::warning 声明
本文的内容是从一个空的硬盘上安装 Arch Linux 系统，如果已经在硬盘上安装了其他操作系统，请自行判断哪些步骤不需要进行

如有需要请参考 [官方安装指南](https://wiki.archlinux.org/title/Installation_guide_(简体中文))
:::

## 准备阶段

以下几个步骤直接略过，不多做描述

* 下载系统 iso 镜像
* 制作启动 u 盘
* 确认 uefi 启动方式
* 从 u 盘进入系统

## 1. 关闭 reflcetor 服务

安装镜像中默认开启的 reflector 服务会自动更新 pacman 软件源，或许它是个很好用的工具，但因为一些特殊的网络原因，它并不能带来更好的体验

```shell
> systemctl stop reflector.service
```

## 2. 连接网络

### 2.1. 无线网络

无线网络使用 iwctl 来进行连接，首先进入 iwd 模式，然后查看网卡的名称，输入如下指令

```shell
> iwctl
> device list
```

这里假设网卡的名称是 wlan0，继续输入如下指令

```shell
> station wlan0 scan
> station wlan0 get-networks
```

这里可以看到扫描出来的所有的无线网络，中文名称的网络无法正常显示和连接，请连接一个英文名称的网络

```shell
> station wlan0 connect <网络名称>
```

接着输入密码，密码回显为 * 星号，输入完成后按下回车键，随后输入 `exit` 命令退出 iwd 模式

### 2.2. 有线网络

正常情况下，系统会自动连接网络

### 2.3 测试网络连接

输入如下指令，如正常返回数据信息，则连接成功

```shell
> ping -c 5 www.baidu.com
```

## 3. 确定系统时间

在 linux 系统中，准确的时间是很关键的，它决定了一些程序能否正常运行

```shell
> timedatectl set-ntp true
```

输入 `timedatectl` 命令，检查时间是否正确

## 4. 设置国内 pacman 源

输入 `vim /etc/pacman.d/mirrorlist` 编辑 pacman 源列表，将中国的源添加到最前面，推荐以下几个源，选一个即可

```ini
Server = https://mirrors.bfsu.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
```

输入 `pacman -Syyy` 同步源

## 5. 硬盘分区与格式化

### 5.1. 分区

输入 lsblk 查看硬盘信息，得到以下信息

```ini
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 953.9G  0 disk
```

PS：如果是 sata 硬盘，则显示 `sda`，nvme 硬盘则显示 `nvme0n1`

输入 `cfdisk /dev/nvme0n1` 进行分区，分区页面是很简单的英文，通过 ↑，↓，←，→ 移动光标，回车键确认

分一个 300m 的分区，设为 `EFI System` 类型，再分一个 linux 系统分区，设为 `Linux filesystem` 类型，剩下的空间全部分给 linux 系统分区，选择 `[Write]` 写入，随后退出

PS：可以考虑保留一些空间供 windows 系统使用

再次输入 `lsblk` 查看硬盘信息，得到以下信息

```ini
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 953.9G  0 disk
├─nvme0n1p1 259:1    0   300M  0 part
└─nvme0n1p2 259:2    0 697.6G  0 part
```

### 5.2. 格式化

输入 `mkfs.vfat -F32 /dev/nvme0n1p1` 格式化 efi 分区

> * `-F32` 指定分区格式化为 fat32 格式

输入 `mkfs.btrfs /dev/nvm0n1p2` 格式化 linux 系统分区为 [btrfs 文件系统](https://zh.wikipedia.org/wiki/Btrfs)

将 btrfs 分区挂载到 `/mnt` 目录，`mount -t btrfs -o compress=zstd /dev/nvme0n1p2 /mnt`

> * `-t` 指定挂载类型
> * `-o compress=zstd` 指定挂载参数，并开启 btrfs 透明压缩

创建 3 个 btrfs 子卷，输入如下指令

```shell
> btrfs subvolume create /mnt/@
> btrfs subvolume create /mnt/@home
> btrfs subvolume create /mnt/@swap
```

取消 `/mnt` 的挂载，输入 `umount /mnt`

## 6. 挂载

首先挂载根目录

```shell
> mount -t btrfs -o subvol=/@,compress=zstd /dev/nvme0n1p2 /mnt
```

输入 `mkdir -p /mnt/home /mnt/swap /mnt/boot` 创建相关目录

继续挂载

```shell
> mount -t btrfs -o subvol=/@home,compress=zstd /dev/nvme0n1p2 /mnt/home
> mount -t btrfs -o subvol=/@swap /dev/nvme0n1p2 /mnt/swap
> mount /dev/nvme0n1p1 /mnt/boot
```

## 7. 安装基本系统

::: tip 提示
从此处开始，如有不清楚软件包的作用的，可以查看另一篇文章：[软件包](/sys/arch_apps.md)
:::

输入 `pacstrap /mnt base base-devel linux linux-firmware` 安装基础软件包

此处如果有报错，请尝试输入 `pacman -Syyy` 和 `pacman -S archlinux-keyring`，然后再次安装基础软件包

输入 `genfstab -U /mnt >> /mnt/etc/fstab` 生成 fstab 文件

## 8. 配置系统

进入刚刚安装的系统，`arch-chroot /mnt`

安装几个需要的软件包，`pacman -S networkmanager vim`

### 8.1. 创建 swapflie

```shell
> chattr +C /swap
> truncate -s 0 /swap/swapfile
> chattr +C /swap/swapfile
> fallocate -l 2G /swap/swapfile
> chmod 0600 /swap/swapfile
> mkswap /swap/swapfile
> swapon /swap/swapfile
```

### 8.2. 修改 fstab

输入 `echo /swapfile none swap defaults 0 0 >> /etc/fstab` 将 swapfile 添加到 fstab 文件中

输入 `vim /etc/fstab`，将所有行的 `subvolid=xxx` 删除，并检查 `/@swap` 是否带有 `compress=zstd:3` 参数，如有请将它删除，最终该文件应大致如下所示

```ini
# /dev/nvme0n1p1
UUID=0591-3783				      	/boot     	vfat      	rw,relatime,fmask=0022,dmask=0022,codepage=437,iocharset=ascii,shortname=mixed,utf8,errors=remount-ro	0 2

# /dev/nvme0n1p2
UUID=979aa7ec-8842-4e22-8bfc-4c8aed3de56d	/         	btrfs     	rw,relatime,compress=zstd:3,ssd,space_cache=v2,subvol=/@	0 0

# /dev/nvme0n1p2
UUID=979aa7ec-8842-4e22-8bfc-4c8aed3de56d	/home     	btrfs     	rw,relatime,compress=zstd:3,ssd,space_cache=v2,subvol=/@home	0 0

# /dev/nvme0n1p2
UUID=979aa7ec-8842-4e22-8bfc-4c8aed3de56d	/swap     	btrfs     	rw,relatime,ssd,space_cache=v2,subvol=/@swap	0 0

/swap/swapfile      				none      	swap      	defaults  	0 0
```

### 8.3. 校准时间

输入 `ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime` 将时区设置为上海时区
输入 `hwclock --systohc` 校准硬件时间

::: tip PS：
如果电脑上有 windows 系统，则可能会导致时间不准确，将 windows 时间设置为 CST 时间即可解决
:::

### 8.4. 设置 locale 和 主机名

输入 `vim /etc/locale.gen`，找到 `en_US.UTF-8 UTF-8` 和 `zh_CN.UTF-8 UTF-8`，将前面的 # 井号删除，保存并退出

输入 `locale-gen`，生成 locale

输入 `echo LANG=en_US.UTF-8 > /etc/locale.conf` 将系统语言设置为英语（ 此处 __暂时__ 不要设为中文，会导致 tty 乱码影响正常使用，后续配置好图形页面后可设为中文 ）

输入 `echo macos > /etc/hostname` 设置想为主机取的主机名，不要包含空格等特殊字符，此处设为 macos

在 `/etc/hosts` 文件中添加主机名和本机地址，如下所示

```ini
127.0.0.1    localhost
::1          localhost
127.0.1.1    macos.localdomain    macos
```

### 8.5. 为 root 用户添加密码

输入 `passwd`，随后输入想为 root 用户设置的密码，密码无回显，正常输入回车即可

### 8.6. 安装微码文件

使用 intel cpu 的用户输入 `pacman -S intel-ucode`，使用 amd cpu 的用户输入 `pacman -S amd-ucode`

### 8.7. systemd-boot 引导

使用 bootctl 将 systemd-boot 安装到 `/boot` 目录

```shell
> bootctl --path=/boot install
```

创建 `/etc/pacman.d/hooks/100-systemd-boot.hook` 文件并写入如下内容，以实现随着 systemd-boot 的升级而更新引导管理器

```ini
[Trigger]
Type = Package
Operation = Upgrade
Target = systemd
[Action]
Description = Updating systemd-boot
When = PostTransaction
Exec = /usr/bin/bootctl update
```

编辑 `/boot/loader/loader.conf` 文件，写入如下内容

```ini
timeout 10
console-mode max
editor no
```

> * `timeout` 等待时间，单位为秒
> * `console-mode` 控制台界面大小
> * `editor` 是否启用内核参数编辑器

输入 `blkid -s PARTUUID -o value /dev/nvme0n1p2` 查看系统分区的 UUID

创建 `/boot/loader/entries/arch.conf` 文件并写入相关内容，添加以 btrfs 子卷作为根分区的引导项，最终应大致如下所示

```ini
title          Arch Linux
linux          /vmlinuz-linux
initrd         /initramfs-linux.img
options        root=PARTUUID=b4e38594-773b-a845-98f6-3a72a08db6d9 rw rootflags=subvol=/@
```

::: tip PS：
bootctl 会为 __Windows Boot Manager__（ `\EFI\Microsoft\Boot\Bootmgfw.efi` ），__EFI Shell__（ `\shellx64.efi` ）和 __EFI Default Loader__（ `\EFI\Boot\bootx64.efi` ）增加启动选项

bootctl 会在 `/boot/loader/entries/*.conf` 搜索启动选项，一个文件中只能包含一个启动选项
:::

## 9. 重启

输入以下指令，退回安装镜像环境，取消挂载，重启到刚刚安装好的系统，重启的时候请拔掉 u 盘，以免再次进入安装环境

```shell
> exit
> umount -R /mnt
> reboot
```

## 10. 再次连接网络

输入 root 回车，再输入之前为 root 用户设置的密码，进入系统

```shell
> systemctl enable --now NetworkManager.servic
```

PS：有线网络会自动连接，无线网络需要手动连接

输入 `nmtui` 进入网络管理页面并连接 wifi

## 11. 准备普通用户

输入 `useradd -m -G wheel -s /bin/bash pig` 创建普通用户 `pig`，用户名称可自定义，不要包含空格等特殊字符

输入 `passwd pig`，为用户 `pig` 设置密码

输入 `EDITOR=vim visudo`，找到 `#%wheel ALL=(ALL) ALL` 行，将前面的 # 井号删除，保存并退出

## 12. archlinuxcn 源和 32 位支持

编辑 `/etc/pacman.conf` 文件，找到 `[multilib]` 一节，将这两行前面的 # 井号删除，并在文件结尾处添加 archlinuxcn 源，同样选一个即可

```ini
[archlinuxcn]
Server = https://mirrors.bfsu.edu.cn/archlinuxcn/$arch
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

输入 `pacman -S archlinuxcn-keyring` 安装密钥环，再输入 `pacman -Syyy` 同步

输入 `pacman -S yay` 安装 aur 助手

## 13. 显卡驱动

### 13.1. intel 核显

输入 `pacman -S vulkan-intel lib32-mesa`

### 13.2. nvidia 独显

输入 `pacman -S nvidia lib32-nvidia-utils nvidia-settings`

## 14. 中文字体

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

## 15. 图形化环境

输入以下指令，安装 Gnome 桌面环境

```shell
> pacman -S alactirry gdm gnome-keyring gnome-shell gnome-backgrounds gnome-control-center nautilus xdg-user-dirs-gtk gnome-system-monitor gnome-screenshot
> systemctl enable --now gdm.service
```

接着用 [步骤11](#_11-准备普通用户) 创建的 `pig` 普通账号登陆

### 15.1 挂起后无法唤醒

使用 intel cpu 并为触摸板加载了 intel_lpss_pci 模块的电脑，在休眠/睡眠后可能会出现黑屏、无法唤醒的情况，可以正常唤醒的用户请略过此步骤

编辑 `/etc/mkinitcpio.conf` 文件，将 `intel_lpss_pci` 添加到 `MODULES=()` 里，使用 `sudo mkinitcpio -P` 命令重新生成内核即可修复无法唤醒的问题


## 16. 常用软件及扩展

输入 `yay -S gedit eog mpv`，安装记事本、图片查看器、视频播放器

输入如下指令，安装高级设置、插件工具

```shell
> yay -S gnome-tweaks gtk-engine-murrine gtk-engines gnome-shell-extensions
```

## 17. 中文输入法

输入 `yay -S fcitx5-im fcitx5-chinese-addons`，安装中文输入法

在 `/etc/environment` 文件中添加以下内容

```ini
GTK_IM_MODULE=fcitx5
QT_IM_MODULE=fcitx5
XMODIFIERS=@im=fcitx5
```

输入 `fcitx5-configtool` 打开输入法设置，可以自定义的内容很多，也可使用默认配置
