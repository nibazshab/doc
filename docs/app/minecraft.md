# Minecraft

<br>

## 是什么

Minecraft 是一个关于破坏和放置方块的游戏。游戏一开始玩家的主要目的是搭建各种结构使自己免遭夜晚出没的怪物的攻击并生存下来，但随着游戏的进行，玩家们可以合作创造出一些不可思议的、富有想象力的东西

该游戏有两个版本，__Java 版__ 和 __基岩版__。Java 版是游戏的原始版本，自 2009 年开始开发。该版本可以在 Mac，Windows 和 Linux 上游玩。基岩版原为便携版，但后来被移植到不同的平台上。它当前支持 Windows 10，11 和移动设备，Amazon FireOS 和 FireTV，Android 和 iOS，Xbox One，Playstation 4，Nintendo Switch 和 Samsung Gear VR 设备。基岩版客户端没有 Linux 的官方支持，但是基岩版服务器软件是可用的

## Java 服务器

使用 [spigot](https://www.spigotmc.org) 作为 Minecraft Java 服务器软件，在此不多作介绍

- 配置文件 `server.properties`
  - 地图种子参数 `level-seed=`
- 地图文件夹 `world`

### 多世界插件

默认情况下 Minecraft Java 服务器只能开创一个世界游玩，故使用 [Multiverse-Core](https://dev.bukkit.org/projects/multiverse-core) 插件来达到创建多个世界的目的

以下是一些常见指令，更多信息请查看 [Minecraft Multiverse-Core 插件百科](https://mineplugin.org/Multiverse-Core)

* /mv help - 查看帮助列表传送去别的世界
* /mv list - 查看已有世界列表
* /mv tp [世界名] - 传送到指定世界
* /mv tp [玩家名] [世界名] - 将某玩家传送到指定世界
* /mv spawn - 回到出生点
* /mv setspawn - 设置本世界出生点
* /mv create [世界名] [世界类型] [世界种子] - 创造一个新世界
* /mv create 世界名 normal 普通
* /mv create 世界名 normal -t flat 超平坦
* /mv create 世界名 normal -t largebiomes 大型生物群落
* /mv create 世界名 nether 创建地狱世界
* /mv create 世界名 end 创建末地世界
* /mv unload [世界名] - 卸载一个世界，不删除配置信息
* /mv remove [世界名] - 卸载一个世界，删除配置信息
* /mv delete [世界名] - 删除一个世界，并删除世界的文件夹

### 权限管理插件

[Group Manager](https://github.com/ElgarL/GroupManager) 是一款用于控制权限的插件，它允许为用户组设立权限，并将玩家添加到这些用户组，便可以有拥有允许使用特定权限的多个等级。创建一个自定义的等级系统，对于大部分 Minecraft 服务器来说是非常有用的

更多信息请查看 [Minecraft Group Manager 插件百科](https://mineplugin.org/GroupManager)
