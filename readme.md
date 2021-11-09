# 导航网站 nav.ssscode.com

一个用于管理收藏的优秀网站、博客、工具、GitHub仓库、文章、周刊等等的导航网站

## 想法/思路/idea

### 浏览器收藏夹

很直接的一点就是，我浏览器收藏夹里收藏了很多网站：前端、服务器、各种专业网站、工具类、资源相关、博客、还包括一些优秀的文章等。有些甚至没有细分，也没很好的分类，在使用查找时或者复习搜索时效率很低，尤其是不常使用的在突然需要时往往要花费很久，更可能是你已经忘记具体叫啥了，只有个大概印象，这时要是已经整理归类好稍微花些功夫倒也能搞定，但事情往往并非如此

### GItHub star仓库

很多GitHub的优秀仓库我都会 star，有的是好用的工具函数、有的是好用的框架、有的是好用的工具、有的是优秀的源码项目用于学习、也有的是大佬写的一些用例和分析文章等等很多，对于技术学习爱好者来说真是一个都不想错过，不过，日久，star变多，虽然官网自带 Filter能力，但是，很多仓库名称也经常忘记，具体使用场景也是一时想不起来。有时又是 Google半天找到 GitHub地址进去一看发现已经 star了，想了半天才发现是干嘛的，效率很低下

### 技术周刊/订阅/技术前言文章

如：阮一峰老师的周刊、前端早早聊、前言技术信息、其他作者的技术文章、微信公众号订阅等

如果只是为了精进学习，直接关注相关作者推送的JS源码系列、手写系列、算法系列等也可，做到一定的订阅能力，可以及时的获取更新通知，然后跟进学习

还有一方面是了解当下，思考与感悟、以及未来新技术等前言信息的关注，对于21世纪的不断学习与技术快速迭代的现实场景下，还是很有必要去关注和了解的，列如《阮一峰的网络日志》我是每周都必看的

### 开发者/技术论坛/探讨社区/工具

对于一个开发者而言，技术论坛和社区必不可缺，我们在日常开发过程中会遇到许许多多的问题，有些难点和坑我们经常需要了解前辈们的经验，理解并及时解决问题，这里也包括一些大佬已经造好的轮子，方便我们直接使用，前人栽树后人乘凉，我们现在所遇到的大多数问题，前人都遇到过，我们只需要快速找到解决方案即可，之后，可以深入原理研究。还有就是各种JSON、base64、模拟接口测试、格式处理等等工具的使用，如果，这些问题和方案都能统一到一个网站下解决岂不是很方便了

## 技术路线

- 前端：Next.js + React
- 服务：Node.js + Prisma + SQLite
- 部署：Vercel / Tencent Coding Serveless

### 技术栈

- TypeScript
- React
- Next.js + SSR/SSG
- Prisma + SQLite
- ChakraUI + Tailwindcss

### 工程化规范

- eslint
- prettier
- husky + commitlint

### 一些说明

- pnpm

推荐使用 `pnpm` 包管理工具，注意在 `.npmrc` 中添加 `shamefully-hoist = true`，作用是提升依赖，用于解决部分包无法找到导出变量问题

- commitlint

commit type: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test

### 技术栈缘由

- TypeScript

政治正确😏

- Next.js / React

首先，Next是基于React的项目，对于React开发者上手也是比较舒服；其二，是为了快速上手SSR项目、以及服务端渲染，包括和Serveless的结合使用，主要是为了练练手

- Prisma + SQLite

因为不想再做单独的静态页面了，对于数据共享、维护都不方便，因此需要考虑结合 **后端+数据库** 的方式，实现接口层面的使用，为以后多端及不同项目中使用数据提供基础（调用接口即可），配合后台管理动态控制数据的展示也是很方便

Prisma 与 [Sequelize](http://docs.sequelizejs.com/) 、[TypeORM](https://github.com/typeorm/typeorm/)等类似，不过，该ORM具有一定的优势，我也是倾向于它，所有选择了这个，对于数据库操作，ORM的重要性及方便性不言而喻

在第三方SQL云数据库与SQLite之间犹豫了一段时间，选择第三方云数据库主要是想着结合serveless使用云接口会比较方便，一般厂家也都会提供500m-1G的免费空间，对于我这种练手及小需求是足够了，优缺点都有，结合我自身方向，先上手SQLite练练手比较简单易上手

- ChakraUI + Tailwindcss

[chakraUi](https://chakra-ui.com/) 是一个很有特色的UI组件库，引用官方的描述：**Chakra UI提供了一套可访问、可重用和可组合的React组件，使创建网站和应用程序变得非常容易**。其实得益于 chakra UI 的**Ease of Styling**（样式设计的便利性），，Chakra UI包含一套布局组件，如Box和Stack，通过传递props，可以很容易地对你的组件进行样式设计。因此，Tailwindcss工具甚至不需要用到，当然如果需要定制部分自定义样式还是 Tailwindcss 比较合适

## 数据库/表

- 分类

待定：每个分类应该对应一张表，如：前端框架表、GitHub仓库表、工具网站表等

确定：可以确定的是 表结构字段应该基本类似，即每个收藏内容项的相关属性：name、desc、tags、category、logo等

- 标签

和表有关联映射关系，一张标签表，搜索相关标签需要检索到相关联的表中数据，如：React、组件、GitHub、可视化

### 表

- 分类

| 字段 | 类型   | 描述  |
|------|--------|------|
| id   | Int    | 主key |
| name | String | 名称  |
| desc | String | 描述  |

- 标签

| 字段 | 类型   | 描述  |
|------|--------|------|
| id   | Int    | 主key |
| name | String | 名称  |
| desc | String | 描述  |

- 网站

| 字段      | 类型     | 描述     |
|-----------|----------|---------|
| id        | Int      | 主key    |
| name      | String   | 名称     |
| desc      | String   | 描述     |
| detail    | String   | 详情     |
| category  | array    | 分类     |
| tags      | String[] | 标签     |
| link      | String   | 链接     |
| logo      | String   | 图片     |
| likeNum   | Int      | 喜欢     |
| viewNum   | Int      | 浏览量   |
| createdAt | DateTime | 创建时间 |
| updatedAt | DateTime | 更新时间 |
