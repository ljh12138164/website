import { useAuth } from '@/src/hooks/use-auth';

export function AuthProvide({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuth();
  if (isLoading) return <div>加载中...</div>;
  return children;
}
