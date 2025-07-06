import Render from '@/components/render';
//app为路由，如果不是app则是组件
const data: { path: string; code: string }[] = [
  {
    path: 'app/page.tsx',
    code: `
    import Home from './home';
    export default function Page() {
      return <Home />;
    }
    `,
  },
  {
    path: 'home.tsx',
    code: `
    import { Button } from '@/components/ui/button';
    export default function Home() {
      return <div>Home11</div>;
    }
    `,
  },
];
export default function Page() {
  return <Render data={data} />;
}
