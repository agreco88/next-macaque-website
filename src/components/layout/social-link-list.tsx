import { FC } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/social-links";
import { waterfallList, waterfallItem } from "@/lib/animation-variants";

const SocialLinkList: FC = () => (
	<motion.ul
		variants={waterfallList}
		initial="hidden"
		animate="show"
		exit="hidden"
		className="flex items-center gap-4"
	>
		{socialLinks.map(({ href, label, icon }) => (
			<motion.li key={label} variants={waterfallItem}>
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={label}
					className="text-muted-foreground hover:text-foreground transition-colors duration-300"
				>
					<span className="inline-flex w-5 h-5 [&_svg]:w-5 [&_svg]:h-5 [&_path]:fill-current">{icon}</span>
				</a>
			</motion.li>
		))}
	</motion.ul>
);

export default SocialLinkList;
