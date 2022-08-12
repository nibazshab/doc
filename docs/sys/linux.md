# 指令记录

## 更换国内源

编辑 `/etc/pacman.d/mirrorlist`，在最上面添加

```ini
Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch
```

## 添加 archlinuxcn 源

编辑 `/etc/pacman.conf`，添加

```ini
[archlinuxcn]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```

然后安装 `archlinuxcn-keyring` 以导入 GPG key

## 时间同步

```sh
timedatectl set-ntp true
```

## 包

* `base`，`linux`，`sudo` * 系统
* `vim`，`nano` * 文本编辑器
* `curl`，`wget` * 下载
* `net-tools`，`dhcpcd` * 网络管理
* `alsa-utils` * 音频管理
* `archlinuxcn-keyring` * GPG key
* `open-vm-tools`，`xf86-video-vmware` * 驱动
* `xorg-server` * 可视化环境
* `lightdm`，`lightdm-gtk-greeter` * 可视化登录
* `i3-gaps`，`dmenu` * 桌面
* `alacritty` * 终端
* `feh` * 图片查看
* `picom` * 窗口透明
* `zsh`，`oh-my-zsh-git`，`zsh-autosuggestions`，`zsh-syntax-highlighting` * Shell
* `noto-fonts-cjk`，`noto-fonts-emoji` * 字体
* `fcitx5-im`，`fcitx5-chinese-addons`，`fcitx5-configtool`，`fcitx5-material-color` * 输入法
* `yay` * 包管理
* `fakeroot` * 编译环境
* `tree` * 目录树
* `neofetch` * 查看系统信息
* `clash` * 代理
* `zip`，`unzip` * 解压缩
* `proxychains-ng` * 命令行代理
* `microsoft-edge-stable-bin` * 浏览器
* `openssh` * ssh
* `wechat-uos` * 微信
* `dingtalk-bin` * 钉钉
* `pandoc-bin` * 文档转换
* `rclone` * 挂载云盘
* `libimobiledevice` * ios