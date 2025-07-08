import Render from '@/components/render';
import { getAllSandBoxData } from '@/service';

export default async function Home({ params }: { params: Promise<{ router: string }> }) {
  const { router } = await params;
  const data = await getAllSandBoxData();
  if (router === 'not-found') {
    return <div>Not Found</div>;
  }
  return <Render data={data} />;
}
