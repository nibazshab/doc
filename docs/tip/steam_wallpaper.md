# Wallpaper 关闭自动下载


## 起因

在自己电脑上登录了别人的 steam 账号，恰好那个账号也有 wallpaper，且订阅了大量内容，再次登录回自己 steam 之后，steam 会不停的下载那个账号所订阅的 wallpaper 创意工坊的内容

## 思路

打开 `steam\steamapps\workshop\appworkshop_431960.acf`

```json{3,5}
"AppWorkshop"
  ...
  "WorkshopItemsInstalled"    // 已订阅的内容
    ...
  "WorkshopItemDetails"       // 已安装的内容
    ...
```

## 具体方法

* 把 `WorkshopItemDetails` 中的内容复制到 `WorkshopItemsInstalled`，欺骗 steam 认为已经安装了这些内容

* 将 `WorkshopItemDetails` 和 `WorkshopItemsInstalled` 的内容全部删除，再重新订阅
