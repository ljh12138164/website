import AuthCard from '@/src/components/auth-container/auth-card';
import SignIn from '@/src/components/auth-container/sign-in';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations();
  return (
    <section className="flex flex-col items-center justify-center min-h-svh p-4">
      <AuthCard
        title={t('auth.signInTitle')}
        description={t('auth.signInDescription')}
        link={'SignUp'}
        linkText={t('auth.signUpTitle')}
      >
        <SignIn />
      </AuthCard>
    </section>
  );
}
