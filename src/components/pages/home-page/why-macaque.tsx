"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

// Framer Motion easing curve (with TS compatibility)
const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 8 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.45,
			ease: easeOutExpo,
		},
	},
};

type Stat = {
	id: string;
	label: string;
	value?: string;
	blurb: string;
	cta?: { label: string; href: string };
};

const stats: Stat[] = [
	{
		id: "protein",
		label: "20–30g proteína",
		blurb: "Whey isolate premium por barrita. Macros claros, progreso real.",
	},
	{
		id: "real-food",
		label: "Ingredientes reales",
		blurb: "Almendras, granola, chía y más. Sabe a comida, no a laboratorio.",
	},
	{
		id: "no-shaker",
		label: "Sin shaker, sin grumos",
		blurb: "Olvidate de mezclar. Abrís, comés y listo.",
	},
	{
		id: "custom",
		label: "100% personalizable",
		blurb: "Sabores de proteína, tipo de chocolate y textura con Thermomix.",
		cta: { label: "Armá la tuya", href: "/builder" },
	},
	{
		id: "onthego",
		label: "Llévala a todos lados",
		blurb: "Bolsillo, mochila, auto. Siempre lista post-entreno.",
	},
	{
		id: "value",
		label: "30 barras/mes",
		value: "Suscripción",
		blurb: "Un pack al mes = tu proteína diaria resuelta.",
		cta: { label: "Ver planes", href: "/planes" },
	},
];

export default function WhyMacaque() {
	// Positions for orbiting chips (desktop only)
	const positions = useMemo(
		() => [
			"top-0 left-1/2 -translate-x-1/2",
			"top-[12%] left-[6%]",
			"top-[12%] right-[6%]",
			"bottom-[12%] left-[6%]",
			"bottom-[12%] right-[6%]",
			"bottom-0 left-1/2 -translate-x-1/2",
		],
		[]
	);

	return (
		<section className="relative container mx-auto px-4 md:px-6 py-16 md:py-24">
			<div className="mx-auto max-w-6xl">
				<p className="text-xs tracking-[0.2em] uppercase text-zinc-400 mb-3">¿Por qué Macaque?</p>
				<h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-4">
					La barra que reemplaza el shaker.
				</h2>
				<p className="text-zinc-300 max-w-prose mb-12">
					Proteína de calidad con ingredientes reales y cero complicaciones. Elegí sabor, chocolate y textura,
					y recibila todos los meses.
				</p>

				{/* 3x3 Grid */}
				<div className="grid grid-cols-3 grid-rows-3 gap-6">
					{/* Top row */}
					<div className="flex items-center justify-center">
						<StatCard label="20–30g proteína" blurb="Whey isolate premium por barrita." />
					</div>
					<div className="flex items-center justify-center">
						<StatCard label="Ingredientes reales" blurb="Almendras, granola, chía y más." />
					</div>
					<div className="flex items-center justify-center">
						<StatCard label="Sin shaker, sin grumos" blurb="Olvidate de mezclar. Abrís, comés y listo." />
					</div>

					{/* Middle row */}
					<div className="flex items-center justify-center">
						<StatCard label="100% personalizable" blurb="Sabores y texturas a tu gusto." />
					</div>
					{/* Center bar */}
					<div className="flex items-center justify-center">
						<Image
							src="/images/macaque-bar.webp"
							alt="Barra de proteína Macaque"
							width={280}
							height={100}
							className="object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
						/>
					</div>
					<div className="flex items-center justify-center">
						<StatCard
							label="30 barras/mes"
							value="Suscripción"
							blurb="Un pack al mes = tu proteína diaria."
						/>
					</div>

					{/* Bottom row */}
					<div className="flex items-center justify-center">
						<StatCard label="Llévala a todos lados" blurb="Bolsillo, mochila, auto." />
					</div>
					<div className="flex items-center justify-center">
						<StatCard label="Ver planes" blurb="Suscripción flexible y simple." />
					</div>
					<div className="flex items-center justify-center">
						<StatCard label="Armá la tuya" blurb="Personaliza con Thermomix." />
					</div>
				</div>
			</div>
		</section>
	);
}

function StatCard({ label, blurb, value }: { label: string; blurb: string; value?: string }) {
	return (
		<div className="rounded-xl border border-white/10 bg-white/5 min-h-40 backdrop-blur-md px-4 py-3 w-full text-start">
			<div className="flex gap-2 mb-1.5">
				<span className="text-3xl text-white font-medium">{label}</span>
				{/* {value && (
					<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70">{value}</span>
				)} */}
			</div>
			<p className="text-xs text-white/70">{blurb}</p>
		</div>
	);
}
