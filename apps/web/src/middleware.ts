import { type NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './i18n/request';

export function middleware(request: NextRequest) {
  // 获取当前请求的路径
  const pathname = request.nextUrl.pathname;

  // 处理语言本地化
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // 如果路径缺少语言前缀，添加默认语言
  if (pathnameIsMissingLocale) {
    // 获取基础 URL
    const url = new URL(request.url);

    // 2. 如果没有子域名映射，使用默认本地化
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // 匹配所有路径，除了静态资源和API路由
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*|favicon.ico).*)',
};
