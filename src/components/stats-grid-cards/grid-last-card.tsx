// components/stats-grid/cards/last-card.tsx
import { useTranslations } from "next-intl";
import { GridCardCorners } from "./grid-card-corners";

type LastCardProps = {
  className?: string;
};

export function LastCard({ className = "" }: LastCardProps) {
  const t = useTranslations("StatsGrid.cta");

  return (
    <a
      href="/build-your-bar"
      target="_blank"
      className="block focus:outline-none focus:ring-2 focus:ring-orange-400/60  border text-neutral-950"
    >
      <div
        className={`group relative flex sm:h-56 flex-col justify-center lg:justify-between !normal-case
        bg-neutral-950 px-6 py-16 lg:h-80 md:p-9 ${className}`}
      >
        <h2 className="text-4xl leading-tight gap-1 text-neutral-50 flex flex-col h-full justify-end">
          <span>{t("ready")}</span>
          <span className="text-orange-400">{t("order")}</span>
        </h2>
        <GridCardCorners />
      </div>
    </a>
  );
}
