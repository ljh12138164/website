import { NextConfig } from 'next';


const nextConfig: NextConfig = {
  // 需要转译的包
  experimental: {
    reactCompiler: true,
  },
};


export default nextConfig;
