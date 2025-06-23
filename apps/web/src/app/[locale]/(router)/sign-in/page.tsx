import { getTranslations } from "next-intl/server";
import { Input } from "@/components/ui/input";

export default async function Page() {
  const t = await getTranslations();
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{t("auth.signInTitle")}</h1>
        <Input />
      </div>
    </div>
  );
}
