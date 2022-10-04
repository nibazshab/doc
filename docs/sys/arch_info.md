# 介绍

<br>

Arch Linux 是通用 x86-64 GNU/Linux 发行版。Arch 采用滚动升级模式，尽全力提供最新的稳定版软件。初始安装的 Arch 只是一个基本系统，随后用户可以根据自己的喜好安装需要的软件，配置成符合自己理想的系统

## 设计原则

以下核心原则构成了我们通常所指的 Arch 之道，或者说 Arch 的哲学，或许最好的结词是 Keep It Simple, Stupid（ 对应中文为 __保持简单，且一目了然__ ）

### 简洁

Arch Linux 将简洁定义为：避免任何不必要的添加、修改和复杂增加。它提供的软件都来自原始开发者（ 上游 ），仅进行和发行版（ 下游 ）相关的最小修改

* 不包含上游不愿意接受的补丁。绝大部分 Arch 下游补丁都已经被上游接受，下一个正式版本里会包含
* 配置文件也是来自上游，仅包含发行版必须的调整，比如特殊的文件系统路径变动。Arch 不会在安装一个软件包后就自动启动服务
* 软件包通常都和一个上游项目直接对应。仅在极少数情况下才会拆分软件包
* 官方不支持图形化配置界面，建议用户使用命令行或文本编辑器修改设置

### 现代

Arch 尽全力保持软件处于最新的稳定版本，只要不出现系统软件包破损，都尽量用最新版本。Arch 采用滚动升级策略，安装之后可以持续升级

Arch 向 GNU/Linux 用户提供了许多新特性，包括 systemd 初始化系统、现代的文件系统、LVM2/EVMS、软件磁盘阵列（ 软RAID ）、udev 支持、initcpio（ 附带 mkinitcpio ）以及最新的内核

### 实用

Arch 注重实用性，避免意识形态之争。最终的设计决策都是由开发者的共识决定。开发者依赖基于事实的技术分析和讨论，避免政治因素，不会被流行观点左右

Arch Linux 的仓库中包含大量的软件包和编译脚本。用户可以按照需要进行自由选择。仓库中既提供了开源、自由的软件，也提供了闭源软件。__实用性大于意识形态__

### 以用户为中心

许多 Linux 发行版都试图变得更 _用户友好_，Arch Linux 则一直是，永远会是以用户为中心。此发行版是为了满足贡献者的需求，而不是为了吸引尽可能多的用户。Arch 适用于乐于自己动手的用户，他们愿意花时间阅读文档，解决自己的问题

Arch 鼓励每一个用户参与和贡献，报告和帮助修复 bugs，提供软件包补丁和参加核心项目：Arch 开发者都是志愿者，通过持续的贡献成为团队的一员。Archers 可以自行贡献软件包到 Arch 用户仓库，提升 ArchWiki 文档质量，在论坛、邮件列表或者 IRC 中给其它用户提供技术支持。Arch Linux 是全球很多用户的选择，已经有很多国际社区提供帮助和文档翻译

## 通用

Arch Linux 是通用发行版，初始安装仅提供命令行环境：用户不需要删除大量不需要的软件包，而是可以从官方软件仓库成千上万的高质量软件包中进行选择，搭建自己的系统。支持x86-64 架构 ( 对 i686 架构的支持已经结束 ）

Arch 有一个易用的包管理系统 Pacman，仅凭一条命令就升级整个系统。Arch还提供一个类似 ports 的包构建系统（ Arch Build System ），通过它可以轻松从源码构建和安装软件包，并用一个命令完成同步。你甚至可以用一个命令重新构建整个系统。Arch 还提供 Arch 用户仓库，它包含了成千上万个由用户维护的 PKGBUILD 脚本，配合 makepkg 工具，从编译到打包一气呵成。用户还能轻松构建和维护属于自己的自定义软件源

## 历史

这些年来，Arch 社区不断成长，最近也收到大量的关注和评论

Arch 开发者都是不收工资的志愿者，目前也没有通过 Arch Linux 赚钱的计划。Arch 开发的详细历史可以浏览 [Wayback Machine 的 Arch 部分](https://web.archive.org/web/*/archlinux.org) 和 [Arch Linux 新闻存档](https://archlinux.org/news)

### 早期

加拿大程序员和吉他师 Judd Vinet 从 2001 年早期开始开发 Arch Linux，并在 2002 年 3 月 11 日正式发行 0.1 版。它受到 Slackware、BSD、PLD Linux 和 CRUX 的启发，但是那时候这些发行版缺少软件包管理工具。所以 Vinet 以同样的简洁原则建立发行版，并编写了 pacman 软件包，自动处理软件包的安装、删除和更新

### 中期

[这个图表](https://wiki.archlinux.org/title/File:Archstats2002-2011.png) 见证了 Arch Linux 社区的稳步扩大。而且从早期开始，Arch 就树立起了开放、友好和社区互助的形象

### ArchWiki 的诞生

2005 年 7 月 8 日，用 MediaWiki 搭建的 ArchWiki 开始运行

### A. Griffin 时代

2007 下半年，Judd Vinet 退出了 Arch 的开发，并把统治权交给美国程序员 Aaron Griffin，也就是 Phrakture，目前他依然是 Arch 开发者

### Arch 安装脚本

2012 年 7 月的 Arch Linux 安装介质中 弃用了 基于菜单的 Arch 安装框架（ AIF ），改为使用Arch 安装脚本（ arch-install-scripts ）

### Systemd 时代

2012 到 2013 年间 Arch 用 Systemd 替换了 System V init

### 抛弃 i686 支持

鉴于在开发者和社区中 i686 架构的使用程度逐渐式微，i686 支持已经于 2017 年 11 月底被抛弃

### 项目的领导角色和选举

2020 年初，Arch 开始用新的流程选择未来的领袖，详情记载在 [DeveloperWiki:Project Leader](https://wiki.archlinux.org/title/DeveloperWiki:Project_Leader)

Aaron Griffin 决定不再担任项目领导，Arch 通过选举方式正式确认 Levente Polyak 为新的领导，结果记录在 [这里](https://archlinux.org/news/the-future-of-the-arch-linux-project-leader)

## 派生发行

* [SteamOS](https://github.com/theVakhovskeIsTaken/holoiso) - SteamOS 3 基于 Arch Linux 所开发，为电子游戏而设计
* [Manjaro Linux](https://manjaro.org) - 提供 XFCE/KDE/GNOME 桌面环境的发行版
* [Arco Linux](https://arcolinux.com) - 打包并配置好了各种 DE 以及 WM 环境的发行版
* [Artix Linux](https://artixlinux.org) - 使用 OpenRC/Runit 而非 systemd 初始化系统的发行版
* [Alg](https://archlinuxgui.in) - 提供了很多种桌面环境的发行版
* ...

其他流行的派生发行版包括 Arch Linux ARM 等

<br>

## 参考

* [Arch Wiki](https://wiki.archlinux.org/title/Arch_Linux_(简体中文))