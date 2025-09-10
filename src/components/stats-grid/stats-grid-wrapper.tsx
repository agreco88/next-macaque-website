// components/layout/StatsGridWrapper.tsx
"use client";

import type { ReactNode } from "react";

type StatsGridWrapperVariant = "first" | "middle" | "last";
/**
 * first  -> border-y on mobile, full border from md+
 * middle -> no border on mobile, only sides from md+
 * last   -> full border always
 */
export function StatsGridWrapper({
  variant = "first",
  children,
  className = "",
  maxWidth = "max-w-7xl",
}: {
  variant?: StatsGridWrapperVariant;
  children: ReactNode;
  className?: string;
  /** override container width if needed */
  maxWidth?: string;
}) {
  const base =
    `mx-auto grid ${maxWidth} grid-cols-1 ` +
    // horizontal separators always
    `divide-y divide-neutral-700 ` +
    // switch to 3 cols and vertical separators on lg
    `lg:grid-cols-3 lg:divide-x lg:divide-y-0 ` +
    `md:overflow-hidden ` +
    // outer border strategy per variant
    (variant === "first"
      ? `border-y md:border border-neutral-700 `
      : variant === "middle"
      ? `md:border-x border-neutral-700 `
      : `border border-neutral-700 `);

  return (
    <div className={`${base}${className ? " " + className : ""}`}>
      {children}
    </div>
  );
}
