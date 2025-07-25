'use client';
import { compile, compileAndRender } from '@/utils/render';
import esbuild from 'esbuild-wasm';
import type * as React from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import to from 'await-to-js';

export default function Render({ data }: { data: { path: string; code: string }[] }) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const path = usePathname();
  const NextRouter = useRouter();

  useEffect(() => {
    // 处理组件和路由
    const component = data.filter((item) => !item.path.startsWith('app'));
    const router = data.filter((item) => item.path.startsWith('app'));
    (async () => {
      await esbuild.initialize({
        wasmURL: '/esbuild.wasm',
      });

      const componentsData = await compile(
        component.map((item) => [
          item.path.split('.')?.at(-2) ?? '',
          new TextEncoder().encode(item.code),
        ]),
      );

      const routerComponent = router.find((item) => item.path.slice(3) === `${path}page.tsx`);
      if (routerComponent) {
        const [error, component] = await to(
          compileAndRender(
            new TextEncoder().encode(routerComponent.code),
            componentsData.map((item) => [`./${item.name}`, item.code]),
            routerComponent.code,
          ),
        );
        if (error) {
          setError(error.message);
          setComponent(null);
          return;
        }

        // 确保component是一个有效的React组件
        if (typeof component === 'function') {
          setComponent(() => component);
          setError(null);
        } else {
          throw new Error('编译结果不是有效的React组件');
        }

        return;
      }
      NextRouter.push('/not-found');
    })();

    return () => {
      esbuild.stop();
    };
  }, [data, path]);

  // 确保props对象存在且有效
  const props = { title: '客户端组件渲染 AI 代码' };
  return (
    <div>
      <h2>✅ 客户端组件中渲染的动态组件：</h2>
      {error && (
        <div
          style={{
            color: 'red',
            padding: '10px',
            border: '1px solid red',
            margin: '10px 0',
          }}
        >
          {error}
        </div>
      )}
      {Component && <Component {...props} />}
    </div>
  );
}
