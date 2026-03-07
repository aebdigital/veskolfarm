"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/kategorie-chovu", label: "Kategórie chovu" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
          scrolled || mobileOpen
            ? "bg-[rgba(222,121,0,0.95)] shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="relative z-50 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="VESKOL Farm"
              width={140}
              height={50}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-110 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="relative z-50 flex flex-col gap-1.5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Nav */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-orange transition-all duration-500 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-bold uppercase tracking-widest text-white transition-all duration-500 hover:scale-110 ${
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${index * 100 + 200}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
