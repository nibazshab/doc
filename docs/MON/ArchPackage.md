# 软件包

<br>

Arch Linux 中的软件包是通过 makepkg 工具以及存储在 PKGBUILD 文件中的信息编译的。运行 `makepkg` 时，系统将自动在当前目录下搜索 PKGBUILD 文件，然后根据 PKGBUILD 把软件源码重新打包。成功编译后得到的二进制文件，以及可以得到的其他信息如包的版本信息和依赖关系等，都将被打包到 pkg.tar.zst 文件里，可以通过 pacman -U 进行安装

软件包仅仅是一个使用 zstd 压缩的 tar 压缩包，它包含了以下由 makepkg 生成的文件

* 二进制文件
* `.PKGINFO` 包含所有 pacman 处理软件包的元数据，依赖等等
* `.BUILDINFO` 包含了可复现编译所需要的信息
* `.MTREE` 包含了文件的哈希值与时间戳
* `.INSTALL` 可选的文件，可以用来在安装/升级/删除操作之后运行命令
* `.Changelog` 一个可选的文件，保存了包管理员描述软件更新的日志

PKGBUILD 是一个 shell 脚本，包含 Arch Linux 在构建软件包时需要的信息。`pkgname`、`pkgver`、`pkgrel`、`arch` 是必须包含的变量，`license` 在构建包时并不强制要求，但若要分享 PKGBUILD 文件，推荐加上该变量，否则 makepkg 会产生警告

::: details 简单的示例
```ini
pkgname=hello
pkgver=1
pkgrel=1
arch=('x86_64')
package() {
  echo 'Hello World'
}
```
:::

[参阅](https://wiki.archlinux.org/title/PKGBUILD)，[官方 PKGBUILD 示例](https://gitlab.archlinux.org/pacman/pacman/raw/master/proto/PKGBUILD.proto)
