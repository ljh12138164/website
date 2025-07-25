import { code } from '@/app/page';
import Render from '@/components/render';
export default async function Home({ params }: { params: Promise<{ router: string }> }) {
  const { router } = await params;
  // const data = await getAllSandBoxData();
  if (router === 'not-found') {
    return <div>Not Found</div>;
  }
  return <Render data={code} />;
}
