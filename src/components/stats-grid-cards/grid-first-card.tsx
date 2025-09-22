// components/stats-grid/cards/first-card.tsx
import { useTranslations } from "next-intl";

type FirstCardProps = {
  className?: string;
};

export function FirstCard({ className = "" }: FirstCardProps) {
  const t = useTranslations("StatsGrid.firstCard");

  return (
    <div
      className={`group relative flex sm:h-56 flex-col justify-center lg:justify-between !normal-case
        bg-neutral-950 px-6 py-16 lg:h-80 md:p-9 ${className}`}
    >
      <h2 className="text-4xl leading-tight transition-colors duration-500">
        <span className="text-orange-400 transition-colors duration-500">
          {t("whyPickTop")}
        </span>
        <br />
        <span className="text-orange-50">{t("whyPickBottom")}</span>
      </h2>
    </div>
  );
}
