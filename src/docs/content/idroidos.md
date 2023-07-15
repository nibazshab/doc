# iDroid OS

<br>

## 阅读器

白天模式：文字 `#321309` 背景 `#F4E9DE`

夜间模式：文字 `#A3A3A3` 背景 `#060606`

阅读字体：[霞鹜文楷 LXGW WenKai](https://github.com/lxgw/LxgwWenKai)

## iOS

### App 推荐

- 熊猫吃短信：垃圾短信过滤，付费
- Shadowrocket：代理软件，美区，付费
- Filza：文件管理器，越狱
- PixEz：第三方 Pixiv，美区
- Nicegram：第三方 Telegram
- 嗶哩嗶哩：哔哩哔哩海外版，美区
- 香色闺阁：小说阅读器，侧载
- 阅读：小说阅读器，内测未上线
- 皮皮喵 Lite：漫画阅读器
- 一个木函：多功能工具箱

### 系统结构

Apple Music 缓存路径：`/var/mobile/Media/CloudAssets`

图片路径：`/var/mobile/Media/DCIM`

## Android

### App 推荐

- Magisk：传统 root 方案
- KernelSU：新一代 root 方案
- LSPosed：Xposed 框架
- Termux：拟 Linux 环境
- 黑阈：压制应用后台，冻结应用
- SD Maid：清理软件
- aos-AVP：视频播放器，支持遥控器
- 电视家：电视直播软件
- BBLL：第三方哔哩哔哩，支持遥控器
- PowerAMP：音乐播放器，付费
- 酷安：数码社区，应用商店
- Via：轻量级浏览器
- Zarchiver：解压缩软件
- Kindle：电子书阅读器
- 阅读：小说阅读器
- Clash：代理软件
- VPN 热点：热点共享代理
- 照片编辑器：图片编辑器
- WakeUp：课程表，可导出 ics 导入日历

### adb / fastboot

- `adb shell pm disable-user <package_name>` 冻结应用
- `adb shell pm enable <package_name>` 解冻应用
- `adb shell pm list packages -s -d` 列出已冻结的应用
- `adb install <apk>` 安装应用
- `adb reboot bootloader/recovery` 重启到指定模式
- `fastboot flash <partition> <img>` 刷写分区镜像
