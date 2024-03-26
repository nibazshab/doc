# EPUB 电子书文件拆解

EPUB 是电子出版物的一种开放标准格式

## 文件结构

EPUB 实质上是一个可以解压的 zip 归档文件，内部文件结构示例如下。带有 __文件__ 字样的为必须

- mimetype 描述文件
- META-INF
  - container.xml 描述文件
- OEBPS
  - content.opf 元数据文件
  - Styles
    - style.css 排版样式
  - Text
    - cover.xhtml 封面
    - titlepage.xhtml 扉页
    - colophon.xhtml 版权
    - message.xhtml 制作信息
    - prologue.xhtml 前言
    - illustration.xhtml 彩插
    - content.xhtml 目录
    - 001.xhtml 章节一
    - 002.xhtml 章节二
    - epilogue.xhtml 后记
    - about.xhtml 关于
    - contect.xhtml 联系方式
    - backcover.xhtml 封底
    - pamphlet.xhtml 特典小册子
    - nav.xhtml 目录文件
  - Images
    - cover.jpg 封面图
    - backcover.jpg 封底图
    - 00100.jpg 第一章标题图
    - 00101.jpg 第一章图一
    - 10001.jpg 彩插一图一
    - 10101.jpg 彩插二图一

## 各文件详细内容

mimetype 和 META-INF/container.xml 为描述文件，通常不对其进行修改。OEBPS 是电子书的数据目录，所有的制作都在该目录下进行

::: details mimetype

```console
application/epub+zip
```

:::

::: details META-INF/container.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
   </rootfiles>
</container>
```

:::

封面示例，通常由电子书制作工具自动生成

::: details cover.xhtml

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title>Cover</title>
</head>

<body>
  <div style="height: 100vh; text-align: center; padding: 0pt; margin: 0pt;">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 876 1251" width="100%" xmlns:xlink="http://www.w3.org/1999/xlink"><image width="876" height="1251" xlink:href="../Images/cover.jpg"/></svg>
  </div>
</body>
</html>
```

:::

章节内容模板如下

::: details .xhtml

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title></title>
  <link href="../Styles/style.css" rel="stylesheet" type="text/css"/>
</head>

<body>
  <img src="../Images/00100.jpg"/>

  <h3>第一话</h3>

  <h2>与天使大人的相遇</h2>

  <p>...</p>

  <img src="../Images/00101.jpg"/>

  <p>...</p>
</body>
</html>
```

:::

目录文件示例，通常由电子书制作工具自动生成

::: details nav.xhtml

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title></title>
  <link href="../Styles/style.css" rel="stylesheet" type="text/css"/>
  <style>nav{display:none;}</style>
</head>

<body>
  <nav epub:type="toc" id="toc" role="doc-toc"><h1>目录</h1>

  <ol>
    <li><a href="Text/cover.xhtml">封面</a></li>

    <li><a href="Text/message.xhtml">制作信息</a></li>

    <li><a href="Text/summary.xhtml">简介</a></li>

    <li><a href="Text/001.xhtml">第一话 与天使大人的相遇</a></li>

    <li><a href="Text/002.xhtml">第二话 感冒与天使大人的照料</a></li>

    <li><a href="Text/003.xhtml">第三话 天使大人的赠物</a></li>

    <li><a href="Text/004.xhtml">第四话 偶然的相遇</a></li>

    <li><a href="Text/005.xhtml">后记</a></li>
  </ol></nav>
</body>
</html>
```

:::

排版样式示例如下

::: details style.css

```css
nav,nav * {
    display: none;
    height: 0 !important;
    line-height: 0 !important;
    font-size: 0 !important;
    font-family: initial !important;
}

h2,h3 { text-align: center; }

img {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.center { text-align: center; }

.right { text-align: right; }

.fontsize200 { font-size: 200%; }

.fontsize150 { font-size: 150%; }

.fontsize120 { font-size: 120%; }

.fontsize95 { font-size: 95%; }

.fontsize85 { font-size: 85%; }

.logo { width: 6em; }

.qrcode { width: 4em; }
```

:::

元数据文件示例，通常由电子书制作工具自动生成

::: details content.opf

```xml
<?xml version="1.0" encoding="utf-8"?>
<package version="3.0" unique-identifier="BookId" xmlns="http://www.idpf.org/2007/opf">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:language>zh</dc:language>
    <dc:title>书名</dc:title>
    <dc:creator opf:role="aut">作者</dc:creator>
    <meta property="dcterms:modified">时间</meta>
    <meta name="cover" content="cover.jpg" />
  </metadata>
  <manifest>
    <item id="x001.xhtml" href="Text/001.xhtml" media-type="application/xhtml+xml"/>
    <item id="style.css" href="Styles/style.css" media-type="text/css"/>
    <item id="nav.xhtml" href="Text/nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="x002.xhtml" href="Text/002.xhtml" media-type="application/xhtml+xml"/>
    <item id="x003.xhtml" href="Text/003.xhtml" media-type="application/xhtml+xml"/>
    <item id="x004.xhtml" href="Text/004.xhtml" media-type="application/xhtml+xml"/>
    <item id="x005.xhtml" href="Text/005.xhtml" media-type="application/xhtml+xml"/>
    <item id="cover.xhtml" href="Text/cover.xhtml" media-type="application/xhtml+xml" properties="svg"/>
    <item id="cover.jpg" href="Images/cover.jpg" media-type="image/jpeg" properties="cover-image"/>
    <item id="summary.xhtml" href="Text/summary.xhtml" media-type="application/xhtml+xml"/>
    <item id="message.xhtml" href="Text/message.xhtml" media-type="application/xhtml+xml"/>
    <item id="x5.jpg" href="Images/5.jpg" media-type="image/jpeg"/>
    <item id="x4.jpg" href="Images/4.jpg" media-type="image/jpeg"/>
    <item id="x3.jpg" href="Images/3.jpg" media-type="image/jpeg"/>
    <item id="x2.jpg" href="Images/2.jpg" media-type="image/jpeg"/>
    <item id="x1.jpg" href="Images/1.jpg" media-type="image/jpeg"/>
    <item id="x6.jpg" href="Images/6.jpg" media-type="image/jpeg"/>
    <item id="x7.jpg" href="Images/7.jpg" media-type="image/jpeg"/>
  </manifest>
  <spine>
    <itemref idref="cover.xhtml"/>
    <itemref idref="message.xhtml"/>
    <itemref idref="summary.xhtml"/>
    <itemref idref="nav.xhtml" linear="no"/>
    <itemref idref="x001.xhtml"/>
    <itemref idref="x002.xhtml"/>
    <itemref idref="x003.xhtml"/>
    <itemref idref="x004.xhtml"/>
    <itemref idref="x005.xhtml"/>
  </spine>
</package>
```

:::
