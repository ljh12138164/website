import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <nav className="flex h-10 p-4">
      <SidebarTrigger />
      <Separator />
    </nav>
  );
}
