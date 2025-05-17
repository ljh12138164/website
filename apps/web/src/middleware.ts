import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/request';

// 定义子域名到路径的映射
const subdomainRoutes: Record<string, string> = {
  admin: '/admin', // admin.example.com 将访问 /admin 路径
  blog: '/blog', // blog.example.com 将访问 /blog 路径
  shop: '/shop', // shop.example.com 将访问 /shop 路径
  // 可以添加更多的子域名映射
};

export function middleware(request: NextRequest) {
  // 获取主机名，如：admin.example.com、blog.example.com 或 example.com
  const hostname = request.headers.get('host') || '';

  // 检查是否是本地开发环境
  const isLocalhost =
    hostname.includes('localhost') || hostname.includes('127.0.0.1');

  // 提取子域名
  let subdomain: string | null = null;

  if (isLocalhost) {
    // 从 URL 的 searchParams 中获取子域名（用于本地开发测试）
    // 例如：localhost:8080?subdomain=admin
    subdomain = request.nextUrl.searchParams.get('subdomain');
  } else {
    // 从主机名中提取子域名
    const hostParts = hostname.split('.');
    // 检查是否有足够的部分来包含子域名
    // example.com -> ['example', 'com'] -> 没有子域名
    // admin.example.com -> ['admin', 'example', 'com'] -> 'admin' 是子域名
    if (hostParts.length > 2) {
      subdomain = hostParts[0] || null;
    }
  }

  // 获取当前请求的路径
  const pathname = request.nextUrl.pathname;

  // 处理语言本地化
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 如果路径缺少语言前缀，添加默认语言
  if (pathnameIsMissingLocale) {
    // 获取基础 URL
    const url = new URL(request.url);

    // 1. 如果有子域名映射，根据子域名重定向到相应的页面
    if (subdomain && subdomainRoutes[subdomain]) {
      url.pathname = `/${defaultLocale}${subdomainRoutes[subdomain]}${
        pathname === '/' ? '' : pathname
      }`;
      return NextResponse.rewrite(url);
    }

    // 2. 如果没有子域名映射，使用默认本地化
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // 如果 URL 已经包含语言前缀，但有子域名映射
  if (subdomain && subdomainRoutes[subdomain]) {
    // 提取当前语言前缀
    const segments = pathname.split('/');
    const currentLocale = segments[1];

    // 如果路径尚未包含子域名对应的路径，添加它
    if (
      !pathname.startsWith(`/${currentLocale}${subdomainRoutes[subdomain]}`)
    ) {
      const url = new URL(request.url);
      url.pathname = `/${currentLocale}${subdomainRoutes[subdomain]}${
        pathname.replace(`/${currentLocale}`, '') || ''
      }`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // 匹配所有路径，除了静态资源和API路由
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*|favicon.ico).*)',
};
