# 终端指令 && 正则表达式


## 终端指令

### 循环执行命令

仅在当前目录查找 jpg 后缀的文件，并重命名为 001.jpg, 002.jpg...

```sh
i=1;for FILE in $(find -maxdepth 1 -name "*.jpg");do mv $FILE $(printf "%0.3d.jpg" $i);let i=i+1;done
```

### 无限循环

循环搜索名称包含输入字符的文件，并显示

```sh
for ((;;));do read -p "名称: " a;find -name "*$a*";echo;done
```

### 读取带空格的文本

获取当前目录下所有文件名，并保存到 a.txt

```sh
IFS_old=$IFS;IFS=$'\n';for FILE in $(ls);do echo $FILE >> a.txt;done;IFS=$IFS_old
```

### tar 备份系统

> 需要以 `root` 权限运行，`bz2` 比 `gz` 压缩率高，耗时更长

压缩 / 备份

<code-group>
  <code-block title="GZ" active>
  ```
  tar cvpzf backup.tar.gz / --exclude=/lost+found --exclude=/mnt --exclude=/proc --exclude=/sys --exclude=backup.tar.gz
  ```
  </code-block>

  <code-block title="BZ2">
  ```
  tar cvpjf backup.tar.bz2 / --exclude=/proc --exclude=/lost+found --exclude=/mnt --exclude=/sys --exclude=backup.tar.bz2
  ```
  </code-block>
</code-group>

解压 / 还原

<code-group>
  <code-block title="GZ" active>
  ```
  tar xvpfz backup.tar.gz -C /
  ```
  </code-block>

  <code-block title="BZ2">
  ```
  tar xvpfj backup.tar.bz2 -C /
  ```
  </code-block>
</code-group>

### 后台运行 a

防止 a 进程随终端被关闭，并记录日志

```sh
nohup ./a > ~/log 2>&1 & ; disown
```

### rclone 挂载

把 onedrive 挂载为本地目录，并设置缓存目录

```sh
rclone mount od:/ /mnt/od --cache-dir /tmp/od --vfs-cache-mode writes
```

### rsync 同步

把 /mnt/od 中的文件同步到 /mnt/gd 中，并限制速率 800k/s

```sh
rsync -avzP --bwlimit=800 /mnt/od mnt/gd
```

### 指定 80 端口运行 a
  
```sh
./a --port 80
```

### 行首添加内容

在 a.txt 行首添加内容 b

```sh
sed -i "s/^/b&/g" a.txt
```

### 行尾添加内容

在 a.txt 行尾添加内容 b

```sh
sed -i "s/$/&b/g" a.txt
```

### 删除行尾 3 个字符

```sh
sed -i 's/.\{5\}$//' a.txt
```

## 正则表达式

### 包含a或者b的行
- `^.*(a|b).*\n`

### 每行末尾3个字符
- `[^]{3}$`

### 每行开头3个字符
- `^[^]{3}`
