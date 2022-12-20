# 文档

<br>

## 优化

计算机管理 -> 服务和应用程序 -> 禁用「Connected User Experiences and Telemetry」

设置 -> 高级系统设置 -> 视觉效果 -> 启用「平滑屏幕字体边缘」「显示缩略图」「显示亚透明的选择长方形」「在窗口下显示阴影」

## 好用的软件

### qq-dreamcast

## Win+Shift+S 截图保存路径

`C:\Users\93610\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip`

## NVIDIA 控制面板闪退

`C:\ProgramData\NVIDIA Corporation\Drs` 目录下，将 nvdrsdb0.bin nvdrsdb1.bin 等文件删除

## UTC 硬件时间

`Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1`

## utf-8 语言环境

设置 -> 时间和语言 -> 语言 -> 管理语言设置 -> 更改系统区域设置 -> 选择 「Bate 版: 使用 Unicode UTF-8 提供全球语言支持」


### 16.1. Intel 核显

输入 `pacman -S vulkan-intel mesa` 安装 Intel 核显驱动，输入 `pacman -S lib32-vulkan-intel lib32-mesa` 安装 32 位 Intel 核显驱动

<CodeGroup>
  <CodeGroupItem title="X64">

```shell
> pacman -S vulkan-intel mesa
```

  </CodeGroupItem>
  <CodeGroupItem title="X86">

```shell
> pacman -S vulkan-intel mesa lib32-vulkan-intel lib32-mesa
```

  </CodeGroupItem>
</CodeGroup>

### 16.2. NVIDIA 独显

输入 `pacman -S nvidia nvidia-settings nvidia-prime` 安装 NVIDIA 独显驱动，输入 `pacman -S lib32-nvidia-utils` 安装 32 位 NVIDIA 独显驱动


<CodeGroup>
  <CodeGroupItem title="x64">

```shell
> pacman -S nvidia nvidia-settings nvidia-prime
```

  </CodeGroupItem>
  <CodeGroupItem title="x86">

```shell
> pacman -S nvidia nvidia-settings nvidia-prime
> pacman -S lib32-nvidia-utils
```

  </CodeGroupItem>
</CodeGroup>

::: details 测试
[[toc]]
:::
