import { getTranslations } from 'next-intl/server';

export const generateStaticParams = async () => {
  return [{ locale: 'zh' }, { locale: 'en' }];
};

export default async function SettingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const t = await getTranslations({ locale });
  return <div>{t('settings.title')}</div>;
}
