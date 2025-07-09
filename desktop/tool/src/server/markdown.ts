'use client';

import type { MarkdownItem } from '@/types/markdown';
import { useMutation, useQuery } from '@tanstack/react-query';
import { invoke } from '@tauri-apps/api/core';

/**
 * ### 获取markdown列表q
 */
export const useGetMarkdownList = () => {
  return useQuery({
    queryKey: ['markdownList'],
    queryFn: () => invoke<MarkdownItem[]>('get_markdown_list'),
  });
};

/*q*
 * ### 创建markdown
 */
export const useCreateMarkdown = () => {
  return useMutation<MarkdownItem, Error, { name: string; content: string }>({
    mutationFn: async ({ name, content }: { name: string; content: string }) =>
      invoke<MarkdownItem>('create_markdown', { name, content }),
  });
};

export const useUpdateMarkdown = () => {
  return useMutation<MarkdownItem, Error, { id: number; name: string; content: string }>({
    mutationFn: async ({ id, name, content }: { id: number; name: string; content: string }) =>
      invoke<MarkdownItem>('update_markdown', { id, name, content }),
  });
};
