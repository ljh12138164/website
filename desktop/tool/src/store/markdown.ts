import { create } from 'zustand';

interface MarkdownStore {
  currentMarkdownId: number | undefined;
  setCurrentMarkdownId: (id: number) => void;
}

export const useMarkdownStore = create<MarkdownStore>((set) => ({
  currentMarkdownId: undefined,
  setCurrentMarkdownId: (id) => set({ currentMarkdownId: id }),
}));
