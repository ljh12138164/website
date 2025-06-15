import HomeComponent from '@/components/home/home';
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
  const a = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    body: JSON.stringify({
      name: '张三',
      age: 18,
    }),
  });
  console.log(await a.text());
  return <HomeComponent />;
}
