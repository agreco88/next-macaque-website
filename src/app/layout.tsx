import type { Metadata } from "next";
import "./globals.css";
import { ThemeClientWrapper } from "@/components/theme/theme-client-wrapper";
import ToasterProvider from "@/components/providers/toaster-provider";

export const metadata: Metadata = {
	title: "Next.js Website Template",
	description: "Next.js Website Template used for default landing pages",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="transition-all">
				<ThemeClientWrapper>
					{children} <ToasterProvider />
				</ThemeClientWrapper>
			</body>
		</html>
	);
}
