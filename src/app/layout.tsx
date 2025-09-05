import type { Metadata } from "next";
import "./globals.css";
import { ThemeClientWrapper } from "@/components/theme/theme-client-wrapper";
import ToasterProvider from "@/components/providers/toaster-provider";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Load the font
const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-jakarta", // Optional, useful for Tailwind
	weight: ["200", "300", "400", "500", "600", "700"], // Include only what you need
});

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
		<html lang="en" suppressHydrationWarning className={jakarta.variable}>
			<body className="transition-all min-w-dvw">
				<ThemeClientWrapper>
					{children} <ToasterProvider />
				</ThemeClientWrapper>
			</body>
		</html>
	);
}
