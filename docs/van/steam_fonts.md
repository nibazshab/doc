# Steam 亚洲字体乱码

<br>

## 安装支持的字体

尝试安装 lib32-fontconfig ttf-liberation 和 wqy-zenhei（ 亚洲字体 ），然后重新启动 Steam 以查看问题是否已解决

PS：当 Steam 找不到 Arial 字体时，font-config 喜欢回到 Helvetica 位图字体。Steam 无法正确呈现此位图字体以及可能的其他位图字体，因此，删除有问题的字体或禁用位图字体很可能会在不安装 Arial 或 ArialBold 字体的情况下解决问题。用于代替 Arial 的字体可以通过 `fc-match -v Arial` 命令找到

## 使用 fontconfig

如上述方法未解决问题，尝试使用 fontconfig 为 Steam 指定字体

找到系统中的字体目录，一般为 `/usr/share/fonts`，输入 `ls` 查看有哪些字体，假设存在 `/usr/share/fonts/win` 目录，其中包含的是 windows 平台的字体

创建 `/usr/share/fonts/steam_fonts.conf` 文件，写入如下内容

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<dir>/usr/share/fonts/win</dir>
</fontconfig>
```

打开 steam 快捷方式（ /usr/share/applications/steam.desktop ），在每个 Exec 项后面都添加 `env FONTCONFIG_FILE=/usr/share/fonts/steam_fonts.conf`

```ini
Exec=env FONTCONFIG_FILE=/usr/share/fonts/steam_fonts.conf /usr/bin/steam-runtime %U
Exec=env FONTCONFIG_FILE=/usr/share/fonts/steam_fonts.conf steam steam://store
Exec=env FONTCONFIG_FILE=/usr/share/fonts/steam_fonts.conf steam steam://url/SteamIDControlPage
...
```
