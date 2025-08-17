"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation-variants";
import { useTranslations } from "next-intl";
import HeaderLogo from "./header-logo";
import HeaderMobileToggle from "./header-mobile-toggle";
import LocaleSwitcher from "@/components/locale-switcher/locale-switcher";

type Props = { onClose: () => void };

export default function HeaderMobileMenu({ onClose }: Props) {
	const t = useTranslations("Layout.header");

	return (
		<motion.div
			variants={fadeIn}
			className="absolute h-screen top-0 left-0 w-full bg-black text-white z-50 flex flex-col gap-4 p-4 py-6 md:hidden"
			initial="hidden"
			animate="show"
			exit="hidden"
		>
			<div className="flex w-full justify-between">
				<HeaderLogo />
				<HeaderMobileToggle isOpen={true} onToggle={onClose} />
			</div>

			<nav className="flex flex-col gap-6 py-6">
				<button onClick={onClose} className="text-left">
					{t("about-us")}
				</button>
				<button onClick={onClose} className="text-left">
					{t("contact-us")}
				</button>
			</nav>

			<LocaleSwitcher />
		</motion.div>
	);
}
