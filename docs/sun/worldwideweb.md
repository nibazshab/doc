# World Wide Web

<br>

World Wide Web 即全球广域网，也称为万维网，它是一种基于超文本和 HTTP 的、全球性的、动态交互的、跨平台的分布式图形信息系统。是建立在 Internet 上的一种网络服务，为浏览者在 Internet 上查找和浏览信息提供了图形化的、易于访问的直观界面，其中的文档及超级链接将 Internet 上的信息节点组织成一个互为关联的网状结构

## 学习记录

- 利用 cloudflare 实现域名 URL 301 重定向

选择 DNS 列，在 Records 中添加一条记录，Type 为 `A`，Content 随便填一个可靠的IP地址 `8.8.8.8`

选择 Rules 列，在 Page Rules 中添加一条规则，URL 为重定向的域名 `www.a.com/*`，Setting 设为 `Forwarding URL`，Status Code 设为 `301`，Destination URL 为重定向的目标域名 `https://www.b.com/$1`

---

- cloudflare 开启 cdn 导致 gh-pages 重定向次数过多

选择 SSL/TLS 列，在 Edge Certficates 开启 `Always Use Https` 和 `Opportunistic Encryption`，在 Origin Server 开启 `Authenticated Origin Pulls`，在 SSL/TLS 设置中，将 Encryption Mode 设置为 `Full (strict)`

---

- nginx 配置站点伪静态

在 nginx 配置文件中站点的 server 模块中添加 `location / { try_files $uri $uri/ /index.php?$args; }`

---

- 域名 dns 解析到 github pages

域|记录类型|TTL|记录值
-|-|-|-
@|A|3600|185.199.108.153
@|A|3600|185.199.109.153
@|A|3600|185.199.110.153
@|A|3600|185.199.111.153
www|CNAME|600|username.github.io
