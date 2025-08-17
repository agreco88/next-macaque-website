// src/lib/animation-variants.ts
import type { Variants, Transition } from "framer-motion";

/**
 * 🔧 Global timing config – adjust here and every animation stays consistent.
 */
export const EASING: Transition["ease"] = "easeOut";

export const TIMING = {
	fade: 0.8, // base fade duration
	item: 0.28, // per-item motion duration
	staggerChildren: 0.08, // gap between children
	delayChildren: 0.05, // initial delay for first child
};

/* ---------------------------------------
 * Base (existing)
 * -------------------------------------*/
export const containerVariantsDelayed: Variants = {
	hidden: {},
	show: {
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	},
};

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: TIMING.fade, ease: EASING },
	},
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: EASING },
	},
};

export const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.2 },
	},
};

export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 0 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: TIMING.fade, ease: EASING },
	},
};

/* ---------------------------------------
 * Theme Toggle (existing)
 * -------------------------------------*/
export const defaultSpring: Transition = {
	type: "spring",
	stiffness: 500,
	damping: 32,
	mass: 0.9,
};

export const instantTransition: Transition = { duration: 0 };

export function themeToggleVariants(enterX: number, prefersReduced: boolean): Variants {
	const transition = prefersReduced ? instantTransition : defaultSpring;
	return {
		hidden: { opacity: 0, x: enterX },
		show: { opacity: 1, x: 0, transition },
		exit: { opacity: 0, x: -enterX, transition },
	};
}

/* ---------------------------------------
 * 💧 Uniform “Waterfall” system
 * -------------------------------------*/

/** Parent that staggers its children with global timing */
export const waterfallList: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: TIMING.staggerChildren,
			delayChildren: TIMING.delayChildren,
		},
	},
	exit: { opacity: 0, transition: { duration: TIMING.fade / 2 } },
};

/** Each child item in the waterfall */
export const waterfallItem: Variants = {
	hidden: { opacity: 0, y: 8 },
	show: { opacity: 1, y: 0, transition: { duration: TIMING.item, ease: EASING } },
	exit: { opacity: 0, y: 4, transition: { duration: TIMING.item * 0.8, ease: EASING } },
};
