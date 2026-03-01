"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Discover Us", href: "#" },
    { name: "Collection", href: "#" },
    { name: "Craftsmanship", href: "#" },
    { name: "Expression of Interest", href: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50
        bg-deep-brown/70 backdrop-blur-lg
        border-b border-gold-light/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ===== NAV BAR ===== */}
        <nav className="grid grid-cols-3 items-center h-20">

  {/* LEFT EMPTY — keeps logo perfectly centered */}
  <div />

  {/* ===== CENTER LOGO ===== */}
  <a href="#" className="justify-self-center">
    <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide whitespace-nowrap">
      <span className="text-gold-light">The </span>
      <span className="text-ivory">Silk Route</span>
    </h1>
  </a>

  {/* ===== RIGHT — HAMBURGER ===== */}
  <div className="justify-self-end">
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
      aria-label="Toggle menu"
    >
      <span
        className={`w-6 h-px bg-ivory transition-all duration-500 ${
          isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`w-6 h-px bg-ivory transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`w-6 h-px bg-ivory transition-all duration-500 ${
          isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  </div>

</nav>
      </div>



{/* ===== MOBILE MENU ===== */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.35 }}
      className="lg:hidden fixed top-20 left-0 right-0 bottom-0
        bg-deep-brown/95 backdrop-blur-xl z-40"
    >
      {/* Center container */}
      <div className="flex items-start justify-center pt-20 px-6">

        {/* ===== SHADOW / GLASS PANEL ===== */}
        <div
          className="
            w-full max-w-sm
            bg-deep-brown/60
            backdrop-blur-2xl
            border border-gold-light/20
            rounded-2xl
            shadow-[0_25px_80px_rgba(0,0,0,0.7)]
            py-12
            flex flex-col items-center gap-8
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-2xl text-ivory hover:text-gold-light transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.header>
  );
};

export default Header;