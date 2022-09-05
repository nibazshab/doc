# 众嗦粥汁的

<br>

::: details ssh 的 ls 没有颜色
检查 LS_COLORS 变量是否设置
:::

::: details grub 引导 arch.iso
在 `/boot/grub/grub.cfg` 中添加如下内容
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
在 `/boot/grub/grub.cfg` 中添加如下内容
```ini
menuentry 'Gentoo LiveCD' {
  set isofile=/gentoo.iso
  loopback loop $isofile
  linux (loop)/boot/gentoo init=/linuxrc dokeymap docache dosshd looptype=squashfs loop=/image.squashfs cdroot isoboot=$isofile
  initrd (loop)/boot/gentoo.igz
}
```
:::
