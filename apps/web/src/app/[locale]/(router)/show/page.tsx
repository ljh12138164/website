import { getTranslations } from 'next-intl/server';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'show' });
  return <div className='flex items-center justify-center min-h-svh'></div>;
}
