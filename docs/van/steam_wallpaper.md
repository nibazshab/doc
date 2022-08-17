# Wallpaper Engine

<br>

## 阻止创意工坊自动下载

如果在自己的电脑上登录了别人的 steam 账号，而恰好那个账号也拥有 wallpaper 软件并且订阅了大量的创意工坊内容，就会导致 steam 不停的下载那个账号所订阅的内容且无法停止，即使登录回自己的账号，steam 的下载也不会停止

解决方法如下

打开 `steam\steamapps\workshop\appworkshop_431960.acf`，找到以下两个配置项

```json
  "WorkshopItemsInstalled"
  { ... }
  "WorkshopItemDetails"
  { ... }
```

::: tip 说明
* WorkshopItemsInstalled - 当前电脑上已经安装的内容
* WorkshopItemDetails - 已订阅的内容
:::

当在电脑上登陆过别人的 steam 账号之后，steam 会自动将其所订阅的创意工坊内容添加到 WorkshopItemDetails 之中，导致 WorkshopItemDetails 与 WorkshopItemsInstalled 的内容不匹配，因此只需要将 WorkshopItemDetails 中的多余内容删除即可
