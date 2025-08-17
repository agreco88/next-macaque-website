"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { waterfallList, waterfallItem } from "@/lib/animation-variants";

type HeroProps = {
	/** Main heading */
	title: string;
	/** Subheading (muted style) */
	subtitle?: string;
	/** Optional call-to-action button */
	cta?: {
		label: string;
		href: string; // pass a locale-aware href from caller, e.g. `/${locale}/contact-us#form`
		variant?: React.ComponentProps<typeof Button>["variant"];
	};
	/** "left" or "center" alignment */
	align?: "left" | "center";
	/** Extra classes for the outer section */
	className?: string;
};

export default function Hero({ title, subtitle, cta, align = "left", className }: HeroProps) {
	const isCenter = align === "center";

	return (
		<section className={cn("px-4 md:p-0 py-12", className)}>
			<motion.div
				variants={waterfallList}
				initial="hidden"
				animate="show"
				className={cn("flex flex-col gap-2", isCenter ? "items-center text-center" : "items-start text-start")}
			>
				<motion.h1
					variants={waterfallItem}
					className={cn("text-4xl font-bold tracking-tight md:text-5xl", isCenter ? "" : "")}
				>
					{title}
				</motion.h1>

				{subtitle && (
					<motion.p variants={waterfallItem} className="mt-1 text-lg text-muted-foreground md:text-xl">
						{subtitle}
					</motion.p>
				)}

				{cta && cta.label && cta.href && (
					<motion.div variants={waterfallItem} className="mt-4">
						<Button asChild variant={cta.variant ?? "default"}>
							<Link href={cta.href}>{cta.label}</Link>
						</Button>
					</motion.div>
				)}
			</motion.div>
		</section>
	);
}
