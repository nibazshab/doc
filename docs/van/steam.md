# Steam

<br>

## 使用 Flatpak 安装可避免许多毛病

```shell
> flatpak --user remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
> flatpak --user install flathub com.valvesoftware.Steam
> flatpak run com.valvesoftware.Steam
```

目前 Flatpak 应用还不支持主题，并且不能通过 `optirun/primusrun` 来运行游戏，更多细节详见 [Issue#869](https://github.com/flatpak/flatpak/issues/869)

> 经过测试，可通过 com.valvesoftware.Steam.desktop 中的 `Exec` 项使用 `prime-run` 参数调用 nvidia 显卡

默认情况下通过 Flatpak 安装的 Steam 不会有访问你的家目录的权限，并且由于安全问题，强行忽略此权限限制会导致 Steam 无法运行。不过，你可以自由地在家目录之外添加一个目录。如果你想添加一个外部库，你可以运行下面的命令来添加

```shell
> flatpak --user override com.valvesoftware.Steam --filesystem=/path/to/directory
```

启动使用 Flakpak 安装的 steam 可能会发出警告有关安装 `steam-devices` 软件包的信息，此包暂不存在，可通过安装 [game-devices-udev](https://aur.archlinux.org/packages/game-devices-udev) 来解决

[参阅](https://wiki.archlinux.org/title/Steam)

## Bottles 集成

如果使用 Flatpak 安装了 Bottles，你可以在 Steam 中使用它来运行 Windows 游戏

```shell
> flatpak override --user com.usebottles.bottles --filesystem=~/.var/app/com.valvesoftware.Steam/data/Steam
```

[参阅](https://docs.usebottles.com/flatpak/cant-enable-steam-proton-manager)

## 亚洲字体乱码

### 安装支持的字体

尝试安装 `lib32-fontconfig` `ttf-liberation` 和 `wqy-zenhei`（ 亚洲字体 ），然后重新启动 Steam 以查看问题是否已解决

PS：当 Steam 找不到 Arial 字体时，font-config 喜欢回到 Helvetica 位图字体。Steam 无法正确呈现此位图字体以及可能的其他位图字体，因此，删除有问题的字体或禁用位图字体很可能会在不安装 Arial 或 ArialBold 字体的情况下解决问题。用于代替 Arial 的字体可以通过 `fc-match -v Arial` 命令找到

### 使用 fontconfig

如上述方法未解决问题，尝试使用 fontconfig 为 Steam 指定字体

找到系统中的字体目录，一般为 `/usr/share/fonts`，输入 `ls` 查看有哪些字体，假设存在 `/usr/share/fonts/win` 目录，其中包含的是 Windows 平台的字体

创建 `/usr/share/fonts/steam_fonts.conf` 文件，写入如下内容

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<dir>/usr/share/fonts/win</dir>
</fontconfig>
```

打开 steam 快捷方式（ 一般为 `/usr/share/applications/steam.desktop` ），在每个 Exec 项后面都添加 `env FONTCONFIG_FILE=/usr/share/fonts/steam_fonts.conf`

```ini
Exec=env FONTCONFIG_FILE=/usr/share/fonts/steam_fonts.conf /usr/bin/steam-runtime %U
Exec=env FONTCONFIG_FILE=/usr/share/fonts/steam_fonts.conf steam steam://store
Exec=env FONTCONFIG_FILE=/usr/share/fonts/steam_fonts.conf steam steam://url/SteamIDControlPage
...
```
