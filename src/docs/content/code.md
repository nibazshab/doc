# 代码开发前后端

折叠内容

```html
<details>
<summary>more</summary>
<p>haha</p>
</details>
```

更改字符编码

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```

纯文本格式显示

```html
<meta http-equiv="Content-Type" content="text/plain; charset=utf-8">
```

适配手机页面

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

自动跳转其他网站

```html
<meta http-equiv="refresh" content="0; URL='https://example.com'">
```

---

rustup 换源

```sh
RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup rustup install stable
```

cargo 换源

```sh
mkdir -vp ${CARGO_HOME:-$HOME/.cargo}

cat << EOF | tee -a ${CARGO_HOME:-$HOME/.cargo}/config
[source.crates-io]
replace-with = 'mirror'

[source.mirror]
registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"
EOF
```

go 生成随机字符

```go
a := "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
var s string
for i := 0; i < 5; i++ {
    s += string(a[rand.New(rand.NewSource(time.Now().UnixNano())).Intn(len(a))])
}
```

npm 换源阿里

```sh
npm config set registry https://registry.npmmirror.com
```

pip 换源清华

```sh
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

go 换源阿里

```sh
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct
```

go 静态编译

```sh
GOOS=windows GOARCH=amd64 # 交叉编译需要的参数

CGO_ENABLED=0 go build -ldflags="-s -w"
```

c 静态编译，应使用 musl 而非 glibc

```sh
make LDFLAGS=-static
```
