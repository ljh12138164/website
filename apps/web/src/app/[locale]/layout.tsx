import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Providers from "@/components/provider/providers";
import "./global.css";

const fontSans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

interface RootLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	const { locale } = await params;
	// 获取当前语言的翻译消息
	const messages = await getMessages({ locale });
	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						<main className="flex-1 p-4">{children}</main>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
