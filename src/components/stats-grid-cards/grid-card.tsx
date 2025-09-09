"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GridCardCorners } from "./grid-card-corners";
import { circOut } from "framer-motion";

type GridCardProps = {
	href: string;
	title: string | ReactNode;
	subtitle?: string | ReactNode;
	video?: boolean;
	tag: string;
	src: string;
	description?: string | ReactNode;
	children?: ReactNode | ((active: boolean) => ReactNode);
	className?: string;
	icon?: ReactNode;
};

function useBufferedActive(value: boolean, exitDelay = 120) {
	const [state, setState] = useState(value);
	useEffect(() => {
		if (value) {
			setState(true);
			return;
		}
		const t = setTimeout(() => setState(false), exitDelay);
		return () => clearTimeout(t);
	}, [value, exitDelay]);
	return state;
}

export const GridCard = ({
	href,
	title,
	subtitle,
	tag,
	src,
	description,
	children,
	className = "",
	video = false,
	icon,
}: GridCardProps) => {
	const [hovered, setHovered] = useState(false);
	const ref = useRef<HTMLAnchorElement>(null);
	const reduce = useReducedMotion();

	// Desktop hover vs mobile scroll
	const isDesktopWidth = useMediaQuery("(min-width: 1024px)");
	const isHoverCapable = useMediaQuery("(hover: hover) and (pointer: fine)");
	const isDesktop = isDesktopWidth && isHoverCapable;

	const inViewRaw = useInView(ref, {
		amount: 0.65,
		margin: "-35% 0% -35% 0%",
		once: false,
	});

	// Buffer the scroll-trigger to prevent flicker at the threshold
	const inView = useBufferedActive(inViewRaw, 120);

	const active = isDesktop ? hovered : inView;

	const tr = { duration: reduce ? 0 : 0.45, ease: circOut };

	return (
		<motion.a
			ref={ref}
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={`group relative flex h-56 flex-col justify-between overflow-hidden p-4 sm:p-8 md:h-80 md:p-9 ${className}`}
			initial={false}
		>
			{/* Tag + Icon */}
			<div className="flex w-full items-center justify-between">
				<div
					className={`flex items-center gap-1.5 text-xs uppercase transition-colors duration-300 ${
						active ? "text-orange-400" : "text-neutral-600"
					}`}
				>
					<span>{tag}</span>
				</div>
				{icon && (
					<div
						className={`flex pr-2 sm:pr-0 items-center gap-1.5 text-xs uppercase transition-colors duration-300 ${
							active ? "text-orange-400" : "text-neutral-600"
						}`}
					>
						{icon}
					</div>
				)}
			</div>

			<div className="flex flex-col">
				{/* Title */}
				<motion.h2
					className="relative z-10 text-xl sm:text-2xl font-light uppercase leading-tight tracking-tight transform-gpu will-change-transform"
					animate={{ y: active ? -6 : 0 }}
					transition={tr}
				>
					{title}
				</motion.h2>

				{/* Subtitle (color via class; y/opacity via motion) */}
				{subtitle && (
					<motion.h3
						className={`relative z-10 text-xl sm:text-2xl font-light uppercase leading-tight tracking-tight transform-gpu will-change-transform ${
							active ? "text-orange-400" : "text-neutral-600"
						}`}
						animate={{ y: active ? -6 : 0, opacity: active ? 1 : 1 }} // keep opacity stable; only move/paint color
						transition={tr}
					>
						{subtitle}
					</motion.h3>
				)}

				{/* Description: fade+slide in */}
				{description && (
					<motion.p
						className="relative z-10 max-w-prose text-xs sm:text-sm transform-gpu will-change-transform"
						animate={{
							y: active ? 0 : 6,
							opacity: active ? 1 : 0,
							color: active ? "rgb(212 212 212)" /* neutral-300 */ : "rgb(163 163 163)" /* neutral-400 */,
						}}
						transition={tr}
					>
						{description}
					</motion.p>
				)}
			</div>

			{/* Children (supports render-prop) */}
			{children && (
				<div className="relative z-10 mt-3">
					{typeof children === "function" ? (children as (a: boolean) => ReactNode)(active) : children}
				</div>
			)}

			{/* Background */}
			{video ? (
				<motion.video
					src="/video/video-card-ingredients.mp4"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover"
					playsInline
					muted
					loop
					autoPlay
					animate={{ opacity: active ? 0.15 : 0 }}
					transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
				/>
			) : (
				<motion.div
					className="pointer-events-none absolute inset-0"
					style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}
					animate={{ opacity: active ? 0.15 : 0 }}
					transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
				/>
			)}

			<GridCardCorners />
		</motion.a>
	);
};
