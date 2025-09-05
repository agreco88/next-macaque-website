"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/nav-links";
import LocaleSwitcher from "@/components/locale-switcher/locale-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { waterfallList, waterfallItem } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

export default function HeaderNav() {
  const t = useTranslations("Layout.header");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-4 font-medium">
      <motion.ul
        variants={waterfallList}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex items-center gap-4"
      >
        {navLinks.map(({ href, translationKey }) => {
          const fullHref = `/${locale}${href}`;
          const isActive = pathname === fullHref;

          return (
            <motion.li key={href} variants={waterfallItem}>
              <Button
                asChild
                variant="link"
                className={cn(
                  "relative px-0 font-medium !no-underline",
                  // custom underline, closer to text
                  "after:absolute after:bottom-[5px] after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-orange-400 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive && "after:scale-x-100"
                )}
              >
                <Link href={fullHref}>{t(translationKey)}</Link>
              </Button>
            </motion.li>
          );
        })}

        <motion.li
          variants={waterfallItem}
          aria-hidden="true"
          className="h-5 w-px bg-border mx-1"
        />
        <motion.li variants={waterfallItem}>
          <LocaleSwitcher />
        </motion.li>
        <motion.li variants={waterfallItem}>
          <ThemeToggle />
        </motion.li>
      </motion.ul>
    </nav>
  );
}
