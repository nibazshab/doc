# 使用笔记

<br>

## 建立软连接

1. 管理员权限打开 PowerShell
2. 输入 `mklink /d d:\link d:\target`

## 开启 UTF-8 语言环境

1. 时间和语言
2. 语言
3. 管理语言设置
4. 更改系统区域设置
5. 开启 `Bate 版: 使用 Unicode UTF-8 提供全球语言支持`

## 优化资源占用

1. 计算机管理
2. 服务和应用程序
3. 禁用 `Connected User Experiences and Telemetry`
4. 系统
5. 关于
6. 高级系统设置
7. 性能
8. 启用 `平滑屏幕字体边缘`、`显示缩略图`、`显示亚透明的选择长方形`、`在窗口下显示阴影`

## Win Shift S 截图路径

`%LOCALAPPDATA%\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip`

## 将硬件时间视为 UTC 时间

1. 管理员权限打开 PowerShell
2. 输入 `Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1`

## NVIDIA 控制面板闪退

1. 打开 `C:\ProgramData\NVIDIA Corporation\Drs`
2. 将 nvdrsdb0.bin、nvdrsdb1.bin 文件删除
