import Render from '@/components/render';
//app为路由，如果不是app则是组件
const data: { path: string; code: string }[] = [
  {
    path: 'app/page.tsx',
    code: `
    import Home from './home';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { UserIcon } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

    export default function Page() {
      return (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>测试组件</CardTitle>
          </CardHeader>
          <CardContent>
            <Home />
            <Button variant="outline" className="mt-4">测试按钮</Button>
            <div className="mt-4">
              <Avatar>
                <AvatarImage src="/images/logo.png" alt="logo" width={100} height={100} />
                <AvatarFallback>
                  <UserIcon className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>
      );
    }
    `,
  },
  {
    path: 'home.tsx',
    code: `
    import { Button } from '@/components/ui/button';
    import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
    import { Bell } from 'lucide-react';

    export default function Home() {
      return (
        <div className="space-y-4">
          <Alert>
            <Bell className="h-4 w-4" />
            <AlertTitle>提示</AlertTitle>
            <AlertDescription>
              这是一个测试组件，用于验证render模块导入是否成功
            </AlertDescription>
          </Alert>
          <div>Home组件加载成功</div>
        </div>
      );
    }
    `,
  },
  {
    path: 'counter.tsx',
    code: `
    import { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent } from '@/components/ui/card';

    export default function Counter() {
      const [count, setCount] = useState(0);

      return (
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">{count}</div>
              <div className="flex gap-2 justify-center">
                <Button onClick={() => setCount(count - 1)}>-</Button>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
    `,
  },
];
export default function Page() {
  return <Render data={data} />;
}
