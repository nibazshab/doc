# 手机软件与折腾

## 阅读器

白天模式：文字 `#321309` 背景 `#F4E9DE`

夜间模式：文字 `#A3A3A3` 背景 `#060606`

阅读字体：[霞鹜文楷 LXGW WenKai](https://github.com/lxgw/LxgwWenKai)

## iOS

### 应用推荐

-|-|-|-|-
-|-|-|-|-
__美区__|Shadowrocket|PixEz|Nicegram|嗶哩嗶哩
||Kindle
__国区__|熊猫吃短信|皮皮喵 Lite|一个木函|小黑盒
||酷安|网易云音乐|什么值得买
__侧载__|香色闺阁|Filza|TollStore|AltStore

### 系统结构

Apple Music 缓存路径：`/var/mobile/Media/CloudAssets`，`/var/mobile/Media/iTunes_Control/Music`

图片路径：`/var/mobile/Media/DCIM`

### 常见问题

#### 关闭爱思助手自动安装移动版

删掉 C 盘 `Program Files (x86)\i4Tools7\files\ipa\` 内的文件

## Android

### 应用推荐

-|-|-|-|-
-|-|-|-|-
__综合__|酷安|Via 浏览器|Zarchiver|照片编辑器
||WakeUp 课程表|MT 管理器|MDGram
__阅读__|Kindle|阅读|Aa 小说阅读器|
__笔记__|Squid
__音频__|PowerAMP
__科学__|Clash|VPN 热点
__折腾__|Magisk|KernelSU|LSPosed|黑阈
||CaptiveMgr 清除 x 和 !|Termux|SD Maid|Micro G
__视频__|aos-AVP|BBLL|bilibilitv1.6.6|SmartTube
__其他__|PicAcg|Kirikiroid2|Tyranor

### ADB 调试工具

ADB 是一个命令行工具，用于与运行 Android 操作系统的设备进行通信。通过 ADB，开发人员可以在计算机上使用命令来管理和调试 Android 设备，例如安装应用程序、复制文件、发送 shell 命令等。ADB 还提供了许多有用的功能，如日志记录、端口转发、屏幕截图

- 传送门：[https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools)
- 驱动传送门：[https://developer.android.google.cn/studio/run/win-usb](https://developer.android.google.cn/studio/run/win-usb)

::: danger 警告

解锁 Bootloader 后，先备份字库和基带

:::

- `adb devices` 检测设备
- `adb shell pm disable-user PACKAGE_NAME` 冻结应用
- `adb shell pm enable PACKAGE_NAME` 解冻应用
- `adb shell pm list packages -s -d` 列出已冻结的应用
- `adb install APK` 安装应用
- `adb reboot bootloader/recovery/fastboot` 重启到指定模式
- `fastboot devices` 检测设备
- `fastboot flash PARTITION IMG` 刷写分区镜像
- `fastboot reboot` 重启到系统
- `fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img` 关闭 avb 验证

### 常见问题

#### SD 卡无法使用此目录

Magisk 模块：no storage restrict

## 其他

鸿蒙系统：鸿蒙工具箱
