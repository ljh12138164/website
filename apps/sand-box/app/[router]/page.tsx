import Render from '@/components/render';

export default async function Home({ params }: { params: Promise<{ router: string }> }) {
  const { router } = await params;
  const data = await fetch('http://localhost:8111/api/data').then((res) => res.json());

  if (router === 'not-found') {
    return <div>Not Found</div>;
  }
  return <Render data={data} />;
}
