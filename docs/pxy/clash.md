# 代理工具

## 前言

仅使用 clash 核心程序，不安装 GUI 图形界面

需要至少一个 clash 节点文件 `config.yaml`，由机场提供

::: theorem 相关命令
```
  -d string              设置配置目录
  -ext-ctl string        覆盖外部控制器地址
  -ext-ui string         覆盖外部 ui 目录
  -f string              指定配置文件
  -secret string         覆盖 RESTful API 的密码
  -t                     测试配置并退出
  -v                     显示当前的版本
```
:::

## 下载

[Github](https://github.com/Dreamacro/clash) 下载：`https://github.com/Dreamacro/clash/releases`

## windows

### 安装

请将以下文件放于同一个文件夹内

* `clash.exe`
* `config.yaml`

### 代理

**设置代理地址 : 端口**

```powershell
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /d "127.0.0.1:7890" /f
```

**设置不走代理的地址**

```powershell
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyOverride /d "localhost;127.0.0.1" /f
```

**启动服务**

```powershell
CreateObject("WScript.Shell").Run "reg add ""HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings"" /v ProxyEnable /t REG_DWORD /d 1 /f",0
CreateObject("WScript.Shell").Run "${HOME}\clash.exe",0
```

**关闭服务**

```powershell
CreateObject("WScript.Shell").Run "reg add ""HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings"" /v ProxyEnable /t REG_DWORD /d 0 /f",0
CreateObject("WScript.Shell").Run "taskkill /im clash.exe /f",0
```

## linux

### 安装

arch 系 Linux 输入

```sh
pacman -S clash
```

将 `config.yaml` 放于 `${HOME}/.config/clash/` 目录下

### 开机自启

创建 `/usr/lib/systemd/system/clash@.service` 并写入

```ini
[Unit]
Description=A rule based proxy in Go for %i.
After=network.target

[Service]
Type=exec
User=%i
Restart=on-abort
ExecStart=/usr/bin/clash

[Install]
WantedBy=multi-user.target
```

在终端输入如下，`username` 为用户名

```sh
systemctl enable clash@username
systemctl start clash@username
```

在 `${HOME}/.xprofile` 中添加

```ini
export http_proxy="127.0.0.1:7890"
export https_proxy="127.0.0.1:7890"
export no_proxy="localhost,127.0.0.1"
```

### 关闭代理

```sh
unset http_proxy https_proxy no_proxy
```
