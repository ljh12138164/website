import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{
    locale: 'zh' | 'en';
  }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  // 获取翻译函数
  const t = await getTranslations({ locale });

  return <main id='main' className='flex-1' />;
}
