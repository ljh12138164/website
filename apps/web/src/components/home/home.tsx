'use client';

import client from "@/service";
import { useSuspenseQuery } from "@tanstack/react-query";


export default function HomeComponent() {
    const { data } = useSuspenseQuery({
        queryKey: ['hello'],
        queryFn: async () => {
            const res = await client.api.web.user.abc.$get();
            return res.text();
        },
    });
    return <div>{data}</div>;
}