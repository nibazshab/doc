# 不知道放哪的东西

<br>

## Mobile Game

::: details 仅供测试或交流学习使用，内容来自网络

张民 110105197001137135

:::

---

王者荣耀 q 币充点券，仅限安卓 qq 区游戏号可用

> https://pay.qq.com/h5/index.shtml?m=buy&c=game&dialog=0&midasApiVersion=5&transactionid=CC8E5656-EEC9-4ADD-865E-D4D81C258D691558348901265&dh=1&pf=mds_storeopen_qb-_mds_default_v1_0_0.navgame_v1.0-android&appid=1450002258&zoneid=(区号+1010)&n=(点卷数量)&as=1&aid=&wxAppid2=wx951bdcac522929b6&u=(游戏qq号)

- `区号+1010` 填写游戏账号所在的大区号 + 1010 所得到的数字，例如游戏账号在 153 区，则填写 1163
- `点卷数量` 填写要充值的点卷数量，例如 10 点券，则填写 10
- `游戏 qq 号` 填写游戏账号拥有人的 qq 号，例如游戏账号是用张三的 qq 号 66600000 注册的，则填写 66600000

::: details 示例

- 大区：手q 153 区
- 点券：10
- 游戏 qq 号：66600000

```
https://pay.qq.com/h5/index.shtml?m=buy&c=game&dialog=0&midasApiVersion=5&transactionid=CC8E5656-EEC9-4ADD-865E-D4D81C258D691558348901265&dh=1&pf=mds_storeopen_qb-_mds_default_v1_0_0.navgame_v1.0-android&appid=1450002258&zoneid=1163&n=10&as=1&aid=&wxAppid2=wx951bdcac522929b6&u=66600000
```

:::

填完相关信息后，把括号删除，充值人在 qq 内点击该链接，即可使用 q 币为被充值人的游戏账号充值点券

## Web Service

- nginx 配置站点伪静态

在 nginx 配置文件中站点的 `server` 模块中添加 `location / { try_files $uri $uri/ /index.php?$args; }`

- typecho 上传目录无法写入，将安装目录下的 usr/uploads 目录的权限设置为可写

检查 php-fpm 和 nginx 用户是否一致，把 php-fpm.service 的 `ProtectSystem=full` 行删除

- 域名 dns 解析到 github pages

```ini
@                                   A        3600    185.199.108.153
@                                   A        3600    185.199.109.153
@                                   A        3600    185.199.110.153
@                                   A        3600    185.199.111.153
www                                 CNAME    3600    username.github.io
_GITHUB-PAGES-CHALLENGE-USERNAME    TXT      3600    xxxxxxxxxxxxxxxxxx
```

## Grub ISO

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

::::
