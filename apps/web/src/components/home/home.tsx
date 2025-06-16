'use client';

import client from "@/service";
import { useSuspenseQuery } from "@tanstack/react-query";


export default function HomeComponent() {
    const { data } = useSuspenseQuery({
        queryKey: ['hello'],
        queryFn: async () => {
            const res = await client.user.abc.$get();
            return res.json();
        },
    });
    return <div>{data.map((item) => item.name).join(',')}</div>;
}