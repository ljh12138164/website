import { HomeIcon, SettingsIcon, WorkflowIcon } from "lucide-react";
import Link from "next/link";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenuItem,
	SidebarProvider,
} from "@/components/ui/sidebar";

const Label = [
	{
		title: "Home",
		icon: <HomeIcon />,
		href: "/",
	},
	{
		title: "workflow",
		icon: <WorkflowIcon />,
		href: "/",
	},
	{
		title: "setting",
		icon: <SettingsIcon />,
		href: "/",
	},
];

export default function HomeComponent() {
	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarGroup>
						<SidebarGroupLabel>
							{Label.map(({ title, icon, href }) => (
								<SidebarMenuItem key={title} title={title}>
									<Link href={href}>
										{icon}
										<span>{title}</span>
									</Link>
								</SidebarMenuItem>
							))}
						</SidebarGroupLabel>
					</SidebarGroup>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup />
					<SidebarGroup />
				</SidebarContent>
				<SidebarFooter />
			</Sidebar>
		</SidebarProvider>
	);
}
