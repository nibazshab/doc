# 自我的救赎

<br>

此处将记录一些在安装/使用过程中遇到的问题和一些有助于提高体验的东西。内容收集自网络和 Arch Wiki，皆由本人测试可用，但无法保证适用于所有人

## Gnome Desktop Extension

扩展|介绍
-|-
appindicatorsupport|任务栏应用托盘
dash-to-dock|DOCK 栏
drive-menu|在任务栏提供一个快捷卸载外接设备的图标
just-perfection-desktop|修改界面样式
logomenu|更改左上角活动菜单图标
user-theme|主题

将主题配置文件 gnome-shell.css 中 #panel 模块里的 `background-color` 的值修改为 `rgba(0,0,0,0.6)` 可以使面板透明，具体的方法见 [GDM](https://wiki.archlinux.org/title/GDM)

## 开启内核级显示模式设置

KMS 通常是在 initramfs stage 之后开始初始化，但是也可以在 initramfs 的阶段启用

将视频驱动模块加入 `/etc/mkinitcpio.conf` 的 MODULES= 里，使用 `mkinitcpio -P` 命令重新生成内核

* AMD GPU 加入 `amdgpu`，老的 ATI 驱动加入 `radeon`
* Intel GPU 加入 `i915`
* 对于 NVIDIA 驱动的 `nvidia nvidia_modeset nvidia_uvm nvidia_drm`，详见 [NVIDIA#DRM kernel mode setting](https://wiki.archlinux.org/title/NVIDIA#DRM_kernel_mode_setting)

为了避免更新 NVIDIA 驱动之后忘了更新 initramfs，建议使用 Pacman Hooks 自动生成新内核，将以下内容添加到 `/etc/pacman.d/hooks/nvidia.hook`

```ini
[Trigger]
Operation=Install
Operation=Upgrade
Operation=Remove
Type=Package
Target=nvidia
Target=linux

[Action]
Description=Update NVIDIA module in initcpio
Depends=mkinitcpio
When=PostTransaction
NeedsTargets
Exec=/bin/sh -c 'while read -r trg; do case $trg in linux) exit 0; esac; done; /usr/bin/mkinitcpio -P'
```

[参阅](https://wiki.archlinux.org/title/Kernel_mode_setting#Early_KMS_start)

## Gnome 以 x11 运行在 nvidia 显卡中

创建一个符号链接来强制使用 wayland 运行桌面环境

`ln -s /dev/null /etc/udev/rules.d/61-gdm.rules`

[参阅](https://wiki.archlinux.org/title/GDM#Wayland_and_the_proprietary_NVIDIA_driver)

## 桌面环境挂起后无法唤醒

使用 Intel CPU 并为触摸板加载了 intel_lpss_pci 模块的电脑，在休眠/睡眠后可能会出现黑屏、无法唤醒的情况

将 `intel_lpss_pci` 添加到 `/etc/mkinitcpio.conf` 的 MODULES= 里，使用 `mkinitcpio -P` 命令重新生成内核

## Possibly missing firmware for module XXXX

当内核更新后，镜像 initramfs 被重新构建时，你可能得到以下警告

```shell
==> WARNING: Possibly missing firmware for module: xhci_pci
==> WARNING: Possibly missing firmware for module: aic94xx
==> WARNING: Possibly missing firmware for module: bfa
==> WARNING: Possibly missing firmware for module: qed
```

如果在生成默认 initramfs 镜像时出现这些或类似的消息，则如警告所述，可能需要安装其他固件。大多数常见的固件文件可以通过安装 `linux-firmware` 来获取。对于其他的固件软件包，可以尝试在软件包仓库中搜索固件模块的名字获取。聚合包 `mkinitcpio-firmware` 包括绝大部分的固件，或者手动安装所需的固件包

::: details 常见模块与对应固件包
模块名|固件包名
-|-
aic94xx|aic94xx-firmware
bfa|linux-firmware-qlogic
bnx2x|linux-firmware-bnx2x
liquidio|linux-firmware-liquidio
mlxsw_spectrum|linux-firmware-mellanox
nfp|linux-firmware-nfp
qed|linux-firmware-qlogic
qla1280|linux-firmware-qlogic
qla2xxx|linux-firmware-qlogic
wd719x|wd719x-firmware
xhci_pci|upd72020x-fw
:::

如果消息仅在生成 fallback initramfs 镜像时出现，可以禁止 fallback 镜像的生成，在 `/etc/mkinitcpio.d/` 目录下的 linux.preset 文件中，将 PRESETS= 里的 fallback 移除，并重新生成系统引导

[参阅](https://wiki.archlinux.org/title/Mkinitcpio#Possibly_missing_firmware_for_module_XXXX)
