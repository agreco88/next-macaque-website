"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

/**
 * Sonner Toaster styled to match ShadCN tokens (light/dark).
 * To be used once in the app root layout.
 */
export default function ToasterProvider() {
	const { resolvedTheme } = useTheme();

	return (
		<Toaster
			// follow your next-themes setting (not just system)
			theme={resolvedTheme === "dark" ? "dark" : "light"}
			position="bottom-center"
			richColors
			toastOptions={{
				classNames: {
					toast:
						// container
						"bg-popover text-popover-foreground border border-border shadow-sm rounded-lg",
					title: "font-medium",
					description: "text-muted-foreground",
					actionButton: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
					cancelButton: "bg-muted text-muted-foreground hover:bg-muted/80 rounded-md",
					closeButton: "text-muted-foreground hover:text-foreground",
					icon: "",
					success: "",
					error: "",
					warning: "",
					info: "",
					loading: "",
				},
			}}
		/>
	);
}
