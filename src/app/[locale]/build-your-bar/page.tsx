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
    route: "buildYourBar",
    path: "/build-your-bar",
  });
}

export default function BuildYourBarPage() {
  const t = useTranslations("BuildYourBar");

  return (
    <>
      <h1>{t("hero.h1")}</h1>
    </>
  );
}
