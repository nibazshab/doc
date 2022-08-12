# Aria2

## 是什么

[aria2](https://github.com/aria2/aria2) 是一个自由、开源、轻量级多协议和多源的命令行下载工具。它支持 HTTP/HTTPS、FTP、SFTP、 BitTorrent 和 Metalink 协议。aria2 可以通过内建的 JSON-RPC 和 XML-RPC 接口来操纵。aria2 下载文件的时候，自动验证数据块。它可以通过多个来源或者多个协议下载一个文件，并且会尝试利用你的最大下载带宽

## 特性

* 支持 HTTP/HTTPS GET
* 支持 HTTP 代理
* 支持 HTTP BASIC 认证
* 支持 HTTP 代理认证
* 支持 FTP (主动、被动模式)
* 通过 HTTP 代理的 FTP(GET 命令行或者隧道)
* 分段下载
* 支持 Cookie
* 可以作为守护进程运行。
* 支持使用 fast 扩展的 BitTorrent 协议
* 支持在多文件 torrent 中选择文件
* 支持 Metalink 3.0 版本(HTTP/FTP/BitTorrent)
* 限制下载、上传速度

::: tip 热芝士
不支持 ed2k 协议
:::

## 配置文件

配置文件 ___aria2.conf___ 是通用的，不分操作系统，可以在任意操作系统上使用。包括但不限于 Linux, Windows, Mac, Android, BSD 等

::: details 这是一份参考，点击查看详情
前 __5__ 行的路径需要加以修改，不要拿过来直接用，否则会导致程序出错
```ini
dir=/home/user/Downloads
input-file=/home/user/.config/aria2/aria2.session
save-session=/home/user/.config/aria2/aria2.session
dht-file-path=/home/user/.config/aria2/dht.dat
dht-file-path6=/home/user/.config/dht6.dat
dht-entry-point=dht.transmissionbt.com:6881
dht-entry-point6=dht.transmissionbt.com:6881
user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.47
peer-agent=Deluge 1.3.15
peer-id-prefix=-DE13F0-
rpc-secret=passwd
disk-cache=64M
file-allocation=none
no-file-allocation-limit=64M
continue=true
always-resume=false
max-resume-failure-tries=0
remote-time=true
save-session-interval=1
auto-save-interval=60
force-save=false
max-file-not-found=5
max-tries=5
retry-wait=10
connect-timeout=30
timeout=30
max-concurrent-downloads=5
max-connection-per-server=5
split=5
min-split-size=20M
piece-length=1M
allow-piece-length-change=true
lowest-speed-limit=0
max-overall-download-limit=0
max-download-limit=0
disable-ipv6=true
http-accept-gzip=true
reuse-uri=false
no-netrc=true
allow-overwrite=false
auto-file-renaming=true
content-disposition-default-utf8=true
min-tls-version=TLSv1.2
bt-external-ip=
bt-enable-lpd=true
bt-lpd-interface=
enable-peer-exchange=true
bt-max-peers=55
bt-request-peer-speed-limit=5M
max-overall-upload-limit=2M
max-upload-limit=0
seed-ratio=1.0
seed-time=0
listen-port=6881-6999
dht-listen-port=6881-6999
enable-dht=true
enable-dht6=false
bt-hash-check-seed=true
bt-seed-unverified=false
bt-tracker-connect-timeout=30
bt-tracker-timeout=30
bt-tracker-interval=1
bt-prioritize-piece=head=32M,tail=32M
rpc-save-upload-metadata=true
follow-torrent=true
pause-metadata=false
bt-save-metadata=true
bt-load-saved-metadata=true
bt-remove-unselected-file=true
bt-force-encryption=true
bt-require-crypto=false
bt-min-crypto-level=plain
bt-detach-seed-only=true
on-download-stop=
on-download-complete=
on-download-error=
on-download-pause=
on-download-start=
on-bt-download-complete=
enable-rpc=true
rpc-allow-origin-all=true
rpc-listen-all=true
rpc-listen-port=6800
rpc-max-request-size=10M
rpc-secure=false
#rpc-certificate=
#rpc-private-key=
event-poll=select
async-dns=true
async-dns-server=
interface=
multiple-interface=
log=
log-level=warn
console-log-level=notice
quiet=false
summary-interval=0
bt-tracker=
```
:::

## Linux

### 安装

Arch 系的 Linux 系统（ Arch / Manjaro 等），输入如下指令即可，其他系统请参考各自的安装方法

```sh
pacman -S aria2
```

创建 `aria2.conf`, `aria2.session`, `dht.dat`, `dht6.dat` 文件，其中 `aria2.conf` 需要写入内容，可参考上文的配置文件，另外 3 个文件可以空着

请自行将 user 更改为自己的用户名

```sh
cd /home/user/.config/aria2/
touch aria2.conf aria2.session dht.dat dht6.dat
```

### 启用

为使用 systemd 配置开机自启服务，创建 `/usr/lib/systemd/system/aria2.service` 文件并写入如下内容：

请自行将 user 更改为自己的用户名

```ini
[Unit]
Description= Aria2
After=network.target
[Service]
User=user
ExecStart=/usr/bin/aria2c --conf-path=/home/user/.config/aria2/aria2.conf &
ExecStop=/bin/kill $MAINPID
RestartSec=always
[Install]
WantedBy=multi-user.target
```

输入 `systemctl enable --now aria2.service` 命令，将服务启动并设为开机自启

## Windows

### 安装

请前往 [Github Release](https://github.com/aria2/aria2/releases) 下载

在 C 盘创建 C:\Program Files\aria2 目录，将下载的文件解压，并把 aria2c.exe 文件拷贝到该目录下

在该目录下手动创建 `aria2.conf`, `aria2.session`, `dht.dat`, `dht6.dat` 文件，其中 `aria2.conf` 需要写入内容，可参考上文的配置文件，另外 3 个文件可以空着

确保目录中存在以下文件

* aria2c.exe
* aria2.conf
* aria2.session
* dht.dat
* dht6.dat

### 启用

在 C:\Program Files\aria2 目录下创建 aira2.vbs 文件并写入以下内容

```powershell
CreateObject("WScript.Shell").Run "C:\Program Files\aria2c.exe --conf-path=C:\Program Files\aria2.conf -D",0
```

双击 aira2.vbs 即可启动服务

为该文件创建快捷方式，并移动快捷方式到 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp\ 目录下即可开机自启

