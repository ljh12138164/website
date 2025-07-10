'use client';
import { getCurrentLanguage, setCurrentLanguage } from '@/lib/utils';
import { type Event, listen } from '@tauri-apps/api/event';
import { Loader2 } from 'lucide-react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryProvider } from './query-provide';

type EventPayload = 'zh' | 'en' | 'settings';

export function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // 初始化语言
  useEffect(() => {
    const listenSettings = async () => {
      const language = await getCurrentLanguage();
      const pathName = pathname.slice(4);
      if (language === 'zh') router.push(`/zh/${pathName}`);
      else router.push(`/en/${pathName}`);
      setLoading(false);
    };
    listenSettings();
  }, []);
  // 监听菜单事件
  useEffect(() => {
    const unlistenPromise = listen('menu-event', async (event: Event<EventPayload>) => {
      const payload = event.payload;
      const path = pathname.slice(4);
      if (payload === 'zh') {
        await setCurrentLanguage('zh');
        router.push(`/zh/${path}`);
      } else if (payload === 'en') {
        await setCurrentLanguage('en');
        router.push(`/en/${path}`);
      } else if (payload === 'settings') {
        const language = await getCurrentLanguage();
        router.push(`/${language}/settings`);
      }
    });
    return () => {
      unlistenPromise.then((unlisten) => unlisten());
    };
  }, [pathname, router]);

  // 监听文件打开事件
  useEffect(() => {
    const unlistenPromise = listen('file-open', (event: Event<string>) => {
      const filePath = event.payload;
    });
    return () => {
      unlistenPromise.then((unlisten) => unlisten());
    };
  }, []);

  if (loading) {
    return (
      <div className="flex h-[100dvh] w-full items-center justify-center">
        <Loader2 className="animate-spin text-primary size-8" />
      </div>
    );
  }
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <div className="h-[100dvh] overflow-hidden">
        <QueryProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            {children}
          </NextThemesProvider>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: { duration: 2000 },
              error: { duration: 5500 },
              loading: { duration: 10000 },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'white',
                zIndex: 10,
              },
            }}
          />
        </QueryProvider>
      </div>
    </Suspense>
  );
}
