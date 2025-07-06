import Render from '@/components/render';

export default async function Home({ params }: { params: Promise<{ router: string }> }) {
  const { router } = await params;
  if (router === 'not-found') {
    return <div>Not Found</div>;
  }
  return (
    <div>
      <Render
        data={[
          {
            path: 'home.tsx',
            code: `
            import { Button } from '@/components/ui/button';
            export default function Home() { return <Button>Home</Button>; }
            `,
          },
        ]}
      />
    </div>
  );
}
