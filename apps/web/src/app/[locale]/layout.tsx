import { Providers } from '@/components/provider/providers';
import '@workspace/ui/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('title'),
    description: t('description'),
  };
}

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  // 获取当前语言的翻译消息
  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale });
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <div className='flex flex-col min-h-screen'>
              <nav className='bg-red-500 flex-[0_0_50px]'>
                <div>
                  <h1>{t('home.title')}</h1>
                </div>
              </nav>
              {/* 微前端容器 */}
              {children}
              <footer className='bg-blue-500 flex-[0_0_50px]'>
                <h1>{t('home.title')}</h1>
              </footer>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
