# Aria2

<br>

## 是什么

[aria2](https://github.com/aria2/aria2) 是一个自由、开源、轻量级多协议和多源的命令行下载工具。它支持 HTTP/HTTPS、FTP、SFTP、 BitTorrent 和 Metalink 协议。aria2 可以通过内建的 JSON-RPC 和 XML-RPC 接口来操纵。aria2 下载文件的时候，自动验证数据块。它可以通过多个来源或者多个协议下载一个文件，并且会尝试利用你的最大下载带宽

## 特性

* 支持 HTTP/HTTPS GET
* 支持 HTTP 代理
* 支持 HTTP BASIC 认证
* 支持 HTTP 代理认证
* 支持 FTP（ 主动、被动模式 ）
* 通过 HTTP 代理的 FTP（ GET 命令行或者隧道 ）
* 分段下载
* 支持 Cookie
* 可以作为守护进程运行。
* 支持使用 fast 扩展的 BitTorrent 协议
* 支持在多文件 torrent 中选择文件
* 支持 Metalink 3.0 版本（HTTP/FTP/BitTorrent）
* 限制下载、上传速度

## 配置文件

用于保存配置的文件 _aria2.conf_ 是通用的，不分操作系统，可以在任意操作系统上使用。包括但不限于 Linux, Windows, Mac, Android, BSD 等

::: details 这是一份参考，点击查看详情
前 5 行的路径需要加以修改，不要拿过来直接用，否则会导致程序出错，第 6 行是密码，请自行修改
```ini
dir=/home/user/Downloads
input-file=/home/user/.config/aria2/aria2.session
save-session=/home/user/.config/aria2/aria2.session
dht-file-path=/home/user/.config/aria2/dht.dat
dht-file-path6=/home/user/.config/dht6.dat
rpc-secret=passwd
dht-entry-point=dht.transmissionbt.com:6881
dht-entry-point6=dht.transmissionbt.com:6881
user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36
peer-agent=Deluge 1.3.15
peer-id-prefix=-DE13F0-
seed-ratio=2.0
seed-time=
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

## linux

### 安装

Arch 系的 Linux 系统（ 如 Arch / Manjaro 等 ），输入如下指令即可，其他系统请参考各自的安装方法

```sh
sudo pacman -S aria2
```

创建 aria2.conf, aria2.session, dht.dat, dht6.dat 文件，其中 aria2.conf 需要写入内容，可参考上文的配置文件，另外 3 个文件不需要写入内容

请自行将 user 更改为自己的用户名

```sh
cd /home/user/.config/aria2/
touch aria2.conf aria2.session dht.dat dht6.dat
```

### 启用

为使用 systemd 配置开机自启服务，创建 `/usr/lib/systemd/system/aria2.service` 文件并写入如下内容

请自行将 user 更改为自己的用户名

```ini
[Unit]
Description=Aria2
After=network.target
[Service]
User=user
ExecStart=/usr/bin/aria2c --conf-path=/home/user/.config/aria2/aria2.conf &
ExecStop=/bin/kill $MAINPID
RestartSec=on-abort
[Install]
WantedBy=multi-user.target
```

输入 `sudo systemctl enable --now aria2.service` 命令，将服务启动并设为开机自启

## win

### 安装

请前往 [Github Release](https://github.com/aria2/aria2/releases) 下载

在 C 盘创建 `C:\Program Files\aria2` 目录，将下载的文件解压，并把 aria2c.exe 文件拷贝到该目录下

在该目录下手动创建 aria2.conf, aria2.session, dht.dat, dht6.dat 文件，其中 aria2.conf 需要写入内容，可参考上文的配置文件，另外 3 个文件不需要写入内容

确保上述目录中存在以下文件

* aria2c.exe
* aria2.conf
* aria2.session
* dht.dat
* dht6.dat

### 启用

在 `C:\Program Files\aria2` 目录下创建 aira2.vbs 文件并写入以下内容

```powershell
CreateObject("WScript.Shell").Run "C:\Program Files\aria2c.exe --conf-path=C:\Program Files\aria2.conf -D",0
```

双击 aira2.vbs 即可启动服务

为 aira2.vbs 创建快捷方式，并移动快捷方式到 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp\` 目录下即可实现开机自启

## AriaNg

[AriaNg](https://github.com/mayswind/AriaNg) 是一个现代化的 Web 前端管理工具，它使得 aria2 更易于使用。AriaNg 是纯 html & javascript 编写的，因此不需要任何编译器或运行环境。只需要将 AriaNg 放入的 Web 服务器中，然后在浏览器中打开它。AriaNg 使用响应式布局，支持任何桌面或移动设备

* 纯 Html 和 Javascript，无需运行环境
* 响应式设计，支持桌面和移动设备
* 友好的交互界面
  * 任务排序（ 按名称、大小、进度、剩余时间、下载速度等 ）、文件排序、bittorrent 节点排序
  * 任务搜索
  * 任务重试
  * 拖拽调整任务顺序
  * 更详细的任务信息（ 健康度, 连接节点客户端信息等 ）
  * 根据特定文件类型或文件扩展名筛选文件（ 视频、音频、图片、文档、应用程序、存档文件等 ）
  * 多目录任务支持树形结构显示
  * 下载/上传速度图表
  * 完整的支持 aria2 设置选项
* 深色主题
* 支持网页地址命令行 API
* 下载完成通知
* 多语言支持
* 支持配置多个 aria2 RPC
* 支持导出和导入设置
* 节省带宽，仅请求增量数据

::: tip 题外话
这里图个方便，直接使用搭建好了的现成网页 [http://aria2.net](http://aria2.net)，不放心的可以参考 [官方文档](https://github.com/mayswind/AriaNg#installation) 自己搭建
:::

打开 AriaNg 后，点击左侧的 __AriaNg 设置__，再点击上方带有 __RPC__ 字样的标题，在 __Aria2 RPC 地址__ 中输入 `localhost`（ 服务器用户请自行更换为自己的 ip 地址 ），在 __Aria2 RPC 密钥__ 中输入配置文件中 `rpc-secret` 的值，随后刷新页面即可看到左下方 __Aria2 状态__ 显示绿色的 __已连接__
