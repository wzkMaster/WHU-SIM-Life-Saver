# Markdown 排版规范

[[toc]]

## 空格

### 中英文之间需要增加空格

正确：

> 在 LeanCloud 上，数据存储是围绕 AVObject 进行的。

错误：

> 在LeanCloud上，数据存储是围绕AVObject进行的。

> 在 LeanCloud上，数据存储是围绕AVObject 进行的。

完整的正确用法：

> 在 LeanCloud 上，数据存储是围绕 AVObject 进行的。每个 AVObject 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 AVObject 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。

例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。

### 中文与数字之间需要增加空格

正确：

> 今天出去买菜花了 5000 元。

错误：

> 今天出去买菜花了 5000元。

> 今天出去买菜花了5000元。

### 数字与单位之间需要增加空格

正确：

> 我家的光纤入户宽带有 10 Gbps，SSD 一共有 20 TB。

错误：

> 我家的光纤入户宽带有 10Gbps，SSD 一共有 10TB。

例外：度／百分比与数字之间不需要增加空格：

正确：

> 今天是 233° 的高温。

> 新 MacBook Pro 有 15% 的 CPU 性能提升。

错误：

> 今天是 233 ° 的高温。

> 新 MacBook Pro 有 15 % 的 CPU 性能提升。

### 全角标点与其他字符之间不加空格

正确：

> 刚刚买了一部 iPhone，好开心！

错误：

> 刚刚买了一部 iPhone ，好开心！

## 全角和半角

不明白什么是全角（全形）与半角（半形）符号？请查看百度百科词条[全角](https://baike.baidu.com/item/%E5%85%A8%E8%A7%92/9323113#:~:text=%E5%8D%8A%E8%A7%92%E5%85%A8%E8%A7%92%E4%B8%BB%E8%A6%81%E6%98%AF%E9%92%88%E5%AF%B9,%E5%AD%98%E5%9C%A8%E5%8D%8A%E8%A7%92%E5%85%A8%E8%A7%92%E7%9A%84%E6%A6%82%E5%BF%B5%EF%BC%89%20%E3%80%82&text=%E5%AF%B9%E4%BA%8E%E5%A4%A7%E5%A4%9A%E6%95%B0%E5%AD%97%E4%BD%93%E6%9D%A5,%E5%BD%93%E7%84%B6%E8%BF%99%E4%B8%8D%E6%98%AF%E6%9C%AC%E8%B4%A8%E5%8C%BA%E5%88%AB%E3%80%82)。

### 使用全角中文标点

正确：

> 嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！

> 核磁共振成像（NMRI）是什么原理都不知道？JFGI！

错误：

> 嗨! 你知道嘛? 今天前台的小妹跟我说 "喵" 了哎!

> 嗨!你知道嘛?今天前台的小妹跟我说"喵"了哎!

> 核磁共振成像(NMRI)是什么原理都不知道?JFGI!

### 数字使用半角字符

正确：

> 这件蛋糕只卖 1000 元。

错误：

> 这件蛋糕只卖 １０００ 元。

### 遇到完整的英文整句、特殊名词，其內容使用半角标点

正确：

> 乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」

> 推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。

错误：

> 乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」

> 推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

## 其他

### 只使用 1～3 级标题

`vitepress` 的四级标题渲染有一些问题，会跟相邻的3级标题挤在一起。所以建议只使用 1～3 级标题。

如果实在需要第4级以上的标题，直接用加粗文本就可以。例如：

输入：

```markdown
### 3级标题

**4级标题**
```

输出：

![](/source/2023-05-12-15-09-22.png)

**错误**：

输入：

```markdown
### 3级标题

#### 4级标题
```

输出：

![](/source/2023-05-12-15-08-48.png)

### 缩进

出现多层列表嵌套的情况时，记得处理好文字和图片的缩进。

**正确示范：**

输入：

```markdown
1. level 1
    - level 2
    - level 2
```

输出：

1. level 1
     - level 2
     - level 2

**错误示范：**

输入：

```markdown
<!-- 这里缩进的长度比上面小了，markdown中的缩进是四个空格的，两个空格的缩进没有效果 -->
1. level 1
  - level 2
  - level 2
```

输出：

1. level 1
  - level 2
  - level 2

### 换行

`markdown` 中文本的换行需要额外多打一个空行，否则文本还是会连在一起。

**正确示范**：

输入：

```markdown
我是第一段。

我是第二段。
```

输出：

我是第一段。

我是第二段。

**错误示范**：

输入：

```markdown
我是第一段。
我是第二段。
```

输出：

我是第一段。
我是第二段。

### vitepress 中的 markdown 扩展

1. **输入 `[[toc]]` 可以得到整篇文档的目录。**

输入：

```markdown
[[toc]]
```

输出：

[[toc]]

2. **特殊文本块**

输入：

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

输出：

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

**可以自定义文本块标题。**

输入：

```md
::: danger 警告
这是一个警告
:::

::: details 查看详情
详情
:::
```

输出：
::: danger 警告
这是一个警告
:::

::: details 查看详情
详情
:::