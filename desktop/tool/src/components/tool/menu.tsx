import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, MenuIcon } from 'lucide-react';
import { Button } from '../ui/button';
import DefaultMenu from './default-menu';

export default async function Menu() {
  return (
    <nav className="flex justify-between items-center h-[30px] border-b" data-tauri-drag-region>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex-1">
          <DropdownMenuItem asChild>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* 最小化，最大化，关闭 */}
      <DefaultMenu />
    </nav>
  );
}
