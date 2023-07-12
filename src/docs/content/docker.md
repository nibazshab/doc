# Docker

<br>

Docker 是一种将软件程序与应用程序运行所需的所有其他软件，例如操作系统、第三方软件库等捆绑在一起的技术。这样捆绑的软件称为容器

使用 Docker 将应用程序放入容器中的好处是它们可以在不同类型的计算机上运行，例如笔记本电脑和 Web 服务器，而不会存在因缺少软件库或不同操作系统而导致应用程序崩溃的风险不工作

Compose 是用于定义和运行多个容器 Docker 应用程序的工具。通过 Compose，你可以使用 YAML 文件来配置应用程序需要的所有服务，通过使用对应的命令 docker-compose，就可以创建并启动所有服务

scratch 镜像是 Docker 支持的特殊镜像之一，它是一个空白的镜像，不包含任何软件包、库或文件，被用作基础镜像，构建其他镜像

## containerd 默认路径

默认位于 `/opt/containerd`，修改的方法如下

1. 输入 `containerd config default > /etc/containerd/config.toml` 生成默认配置文件
2. 找到 [plugins."io.containerd.internal.v1.opt"]
3. 修改该项的 path 值
4. 输入 `systemctl restart containerd.service` 重启服务

## 换源

创建 `/etc/docker/daemon.json` 文件，并写入如下内容

```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com"
  ]
}
```

输入 `systemctl daemon-reload` 重新加载配置文件，输入 `systemctl restart docker` 重启 docker 服务

## 自制容器镜像

新建镜像目录，创建 rootfs 文件夹，将容器需要的文件按目录层级放入，并于同一级目录创建并编写 Dockerfile 文件

Dockerfile 为构建镜像的配置描述文件，示例

```dockerfile
FROM scratch
RUN chmod +x /entrypoint.sh
COPY rootfs /
ENTRYPOINT ["/entrypoint.sh"]
VOLUME ["/_tmp" "/conf"]
```

- `FROM scratch` 表示基于 scratch 镜像构建
- `COPY` 表示将文件复制到镜像中
- `ENTRYPOINT` 表示容器启动时执行的命令
- `RUN` 表示构建镜像时执行的命令
- `VOLUME` 表示挂载的目录

entrypoint.sh 是容器启动时所执行的脚本文件，示例

```sh
#!/bin/sh
exec /app
```

输入 `docker build -t <id>:<tag> .` 构建镜像

## 命令

- `docker ps -a` 查看所有的容器及状态
- `docker compose logs -f` 查看 docker 容器日志
- `docker compose up -d` 启动 docker 容器
- `docker compose down` 移除 docker 容器
- `docker compose pull` 更新 docker 镜像
- `docker system prune -a` 清理所有不在使用的 docker 镜像

构建相关

- `docker inspect <id> --format "{{.Path}} {{.Args}}"` 查看 docker 容器启动后执行的命令
- `docker save <id> -o <id>.tar` 导出 docker 镜像
- `docker login/logout` 登录/登出 dockerhub 账号
- `docker build -t <id>:<tag> .` 构建 docker 镜像
- `docker push <id>` 推送 docker 镜像到 dockerhub
