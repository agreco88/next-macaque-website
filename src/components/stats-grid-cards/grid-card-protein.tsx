"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimateNumber } from "motion-plus/react";
import { BicepsFlexed } from "lucide-react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { GridCardCorners } from "./grid-card-corners";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const GridCardProtein = () => {
	const [hovered, setHovered] = useState(false);
	const t = useTranslations("AnimatedStatsGrid.cards.protein");

	// Breakpoint + hover capability
	const isDesktopWidth = useMediaQuery("(min-width: 1024px)");
	const isHoverCapable = useMediaQuery("(hover: hover) and (pointer: fine)");
	const isDesktop = isDesktopWidth && isHoverCapable;

	// Scroll trigger for mobile/tablet
	const ref = useRef<HTMLAnchorElement>(null);
	const inView = useInView(ref, {
		amount: 0.65, // require ~65% visible
		margin: "-35% 0% -35% 0%", // center-band activation
		once: false, // re-activate on re-entry
	});

	const reduce = useReducedMotion();

	// 🔑 Desktop = hover; Mobile/Tablet = in-view
	const active = isDesktop ? hovered : inView;

	return (
		<motion.a
			ref={ref}
			href="#"
			target="_blank"
			rel="noreferrer noopener"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="group relative flex h-56 flex-col justify-between overflow-hidden p-4 sm:p-8 md:h-80"
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
					<BicepsFlexed />
				</div>
			</div>

			<div className="flex flex-col">
				{/* From / Up to (animated swap; driven by `active`) */}
				<span
					className={`relative z-10 inline-block h-[1em] transition-colors duration-500 ${
						active ? "text-neutral-300" : "text-neutral-600"
					}`}
				>
					<AnimatePresence mode="wait" initial={false}>
						<motion.span
							key={active ? "up" : "from"}
							initial={{ y: 8, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -8, opacity: 0 }}
							transition={{ duration: 0.22, ease: "easeOut" }}
							className="absolute"
						>
							{active ? t("to") : t("from")}
						</motion.span>
					</AnimatePresence>
					{/* Spacer so container keeps height */}
					<span className="opacity-0">{t("from")}</span>
				</span>

				{/* Value */}
				<span className={`text-5xl font-semibold leading-none ${active ? "text-orange-400" : "text-gray-300"}`}>
					<AnimateNumber
						suffix={t("unit")}
						className="number"
						transition={{
							visualDuration: 0.6,
							type: "spring",
							bounce: 0.25,
							opacity: { duration: 0.2, ease: "linear" },
						}}
					>
						{active ? 32 : 20}
					</AnimateNumber>
				</span>
			</div>

			<GridCardCorners />

			{/* Background (fades with `active`) */}
			<motion.img
				src="/images/animated-card-grid/image-card-protein.webp"
				alt="Protein background"
				className="absolute inset-0 h-full w-full object-cover"
				initial={false}
				animate={{ opacity: active ? 0.2 : 0 }}
				transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
			/>
		</motion.a>
	);
};
