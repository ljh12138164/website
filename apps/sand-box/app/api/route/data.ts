export async function GET() {
  return Response.json([
    {
      path: 'home.tsx',
      code: `
      export default function Home() { return <div>Home</div>; }
      `,
    },
  ]);
}
