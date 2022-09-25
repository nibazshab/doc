# 指令集

<br>

::: details flac 和 wav 转换 
flac to wav：`flac -d <file>.flac`

wav to flac：`flac -s --compression-level-5 <file>.wav`
:::

::: details screen 后台会话
`screen -dmS <session_name>  <command>` 创建一个新的 screen 会话并在后台运行

`screen -ls` 查看 screen 会话

`screen -r <session>` 进入 screen 会话
:::

::: details nobody 用户执行指令
用于不想创建普通用户，又不能以 root 用户进行的情况

`su nobody -s /bin/bash -c '<command>'`
:::

::: details ssh keys 生成
ed25519 较 rsa 速度快，且安全性更高，更为先进

`ssh-keygen -t ed25519`
:::

::: details grub 安装
MBR：`grub-install --target=i386-pc /dev/sdb`

GPT：`grub-install --target=x86_64-efi --efi-directory=/boot/EFI --bootloader-id=GRUB`

`grub-mkconfig > /boot/grub/grub.cfg`
:::

::: details 重设磁盘的读写权限
`mount -o rw,remount /dev/sdb1`
:::

::: details 等待上一条的指令完成
`wait`
:::

::: details 导出分区表文件
`sfdisk -d /dev/sdb > sdb.bkp`
:::

::: details 导入分区表文件
`sfdisk /dev/sdb < sdb.bkp`
:::

::: details 查找 jpg 文件，重命名为 001.jpg, 002.jpg...
`i=1`  
`for file in $(find -name "*.jpg"); do`  
&ensp;&ensp;&ensp;&ensp;`mv $file $(printf "%0.3d.jpg" $i)`  
&ensp;&ensp;&ensp;&ensp;`let i=i+1`  
`done`
:::

::: details 无限重复指令
`while true; do`  
&ensp;&ensp;&ensp;&ensp;`<command>`  
`done`
:::

::: details 获取当前目录下所有文件名
`IFS_old=$IFS;IFS=$"\n"`  
`for file in $(ls); do`  
&ensp;&ensp;&ensp;&ensp;`echo $file`  
`done`  
`IFS=$IFS_old`
:::

::: details 后台运行指令，记录日志
`nohup <command> > log 2>&1 &; disown`
:::

::: details rclone 挂载云盘为本地目录，并设置缓存路径
`rclone mount od:/path /path/od --cache-dir /path/tmp --vfs-cache-mode writes`
:::

::: details 文件同步、传输，保留元数据并限制速率 500kb/s
`rsync -avzhP --bwlimit=500 /path/a /path/b`
:::

::: details 指定端口运行程序
`<command> --port 2233`
:::

::: details 在文件行首添加内容
`sed -i "s/^/<text>&/g" file`
:::

::: details 在文件行尾添加内容
`sed -i "s/$/&<text>/g" file`
:::

::: details 删除文件行尾的 5 个字符
`sed -i "s/.\{5\}$//" file`
:::

<br>

---

<br>

| 正则表达式 | 匹配结果 |
|-|-|
| ^.\*(a\|b).*\n | 包含 a 或 b 的行 |
| [^]{3}$ | 每行末尾的 3 个字符 |
| ^[^]{3} | 每行开头的 3 个字符 |
