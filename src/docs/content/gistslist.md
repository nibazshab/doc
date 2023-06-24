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

## 样式美化

### 字体

标准字体：[思源黑体 Source Han Sans](https://github.com/adobe-fonts/source-han-sans) Language Specific OTFs Simplified Chinese

衬线字体：[思源宋体 Source Han Serif](https://github.com/adobe-fonts/source-han-serif) Language Specific OTFs Simplified Chinese

等宽字体：[Source Code Pro](https://github.com/adobe-fonts/source-code-pro)

阅读器字体：[霞鹜文楷 LXGW WenKai](https://github.com/lxgw/LxgwWenKai)

### 小说阅读器界面

白天模式：文字 `#321309` 背景 `#F4E9DE`

夜间模式：文字 `#A3A3A3` 背景 `#060606`

## DNS

### 利用 Cloudflare 实现 URL 301 重定向

选择 DNS 列，在 Records 中添加两条记录，分别为 `@` 解析和 `*` 泛解析，Type 为 `A`，Content 随便填一个可靠的IP地址，例如 `8.8.8.8`

选择 Rules 列，在 Page Rules 中添加一条规则，URL 为重定向的域名，例如 `a.com/*`，Setting 设为 `Forwarding URL`，Status Code 设为 `301`，Destination URL 为重定向的目标域名，例如 `https://www.b.com/$1`

再添加第二条规则，与上述规则相同，将 URL 设为 `*.a.com/*`，Destination URL 设为 `https://$1.b.com/$2`

### Cloudflare 开启 CDN 导致 gh-pages 重定向次数过多

选择 SSL/TLS 列，在 Edge Certficates 开启 `Always Use Https` 和 `Opportunistic Encryption`，在 Origin Server 开启 `Authenticated Origin Pulls`，在 SSL/TLS 设置中，将 Encryption Mode 设置为 `Full (strict)`

## Nginx

### 无法访问

由于 `127.0.0.1` 是本地回环地址，只能在本机上访问，改为 `0.0.0.0` 将监听所有可用的网络接口，即可以从本地网络中的其他计算机访问该服务

### 站点伪静态

在 server 模块的 location / 添加 `try_files $uri $uri/ /index.php?$args;`

### 反向代理

在 server 模块的 location / 添加 `proxy_pass $forward_scheme://$server:$port/;`

## Docker

### 换源

创建 `/etc/docker/daemon.json` 文件，并写入以下内容

```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com"
  ]
}
```

输入 `systemctl daemon-reload` 重新加载配置文件，输入 `systemctl restart docker` 重启 docker 服务

### 自制容器镜像

新建镜像目录，创建 data 文件夹，将容器需要运行的文件放入

编写 Dockerfile 和 entrypoint.sh 文件，并与 data 位于同一级目录

输入 `docker build -t <id> .` 构建 docker 镜像

::: details Dockerfile

```dockerfile
FROM frolvlad/alpine-glibc

COPY data /data
COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]

RUN chmod +x /entrypoint.sh \
    && chmod -R +x /data

VOLUME ["/data/tmp" "/data/conf"]
```

:::

::: details entrypoint.sh

```sh
#!/bin/sh

cd /data
exec ./dorun-one &
exec ./dorun-two
```

:::

## Markdown

### 在 Md 文档中插入 css 样式

插入 `<style>` 和 `</style>` 标签，直接把 css 样式代码写在两个标签之间

## 爬虫

### 网站图片时解决防盗链问题

在请求头中添加 `Referer` 字段，值为请求的网站地址
