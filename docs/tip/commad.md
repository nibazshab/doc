# 指令集

<br>

::: details 导出分区表文件
`sfdisk -d /dev/sdb > sdb.bkp`
:::

::: details 导入分区表文件
`sfdisk /dev/sdb < sdb.bkp`
:::

::: details 查找 jpg 后缀的文件，并重命名为 001.jpg, 002.jpg...
`i=1; for FILE in $(find -name "*.jpg"); do; mv $FILE $(printf "%0.3d.jpg" $i); let i=i+1; done`
:::

::: details 无限循环
`for ((;;)); do; <command>; done`
:::

::: details 获取当前目录下所有文件名，包括含有空格的名称，保存到 a.txt
`IFS_old=$IFS;IFS=$'\n'; for FILE in $(ls); do echo $FILE >> a.txt; done; IFS=$IFS_old`
:::

::: details 后台运行指令，并记录日志
`nohup <command> > ~/log 2>&1 & ; disown`
:::

::: details 利用 rclone 把 onedrive 挂载为本地目录，并设置缓存目录
`rclone mount od:/ /mnt/od --cache-dir /tmp/od --vfs-cache-mode writes`
:::

::: details 使用 rsync 把 /mnt/od 中的文件同步到 /mnt/gd 中，并限制速率 800k/s
`rsync -avzP --bwlimit=800 /mnt/od mnt/gd`
:::

::: details 指定 80 端口运行 a
`./a --port 80`
:::

::: details 在 a.txt 行首添加内容 b
`sed -i "s/^/b&/g" a.txt`
:::

::: details 在 a.txt 行尾添加内容 b
`sed -i "s/$/&b/g" a.txt`
:::

::: details 删除行尾 5 个字符
`sed -i 's/.\{5\}$//' a.txt`
:::

<br>

---

<br>

| 正则表达式 | 匹配结果 |
| - | - |
| ^.(a\|b).\n | 包含 a 或 b 的行 |
| [^]{3}$ | 每行末尾的 3 个字符 |
| ^[^]{3} | 每行开头的 3 个字符 |
