import React from "react";
import { getTranslations } from "next-intl/server"; //Server translations
import { Apple, BatteryFull, CandyIcon, PackageCheck, WandSparkles } from "lucide-react"; //Icons for cards
import { StatsGridWrapper } from "./stats-grid-wrapper"; // server-component
import { StatsGridBanner } from "./stats-grid-banner"; // server-component
import { StatsGridTitle } from "./stats-grid-title"; /// server-component
import { GridCard } from "../stats-grid-cards/grid-card"; // client-component
import { GridCardPricing } from "../stats-grid-cards/grid-card-pricing"; // client-component
import { GridCardProtein } from "../stats-grid-cards/grid-card-protein"; // client-component

export const AnimatedStatsGrid = async () => {
	const t = await getTranslations("AnimatedStatsGrid");
	const tFirstCard = await getTranslations("AnimatedStatsGrid.firstCard");
	const tLastCardCTA = await getTranslations("AnimatedStatsGrid.cta");

	return (
		<div className="bg-neutral-900 min-h-screen text-neutral-50 md:p-12">
			<StatsGridTitle kicker={t("kicker")} title={t("title")} description={t("description")} />

			{/* 1) header row */}
			<StatsGridWrapper variant="first">
				<StatsGridBanner
					variant="headline"
					topLine={tFirstCard("whyPickTop")}
					bottomLine={tFirstCard("whyPickBottom")}
				/>
				<GridCardPricing />
				<GridCardProtein />
			</StatsGridWrapper>

			{/* 2) middle row */}
			<StatsGridWrapper variant="middle">
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
			</StatsGridWrapper>

			{/* 3) footer row */}
			<StatsGridWrapper variant="last">
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
				<StatsGridBanner
					variant="cta"
					topLine={tLastCardCTA("ready")}
					bottomLine={tLastCardCTA("order")}
					href="#"
				/>
			</StatsGridWrapper>
		</div>
	);
};
