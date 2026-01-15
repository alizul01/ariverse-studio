"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react"; // Valid lucide icons
import { useState } from "react";

import Image from "next/image"; // Add Image import

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Games", href: "/games" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#250804]/90 backdrop-blur-md"> {/* Removed border-b */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Ariverse Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tighter text-[#FCEBD7]">Ariverse Studio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#E2494B] hover-underline-animation ${pathname === link.href ? "text-[#E2494B] font-bold" : "text-[#FCEBD7]"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/presskit"
            className="px-5 py-2 rounded-full bg-[#96191A] text-[#FCEBD7] font-medium hover:bg-[#96191A]/80 transition-all flex items-center gap-2"
          >
            Presskit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#FCEBD7]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#250804] border-b border-[#61422D] p-4 absolute w-full top-20 left-0">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium ${pathname === link.href ? "text-[#96191A]" : "text-[#FCEBD7]"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/presskit"
              className="w-full text-center py-3 bg-[#96191A] rounded-md text-[#FCEBD7]"
              onClick={() => setIsOpen(false)}
            >
              Presskit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
