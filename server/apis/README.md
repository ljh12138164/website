# API服务

这是使用Hono框架构建的API服务。

## 项目结构

```
server/apis/
├── src/
│   ├── index.ts                 # 主入口文件
│   ├── middleware/              # 中间件
│   │   └── ui.ts               # API接口UI展示中间件
│   └── router/                  # 路由
│       └── web/                 # web相关路由
│           ├── index.ts         # web路由主文件
│           └── user.ts          # 用户相关路由
```

## 特性

- 基于Hono框架构建的轻量级API服务
- `/api/ui` 路由提供了一个可视化界面，展示所有API接口
- 模块化的路由结构

## 使用方法

### 访问API接口列表

启动服务后，访问以下URL查看所有API接口：

```
http://localhost:3000/api/ui
```

这将显示一个包含所有API路由的界面，包括路径和HTTP方法。

### 添加新路由

在相应的路由文件中添加新路由，UI界面将自动更新以包含新添加的路由。
