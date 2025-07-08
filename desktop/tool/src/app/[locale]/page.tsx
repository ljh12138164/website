import { MarkdownAdd } from '@/components/markdown/markdown-add';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { createMarkdown, getMarkdownList } from '@/server/markdown';
import { revalidatePath } from 'next/cache';

export const generateStaticParams = async () => {
  return [{ locale: 'zh' }, { locale: 'en' }];
};

export default async function Home({ searchParams }: { searchParams: { search?: string } }) {
  const searchTerm = searchParams.search || '';
  const markdownListData = await getMarkdownList();

  // 在服务器端直接过滤数据
  const filteredMarkdownList = searchTerm
    ? markdownListData.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : markdownListData;

  const searchMarkdownFn = async (formData: FormData) => {
    'use server';
    const searchValue = formData.get('search') as string;
    // 通过URL参数传递搜索词
    const searchParams = new URLSearchParams();
    if (searchValue) {
      searchParams.set('search', searchValue);
    }

    // 重新导航到当前页面，但带上搜索参数
    revalidatePath(`/?${searchParams.toString()}`);
  };

  const createMarkdownFn = async () => {
    'use server';
    await createMarkdown('新文档');
    revalidatePath('/');
  };
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <nav className="flex items-center justify-between">
            <div className="flex-1">
              <form action={searchMarkdownFn}>
                <Input type="text" placeholder="搜索" name="search" defaultValue={searchTerm} />
              </form>
            </div>
            <div className="flex-[0.2] flex justify-end">
              <MarkdownAdd />
            </div>
          </nav>
          {filteredMarkdownList.length ? (
            filteredMarkdownList.map((item) => (
              <SidebarMenuItem key={item.id}>{item.name}</SidebarMenuItem>
            ))
          ) : (
            <form
              action={createMarkdownFn}
              className="flex h-full flex-col items-center justify-center gap-2"
            >
              {searchTerm ? '没有找到匹配的文档' : '暂无数据'}
              <Button variant="outline" type="submit">
                创建
              </Button>
            </form>
          )}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}
