'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '../i18n/navigation';
import { locales } from '../i18n/request';

export default function LanguageSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className='flex items-center space-x-2'>
      <label htmlFor='language-select' className='text-sm font-medium'>
        {t('language')}:
      </label>
      <select
        id='language-select'
        value={locale}
        onChange={handleChange}
        className='p-2 border border-gray-300 rounded-md text-sm'
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === 'en' ? 'English' : '中文'}
          </option>
        ))}
      </select>
    </div>
  );
}
