import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { Card } from '../ui/card';

interface AuthCardProps extends PropsWithChildren {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export default function AuthCard({ title, description, link, linkText, children }: AuthCardProps) {
  return (
    <Card className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      {children}
      <div className="text-center text-sm">
        <Link href={link} className="font-medium text-primary hover:underline">
          {linkText}
        </Link>
      </div>
    </Card>
  );
}
