import { Store } from '@tauri-apps/plugin-store';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//获取当前语言
export async function getCurrentLanguage() {
  const store = await Store.load('settings.json');
  const language = (await store.get<'zh' | 'en' | undefined>('language')) || 'zh';
  return language;
}
// 设置当前语言
export async function setCurrentLanguage(language: 'zh' | 'en') {
  const store = await Store.load('settings.json');
  await store.set('language', language);
}

export async function toggleTheme(_theme: 'dark' | 'light') {
  // ... existing code ...
}

export async function getTheme() {
  // ... existing code ...
}
