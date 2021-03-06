---
title: 'GitHub+Hexo搭建博客'
date: '2017-09-02'
tags: '前端,Hexo,Blog'
quote: '什么是 Hexo？  Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽...'
titlePic: 'http://images.qiyu1205.top/POST_BANNER/post-mountains-1.png'
---

什么是 Hexo？  Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。


## 安装 Git

到 [Git](https://git-scm.com) 官网下载相应版本,安装即可。

## 安装 Node.js

到 [Node.js](https://nodejs.org/en/) 官网下载相应版本，安装即可。

## 安装 hexo

打开终端，输入

```shell
npm install -g hexo-cli
```

(npm 是 Node 自带的包管理工具)

## 创建 hexo 文件夹

在想要创建 hexo 的地方新建 hexo 文件夹，执行命令：

```shell
cd hexo
hexo init
```

hexo 会自动在你的 hexo 文件夹下创建搭建网站需要的所有文件，再执行以下命令安装所需的依赖包：

```shell
 npm install
```

## 本地运行

目前为止已经搭建好本地的 hexo 博客了，在终端中执行如下命令：

```shell
hexo generate （或者 hexo g）   # 生成静态文件
hexo server （或者 hexo s） # 部署到Git
```

然后打开浏览器，在地址栏输入 localhost:4000，就可以看到我们搭建好的本地博客了。到此只是搭建好了本地博客，还需要将博客部署到 github 上，显然，需要注册一个 github 账号。

## 注册 Github 账号

进入 [github官网](https://github.com) 注册就好了，记住不要忘了验证邮件。

## 新建 repository

新建一个 repository，名字是 yourgithubname.github.io

## 部署博客

进入你的 hexo 文件夹根目录下，用编辑器打开 _config.yml，修改 deploy 项，如下（根据你的 github 进行相应更改）：

```yml
|  deploy:
|       type:  git
|       repo:  https://github.com/yougithubname/yougithubname.github.io.git
|       branch:  master  
```

然后执行以下命令：

`       hexo generate （或者 hexo g） `

`       hexo deploy （或者 hexo d） `

如果执行 hexo deploy 后报错 “ERROR Deployer not found: Git”

`       npm install hexo-deployer-git --save `

重新执行生成部署后，用浏览器访问 yougithubname.github.io 即可。

每次修改完本地的文件后要执行以下命令，重新部署到 github 上：

`       hexo clean` 

`       hexo generate （或者 hexo g）`

`       hexo deploy （或者 hexo d） `

注意：如果是第一次使用 github，则需要设置 ssh ，可以参考 [教程](https://mp.weixin.qq.com/s?__biz=MzA4NTQwNDcyMA==&mid=2650661821&idx=1&sn=c6116ed82bff2d083bb152fbd8cbc38d&scene=1&srcid=0621l9okMDolnRp9zG9xHx9E#wechat_redirect)。

## 整站配置

hexo根目录下的 `_config.yml（D:\hexo_config.yml）` 中是对整个站点的基本配置。除了之前配置的 deploy 项和默认的以外，还需配置了以下项：

```yml
|   # Site
|   title: FiveSeven’s blog
|   subtitle: 脚踏实地，仰望星空
|   description: 前端博客
|   author: FiveSeven
|   language: zh-CN
```

分别是站点名，站点副标题，对站点的描述，作者名字，语言。

当然主题也可以做相应的配置，这里先不细说。

## 发表文章

首先在终端中输入：

```shell
 hexo new “your article name”
```

然后打开这个文件（在 `D:\hexo\source_posts` 下），就可以编辑你的博客了。

首先要配置开头：

```md
|   —
|   title: your article name
|   date: 2016-08-10 19:51:02
|   categories: blog
|   tags: [博客，前端]
|   —
```

其中，`catogories` 之后引入文章分类会用到，`tags` 之后引入标签会用到。在开头后面就可以接着写我们博客的内容了，博客内容是用 [markdown](http://www.appinn.com/markdown/) 写的。网上也有很多 [入门指南](http://www.jianshu.com/p/1e402922ee32/)

然后，将博客部署到 github 上，就能看见我们写的博客啦。

## 安装主题

进入 hexo 官方 [主题](https://hexo.io/themes/) 网站挑选自己喜欢的主题

点击主题名，进入作者的 GitHub，参考作者给的文档（README.md）进行安装

## Hexo命令

```shell
hexo new "postName"     # 新建文章 
hexo new page "pageName"    # 新建页面
hexo generate   # 生成静态页面至public目录
hexo server     # 开启预览访问端口（默认端口4000，'ctrl + c'关闭server） 
hexo deploy     # 将.deploy目录部署到GitHub
hexo help   # 查看帮助
hexo version   # 查看Hexo的版本
hexo deploy -g  # 生成加部署
hexo server -g  # 生成加预览 
```

命令的简写

```shell
hexo n == hexo new
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy
```

## 相关链接

[Hexo官网](https://hexo.io/zh-cn/)

## 相关问题

以下是我自己搭建博客时候遇到的一些问题

①如何自定义页面,让 hexo 不渲染该文件?

在 _config.yml 文件中找到 `skip_render` 添加参数;

skip_render 一般有以下四种常用参数：

1.跳过 source 目录下的 test.html: skip_render: test.html

2.跳过 source 目录下 test 文件夹内所有文件：skip_render: test/*

3.跳过 source 目录下 test 文件夹内所有文件包括子文件夹以及子文件夹内的文件：skip_render: test/**

4.跳过多个路径:

```yml
skip_render:
 - test.html
 - test/*
```

② 如何在一篇博客中引用自带的图片

在 _config.yml 文件中找到 `post_asset_folder` 参数修改为 true

```yml
post_asset_folder: true
```

这样下次新建博客就会生成一个和博客名一样的文件夹,比如

```shell
hexo new "now"
```

新建后会产生 now.md 和名为 now 的文件夹,可以将引用的图片文件存放在这个文件夹下面。

## 域名绑定

1.域名注册

首先你需要有一个域名，可以上 [阿里云](https://wanwang.aliyun.com/?utm_medium=text&utm_source=baidu&utm_campaign=ymsj&utm_content=se_4098)、万网等网站注册 ，购买后需要实名认证，审核时间为5到7天不等。（下面以阿里云为例）

2.域名绑定

实名认证通过了就可以绑定了，首先你需要在hexo博客下面的 source 目录下添加一个 CNAME （一定要大写，没有后缀名）文件，然后打开在第一行写上你注册到的域名，比如

> example.net

然后保存，在终端中输入

```shell
hexo clean
hexo deploy -g
```

可以顺便查下你的 GitHub 的 IP 地址

```shell
ping youname.github.io
```

现在你可以在[域名控制台](https://dc.aliyun.com/tcparse/dns.htm?init=false&dtoken=ExcCE69cvxqs03n_Vkk)中**添加 DNS 解析**了,添加2条记录

| 记录类型  | 主机记录 | 解析线路 | 记录值               | TTL  |
| ----- |:----:|:----:|:-----------------:| ----:|
| A     | @    | 默认   | 151.101.9.147     | 10分钟 |
| CNAME | www  | 默认   | youname.github.io | 10分钟 |

注意：用你自己的 GitHub 用户名替换上面的 youname

然后等上10分钟等待服务器DNS缓存更新，你就能正确用域名访问到你的网站啦~

O__O "…如果你遇到了一点小小的问题，不要灰心，可以检查下步骤或者打电话咨询下客服小姐姐 “95187”

完 ：）
