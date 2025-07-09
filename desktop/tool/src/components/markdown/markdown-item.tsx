import { useMarkdownStore } from '@/store/markdown';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Store } from '@tauri-apps/plugin-store';

interface MarkdownItemProps {
  id: number;
  name: string;
}

export function MarkdownItem({ id, name }: MarkdownItemProps) {
  const { currentMarkdownId, setCurrentMarkdownId } = useMarkdownStore();
  return (
    <Button
      variant="ghost"
      className={cn('cursor-pointer', currentMarkdownId === id && 'bg-muted')}
      onClick={async () => {
        const store = await Store.load('store.json');
        await store.set('lastMarkdownId', id);
        setCurrentMarkdownId(id);
      }}
    >
      <div>{name}</div>
    </Button>
  );
}
