# 指令集

<br>

::: tip
__导出分区表文件__

`sfdisk -d /dev/sdb > sdb.bkp`

__导出分区表文件__

`sfdisk /dev/sdb < sdb.bkp`
:::

::: warning
__仅在当前目录查找 jpg 后缀的文件，并重命名为 001.jpg, 002.jpg...__

`i=1`
`for FILE in $(find -maxdepth 1 -name "*.jpg")`
`do`
`mv $FILE $(printf "%0.3d.jpg" $i)`
`let i=i+1`
`done`
:::

:::
__无限循环__

`for ((;;))`
`do`
`your command`
`done`
:::

:::
__获取当前目录下所有文件名，包括含有空格的名称，保存到 a.txt__

`IFS_old=$IFS;IFS=$'\n'`
`for FILE in $(ls)`
`do echo $FILE >> a.txt`
`done`
`IFS=$IFS_old`
:::

:::
__防止 a 进程随终端被关闭，并记录日志__

`nohup ./a > ~/log 2>&1 & ; disown`
:::

:::
__利用 rclone 把 onedrive 挂载为本地目录，并设置缓存目录__

`rclone mount od:/ /mnt/od --cache-dir /tmp/od --vfs-cache-mode writes`
:::

:::
__使用 rsync 把 /mnt/od 中的文件同步到 /mnt/gd 中，并限制速率 800k/s__

`rsync -avzP --bwlimit=800 /mnt/od mnt/gd`
:::

:::
__指定 80 端口运行 a__
  
`./a --port 80`
:::

:::
__在 a.txt 行首添加内容 b__

`sed -i "s/^/b&/g" a.txt`

__在 a.txt 行尾添加内容 b__

`sed -i "s/$/&b/g" a.txt`
:::

:::
__删除行尾 3 个字符__

`sed -i 's/.\{5\}$//' a.txt`
:::

正则表达式

| 正则表达式 | 匹配结果 |
| ---- | ---- |
| ^.*(a|b).*\n | 包含 a 或 b 的行 |
| [^]{3}$` | 每行末尾的 3 个字符 |
| ^[^]{3}` | 每行开头的 3 个字符 |
