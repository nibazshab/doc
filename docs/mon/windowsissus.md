# 问题记录 <Badge text="windows 10" />

<br>

## 开机自启目录

系统级自启「%PROGRAMDATA%\Microsoft\Windows\Start Menu\Programs\StartUp」

用户级自启「%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup」

## PATH 环境变量

1. 系统
2. 高级系统设置
3. 环境变量

## 关闭睡眠和锁定按钮

1. 电源选项
2. 选择电源按钮功能
3. 更改当前不可用的设置
4. 取消勾选「睡眠」「锁定」

## 软连接系统截图到图片目录

将 Win+Shift+S 截图链接到「图片」目录

1. 管理员权限打开 PowerShell
2. 输入「mklink /d %LOCALAPPDATA%\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip %HOMEPATH%\Pictures\screenshot」

## 开启 UTF-8 语言环境

1. 时间和语言
2. 语言
3. 管理语言设置
4. 更改系统区域设置
5. 勾选「Bate 版: 使用 Unicode UTF-8 提供全球语言支持」

## 禁用收集体验信息服务

1. 计算机管理
2. 服务和应用程序
3. 禁用「Connected User Experiences and Telemetry」

## 修改动画效果

1. 系统
2. 高级系统设置
3. 性能
4. 勾选「平滑屏幕字体边缘」「显示缩略图」「显示亚透明的选择长方形」「在窗口下显示阴影」

## 将硬件时间视为 UTC 时间

1. 管理员权限打开 PowerShell
2. 输入

「Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1」

## NVIDIA 控制面板闪退

1. 打开 C:\ProgramData\NVIDIA Corporation\Drs
2. 将「nvdrsdb0.bin」和「nvdrsdb1.bin」文件删除
