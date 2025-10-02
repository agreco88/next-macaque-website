"use client";

import clsx from "clsx";
import { GridCardCorners } from "@/components/stats-grid-cards/grid-card-corners";

// ⬇️ T is a placeholder for the option type ("chewy" | "crunchy" | ... OR "vanilla" | "cookies" | ...)
export type SelectableCardProps<T extends string> = {
  value: T; // one specific option value
  label: string; // display label
  description?: string; // optional description
  selected: boolean; // highlight if selected
  onSelect: (v: T) => void; // callback when clicked -> uses the same T
  gradient: string; // gradient classes
  textClass?: string;
  descriptionClass?: string;
};

// ⬇️ Notice the <T extends string> here. That means this component "knows" what type of option it's working with.
export function SelectableCard<T extends string>({
  value,
  label,
  description,
  selected,
  onSelect,
  gradient,
  textClass = "text-white",
  descriptionClass = "text-gray-300",
}: SelectableCardProps<T>) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)} // v will be of type T
      className={clsx(
        "group relative flex w-full cursor-pointer flex-col justify-center px-4 md:h-20 overflow-hidden text-left transition",
        selected ? textClass : "text-gray-300",
        "hover:opacity-100"
      )}
    >
      {/* Background gradient */}
      <div
        className={clsx(
          "absolute inset-0 transition-opacity duration-300 border",
          selected ? "bg-neutral-950 " : "bg-neutral-950 "
        )}
        style={{ opacity: selected ? 0.8 : 0.7 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xs sm:text-xl uppercase tracking-tight">{label}</h3>
        {description && (
          <p
            className={clsx(
              "max-w-prose text-xs sm:text-sm",
              selected ? descriptionClass : "text-gray-300"
            )}
          >
            {description}
          </p>
        )}
      </div>

      <GridCardCorners />
    </button>
  );
}
