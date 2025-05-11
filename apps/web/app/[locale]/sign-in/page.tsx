import { getTranslations } from 'next-intl/server';
import { Input } from '@workspace/ui/components/input';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'auth' });
  return (
    <div className='flex items-center justify-center min-h-svh'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>{t('signInTitle')}</h1>
        <Input />
      </div>
    </div>
  );
}
