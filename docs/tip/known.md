# 众嗦粥汁的

<br>

::: details ssh 登陆时，ls 没有颜色
检查 LS_COLORS 变量是否设置
:::

::: details grub 引导 gentoo.iso
在 `/boot/grub/grub.cfg` 中添加如下内容
```ini
menuentry "Gentoo iso" {
  set isofile='/gentoo.iso'
  loopback loop $isofile
  linux (loop)/boot/gentoo init=/linuxrc dokeymap docache dosshd looptype=squashfs loop=/image.squashfs cdroot isoboot=$isofile
  initrd (loop)/boot/gentoo.igz
}
```
:::
