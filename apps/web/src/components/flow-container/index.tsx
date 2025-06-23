"use client";
import client from "@/service";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "react-hot-toast";
export default function FlowContainer() {
  const queryClient = useQueryClient();
  const t = useTranslations("workflow");
  const { data } = useSuspenseQuery({
    queryKey: ["workflows"],
    queryFn: async () => {
      const res = await client.workflow.list.$get();
      return res.json();
    },
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (data: { name: string; description: string }) =>
      client.workflow.create.$post({ json: data }),
    onSuccess: () => {
      toast.success("创建成功");
      queryClient.invalidateQueries({ queryKey: ["workflows"] });
    },
  });
  return (
    <div>
      {t("title")}
      <button
        onClick={async () => {
          const res = await mutateAsync({ name: "test", description: "test" });
          console.log(res);
        }}
      >
        create
      </button>
    </div>
  );
}
