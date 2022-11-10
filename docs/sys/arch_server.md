# 腾讯云安装记录

<br>

腾讯云并不能直接安装 Arch Linux，这里使用一个特殊的方法，先安装一个别的的 Linux 系统，然后将这个系统整个替换安装为 Arch Linux

## 1. 下载 ISO 镜像文件

鉴于腾讯软件源里的 Arch 镜像许久未曾更新，这里从北外镜像站下载镜像文件，或者从任意一个更新及时的站点下载都可，直接用服务器下载，免去了下载到本地再上传的麻烦

```shell
> cd /
> wget -O arch.iso https://mirrors.bfsu.edu.cn/archlinux/iso/latest/archlinux-x86_64.iso
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

打开腾讯云控制台，选择 VNC 登录，然后重启服务器，选择刚才添加的 Arch LiveCD 启动项，进入 Arch LiveCD 系统

## 4. 使用 SSH 连接服务器

在本地使用 SSH 连接服务器，连接成功后，即可关闭 VNC 连接

```shell
# 设置密码
> passwd

# 开启 ssh 服务
> systemctl start sshd

# 连接服务器
> ssh root@<ip>
```

## 5. 挂载硬盘

```shell
# 重设硬盘读写权限
> mount -o rw,remount /dev/vda1

# 挂载 /mnt 目录
> mount /dev/vda1 /mnt
```

## 7. 删除原有系统

```shell
> cd /mnt
> rm -rf *
```

## 8. 安装 Arch Linux

```shell
# 配置腾讯云内网软件源
> echo 'Server = https://mirrors.bfsu.edu.cn/archlinux/$repo/os/$arch' > /etc/pacman.d/mirrorlist

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
> echo 'server' > /etc/hostname

# 配置 hosts
> echo '127.0.0.1 localhost' >> /etc/hosts
> echo '::1 localhost' >> /etc/hosts
> echo '127.0.1.1 server.localdomain server' >> /etc/hosts

# 配置 DNS 解析
> echo 'nameserver 183.60.83.19' >> /etc/resolv.conf
> echo 'nameserver 183.60.82.98' >> /etc/resolv.conf

# 设置 root 密码
> passwd

# 生成 GRUB 引导
> grub-install --target=i386-pc /dev/vda
> grub-mkconfig -o /boot/grub/grub.cfg

# systemd-networkd 网络配置
> nano /etc/systemd/network/10-eth0.network
# 写入以下内容
[Match]
Name=ens5
[Network]
DHCP=ipv4

# 开启相关服务
> systemctl enable sshd
> systemctl enable systemd-networkd

# 重启
> exit
> umount /mnt
> reboot
```
