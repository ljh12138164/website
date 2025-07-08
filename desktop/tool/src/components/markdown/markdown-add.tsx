import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { createMarkdown } from '@/server/markdown';
import { PlusIcon } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function MarkdownAdd() {
  const onSubmit = async (formData: FormData) => {
    'use server';
    const name = formData.get('name') as string;
    await createMarkdown(name);
    revalidatePath('/');
  };
  return (
    <Dialog>
      <DialogTrigger>
        <PlusIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>创建文档</DialogTitle>
        </DialogHeader>
        <form action={onSubmit}>
          <Input type="text" placeholder="文档名称" name="name" />
        </form>
        <DialogFooter>
          <Button type="submit">创建</Button>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              取消
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
