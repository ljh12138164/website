// import { NextRequest, NextResponse } from 'next/server';
// import { locales, defaultLocale } from './i18n/request';

// export function middleware(request: NextRequest) {
//   // 获取主机名，如：en.example.com、zh.example.com或example.com
//   const hostname = request.headers.get('host') || '';

//   // 提取子域名（假设使用的是第一级子域名作为语言标识）
//   const subdomain = hostname.split('.')[0];

//   // 检查子域名是否是支持的语言之一
//   const isValidLocale = locales.includes(subdomain || '');

//   // 获取当前路径（不包括域名）
//   const pathname = request.nextUrl.pathname;

//   // 根据子域名重定向到适当的本地化页面
//   if (isValidLocale) {
//     // 如果URL已经包含语言前缀，则移除它以避免重复
//     const pathnameHasLocale = locales.some(
//       (locale) =>
//         pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//     );

//     if (pathnameHasLocale) {
//       // 提取不带语言前缀的路径部分
//       const segments = pathname.split('/');
//       const isLocaleInPath = locales.includes(segments[1] || '');

//       if (isLocaleInPath) {
//         segments.splice(1, 1);
//         const newPathname = segments.join('/') || '/';
//         return NextResponse.redirect(new URL(newPathname, request.url));
//       }
//     }

//     // 设置当前语言并继续处理请求
//     const locale = subdomain;
//     const pathnameWithoutLocale =
//       pathname === `/${locale}` ? '' : pathname.replace(`/${locale}`, '');

//     return NextResponse.rewrite(
//       new URL(`/${locale}${pathnameWithoutLocale || '/'}`, request.url)
//     );
//   } else {
//     // 如果子域名不是有效的语言，使用默认语言
//     // 如果已经有语言前缀，则保留，否则添加默认语言前缀
//     if (!pathname.startsWith(`/${defaultLocale}`)) {
//       return NextResponse.rewrite(
//         new URL(`/${defaultLocale}${pathname}`, request.url)
//       );
//     }
//   }
// }

// export const config = {
//   // 匹配所有路径名，除了：
//   // - 如果它们以 `/api`、`/trpc`、`/_next`、`/_vercel`、`/public` 开头
//   // - 包含点的路径（例如 `favicon.ico`）
//   matcher: '/((?!api|trpc|_next|_vercel|public|favicon.ico|.*\\..*).*)',
// };
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/request';

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|public|favicon.ico|.*\\..*).*)',
};
