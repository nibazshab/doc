# 网络传输与通信

## 传输

### 网站防盗链

为请求头 Content-Type 添加 `Referer` 字段，值为请求的网站地址

### 解决网页不允许粘贴

1. 开发者模式
2. 右上角的 ___设置___，左侧 ___偏好设置___，找到调试程序
3. 勾选 ___停用 JavaScript___

### SSH connect

默认使用 22 端口进行通信，连接时会读取配置记录文件 `$HOME/.ssh/config`

```ssh-config
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_ed25519

Host vps1
HostName IP
User root
Port 22
IdentityFile ~/.ssh/vps1-key
```

上述记录声明在使用 ssh 连接 Host 记录的名称时，将其解析为 HostName 记录的值，登入的用户名为 User 记录的值，连接的端口为 Port 记录的值，使用的私钥文件为 IdentityFile 记录的值

## 域名 DNS

### 常见解析类型

- A，将域名指向一个 ipv4 地址

- CNAME，将域名指向另一个域名，与其保持相同的解析

- TXT，将域名附加一段文本信息

- AAAA，将域名指向一个 ipv6 地址

### 利用 Cloudflare 实现 URL 301 重定向

选择 DNS 列，在 Records 中添加两条记录，分别为 `@` 解析和 `*` 泛解析，Type 为 `A`，Content 随便填一个可靠的 IP 地址，例如 `8.8.8.8`，开启 Proxy status

选择 Rules 列，在 Page Rules 中添加一条规则，URL 为重定向的域名，例如 `a.com/*`，Setting 设为 `Forwarding URL`，Status Code 设为 `301`，Destination URL 为重定向的目标域名，例如 `https://www.b.com/$1`

再添加第二条规则，与上述规则相同，将 URL 设为 `*.a.com/*`，Destination URL 设为 `https://$1.b.com/$2`

### Cloudflare 开启 CDN 导致 gh-pages 重定向次数过多

选择 SSL/TLS 列，在 Edge Certficates 开启 `Always Use Https` 和 `Opportunistic Encryption`，在 Origin Server 开启 `Authenticated Origin Pulls`，在 SSL/TLS 设置中，将 Encryption Mode 设置为 `Full (strict)`
