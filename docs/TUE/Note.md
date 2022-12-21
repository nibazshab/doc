# 众嗦粥汁的

<br>

::: details Windows
## 开启 UTF-8 语言环境

设置 -> 时间和语言 -> 语言 -> 管理语言设置 -> 更改系统区域设置 -> 选择「Bate 版: 使用 Unicode UTF-8 提供全球语言支持」

## 优化资源占用

计算机管理 -> 服务和应用程序 -> 禁用「Connected User Experiences and Telemetry」

设置 -> 高级系统设置 -> 视觉效果 -> 启用「平滑屏幕字体边缘」「显示缩略图」「显示亚透明的选择长方形」「在窗口下显示阴影」

## Win+Shift+S 截图保存路径

`%LOCALAPPDATA%\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip`

## 将硬件时间视为 UTC 时间

打开 CMD 输入 `Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1`

## NVIDIA 控制面板闪退

打开 `C:\ProgramData\NVIDIA Corporation\Drs` 目录，将 nvdrsdb0.bin、nvdrsdb1.bin 文件删除
:::

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
