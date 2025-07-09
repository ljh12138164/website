export default async function Home({ params }: { params: Promise<{ router: string }> }) {
  const { router } = await params;
  // const data = await getAllSandBoxData();
  if (router === 'not-found') {
    return <div>Not Found</div>;
  }
  // return <Render />;
  return <div>123</div>;
}
