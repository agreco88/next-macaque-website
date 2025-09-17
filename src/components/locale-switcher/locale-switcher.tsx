import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./locale-switcher-select";

interface IntlMessages {
	LocaleSwitcher: {
		label: string;
		english: string;
		spanish: string;
		portuguese: string;
		german: string;
	};
}

const labelMap: Record<string, keyof IntlMessages["LocaleSwitcher"]> = {
	en: "english",
	es: "spanish",
	pt: "portuguese",
	de: "german",
};

const localeOptionsMap: Record<
	string,
	{
		labelKey: keyof IntlMessages["LocaleSwitcher"];
		countryCode: string;
	}
> = {
	en: { labelKey: "english", countryCode: "US" }, // 🇺🇸
	es: { labelKey: "spanish", countryCode: "ES" }, // 🇪🇸
};

export default function LocaleSwitcher() {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();

	const options = routing.locales.map((cur) => ({
		value: cur,
		label: t(labelMap[cur]),
		countryCode: localeOptionsMap[cur].countryCode,
	}));

	return <LocaleSwitcherSelect defaultValue={locale} label={t("label")} options={options} />;
}
