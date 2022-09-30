# 众嗦粥汁的

<br>

::: details typecho 上传目录无法写入, 请手动将安装目录下的 usr/uploads 目录的权限设置为可写然后继续升级
检查 php-fpm 和 nginx 用户是否一致

检查目录权限和所有者与上述是否正确

查看 `php-fpm.service`，把 `ProtectSystem=full` 行注释掉
:::

::: details systemd service 设置工作目录参数
```
[Service]
WorkingDirectory=/path
```
:::

::: details ssh ls 没有颜色
设置 LS_COLORS
```ini
LS_COLORS = 'LS_COLORS=no=00:fi=00:di=01;33:ln=01;36:pi=40;33:so=01;35:bd=40;33;01:cd=40;33;01:or=01;05;37;41:mi=01;05;37;41:ex=01;35:*.cmd=01;35:*.exe=01;35:*.com=01;35:*.btm=01;35:*.bat=01;35:*.sh=01;35:*.csh=01;35:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.gz=01;31:*.bz2=01;31:*.bz=01;31:*.tz=01;31:*.rpm=01;31:*.cpio=01;31:*.jpg=01;35:*.gif=01;35:*.bmp=01;35:*.xbm=01;35:*.xpm=01;35:*.png=01;35:*.tif=01;35:'
```
:::

::: details grub 引导 arch.iso
在 `/boot/grub/grub.cfg` 中添加
```ini
menuentry 'Arch LiveCD' {
    set isofile=/arch.iso
    set imgdevpath=/dev/vda1
    loopback lo0 $isofile
    linux (lo0)/arch/boot/x86_64/vmlinuz-linux img_dev=$imgdevpath img_loop=$isofile
    initrd (lo0)/arch/boot/x86_64/initramfs-linux.img
}
```
:::

::: details grub 引导 gentoo.iso
在 `/boot/grub/grub.cfg` 中添加
```ini
menuentry 'Gentoo LiveCD' {
  set isofile=/gentoo.iso
  loopback loop $isofile
  linux (loop)/boot/gentoo init=/linuxrc dokeymap docache dosshd looptype=squashfs loop=/image.squashfs cdroot isoboot=$isofile
  initrd (loop)/boot/gentoo.igz
}
```
:::

::: details dns 解析 github pages
在域名的 DNS 解析服务中添加
```ini
NAME                                TYPE     TTL     TARGET
@                                   A        3600    185.199.108.153
@                                   A        3600    185.199.109.153
@                                   A        3600    185.199.110.153
@                                   A        3600    185.199.111.153
www                                 CNAME    3600    username.github.io
_GITHUB-PAGES-CHALLENGE-USERNAME    TXT      3600    xxxxxxxxxxxxxxxxxx
```
:::