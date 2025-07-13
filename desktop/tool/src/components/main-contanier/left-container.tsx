'use client';

import { useGetMarkdownList } from '@/server/markdown';
import { useState } from 'react';
import { MarkdownAdd } from '../markdown/markdown-add';
import { MarkdownItem } from '../markdown/markdown-item';
import { Input } from '../ui/input';
import { useMemoizedFn } from 'ahooks';
import { debounce } from 'lodash-es';

export function LeftContainer() {
  const { data: markdownList, isLoading } = useGetMarkdownList();
  const [search, setSearch] = useState('');

  const filteredSearch = useMemoizedFn(
    debounce((search: string) => {
      setSearch(search);
    }, 500),
  );

  const filteredMarkdownList = markdownList?.filter((item) => item.name.includes(search));
  return (
    <div>
      <nav className="flex items-center p-2">
        <Input placeholder="搜索文档" onChange={(e) => filteredSearch(e.target.value)} />
        <MarkdownAdd />
      </nav>

      {isLoading ? <div>加载中...</div> : null}
      <section className="flex flex-col gap-2">
        {filteredMarkdownList &&
        !isLoading &&
        filteredMarkdownList.filter((item) => item.name.includes(search)) ? (
          filteredMarkdownList
            .filter((item) => item.name.includes(search))
            .map((item) => <MarkdownItem key={item.id} id={item.id} name={item.name} />)
        ) : (
          <div>暂无数据</div>
        )}
      </section>
    </div>
  );
}
