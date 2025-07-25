import Render from '@/components/render';
//app为路由，如果不是app则是组件
export const code: { path: string; code: string }[] = [
  {
    path: 'app/page.tsx',
    code: `
    export default function Page() {
      return <>111</>
    }
  `,
  },
  // {
  //   path: 'home.tsx',
  //   code: `
  //   export default function Home() {
  //     return <div>Home</div>;
  //   }
  // `,
  // },
];
export default async function Home() {
  return <Render data={code} />;
}
