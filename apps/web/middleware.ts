import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // 支持的语言列表
  locales,
  // 默认语言
  defaultLocale: 'zh',
  // 语言检测设置
  localeDetection: true,
  // 匹配所有路径
  localePrefix: 'as-needed',
});

export const config = {
  // 匹配所有路径，除了这些：
  // - api路由 (/api/*)
  // - 静态文件 (如 /favicon.ico)
  // - 以'_next'开头的路径 (/_next/*)
  // - 以'.'开头的文件（如 .well-known, robots.txt）
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
