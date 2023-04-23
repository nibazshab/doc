# Minecraft

<br>

Minecraft 是一个关于破坏和放置方块的游戏。游戏一开始玩家的主要目的是搭建各种结构使自己免遭夜晚出没的怪物的攻击并生存下来，但随着游戏的进行，玩家们可以合作创造出一些不可思议的、富有想象力的东西

该游戏有两个版本，Java 版和基岩版。Java 版是游戏的原始版本，自 2009 年开始开发。该版本可以在 Mac，Windows 和 Linux 上游玩。基岩版原为便携版，但后来被移植到不同的平台上。它当前支持 Windows 10，11 和移动设备，Amazon FireOS 和 FireTV，Android 和 iOS，Xbox One，Playstation 4，Nintendo Switch 和 Samsung Gear VR 设备。基岩版客户端没有 Linux 的官方支持，但是基岩版服务器软件是可用的

## Java 版服务器

使用 docker 镜像 [itzg/minecraft-server](https://github.com/itzg/minecraft-server) 作官方纯净版服务器

## 隐藏服务器端口

通过 DNS 解析中的 SRV 功能，实现不需要端口连接我的世界服务器

添加一个 DNS 解析，主机记录写 `_minecraft._tcp.play`，记录类型为 `SRV`，记录值为 `5 0 25565 域名`

命令行输入 `nslookup -q=srv _minecraft._tcp.play.域名` 查看上述 SRV 解析是否成功

进入 mc 游戏后添加服务器，服务器地址填 `play.域名` 即可

## 启动器推荐

- PCL 2

> 新一代 Minecraft / 我的世界 启动器，Plain Craft Launcher 2，超快的下载速度，下载安装 Mod 和整合包，简洁且高度自定义的界面，流畅精细的动画
