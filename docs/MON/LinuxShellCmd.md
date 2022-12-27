# 命令行笔记

<br>

- `find -name '*.jpg'   xargs jpegoptim --strip-all --all-progressive -o -f --max=50%`
  - 批量压缩 jpeg 图片
- `ffmpeg -i input.avi -c:v copy -c:a copy output.mp4`
  - ffmpeg 快速转换格式
- `grep -rn 'abc' /path`
  - 搜索文本内容
- `scp /file user@host:/path`
  - ssh 上传文件
- `flac -d <file>.flac`
  - flac 转 wav
- `flac -s --compression-level-5 <file>.wav`
  - wav 转 flac
- `screen -dmS <session_name> <command>`
  - 创建 screen 后台运行会话
- `screen -ls`
  - 查看 screen 会话
- `screen -r <session_name>`
  - 进入 screen 会话
- `su nobody -s /bin/bash -c '<command>'`
  - 以 nobody 用户的身份运行指令
- `ssh-keygen -t ed25519`
  - 生成 ed25519 加密格式 ssh 密钥
- `sfdisk -d /dev/sdb > sdb.bkp`
  - 导出分区表文件
- `sfdisk /dev/sdb < sdb.bkp`
  - 导入分区表文件
- `i=1; for file in $(find -name "*.c"); do mv $file $(printf "%0.2d.c" $i); i=$(($i+1)); done`
  - 查找 c 文件，重命名为 01.c、02.c
- `while true; do <command>; done`
  - 无限重复指令
- `IFS_old=$IFS;IFS=$"\n"; for file in $(ls); do echo $file; done; IFS=$IFS_old`
  - 读取带空格的文件名
- `nohup <command> > log 2>&1 &; disown`
  - 后台运行指令，记录日志
- `rclone mount name:/path /path --cache-dir /path --vfs-cache-mode writes`
  - rclone 挂载云盘为本地目录，并设置缓存路径
- `rsync -avzhP --bwlimit=500 /path /path`
  - 文件传输，保留元数据并限制速率 500k
- `sed -i s/a/b/g file`
  - sed 替换文件内容
- `LS_COLORS='rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=00:tw=30;42:ow=34;42:st=37;44:ex=01;93'`
  - 设置 ls 颜色

---

正则表达式

- `.*(a b).*` 包含 a 或 b 的行
- `^.{5}` 行首 5 个字符
- `.{5}$` 行末 5 个字符
- `[^\x00-\x7F]` 非 ASCII 字符
- `\d` 数字
- `$` 行末
- `^` 行首

VIM 编辑器

- `sort` 字母表顺序排列每一行
- `set pastetoggle=<F9>` 设置 f9 为开关自动缩进的快捷键
- `set paste` 关闭自动缩进
- `set nopaste` 开启自动缩进
