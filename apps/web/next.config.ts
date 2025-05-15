import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui'],
  experimental: {
    reactCompiler: true,
  },
};

export default withNextIntl(nextConfig);
