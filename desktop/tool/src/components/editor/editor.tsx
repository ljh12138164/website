import { useGetMarkdownList } from '@/server/markdown';
import { useMarkdownStore } from '@/store/markdown';
import EditorJS from '@editorjs/editorjs';
import { Store } from '@tauri-apps/plugin-store';
import { useEffect, useState } from 'react';

export const Editor = () => {
  const { setCurrentMarkdownId } = useMarkdownStore();
  const { data: markdownList } = useGetMarkdownList();
  const [editor, setEditor] = useState<EditorJS | null>(null);
  useEffect(() => {
    if (!markdownList?.length) return;
    (async () => {
      const store = await Store.load('store.json');
      const lastMarkdownId = await store.get<number>('lastMarkdownId');
      if (lastMarkdownId && markdownList.find((item) => item.id === lastMarkdownId)) {
        setCurrentMarkdownId(lastMarkdownId);
      }
    })();
  }, [markdownList]);

  useEffect(() => {
    setEditor(
      () =>
        new EditorJS({
          holder: 'editor',
        }),
    );
  }, []);

  return <div id="editor" />;
};
