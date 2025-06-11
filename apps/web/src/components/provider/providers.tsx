'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { QIANKUN_CONFIG, QIANKUN_CONFIG_NAME } from '../../qiankun';
import { QueryProvider } from './query-provide';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    import('qiankun').then(({ registerMicroApps, start }) => {
      const routerPath = pathname.split('/').at(-1);
      // 如果路由路径在QIANKUN_CONFIG_NAME中，则注册微应用
      if (routerPath && QIANKUN_CONFIG_NAME.includes(routerPath)) {
        registerMicroApps(
          QIANKUN_CONFIG.filter((item) => item.activeRule === `/${routerPath}`)
        );
        start();
      }
    });
  }, [pathname]);
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <div className='h-[100dvh] overflow-hidden'>
        <QueryProvider>
          <NextThemesProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            {children}
          </NextThemesProvider>
          <Toaster
            position='top-center'
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
