// components/stats-grid/stats-grid-title.tsx
import React from "react";

type Props = {
  kicker: string;
  title: string;
  description?: string;
  className?: string;
};

export function StatsGridTitle({
  kicker,
  title,
  description,
  className = "",
}: Props) {
  return (
    <div
      className={`flex flex-col max-w-7xl px-4 lg:px-0 py-16 mx-auto ${className}`}
    >
      <p className="text-xs tracking-widest uppercase text-zinc-400 mb-4">
        {kicker}
      </p>
      <h2 className="text-3xl md:text-4xl uppercase  max-w-prose font-semibold leading-tight text-white mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-300 max-w-prose">{description}</p>
      )}
    </div>
  );
}
