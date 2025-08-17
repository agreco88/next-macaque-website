"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation-variants";
import FooterLogo from "./footer-logo";
import SocialLinkList from "../social-link-list";

export default function Footer() {
	return (
		<motion.footer
			initial="hidden"
			animate="show"
			exit="hidden"
			variants={fadeInUp}
			className="container mx-auto flex py-6 px-4 md:px-0 justify-between"
		>
			<FooterLogo />
			<SocialLinkList />
		</motion.footer>
	);
}
