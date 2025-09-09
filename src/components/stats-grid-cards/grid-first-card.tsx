// components/stats-grid/cards/first-card.tsx
import { useTranslations } from "next-intl";
import { StatsGridBanner } from "../stats-grid/stats-grid-banner";

export function FirstCard() {
	const t = useTranslations("AnimatedStatsGrid.firstCard");
	return <StatsGridBanner variant="headline" topLine={t("whyPickTop")} bottomLine={t("whyPickBottom")} />;
}
