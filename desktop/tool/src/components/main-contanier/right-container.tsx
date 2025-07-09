import { MarkdownMain } from '../markdown/markdown-main';
import { SidebarTrigger } from '../ui/sidebar';

export const RightContainer = () => {
  return (
    <main className="p-4 w-full flex flex-col gap-4">
      <nav className="flex items-center justify-between">
        <SidebarTrigger />
        <div className="flex items-center gap-2">{/* <ThemeButton /> */}</div>
      </nav>
      <MarkdownMain />
    </main>
  );
};
