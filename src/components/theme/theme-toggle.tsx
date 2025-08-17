"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { defaultSpring } from "@/lib/animation-variants";

export function ThemeToggle() {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const prefersReduced = useReducedMotion();

	useEffect(() => setMounted(true), []);
	const isDark = (resolvedTheme || theme) === "dark";

	const dir = useMemo<"to-dark" | "to-light">(() => (isDark ? "to-dark" : "to-light"), [isDark]);

	const enterX = dir === "to-dark" ? 16 : -16;
	const exitX = dir === "to-dark" ? -16 : 16;

	const transition = prefersReduced ? { duration: 0 } : defaultSpring;

	if (!mounted) {
		return (
			<Button variant="ghost" size="icon" aria-label="Toggle theme" disabled>
				<Sun className="h-5 w-5" />
			</Button>
		);
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
			aria-pressed={isDark}
			className="relative overflow-hidden cursor-pointer"
			onClick={() => setTheme(isDark ? "light" : "dark")}
		>
			<span className="relative block h-5 w-5">
				<AnimatePresence mode="popLayout" initial={false}>
					{isDark ? (
						<motion.span
							key="moon"
							initial={{ opacity: 0, x: enterX }}
							animate={{ opacity: 1, x: 0, transition }}
							exit={{ opacity: 0, x: exitX, transition }}
							className="absolute inset-0 grid place-items-center"
						>
							<Moon className="h-5 w-5" />
						</motion.span>
					) : (
						<motion.span
							key="sun"
							initial={{ opacity: 0, x: -enterX }}
							animate={{ opacity: 1, x: 0, transition }}
							exit={{ opacity: 0, x: -exitX, transition }}
							className="absolute inset-0 grid place-items-center"
						>
							<Sun className="h-5 w-5" />
						</motion.span>
					)}
				</AnimatePresence>
			</span>
		</Button>
	);
}
