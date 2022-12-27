# Shell 笔记

<br>

作用|指令
-|-
批量压缩 jpeg 图片|`find -name '*.jpg' \| xargs jpegoptim --strip-all --all-progressive -o -f --max=50%`
ffmpeg 快速转换格式|`ffmpeg -i input.avi -c:v copy -c:a copy output.mp4`
搜索文本内容|`grep -rn 'abc' /path`
ssh 上传文件|`scp /file user@host:/path`
flac 转 wav|`flac -d <file>.flac`
wav 转 flac|`flac -s --compression-level-5 <file>.wav`
创建 screen 后台运行会话|`screen -dmS <session_name> <command>`
查看 screen 会话|`screen -ls`
进入 screen 会话|`screen -r <session_name>`
以 nobody 用户的身份运行指令|`su nobody -s /bin/bash -c '<command>'`
生成 ed25519 加密格式 ssh 密钥|`ssh-keygen -t ed25519`
导出分区表文件|`sfdisk -d /dev/sdb > sdb.bkp`
导入分区表文件|`sfdisk /dev/sdb < sdb.bkp`
查找 c 文件，重命名为 01.c、02.c|`i=1; for file in $(find -name "*.c"); do mv $file $(printf "%0.2d.c" $i); i=$(($i+1)); done`
无限重复指令|`while true; do <command>; done`
读取带空格的文件名|`IFS_old=$IFS;IFS=$"\n"; for file in $(ls); do echo $file; done; IFS=$IFS_old`
后台运行指令，记录日志|`nohup <command> > log 2>&1 &; disown`
rclone 挂载云盘为本地目录，并设置缓存路径|`rclone mount name:/path /path --cache-dir /path --vfs-cache-mode writes`
文件传输，保留元数据并限制速率 500k|`rsync -avzhP --bwlimit=500 /path /path`
sed 替换文件内容|`sed -i s/a/b/g file`
设置 ls 颜色|`export LS_COLORS='rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=00:tw=30;42:ow=34;42:st=37;44:ex=01;93'`


---

正则表达式|匹配结果
-|-
`.*(a\|b).*`|包含 a 或 b 的行
`^.{5}`|行首 5 个字符
`.{5}$`|行末 5 个字符
`[^\x00-\x7F]`|非 ASCII 字符
`\d`|数字
`$`|行末
`^`|行首

---

VIM 指令|作用
-|-
`sort`|字母表顺序排列每一行
`set pastetoggle=<F9>`|设置 f9 为开关自动缩进的快捷键
`set paste`|关闭自动缩进
`set nopaste`|开启自动缩进
