'use client';
import { Window } from '@tauri-apps/api/window';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { MinusIcon, XIcon, Square, Scan } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DefaultMenu() {
  const t = useTranslations('menu');
  useEffect(() => {
    window.addEventListener('resize', (e) => e.preventDefault());
  }, []);
  const DEFALUT_MENU = [
    {
      label: t('minimize'),
      icon: <MinusIcon />,
      action: async () => {
        Window.getCurrent().minimize();
      },
    },
    {
      label: t('maximize'),
      icon: <Square />,
      action: async () => {
        console.log(await getCurrentWindow().isMaximized());
        Window.getCurrent().maximize();
      },
    },
    {
      label: t('close'),
      icon: <XIcon />,
      action: async () => {
        Window.getCurrent().close();
      },
    },
  ];
  const [state, setState] = useState(DEFALUT_MENU);

  getCurrentWindow().listen('maximized', async () => {
    console.log(await getCurrentWindow().isMaximized());
    (await getCurrentWindow().isMaximized())
      ? setState((pre) => {
          pre[1] = {
            ...pre[1],
            label: t('restore'),
            icon: <Scan />,
            action: () => {
              console.log('click');
              return Window.getCurrent().unmaximize();
            },
          };
          return pre;
        })
      : setState(DEFALUT_MENU);
  });

  return (
    <section className="ml-auto">
      {state.map((item) => (
        <Button
          variant="ghost"
          size="sm"
          key={item.label}
          onClick={async () => await item.action()}
        >
          {item.icon}
        </Button>
      ))}
    </section>
  );
}
