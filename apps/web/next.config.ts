import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui'],
};

export default withNextIntl(nextConfig);
