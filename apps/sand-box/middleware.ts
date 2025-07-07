import { type NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export default async function middleware(request: NextRequest) {
  // 截取路由最前面的子路由
  const path = request.nextUrl.host.split('.')[0];
  const cookieStore = await cookies();
  cookieStore.set('path', path);
  return NextResponse.next();
}
