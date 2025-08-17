// src/components/footer/footer-logo.tsx
"use client";

import { Triangle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FooterLogo() {
	const t = useTranslations("Footer");

	return (
		<div className="flex gap-2 items-center text-xs">
			<Triangle className="stroke-3 size-3" />
			<span className="tracking-wide">
				{new Date().getFullYear()} Website template. {t("allRightsReserved")}
			</span>
		</div>
	);
}
