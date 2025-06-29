# 接口加密系统

本项目实现了前后端接口加密通信，确保数据传输安全。

## 技术栈

- 后端: Node.js, Hono, TypeScript

## 安装依赖

```bash
# 安装后端依赖
cd server/apis
npm install

# 安装前端加密所需依赖
npm install crypto-js
npm install @types/crypto-js --save-dev
```

## 配置

创建 `.env` 文件，配置加密密钥：

```
CRYPTO_SECRET_KEY=your-secret-key-must-be-32-bytes-long
CRYPTO_IV=1234567890123456
```

> 注意：在生产环境中，应使用安全的随机密钥，并妥善保管密钥信息。

## 使用方法

### 后端使用

1. 已经配置好加密中间件，直接使用：

```typescript
import { Hono } from 'hono';
import { createCryptoMiddleware } from '../middleware/crypto';

// 创建安全路由
const secureRouter = new Hono()
  // 应用加密中间件
  .use('*', createCryptoMiddleware())

  // 添加API端点
  .post('/your-endpoint', async (c) => {
    // 获取解密后的请求体
    const data = await getRequestData(c);

    // 处理请求，返回响应
    // 响应会自动加密
    return c.json({
      message: '请求成功',
      data: { /* 你的响应数据 */ }
    });
  });
```

### 前端使用

1. 导入前端加密工具：

```typescript
import { SecureHttpClient } from './path/to/frontend-crypto';

// 创建安全HTTP客户端
const client = new SecureHttpClient('http://your-api-base-url', {
  secretKey: 'your-secret-key-must-be-32-bytes-long',
  iv: '1234567890123456'
});

// 发送加密请求
async function callApi() {
  try {
    // POST请求
    const response = await client.post('/your-endpoint', {
      // 你的请求数据
      name: 'John Doe',
      email: 'john@example.com'
    });

    console.log('Response:', response);

    // GET请求
    const getResponse = await client.get('/another-endpoint');
    console.log('GET Response:', getResponse);
  } catch (error) {
    console.error('API call failed:', error);
  }
}
```

## 数据格式

### 加密请求格式

```json
{
  "data": "加密后的BASE64字符串",
  "timestamp": 1681234567890
}
```

### 加密响应格式

```json
{
  "code": 200,
  "message": "success",
  "timestamp": 1681234567890,
  "data": "加密后的BASE64字符串"
}
```

## 安全建议

1. 定期轮换密钥
2. 使用HTTPS传输
3. 在生产环境中使用环境变量存储密钥，不要硬编码
4. 考虑添加请求签名机制防止重放攻击
5. 使用安全的密钥管理系统存储密钥