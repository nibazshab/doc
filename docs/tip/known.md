# 众嗦粥汁的

<br>

::: details ssh 登陆时，ls 没有颜色
检查 LS_COLORS 变量是否设置
:::

::: details grub 引导 gentoo.iso
在 `/boot/grub/grub.cfg` 中添加如下内容
```ini
menuentry "Gentoo LiveCD" {
  set isofile='/gentoo.iso'
  loopback loop $isofile
  linux (loop)/boot/gentoo init=/linuxrc dokeymap docache dosshd looptype=squashfs loop=/image.squashfs cdroot isoboot=$isofile
  initrd (loop)/boot/gentoo.igz
}
```
:::

::: details steam 中文乱码
1. 安装 steam 支持的中文字体 `wqy-zenhei`

2. fontconfig
复制 windows 的字体到 `/usr/share/fonts/win`，创建 `/opt/steam_fonts.conf` 文件，写入如下内容
```ini
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<dir>/usr/share/fonts/win</dir>
</fontconfig>
```
打开 steam 快捷方式（ /usr/share/applications/steam.desktop ），在每个 Exec 后面都添加 `env FONTCONFIG_FILE=/opt/steam_fonts.conf` 参数
```ini
Exec=env FONTCONFIG_FILE=/opt/steam_fonts.conf /usr/bin/steam-runtime %U
Exec=env FONTCONFIG_FILE=/opt/steam_fonts.conf steam steam://store
Exec=env FONTCONFIG_FILE=/opt/steam_fonts.conf steam steam://url/SteamIDControlPage
...
```
:::

