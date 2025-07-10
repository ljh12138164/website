import Menu from '@/components/tool/menu';
import { Providers } from '@/components/tool/providers';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('title'),
    description: t('description'),
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}>
        <NextIntlClientProvider>
          <Providers>
            <Menu />
            <div className="flex flex-col h-[100dvh-20px]">{children}</div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
