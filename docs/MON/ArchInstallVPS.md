---
sidebarDepth: 2
---

# 安装指南 腾讯云服务器

<br>

腾讯云服务器不能直接安装 Arch Linux，但其提供 VNC 服务，因此可以通过 Grub 引导 Arch Linux ISO 镜像来安装 Arch Linux 系统

参考 [官方替换指南](https://wiki.archlinux.org/title/Install_Arch_Linux_from_existing_Linux)

## 1. 下载 ISO 镜像文件

因为是腾讯云的服务器，故直接从腾讯内网下载镜像，减少公网流量消耗

```shell
> wget http://mirrors.tencentyun.com/archlinux/iso/latest/archlinux-x86_64.iso -O /arch.iso
```

## 2. 添加 Grub 引导项

```shell
> vim /boot/grub/grub.cfg
```

在 `### END /etc/grub.d/10_linux ###` 后添加一个新的启动项，内容如下

```ini
menuentry 'Arch LiveCD' {
    set isofile=/arch.iso
    set imgdevpath=/dev/vda1
    loopback lo0 $isofile
    linux (lo0)/arch/boot/x86_64/vmlinuz-linux img_dev=$imgdevpath img_loop=$isofile
    initrd (lo0)/arch/boot/x86_64/initramfs-linux.img
}
```

## 3. 重启并进入 Arch LiveCD

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

## 6. 硬盘格式化与挂载

```shell
# 格式化硬盘
> mkfs.ext4 /dev/vda1

# 挂载硬盘到 /mnt 目录
> mount /dev/vda1 /mnt
```

## 7. 安装 Arch Linux

```shell
# 配置腾讯内网软件源
> echo Server = http://mirrors.tencentyun.com/archlinux/$repo/os/$arch > /etc/pacman.d/mirrorlist

# 安装系统内核软件包
> pacstrap /mnt base linux-lts intel-ucode openssh nano grub

# 生成 fstab 文件
> genfstab -U /mnt >> /mnt/etc/fstab

# 配置 DNS 解析主机
> echo nameserver 183.60.82.98 > /mnt/etc/resolv.conf

# 进入 chroot 环境
> arch-chroot /mnt

# 设置上海时区
> ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 加载语言环境
> echo zh_CN.UTF-8 UTF-8 > /etc/locale.gen
> locale-gen

# 设置系统语言
> echo LANG=zh_CN.UTF-8 > /etc/locale.conf

# 设置主机名
> echo vps > /etc/hostname

# 设置 root 密码
> passwd

# 写入网络配置文件
> nano /etc/systemd/network/20-wired.network

[Match]
Name=ens5
[Network]
DHCP=ipv4

# 开启 ssh 和 net 服务
> systemctl enable sshd systemd-networkd

# 生成 GRUB 引导
> grub-install --target=i386-pc /dev/vda
> grub-mkconfig -o /boot/grub/grub.cfg

# 重启
> exit
> reboot
```
