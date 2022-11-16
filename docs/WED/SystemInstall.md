# 腾讯云安装 Arch Linux 系统

<br>

腾讯云服务器并不能直接安装 Arch Linux，但由于腾讯云提供 VNC 服务，因此可以通过 Grub 引导 Arch Linux ISO 镜像来安装 Arch Linux 系统

参考 [官方替换指南](https://wiki.archlinux.org/title/Install_Arch_Linux_from_existing_Linux)

## 1. 下载 ISO 镜像文件

鉴于腾讯软件源里的 Arch 镜像许久未曾更新，这里从网易镜像站下载镜像文件，直接用服务器下载，免去了下载到本地再上传的麻烦

```shell
> wget -O /arch.iso http://mirrors.163.com/archlinux/iso/latest/archlinux-x86_64.iso
```

## 2. 修改 Grub 引导项

```shell
> vim /boot/grub/grub.cfg
```

在 `### END /etc/grub.d/10_linux ###` 下面添加一个新的启动项，内容如下

```ini
menuentry 'Arch LiveCD' {
    set isofile=/arch.iso
    set imgdevpath=/dev/vda1
    loopback lo0 $isofile
    linux (lo0)/arch/boot/x86_64/vmlinuz-linux img_dev=$imgdevpath img_loop=$isofile
    initrd (lo0)/arch/boot/x86_64/initramfs-linux.img
}
```

## 3. 重启并启动 Arch LiveCD

打开腾讯云控制台，然后选择 VNC 登录，输入 `reboot` 重启，在引导界面选择刚才添加的 Arch LiveCD 启动项，进入 Arch LiveCD 系统

## 4. 使用 SSH 连接服务器

在本地使用 SSH 连接服务器，连接成功后，即可关闭 VNC 连接

```shell
# 设置密码
> passwd

# 连接服务器
> ssh root@<ip>
```

## 5. 关闭 reflcetor

```shell
> systemctl stop reflector
```

## 6. 硬盘

```shell
# 格式化硬盘
> mkfs.ext4 /dev/vda1

# 挂载硬盘到 /mnt 目录
> mount /dev/vda1 /mnt
```

## 7. 安装 Arch Linux

```shell
# 配置腾讯内网软件源
> echo 'Server = http://mirrors.tencentyun.com/archlinux/$repo/os/$arch' > /etc/pacman.d/mirrorlist

# 安装基本系统
> pacstrap /mnt base linux-lts

# 生成 fstab 文件
> genfstab -U /mnt >> /mnt/etc/fstab

# 进入新系统
> arch-chroot /mnt

# 安装基本软件
> pacman -S openssh nano grub intel-ucode

# 设置时区
> ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 同步时间
> hwclock --systohc

# 设置本地化语言
> echo 'zh_CN.UTF-8 UTF-8' >> /etc/locale.gen

# 生成 locale
> locale-gen

# 设置系统语言
> echo 'LANG=C.UTF-8' > /etc/locale.conf

# 设置主机名
> echo 'osx' > /etc/hostname

# 配置 hosts
> echo '127.0.0.1 localhost' >> /etc/hosts
> echo '::1 localhost' >> /etc/hosts
> echo '127.0.1.1 osx.localdomain osx' >> /etc/hosts

# 配置 DNS 解析
> echo 'nameserver 183.60.83.19' >> /etc/resolv.conf
> echo 'nameserver 183.60.82.98' >> /etc/resolv.conf

# 设置 root 密码
> passwd

# 生成 GRUB 引导
> grub-install --target=i386-pc /dev/vda
> grub-mkconfig -o /boot/grub/grub.cfg

# systemd-networkd 网络配置
> nano /etc/systemd/network/20-wired.network

[Match]
Name=ens5
[Network]
DHCP=ipv4

# 开启相关服务
> systemctl enable sshd
> systemctl enable systemd-networkd

# 退出，重启
> exit
> reboot
```
