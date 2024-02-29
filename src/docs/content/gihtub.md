# GitHub 使用文档

## 利用 Action 发布 ghpage

```yml
permissions:
  pages: write
  id-token: write

environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}

- name: Upload GitHub Pages artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: '.'

- name: Deploy GitHub Pages site
  id: deployment
  uses: actions/deploy-pages@v4
```

## 下载源代码存档

仓库分支存档的下载链接：github.com/USER/REPO/archive/refs/heads/BRANCH.tar.gz

Release 最新版本的下载链接：github.com/USER/REPO/releases/latest/download/ASSETS.tar.gz
