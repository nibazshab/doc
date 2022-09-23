# Minecraft

<br>

## 是什么

Minecraft 是一个关于破坏和放置方块的游戏。游戏一开始玩家的主要目的是搭建各种结构使自己免遭夜晚出没的怪物的攻击并生存下来，但随着游戏的进行，玩家们可以合作创造出一些不可思议的、富有想象力的东西

该游戏有两个版本，__Java 版__ 和 __基岩版__。Java 版是游戏的原始版本,，自 2009 年开始开发。该版本可以在 Mac，Windows 和 Linux 上游玩。基岩版原为便携版，但后来被移植到不同的平台上。它当前支持 Windows 10，11 和移动设备，Amazon FireOS 和 FireTV，Android 和 iOS，Xbox One，Playstation 4，Nintendo Switch 和 Samsung Gear VR 设备。基岩版客户端没有 Linux 的官方支持,但是基岩版服务器软件是可用的

## Java 服务器

使用 [spigot](https://www.spigotmc.org) 作为 Minecraft Java 服务器软件，在此不多作介绍

### 多世界插件

默认情况下 Minecraft Java 服务器只能开创一个世界游玩，故使用 [Multiverse-Core](https://dev.bukkit.org/projects/multiverse-core) 插件来达到创建多个世界的目的

常见指令，更多指令请查看 [Minecraft 插件百科](https://mineplugin.org/Multiverse-Core)

* /mv help - 查看帮助列表传送去别的世界
* /mv spawn [世界名] - 回到这一个世界的出生点
* /mv create [世界名] [世界类型] [世界种子] - 创造一个新世界
* /mv create 世界名 normal 普通
* /mv create 世界名 normal -t flat 超平坦
* /mv create 世界名 normal -t largebiomes大型生物群落
* /mv create 世界名 nether 创建地狱输入
* /mv create 世界名 end 创建末地输入
* /mv delete [世界名] - 删除一个世界
* /mv save - 保存插件信息
* /mv reload - 重载插件
* /mv list - 查看已有世界列表
* /mv listgens - 查看可选择的世界类型
* /mv move [玩家名] [世界名] - 将某玩家传送到某的世界
* /mv spawn [某世界] - 回到出生点
* /mv setspawn - 设置本世界出生点
* /mv debug - 进入调试模式
* /mv info [世界名] - 查看该世界的信息
* /mv unload [世界名] - 重新加载一个世界
* /mv link [目标地狱] [世界名] - 连接[目标世界]地狱和[世界名]
* /mv link-end [目标末界] [世界] - 连接[目标世界]末界和[世界]
* /mv flags - 显示全部标志列表
* /mv setflag [世界名] [标志名] [值] - 改变标志值
* /mv getflag [世界名] [标志名] - 查看标志值。输入 * 可以查看该世界全部标志状态 
* /mv load [世界名] 打开某个被关闭的世界
