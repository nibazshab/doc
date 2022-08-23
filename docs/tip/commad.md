# 指令集

<br>

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
| - | - |
| ^.(a\|b).\n | 包含 a 或 b 的行 |
| [^]{3}$ | 每行末尾的 3 个字符 |
| ^[^]{3} | 每行开头的 3 个字符 |
