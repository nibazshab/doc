# 众嗦粥汁的

<br>

::: details nginx 配置伪静态
在配置文件的 `server` 模块中的 `location / {}` 模块内，添加 `try_files $uri $uri/ /index.php?$args;`
:::

::: details typecho 上传目录无法写入，将安装目录下的 usr/uploads 目录的权限设置为可写
检查 php-fpm 和 nginx 用户是否一致，把 `php-fpm.service` 的 `ProtectSystem=full` 行注释掉
:::

::: details systemd service 设置工作目录参数
```ini
[Service]
WorkingDirectory=/path
```
:::

::: details 设置 LS_COLORS 解决 ssh 的 ls 没有颜色
```ini
LS_COLORS = 'rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=00:tw=30;42:ow=34;42:st=37;44:ex=01;93'
```
:::

::: details grub 引导 arch.iso
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
