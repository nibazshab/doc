# 问题记录 <Badge text="windows 10" />

<br>

本文记录一些在安装 / 使用过程中遇到的问题和一些有助于提高体验的东西。内容收集自网络，请自行甄别是否适用

## 特殊目录

User 程序目录 %LOCALAPPDATA%\Programs

用户级开机自启 %APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup

系统级开机自启 %PROGRAMDATA%\Microsoft\Windows\Start Menu\Programs\StartUp

## 启用 PDF 虚拟打印机

1. 控制面板
2. 程序和功能
3. 启用或关闭Windows功能
4. 勾选 __Microsoft Print to PDF__

## PATH 环境变量

1. 系统
2. 高级系统设置
3. 环境变量

## 关闭睡眠和锁定按钮

1. 电源选项
2. 选择电源按钮功能
3. 更改当前不可用的设置
4. 取消勾选 __睡眠__，__锁定__

## 软连接系统截图目录

将 Win+Shift+S 截图链接到 __图片__ 目录

1. 管理员权限打开 PowerShell
2. 输入 mklink /d %HOMEPATH%\Pictures\screenshot %LOCALAPPDATA%\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip

## 开启 UTF-8 语言环境

1. 时间和语言
2. 语言
3. 管理语言设置
4. 更改系统区域设置
5. 勾选 __Bate 版: 使用 Unicode UTF-8 提供全球语言支持__

## 禁用收集体验信息服务

1. 计算机管理
2. 服务和应用程序
3. 禁用 __Connected User Experiences and Telemetry__

## 修改动画效果

1. 系统
2. 高级系统设置
3. 性能
4. 勾选 __平滑屏幕字体边缘__，__显示缩略图__，__显示亚透明的选择长方形__，__在窗口下显示阴影__

## 将硬件时间视为 UTC 时间

1. 管理员权限打开 PowerShell
2. 输入 Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1

## NVIDIA 控制面板闪退

1. 打开 C:\ProgramData\NVIDIA Corporation\Drs
2. 删除 nvdrsdb0.bin 和 nvdrsdb1.bin
