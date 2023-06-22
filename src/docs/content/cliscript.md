# 命令行笔记

<br>

## Shell

- `export all_proxy=http://ip:port` 设置代理
- `find -type f ! -name "*.*" -exec sh -c 'file "{}" | grep executable >/dev/null' \; -print` 查找可执行文件
- `ldd file` 检测 file 文件的依赖情况
- `exec ls` 执行完 ls 命令后退出当前 shell
- `ls -v` 按自然顺序列出文件
- `for i in {1..10}` 取 i 值为 1 到 10
- `-e file` 判断 file 是否存在
- `sed -i 'x i\abc' file` 在第 x 行前插入 abc
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
- `curl -F file=@name file.io` 上传文件并获取链接
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

## Docker

- `docker compose logs -f` 查看 docker 容器日志
- `docker compose up -d` 启动 docker 容器
- `docker compose down` 移除 docker 容器
- `docker compose pull` 更新 docker 容器
- `docker system prune -a` 清理所有不在使用的 docker 容器/镜像/网络
- `docker inspect <id> --format "{{.Path}} {{.Args}}"` 查看 docker 容器启动后执行的命令
- `docker save <id> -o <id>.tar` 导出 docker 镜像
- `docker login/logout` 登录/登出 dockerhub 账号
- `docker build -t <id> .` 构建 docker 镜像
- `docker push <id>` 推送 docker 镜像到 dockerhub

## Git

- `git update-index --chmod=+x a.sh` 为 git 仓库中的文件添加可执行权限
- `git log --grep=<comment>` 搜索提交记录的版本号
- `git reset --hard <commit_id>` 回退到指定版本
- `git log -S "查找的文本内容" -p` 查找历史中的文本内容
- `git push -f` 强制推送

## Android

- `adb shell pm disable-user <package_name>` 冻结应用
- `adb shell pm enable <package_name>` 解冻应用
- `adb shell pm list packages -s -d` 列出已冻结的应用

## VIM

- `sort` 字母表顺序排列每一行
- `set pastetoggle=<F9>` 设置 f9 为开关自动缩进的快捷键
- `set paste` 关闭自动缩进
- `set nopaste` 开启自动缩进
- `:%!xxd` 开启十六进制模式
- `%!xxd -r` 关闭十六进制模式
