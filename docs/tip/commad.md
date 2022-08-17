# 指令集

<br>

::: tip 导出分区表文件
`sfdisk -d /dev/sdb > sdb.bkp`
:::


::: warning 导入分区表文件
`sfdisk /dev/sdb < sdb.bkp`
:::

::: danger 仅在当前目录查找 jpg 后缀的文件，并重命名为 001.jpg, 002.jpg...
```sh
i=1
for FILE in $(find -maxdepth 1 -name "*.jpg")
do
mv $FILE $(printf "%0.3d.jpg" $i)
let i=i+1
done
```
:::

::: tip 无限循环
`for ((;;)); do; <command>; done`
:::

::: warning 读取带空格的文件名
`IFS_old=$IFS; IFS=$'\n'; <command>; IFS=$IFS_old`
:::

::: danger 防止 a 进程随终端被关闭，并记录日志
`nohup ./a > ~/log 2>&1 & ; disown`
:::

::: tip 利用 rclone 把 onedrive 挂载为本地目录，并设置缓存目录
`rclone mount od:/ /mnt/od --cache-dir /tmp/od --vfs-cache-mode writes`
:::

::: warning 文件同步
rsync -avzP --bwlimit=100 /path/a /path/b
| rsync 参数 | 作用 |
| ---- | ---- |
| -a | 同步所有元数据 |
| -v | 打印详细信息 |
| -z | 启用压缩 |
| -P | 显示进展，允许中断 |
| --exclude= | 排除指定文件 |
| --bwlimit= | 限制传输速率，单位 kb/s |
:::

| <command> 参数 | 作用 |
| ---- | ---- |
| `--port 80` | 指定 80 端口运行 |

::: tip 行首添加内容
`sed -i "s/^/<code>&/g" file`
:::

::: warning 行尾添加内容
`sed -i "s/$/&<code>/g" file`
:::

::: danger 删除行尾 5 个字符
`sed -i 's/.\{5\}$//' file`
:::

<br>

---

<br>

| 正则表达式 | 匹配结果 |
| ---- | ---- |
| ^.*(a\|b).*\n | 包含 a 或 b 的行 |
| [^]{3}$` | 每行末尾的 3 个字符 |
| ^[^]{3}` | 每行开头的 3 个字符 |
