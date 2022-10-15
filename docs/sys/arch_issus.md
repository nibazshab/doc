# 疑难杂症

<br>

::: warning 声明
此处将记录一些在安装/使用过程中遇到的问题，以及解决方案。内容收集自网络和 Arch Wiki，皆由本人测试可用，但无法保证适用于所有人
:::

## Gnome 以 x11 运行在 nvidia 显卡中

创建一个符号链接来强制使用 wayland 运行桌面环境

`sudo ln -s /dev/null /etc/udev/rules.d/61-gdm.rules`

## 桌面环境挂起后无法唤醒

使用 intel cpu 并为触摸板加载了 intel_lpss_pci 模块的电脑，在休眠/睡眠后可能会出现黑屏、无法唤醒的情况

编辑 `/etc/mkinitcpio.conf` 文件，将 `intel_lpss_pci` 添加到 `MODULES=()` 里，使用 `sudo mkinitcpio -P` 命令重新生成内核即可修复无法唤醒的问题

## Possibly missing firmware for module XXXX

当内核更新后，镜像 initramfs 被重新构建时，你可能得到以下警告

```shell
==> WARNING: Possibly missing firmware for module: xhci_pci
==> WARNING: Possibly missing firmware for module: aic94xx
==> WARNING: Possibly missing firmware for module: bfa
==> WARNING: Possibly missing firmware for module: qed
```

如果在生成默认 initramfs 镜像时出现这些或类似的消息，则如警告所述，可能需要安装其他固件。大多数常见的固件文件可以通过安装 `linux-firmware` 来获取。对于其他的固件软件包，可以尝试在软件包仓库中搜索固件模块的名字获取。聚合包 `mkinitcpio-firmware` 包括绝大部分的固件，或者手动安装所需的固件包

| 常见模块名 | 固件包名 |
|-|-|
| aic94xx | aic94xx-firmware |
| bfa | linux-firmware-qlogic |
| bnx2x | linux-firmware-bnx2x |
| liquidio | linux-firmware-liquidio |
| mlxsw_spectrum | linux-firmware-mellanox |
| nfp | linux-firmware-nfp |
| qed | linux-firmware-qlogic |
| qla1280 | linux-firmware-qlogic |
| qla2xxx | linux-firmware-qlogic |
| wd719x | wd719x-firmware |
| xhci_pci | upd72020x-fw |

此外，如果消息仅在生成 fallback initramfs 镜像时出现，则

* 如果没有使用受影响的硬件，则可以安全地忽略这些警告
* 想去掉警告，又不想浪费磁盘空间在不需要的固件包上，可以禁止 fallback 镜像的生成

在 `/etc/mkinitcpio.d/` 目录下的所有 preset 文件中，将 `PRESETS=('default' 'fallback')` 修改为 `PRESETS=('default')`，移除 fallback 镜像 `rm /boot/*-fallback.img`，并重新生成系统引导

::: danger 警告
如果默认镜像启动失败，禁止 fallback 镜像生成将会失去进入系统的另一个选项。进行此操作前，请确保有一个可用于救援的可引导安装介质
:::
