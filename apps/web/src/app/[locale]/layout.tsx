import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SIDEBAR_ITEMS } from '@/command/home';
import Header from '@/components/home-container/Header';
import { Providers } from '@/components/provider/providers';
import { Sidebar, SidebarContent, SidebarGroup, SidebarProvider } from '@/components/ui/sidebar';
import './global.css';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  // 获取当前语言的翻译消息
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <SidebarProvider>
              <Sidebar>
                <SidebarContent className="flex flex-col gap-2 p-2">
                  {SIDEBAR_ITEMS.map((item) => (
                    <SidebarGroup key={item.href}>
                      <Link href={item.href} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </SidebarGroup>
                  ))}
                </SidebarContent>
              </Sidebar>
              <section className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 p-4">{children}</main>
              </section>
            </SidebarProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
