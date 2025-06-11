'use client';

import http from "@/service";
import { useSuspenseQuery } from "@tanstack/react-query-next-experimental";

export const getHello = async () => {
    const res = await http.get('/');
    return res.data;
};
export default function Home() {
    const { data } = useSuspenseQuery({
        queryKey: ['hello'],
        queryFn: getHello,
    });
    console.log(data);
    return <div>{data}</div>;
}