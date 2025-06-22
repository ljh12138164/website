import HomeComponent from "@/components/home/home";
import { getTranslations } from "next-intl/server";

export const metadata = async () => {
  const t = await getTranslations();
  return {
    title: t('home.title'),
    description: t('home.description'),
  };
};

export default async function Home() {
  // 获取翻译函数
  return <HomeComponent />;
};
