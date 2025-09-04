"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animation-variants";

import HeaderNav from "./header-nav";
import HeaderLogo from "./header-logo";
import HeaderMobileToggle from "./header-mobile-toggle";
import HeaderMobileMenu from "./header-mobile-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed w-full container self-center p-4 justify-between flex flex-grow z-50"
      variants={fadeInUp}
      initial="show"
      animate="show"
      exit="hidden"
    >
      <HeaderLogo />
      <HeaderNav />
      <HeaderMobileToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && (
          <HeaderMobileMenu
            key="mobile-menu"
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
