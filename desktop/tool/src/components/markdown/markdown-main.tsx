'use client';

import dynamic from 'next/dynamic';

// 创建一个包装组件

const Editor = dynamic(() => import('@/components/editor/editor').then((mod) => mod.Editor), {
  ssr: false,
});

export const MarkdownMain = () => {
  return <Editor />;
};
