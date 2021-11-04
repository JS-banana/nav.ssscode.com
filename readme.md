# 导航网站 nav.ssscode.com

一个用于管理收藏的优秀网站、博客、工具、GitHub仓库、文章、周刊等等的导航网站

## 技术路线

- 前端：Next.js + React
- 服务：Node.js + Prisma + SQLite

### 技术栈

- TypeScript
- React
- Next.js + SSR/SSG
- Prisma + SQLite
- Tailwindcss

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

谁用谁知道😏

- Next.js / React

首先，Next是基于React的项目，对于React开发者上手也是比较舒服；其二，是为了快速上手SSR项目、以及服务端渲染，包括和Serveless的结合使用，主要是为了练练手

- Prisma + SQLite

因为不想再做单独的静态页面了，对于数据共享、维护都不方便，因此需要考虑结合 **后端+数据库** 的方式，实现接口层面的使用，为以后多端及不同项目中使用数据提供基础（调用接口即可），配合后台管理动态控制数据的展示也是很方便

Prisma 与 [Sequelize](http://docs.sequelizejs.com/) 、[TypeORM](https://github.com/typeorm/typeorm/)等类似，不过，该ORM具有一定的优势，我也是倾向于它，所有选择了这个，对于数据库操作，ORM的重要性及方便性不言而喻

在第三方SQL云数据库与SQLite之间犹豫了一段时间，选择第三方云数据库主要是想着结合serveless使用云接口会比较方便，一般厂家也都会提供500m-1G的免费空间，对于我这种练手及小需求是足够了，优缺点都有，结合我自身方向，先上手SQLite练练手比较简单易上手
