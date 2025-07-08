import { getAllSandBoxData } from '@/service';
//app为路由，如果不是app则是组件
const code: { path: string; code: string }[] = [
  {
    path: 'app/page.tsx',
    code: `
    import Button from '@/components/ui/button';
    import Home from './home';
    export default function Page() {
      return <div>
        <Home />
        <Button>Click me</Button>
      </div>;
    }
  `,
  },
  {
    path: 'home.tsx',
    code: `
    export default function Home() {
      return <div>Home</div>;
    }
  `,
  },
];
export default async function Page() {
  const data = await getAllSandBoxData();

  return <div>123</div>;
}
