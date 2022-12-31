# Kiwix Tools

<br>

[Kiwix Tools](https://github.com/kiwix/kiwix-tools) 是 Kiwix 的命令行工具集合

- `kiwix-manage` 管理 ZIM 文件的 XML 文件
- `kiwix-search` 进行 ZIM 文件中的全文搜索
- `kiwix-serve` 搭建 ZIM 文件的 HTTP 服务

## 安装

Arch 系的 Linux 系统，直接安装 `kiwix-tools` 即可，其他请参考各自的安装方法，或前往 [Github Release](https://github.com/kiwix/kiwix-tools/releases) 下载源码编译安装

## 使用

前往 [Download Wikipedia ZIM](https://download.kiwix.org/zim/wikipedia)，找到并下载需要的 ZIM 文件

在 `$HOME` 目录创建 `wiki` 文件夹，将下载的 ZIM 文件放入其中，然后输入如下指令，生成索引文件

```sh
> kiwix-manage $HOME/wiki/library.xml add $HOME/wiki/*.zim
```

在 `/etc/systemd/user` 目录下创建 kiwix.service 文件，写入如下内容

```ini
[Unit]
Description=Kiwix
After=network.target
[Service]
ExecStart=kiwix-serve --port 11400 --library /root/wiki/library.xml
Restart=on-failure
[Install]
WantedBy=multi-user.target
```

启动服务，并设为开机自启

```sh
> systemctl enable --user --now aria2.service
```

添加新的 ZIM 文件时，请重新生成索引文件，并重启服务
