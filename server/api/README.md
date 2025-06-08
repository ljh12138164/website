# API 服务

## 功能

- 用户认证系统（注册、登录、刷新令牌）
- JWT双令牌认证（访问令牌 + 刷新令牌）
- 统一的响应格式和错误处理
- Swagger API文档

## 安装

```bash
# 安装依赖
pnpm install
```

## 运行

```bash
# 开发模式
pnpm run start:dev

# 生产模式
pnpm run build
pnpm run start:prod
```

## API 文档

启动服务后，访问 http://localhost:3000/api 查看Swagger API文档。

## 项目结构

```
src/
├── auth/                  # 认证模块
│   ├── config/            # JWT配置
│   ├── decorators/        # 自定义装饰器
│   ├── dto/               # 数据传输对象
│   ├── guards/            # 认证守卫
│   ├── interfaces/        # 接口定义
│   ├── auth.controller.ts # 认证控制器
│   ├── auth.module.ts     # 认证模块
│   └── auth.service.ts    # 认证服务
├── common/                # 通用功能
│   ├── filters/           # 异常过滤器
│   └── interceptors/      # 拦截器
├── db/                    # 数据库相关
│   └── schema.ts          # 数据库模式
├── drizzle/               # Drizzle ORM配置
├── user/                  # 用户模块
│   ├── dto/               # 数据传输对象
│   ├── user.controller.ts # 用户控制器
│   ├── user.module.ts     # 用户模块
│   └── user.service.ts    # 用户服务
├── app.controller.ts      # 应用控制器
├── app.module.ts          # 应用模块
├── app.service.ts         # 应用服务
└── main.ts                # 应用入口
```

## 认证流程

### 1. 用户注册

```
POST /auth/register
```

请求体:

```json
{
  "fullName": "用户名",
  "email": "user@example.com",
  "password": "password123"
}
```

响应:

```json
{
  "code": 200,
  "data": {
    "user": {
      "id": 1,
      "fullName": "用户名",
      "email": "user@example.com",
      "createdAt": "2023-01-01T00:00:00.000Z"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  },
  "message": "操作成功"
}
```

### 2. 用户登录

```
POST /auth/login
```

请求体:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

响应:

```json
{
  "code": 200,
  "data": {
    "user": {
      "id": 1,
      "fullName": "用户名",
      "email": "user@example.com",
      "createdAt": "2023-01-01T00:00:00.000Z"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  },
  "message": "操作成功"
}
```

### 3. 刷新令牌

当访问令牌过期时，使用刷新令牌获取新的令牌对：

```
POST /auth/refresh
```

请求体:

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

响应:

```json
{
  "code": 200,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "操作成功"
}
```

### 4. 获取用户信息

使用访问令牌获取当前用户信息：

```
GET /user/profile
```

请求头:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

响应:

```json
{
  "code": 200,
  "data": {
    "id": 1,
    "fullName": "用户名",
    "email": "user@example.com",
    "createdAt": "2023-01-01T00:00:00.000Z"
  },
  "message": "操作成功"
}
```

## 双令牌认证策略

本项目使用双令牌认证策略，包括：

1. **访问令牌 (Access Token)**

   - 短期有效（默认15分钟）
   - 用于访问受保护的资源
   - 每次API请求都需要在Authorization头中携带

2. **刷新令牌 (Refresh Token)**
   - 长期有效（默认7天）
   - 用于在访问令牌过期后获取新的令牌对
   - 应安全存储在客户端

这种策略的优势：

- 减少用户重新登录的频率
- 提高安全性，访问令牌短期有效降低被盗用风险
- 允许撤销用户会话而不需要更改密钥

## 环境变量

在 `.env` 文件中配置：

```
DATABASE_URL=postgres://user:password@localhost:5432/postgres
JWT_ACCESS_SECRET=your-access-secret-key-change-in-production
JWT_REFRESH_SECRET=your-refresh-secret-key-change-in-production
```
