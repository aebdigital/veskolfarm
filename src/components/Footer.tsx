"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/kategorie-chovu", label: "Kategórie chovu" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  const handleCookieSettings = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo */}
          <div>
            <Image
              src="/images/dark-new.png"
              alt="VESKOL Farm"
              width={160}
              height={56}
              className="mb-4 h-14 w-auto"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Rodinná farma s láskou k zvieratám a rešpektom k prírode.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">
              Navigácia
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">
              Adresa
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Veľký Ostrov 15935
              <br />
              946 03 Kolárovo
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">
              Kontakt
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a
                href="mailto:info@veskolfarm.sk"
                className="transition-colors duration-300 hover:text-white"
              >
                info@veskolfarm.sk
              </a>
              <a
                href="tel:+421907214361"
                className="transition-colors duration-300 hover:text-white"
              >
                +421 907 214 361
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-gray-500">
            2025© VESKOL-Farm s. r. o. Všetky práva vyhradené.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/ochrana-osobnych-udajov"
              className="text-xs text-gray-500 transition-colors duration-300 hover:text-white"
            >
              Ochrana osobných údajov
            </Link>
            <button
              onClick={handleCookieSettings}
              className="text-xs text-gray-500 transition-colors duration-300 hover:text-white"
            >
              Cookies
            </button>
            <p className="text-xs text-gray-500">
              Tvorba stránky –{" "}
              <span className="text-gray-400">AEB Digital</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
