"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import Flag from "react-country-flag";

type LocaleOption = {
	label: string;
	value: string;
	countryCode: string;
};

type Props = {
	label: string;
	defaultValue: string;
	options: LocaleOption[];
};

export default function LocaleSwitcherSelect({ defaultValue, options }: Props) {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const [isPending, startTransition] = useTransition();

	function onLocaleChange(locale: string) {
		startTransition(() => {
			router.replace(
				// @ts-expect-error - validated by next-intl
				{ pathname, params },
				{ locale }
			);
		});
	}

	const currentOption = options.find((opt) => opt.value === defaultValue);
	const currentLabel = currentOption?.label || defaultValue;
	const currentFlagCode = currentOption?.countryCode || "";

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="cursor-pointer mx-0 px-0" variant="ghost" disabled={isPending} asChild>
					<span className="inline-flex items-center gap-2">
						<Flag countryCode={currentFlagCode} className="size-5" svg />
						<span className="truncate max-w-[80px] block">{currentLabel}</span>
						<ChevronDown className="h-4 w-4 opacity-70" />
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{options.map((option) => (
					<DropdownMenuItem
						key={option.value}
						onClick={() => onLocaleChange(option.value)}
						disabled={option.value === defaultValue}
					>
						{option.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
