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
      className="absolute top-0 left-0 right-0 z-50"
      variants={fadeInUp}
      initial="show"
      animate="show"
      exit="hidden"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <HeaderLogo />
        <HeaderNav />
        <HeaderMobileToggle
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
        />
      </div>

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
