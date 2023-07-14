# Web Network

<br>

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

## 爬虫

### 网站图片时解决防盗链问题

在请求头中添加 `Referer` 字段，值为请求的网站地址
