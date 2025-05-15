'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  // 设置name为可选，且可以为空字符串
  name: z
    .string()
    .min(2, '用户名长度至少为2位')
    .optional()
    .nullable()
    .or(z.literal('')),
  accoute: z.string().email({ message: '请输入正确的邮箱' }),
  password: z
    .string()
    .min(6, '密码长度至少为6位')
    .max(16, '密码长度最多为16位'),
});

export default function SignIn() {
  const { handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  function submit(data: z.infer<typeof schema>) {
    console.log(data);
  }
  return (
    <div className='flex items-center justify-center min-h-svh'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-3xl font-bold'>登录</h1>
        <form onSubmit={handleSubmit(submit)}></form>
      </div>
    </div>
  );
}
