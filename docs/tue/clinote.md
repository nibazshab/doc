# 命令行笔记

<br>

- `ls -v` 按自然顺序列出文件
- `for i in {1..10}` 取 i 值为 1 到 10
- `-e file` 判断 file 是否存在
- `sed -n "5 p" file` 读取文件的第 5 行
- `sed -i s/a/b/g a` 替换文件内容
- `grep -rn 'abc' /a` 搜索文本内容
- `b=${a%)*}` 去除 a 变量中 ) 右边所有内容
- `b=${a#*(}` 去除 a 变量中 ( 左边所有内容
- `openssl enc -aes-256-cbc -pbkdf2 -salt -in a.base64 -out a.base64.enc.aes256cbc` 加密文件
- `openssl enc -aes-256-cbc -pbkdf2 -salt -d -in a.base64.enc.aes256cbc -out a.base64` 解密文件
- `i=1; for a in $(find -name '*.c'); do mv $a $(printf "%0.2d.c" $i); i=$(($i+1)); done` 查找 c 文件，重命名为 01.c、02.c
- `while true; do <command>; done` 无限重复指令
- `IFS_old=$IFS;IFS=$'\n'; <command>; IFS=$IFS_old` 读取带空格的文件名
- `nohup <command> &; disown` 后台运行指令，记录日志
- `scp <-r> /a user@host:/a` 使用 ssh 通道上传文件/文件夹
- `ssh-keygen -t ed25519` 生成 ed25519 加密的 ssh 密钥
- `su nobody -s /bin/bash -c '<command>'` 以 nobody 用户的身份运行指令
- `LS_COLORS='rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=00:tw=30;42:ow=34;42:st=37;44:ex=01;93'` 设置 ls 的颜色

---

- `curl -F file=@name file.io` 上传文件并获取链接
- `git log --grep=<comment>` 搜索提交记录的版本号
- `git reset --hard <commit_id>` 回退到指定版本
- `jpegoptim --strip-all --all-progressive -o -f --max=50% a.jpg` 压缩 jpg 图片大小
- `optipng a.png` 压缩 png 图片大小
- `flac -d a.flac` flac 转 wav
- `flac -s --compression-level-5 a.wav` wav 转 flac
- `flac a.flac -V -s --best --no-error-on-compression-fail -o b.flac` flac 重新编码
- `ffmpeg -i input.avi -c:v copy -c:a copy output.mp4` ffmpeg 快速转换格式
- `screen -dmS <session_name> <command>` 创建 screen 后台运行会话
- `screen -ls` 查看 screen 会话
- `screen -r <session_name>` 进入 screen 会话
- `rclone mount name:/a /b --cache-dir /c --vfs-cache-mode writes` rclone 挂载云盘为本地目录，并设置缓存路径
- `rsync -avzhP --bwlimit=500 /a /b` 文件传输，保留元数据并限制速率 500k
- `sfdisk -d /dev/sdb > sdb.bkp` 导出分区表文件
- `sfdisk /dev/sdb < sdb.bkp` 导入分区表文件

---

Android Debug Bridge 

- `adb shell pm disable-user <package_name>` 冻结应用
- `adb shell pm enable <package_name>` 解冻应用
- `adb shell pm list packages -s -d` 列出已冻结的应用

---

VIM 编辑器

- `sort` 字母表顺序排列每一行
- `set pastetoggle=<F9>` 设置 f9 为开关自动缩进的快捷键
- `set paste` 关闭自动缩进
- `set nopaste` 开启自动缩进
- `:%!xxd` 开启十六进制模式
- `%!xxd -r` 关闭十六进制模式

---

正则表达式

式|说明|式|说明
-|-|-|-
`.*(a\|b).*`|包含 a 或 b 的行|`[^\x00-\x7F]`|非 ASCII 字符
`^.{5}`|行首 5 个字符|`.{5}$`|行末 5 个字符
`\d`|数字|`^[ \t]*$`|空行
`^`|行首|`$`|行末

---

特殊字符

字符|说明|Unicode
-|-
`　`|空白字符|\u3000
