import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCreateMarkdown } from '@/server/markdown';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { PlusIcon } from 'lucide-react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const zodSchema = z.object({
  name: z.string().min(1, '文档名称不能为空'),
});

export function MarkdownAdd() {
  const queryClient = useQueryClient();
  const { mutate: createMarkdown } = useCreateMarkdown();
  const closeRef = useRef<HTMLButtonElement>(null);
  const form = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      name: '',
    },
  });
  const onSubmit = async (data: z.infer<typeof zodSchema>) => {
    createMarkdown(
      { name: data.name, content: '' },
      {
        onSuccess: () => {
          form.reset();
          closeRef.current?.click();
          queryClient.invalidateQueries({ queryKey: ['markdownList'] });
          toast.success('创建成功');
        },
      },
    );
  };
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer  ml-auto p-2 rounded-md hover:bg-muted">
        <PlusIcon />
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-2">
          <DialogHeader>
            <DialogTitle className="p-2 pl-0">创建文档</DialogTitle>
          </DialogHeader>
          <Input type="text" placeholder="文档名称" {...form.register('name')} className="mb-2" />
          <DialogFooter>
            <Button type="submit">创建</Button>
            <DialogClose asChild ref={closeRef}>
              <Button type="button" variant="outline">
                取消
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
