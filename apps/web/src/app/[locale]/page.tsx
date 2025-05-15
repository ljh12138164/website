import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '../../components/language-switcher';

interface PageProps {
  params: Promise<{
    locale: 'zh' | 'en';
  }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  // 获取翻译函数
  const t = await getTranslations({ locale });

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full flex-col items-center justify-between font-mono text-sm'>
        <h1 className='text-4xl font-bold mb-6'>{t('home.title')}</h1>
        <p className='text-xl mb-8'>{t('home.description')}</p>

        <div className='mb-8'>
          <LanguageSwitcher />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='border border-gray-300 rounded-lg p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold mb-3'>{t('common.home')}</h2>
            <p>{t('common.welcome')}</p>
          </div>

          <div className='border border-gray-300 rounded-lg p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold mb-3'>{t('common.about')}</h2>
            <p>{t('about.description')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
