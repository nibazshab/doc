# Wallpaper Engine

<br>

## 创意工坊下载问题

如果在自己的电脑上登录了别人的 Steam 账号，而恰好那个账号也拥有 Wallpaper 软件，且订阅了大量的创意工坊内容，则会导致 Steam 持续下载该账号所订阅的内容，即使换回账号也不会停止

通过修改 Steam Wallpaper Engine 配置文件可解决此问题，打开 `steam\steamapps\workshop\appworkshop_431960.acf`，找到以下两个配置项

```json
...
  "WorkshopItemsInstalled"
  { ... }
  "WorkshopItemDetails"
  { ... }
```

* `WorkshopItemsInstalled` 当前电脑上已安装的内容
* `WorkshopItemDetails` 已订阅的内容

在电脑上登陆过别的 Steam 账号之后，Steam 会自动将该账号的 Wallpaper 所订阅的创意工坊的内容添加到 WorkshopItemDetails 中，导致两者的内容不匹配，因此只需要把 WorkshopItemsInstalled 的内容替换掉 WorkshopItemDetails 的即可
