import { LeftContainer } from '@/components/main-contanier/left-container';
import { RightContainer } from '@/components/main-contanier/right-container';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from '@/components/ui/sidebar';
export const generateStaticParams = async () => {
  return [{ locale: 'zh' }, { locale: 'en' }];
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // 在服务器端直接过滤数据
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <LeftContainer />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <RightContainer />
    </SidebarProvider>
  );
}
