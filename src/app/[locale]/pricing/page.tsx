import { generateLocaleMetadata } from "@/lib/generate-locale-metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return await generateLocaleMetadata({
    locale,
    route: "pricingPage",
    path: "/pricing",
  });
}

export default function PricingPage() {
  const t = useTranslations("PricingPage");

  return (
    <>
      <h1>{t("hero.h1")}</h1>
    </>
  );
}
