// components/stats-grid/stats-grid-title.tsx
import React from "react";

type Props = {
	kicker: string;
	title: string;
	description?: string;
	className?: string;
};

export function StatsGridTitle({ kicker, title, description, className = "" }: Props) {
	return (
		<div className={`flex flex-col max-w-6xl px-4 py-16 mx-auto ${className}`}>
			<p className="text-xs tracking-[0.2em] uppercase text-zinc-400 mb-3">{kicker}</p>
			<h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-2">{title}</h2>
			{description && <p className="text-zinc-300 max-w-prose">{description}</p>}
		</div>
	);
}
