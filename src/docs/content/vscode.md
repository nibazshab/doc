# VS Code 代码编辑器

[Visual Studio Code](https://code.visualstudio.com) 是一款由微软开发且跨平台的免费源代码编辑器。该软件支持语法高亮、代码自动补全、代码重构功能，并且内置了命令行工具和 Git 版本控制系统。用户可以更改主题和键盘快捷方式实现个性化设置，也可以通过内置的扩展程序商店安装扩展以拓展软件功能

## 安装

Arch 系的 Linux 系统，从 Aur 安装 `visual-studio-code-bin` 即可，其他请参考各自的安装方法，或前往 [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download) 下载对应的包安装

Windows 系统直接前往 [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download) 下载安装即可

## 设置项

```json
"editor.fontFamily": "Source Code Pro, 思源黑体"

"files.exclude": {
  "*.code-workspace": true
}
```

## 快捷键记录

快捷键|-
-|-
Alt + Shift + F|格式化代码
Ctrl + Shift + U/I|转换大小写
Ctrl + /|注释选定的行

## 扩展推荐

工具|-
-|-
Live Server|Web 页面服务器
Office Viewer|实时渲染 Md 编辑器
Cdoe Runner|运行代码

Language|-|-
-|-|-
Python|Python|Pylance
Go|Go
Rust|rust-analyzer

主题|-|-
-|-|-
浅色|GitHub Light Theme|Office Theme
深色|One Dark Pro
