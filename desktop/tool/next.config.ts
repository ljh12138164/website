import config from "@workspace/config/next.config";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const isProd = process.env.NODE_ENV === "production";

const internalHost = process.env.TAURI_DEV_HOST || "localhost";
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 配置 assetPrefix，否则服务器无法正确解析您的资产。
  assetPrefix: isProd ? undefined : `http://${internalHost}:1500`,
};
export default withNextIntl({ ...config, ...nextConfig });
