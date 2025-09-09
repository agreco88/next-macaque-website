"use client";

import React from "react";
import { useTranslations, useMessages } from "next-intl";
import { Apple, ArrowUpRight, BatteryFull, CandyIcon, ChevronDown, PackageCheck, WandSparkles } from "lucide-react";
import { GridCardPricing } from "../stats-grid-cards/grid-card-pricing";
import { GridCardProtein } from "../stats-grid-cards/grid-card-protein";
import { GridCard } from "../stats-grid-cards/grid-card";

export const AnimatedStatsGrid = () => {
	const t = useTranslations("AnimatedStatsGrid");
	const messages = useMessages() as any;

	return (
		<div className="bg-neutral-900 min-h-screen text-neutral-50 md:p-12">
			<div className="flex flex-col max-w-6xl px-4 py-16 mx-auto">
				<p className="text-xs tracking-[0.2em] uppercase text-zinc-400 mb-3">{t("kicker")}</p>

				<h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-2">{t("title")}</h2>

				<p className="text-zinc-300 max-w-prose">{t("description")}</p>
			</div>

			<div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-neutral-700 border border-neutral-700 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
				<FirstCard />
				<GridCardPricing />
				<GridCardProtein />
			</div>

			<div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-neutral-700 border-x  border-neutral-700 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
				<GridCard
					href="#"
					title={t("cards.ingredients.title")}
					subtitle={t("cards.ingredients.subtitle")}
					tag={t("cards.ingredients.tag")}
					icon={<CandyIcon />}
					src="/images/animated-card-grid/image-card-ingredients.webp"
					description={t("cards.ingredients.description")}
				/>
				<GridCard
					href="#"
					title={t("cards.customize.title")}
					subtitle={t("cards.customize.subtitle")}
					tag={t("cards.customize.tag")}
					icon={<WandSparkles />}
					src="/images/animated-card-grid/image-card-customizable.webp"
					description={t("cards.customize.description")}
					video
				/>
				<GridCard
					href="#"
					title={t("cards.shipping.title")}
					subtitle={t("cards.shipping.subtitle")}
					tag={t("cards.shipping.tag")}
					icon={<PackageCheck />}
					src="/images/animated-card-grid/image-card-shipping-new.webp"
					description={t("cards.shipping.description")}
				/>
			</div>

			<div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-neutral-700 border border-neutral-700 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
				<GridCard
					href="#"
					title={t("cards.training.title")}
					subtitle={t("cards.training.subtitle")}
					description={t("cards.training.description")}
					tag={t("cards.training.tag")}
					icon={<BatteryFull />}
					src="/images/animated-card-grid/image-card-training.webp"
				/>
				<GridCard
					href="#"
					title={t("cards.nutrition.title")}
					subtitle={t("cards.nutrition.subtitle")}
					description={t("cards.nutrition.description")}
					tag={t("cards.nutrition.tag")}
					icon={<Apple />}
					src="/images/animated-card-grid/image-card-nutrition.webp"
				/>
				<LastCard />
			</div>
		</div>
	);
};

const FirstCard = () => {
	const t = useTranslations("AnimatedStatsGrid.firstCard");
	return (
		<div className="group relative flex sm:h-56 flex-col justify-between bg-neutral-950 px-4 py-16 md:h-80 md:p-9">
			<h2 className="text-4xl uppercase leading-tight">
				<span className="text-orange-400 transition-colors duration-500">{t("whyPickTop")}</span>
				<br />
				{t("whyPickBottom")}
			</h2>
		</div>
	);
};

const LastCard = () => {
	const t = useTranslations("AnimatedStatsGrid.cta");
	return (
		<a
			href="#"
			target="_blank"
			className="group relative flex sm:h-56 flex-col justify-center sm:justify-end bg-neutral-950 px-4 py-16 md:h-80 md:p-9"
		>
			<h2 className="text-4xl uppercase leading-tight">
				<span className="text-neutral-400 transition-colors duration-500 group-hover:text-orange-400">
					{t("ready")}
				</span>
				<br />
				{t("order")}
			</h2>
		</a>
	);
};
