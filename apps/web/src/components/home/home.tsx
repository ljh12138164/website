'use client';

import http from "@/service";
import { useSuspenseQuery } from "@tanstack/react-query";

export const getHello = async () => {
    const res = await http.get('/');
    console.log(res);
    return res.data;
};
export default function HomeComponent() {
    const { data } = useSuspenseQuery({
        queryKey: ['hello'],
        queryFn: getHello,
    });
    return <div>{data}</div>;
}