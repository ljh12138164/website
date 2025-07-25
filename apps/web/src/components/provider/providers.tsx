"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { QueryProvider } from "@/components/provider/query-provide";
import { AuthProvide } from "../auth-container/auth-provide";

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Suspense fallback={<div>加载中...</div>}>
			<div className="h-[100dvh] overflow-hidden">
				<QueryProvider>
					<AuthProvide>
						<NextThemesProvider
							attribute="class"
							defaultTheme="light"
							enableSystem
							disableTransitionOnChange
							enableColorScheme
						>
							{children}
						</NextThemesProvider>
						<Toaster
							position="top-center"
							gutter={12}
							containerStyle={{ margin: "8px" }}
							toastOptions={{
								success: { duration: 2000 },
								error: { duration: 5500 },
								loading: { duration: 10000 },
								style: {
									fontSize: "16px",
									maxWidth: "500px",
									padding: "16px 24px",
									backgroundColor: "white",
									zIndex: 10,
								},
							}}
						/>
					</AuthProvide>
				</QueryProvider>
			</div>
		</Suspense>
	);
}
export default Providers;
