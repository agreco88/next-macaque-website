"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";

export function ThemeClientWrapper({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
			{children}
		</ThemeProvider>
	);
}
