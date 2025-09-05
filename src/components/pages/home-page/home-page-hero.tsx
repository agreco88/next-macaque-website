"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import SplitText from "./split-text";
import { useEffect, useState } from "react";
import VideoBackground from "@/components/common/video-background";

export default function HomePageHero() {
	const hero = useTranslations("HomePageHero");
	const locale = useLocale();
	const isMobile = useIsMobile();

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true); // delay animations until fully mounted
	}, []);

	return (
		<section className="relative  min-h-dvh flex bg-black text-white overflow-hidden">
			<VideoBackground isMobile={isMobile} />

			<div className="relative container mx-auto z-10 w-full  px-4 sm:px-8 flex justify-center sm:justify-start">
				<div className="sm:max-w-2xl flex flex-col gap-4 sm:gap-6 items-start   w-full md:justify-center justify-around text-left pt-24">
					<div className="flex flex-col gap-8 ">
						<div className="flex flex-col gap-2 max-w-lg ">
							<span className="text-xl sm sm:text-xl text-gray-200 text-start flex gap-2  uppercase tracking-wide">
								{isMounted && <SplitText text={hero("main")} />}
							</span>

							<h1 className="text-4xl sm:text-4xl font-bold uppercase  md:text-white border-l-[1px] border-orange-400 pl-3 leading-tight">
								{isMounted && <SplitText text={hero("subtitle")} />}
							</h1>
						</div>
						<p className="text-base  max-w-lg sm:text-base text-gray-300 leading-relaxed text-pretty ">
							{isMounted && <SplitText text={hero("subtext")} />}
						</p>
					</div>
					<div className="flex-1 sm:flex-[0]"></div>
					<motion.ul
						role="list"
						className="mt-4 sm:mt-8 flex flex-col sm:flex-row self-end sm:self-start gap-3 sm:gap-4 w-full sm:w-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isMounted
								? {
										opacity: 1,
										y: 0,
										transition: { delay: 1.2, duration: 0.6 },
								  }
								: {}
						}
					>
						<motion.li role="listitem">
							<Button
								variant="outline"
								className="md:text-gray-200 h-12 border !border-orange-500 md:!border-auto text-orange-400 sm:h-auto uppercase sm:normal-case  hover:text-orange-400 transition-all duration-500 w-full sm:w-auto"
								asChild
							>
								<Link href={`/${locale}/about-us`}>{hero("cta")}</Link>
							</Button>
						</motion.li>

						<motion.li role="listitem">
							<Button
								variant="ghost"
								className="text-gray-200 h-20 sm:h-auto  hover:text-orange-400 transition-all duration-500 w-full sm:w-auto"
								asChild
							>
								<Link href={`/${locale}/#`}>{hero("cta2")}</Link>
							</Button>
						</motion.li>
					</motion.ul>
				</div>
			</div>

			{/* Overlay gradient */}
			<div className="absolute inset-0 bg-black/20 z-[5]" />
		</section>
	);
}
