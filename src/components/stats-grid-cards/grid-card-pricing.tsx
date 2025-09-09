"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimateNumber } from "motion-plus/react";
import { GridCardCorners } from "./grid-card-corners";
import { CircleDollarSign } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const GridCardPricing = () => {
	const [hovered, setHovered] = useState(false);
	const t = useTranslations("AnimatedStatsGrid.cards.pricing");

	// Desktop vs mobile logic
	const isDesktopWidth = useMediaQuery("(min-width: 1024px)");
	const isHoverCapable = useMediaQuery("(hover: hover) and (pointer: fine)");
	const isDesktop = isDesktopWidth && isHoverCapable;

	// In-view trigger for mobile/tablet
	const ref = useRef<HTMLAnchorElement>(null);
	const inView = useInView(ref, {
		amount: 0.65, // require ~65% visible
		margin: "-35% 0% -35% 0%", // center band
		once: false, // re-activate on re-entry
	});

	const reduce = useReducedMotion();
	const active = isDesktop ? hovered : inView;

	return (
		<motion.a
			ref={ref}
			href="#"
			target="_blank"
			rel="noreferrer noopener"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="group relative flex h-56 flex-col justify-between overflow-hidden p-4 sm:p-8 px-4 md:h-80"
			initial={false}
		>
			{/* Top row: Title + Icon */}
			<div className="flex w-full items-center justify-between">
				<div
					className={`flex items-center gap-1.5 text-xs uppercase transition-colors duration-500 ${
						active ? "text-orange-400" : "text-neutral-600"
					}`}
				>
					{t("title")}
				</div>

				<div
					className={`flex items-center gap-1.5 text-xs uppercase transition-colors duration-500 ${
						active ? "text-orange-400" : "text-neutral-600"
					}`}
				>
					<CircleDollarSign />
				</div>
			</div>

			{/* Copy + price */}
			<div className="flex flex-col">
				<p
					className={`relative z-10  transition-colors duration-500 ${
						active ? "text-neutral-300" : "text-neutral-600"
					}`}
				>
					{t("labelFrom")}
				</p>

				<span
					className={`flex items-center gap-2 text-4xl sm:text-5xl font-semibold leading-none ${
						active ? "text-orange-400" : "text-gray-300"
					}`}
				>
					{/* Manual currency symbol to force $U */}
					<span>$U</span>

					<AnimateNumber
						suffix={active ? t("suffix.month") : t("suffix.day")}
						className="number"
						transition={{
							visualDuration: 0.6,
							type: "spring",
							bounce: 0.25,
							opacity: { duration: 0.2, ease: "linear" },
						}}
					>
						{active ? 2999 : 166}
					</AnimateNumber>
				</span>
			</div>

			<GridCardCorners />

			{/* Background (fades with `active`) */}
			<motion.img
				src="/images/animated-card-grid/image-card-pricing.webp"
				alt="Pricing background"
				className="absolute inset-0 h-full w-full object-cover"
				initial={false}
				animate={{ opacity: active ? 0.2 : 0 }}
				transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
			/>
		</motion.a>
	);
};
