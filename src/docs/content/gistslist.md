---
sidebarDepth: 1
---

# 知识库

<br>

## 正则表达式

式|说明|式|说明
-|-|-|-
`.*(a\|b).*`|包含 a 或 b 的行|`[^\x00-\x7F]`|非 ASCII 字符
`^.{5}`|行首 5 个字符|`.{5}$`|行末 5 个字符
`\u3000`|空白 `　` 字符|`^[ \t]*$`|空行
`^`|行首|`$`|行末
`(\d+)`|数字|`$1`|替换时，第 1 个括号内匹配的内容

## 运维

### systemd 实现定时任务

通过 systemd timer 服务定时运行 systemd service 服务，实现定时任务

service 模板 crondo.service

```ini
[Unit]
Description=MyTimer
[Service]
ExecStart=/bin/bash /path/to/do.sh
```

timer 模板 crondo.timer

```ini
[Unit]
Description=Runs mytimer every hour
[Timer]
OnUnitActiveSec=1h
Unit=mytimer.service
[Install]
WantedBy=multi-user.target
```

[参阅](https://www.ruanyifeng.com/blog/2018/03/systemd-timer.html)

### grub 引导 iso 文件

引导 arch.iso

```ini
menuentry 'Arch LiveCD' {
  set isofile=/arch.iso
  set imgdevpath=/dev/sda1
  loopback lo0 $isofile
  linux (lo0)/arch/boot/x86_64/vmlinuz-linux img_dev=$imgdevpath img_loop=$isofile
  initrd (lo0)/arch/boot/x86_64/initramfs-linux.img
}
```

引导 gentoo.iso

```ini
menuentry 'Gentoo LiveCD' {
  set isofile=/gentoo.iso
  loopback loop $isofile
  linux (loop)/boot/gentoo init=/linuxrc dokeymap docache dosshd looptype=squashfs loop=/image.squashfs cdroot isoboot=$isofile
  initrd (loop)/boot/gentoo.igz
}
```

## 代码

### go 运行 / 编译命令

`go run app.go` / `go build app.go -o app`

### go 关闭动态依赖

编译时添加 CGO_ENABLED=0 参数

## 域名

### 利用 cloudflare 实现 url 301 重定向

选择 DNS 列，在 Records 中添加两条记录，分别为 `@` 解析和 `*` 泛解析，Type 为 `A`，Content 随便填一个可靠的IP地址，例如 `8.8.8.8`

选择 Rules 列，在 Page Rules 中添加一条规则，URL 为重定向的域名，例如 `a.com/*`，Setting 设为 `Forwarding URL`，Status Code 设为 `301`，Destination URL 为重定向的目标域名，例如 `https://www.b.com/$1`

再添加第二条规则，与上述规则相同，将 URL 设为 `*.a.com/*`，Destination URL 设为 `https://$1.b.com/$2`

### cloudflare 开启 cdn 导致 gh-pages 重定向次数过多

选择 SSL/TLS 列，在 Edge Certficates 开启 `Always Use Https` 和 `Opportunistic Encryption`，在 Origin Server 开启 `Authenticated Origin Pulls`，在 SSL/TLS 设置中，将 Encryption Mode 设置为 `Full (strict)`

## Nginx

### 配置站点伪静态

在配置文件中 server 模块的 location / 添加 `try_files $uri $uri/ /index.php?$args;`

### 配置反代

在配置文件中 server 模块的 location / 添加 `proxy_pass $forward_scheme://$server:$port/;`

## 样式美化

### 字体

标准字体：[思源黑体 Source Han Sans](https://github.com/adobe-fonts/source-han-sans) Language Specific OTFs Simplified Chinese

衬线字体：[思源宋体 Source Han Serif](https://github.com/adobe-fonts/source-han-serif) Language Specific OTFs Simplified Chinese

等宽字体：[Source Code Pro](https://github.com/adobe-fonts/source-code-pro)

阅读字体：[霞鹜文楷 LXGW WenKai](https://github.com/lxgw/LxgwWenKai)

### 界面

小说阅读器，白天模式：文字 `#321309` 背景 `#F4E9DE`

小说阅读器，夜间模式：文字 `#A3A3A3` 背景 `#060606`

## Markdown

### 在 markdown 文档中插入 css 样式

在文档中插入 `<style>` 和 `</style>` 标签，直接把 css 样式代码写在两个标签之间

## 爬虫

### 爬取网站图片时解决防盗链问题

在请求头中添加 `Referer` 字段，值为请求的网站地址
