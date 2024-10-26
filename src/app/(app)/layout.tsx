import { AppSidebar } from "@/app/(app)/_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full">
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
