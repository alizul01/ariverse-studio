"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { name: "About",    href: "/about",    num: "01" },
    { name: "Services", href: "/services", num: "02" },
    { name: "Games",    href: "/games",    num: "03" },
    { name: "Blog",     href: "/blog",     num: "04" },
    { name: "Contact",  href: "/contact",  num: "05" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 h-20 flex items-center px-4 md:px-6 pointer-events-none">

      {/* Pill / flat nav — animated */}
      <motion.nav
        className="w-full max-w-[1440px] mx-auto pointer-events-auto"
        animate={
          scrolled
            ? {
                backgroundColor: "rgba(245,240,232,0.92)",
                backdropFilter: "blur(20px)",
                borderRadius: "9999px",
                boxShadow: "0 2px 20px rgba(16,16,16,0.08), 0 0 0 1px rgba(16,16,16,0.07)",
                paddingLeft: "1.25rem",
                paddingRight: "1.25rem",
              }
            : {
                backgroundColor: "rgba(245,240,232,0)",
                backdropFilter: "blur(0px)",
                borderRadius: "0px",
                boxShadow: "none",
                paddingLeft: "0px",
                paddingRight: "0px",
              }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-14 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="Ariverse"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-black tracking-[0.15em] text-[13px] uppercase text-foreground">
              Ariverse
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative flex items-center gap-1.5 px-3 lg:px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-200
                  ${isActive(link.href)
                    ? "text-accent"
                    : "text-foreground/50 hover:text-foreground"}`}
              >
                <span className="hidden lg:inline font-mono text-[8px] text-foreground/20 group-hover:text-accent/40 transition-colors">
                  {link.num}
                </span>
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Presskit CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/presskit"
              className="text-[10px] font-black tracking-[0.18em] uppercase text-accent border border-accent/40 px-4 py-2 rounded-full hover:bg-accent hover:text-background transition-all duration-200 whitespace-nowrap"
            >
              Presskit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-50 flex flex-col justify-center items-end gap-[5px] w-8 h-8"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              className="h-[1.5px] bg-foreground block origin-left"
              style={{ width: 24 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
              className="h-[1.5px] bg-foreground block"
              style={{ width: 16 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              className="h-[1.5px] bg-foreground block origin-left"
              style={{ width: 20 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Border line when flat (not scrolled) */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-foreground/8 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-background z-40 flex flex-col"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(170% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col justify-center flex-1 px-8 pb-16 pt-24">
              <p className="text-[9px] font-black tracking-[0.35em] uppercase text-foreground/25 mb-8">
                Navigation
              </p>
              <nav className="space-y-0">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-baseline gap-5 py-4 border-b border-foreground/8 group transition-colors
                        ${isActive(link.href) ? "text-accent" : "text-foreground/70 hover:text-foreground"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-[9px] font-mono text-foreground/20 leading-none mt-1">{link.num}</span>
                      <span className="text-[2.2rem] font-black uppercase tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
              >
                <Link
                  href="/presskit"
                  className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-background bg-foreground px-6 py-3.5 hover:bg-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Presskit →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
