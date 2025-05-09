import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// 支持的语言列表
export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // 验证语言环境
  if (!locales.includes(locale as Locale)) notFound();

  // 加载对应语言的翻译文件
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale: locale as string,
    messages,
  };
});
