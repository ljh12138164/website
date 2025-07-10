'use client';
import { Window } from '@tauri-apps/api/window';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { MinusIcon, XIcon, Square } from 'lucide-react';

export default function DefaultMenu() {
  const t = useTranslations('menu');
  const DEFALUT_MENU = [
    {
      label: t('minimize'),
      icon: <MinusIcon />,
      action: () => {
        Window.getCurrent().minimize();
      },
    },
    {
      label: t('maximize'),
      icon: <Square />,
      action: () => {
        Window.getCurrent().maximize();
      },
    },
    {
      label: t('close'),
      icon: <XIcon />,
      action: () => {
        Window.getCurrent().close();
      },
    },
  ];
  return (
    <section className="ml-auto">
      {DEFALUT_MENU.map((item) => (
        <Button variant="ghost" size="sm" key={item.label} onClick={item.action}>
          {item.icon}
        </Button>
      ))}
    </section>
  );
}
