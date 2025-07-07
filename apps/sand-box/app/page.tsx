import Render from '@/components/render';
//app为路由，如果不是app则是组件

export default async function Page() {
  const data = await fetch('http://localhost:8111/api/data').then((res) => res.json());
  return <Render data={data} />;
}
