// src/components/pages/home-page/home-page-hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { waterfallList, waterfallItem } from "@/lib/animation-variants";

export default function HomePageHero() {
	const hero = useTranslations("HomePageHero");
	const locale = useLocale();

	return (
		<section className="container mx-auto px-4 md:px-0 py-12 ">
			<motion.div
				variants={waterfallList}
				initial="hidden"
				animate="show"
				className="flex flex-col items-center text-center"
			>
				<motion.h1 variants={waterfallItem} className="text-4xl font-bold tracking-tight md:text-5xl">
					{hero("h1")}
				</motion.h1>

				<motion.p variants={waterfallItem} className="mt-2 text-lg text-muted-foreground md:te xt-xl">
					{hero("h2")}
				</motion.p>

				<motion.div variants={waterfallItem} className="mt-6 flex gap-4">
					<Button variant="default" asChild>
						<Link href={`/${locale}/about-us`}>{hero("cta")}</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href={`/${locale}/#`}>{hero("cta2")}</Link>
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
