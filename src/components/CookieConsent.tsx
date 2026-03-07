"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-[#1a1a1a] p-6 shadow-2xl md:flex md:items-center md:justify-between md:gap-6">
        <div className="mb-4 md:mb-0">
          <p className="text-sm leading-relaxed text-gray-300">
            Táto stránka používa cookies na zlepšenie vášho zážitku. Používaním
            stránky súhlasíte s ich používaním.{" "}
            <Link
              href="/ochrana-osobnych-udajov"
              className="text-orange underline transition-colors hover:text-orange-light"
            >
              Viac informácií
            </Link>
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            Odmietnuť
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-orange px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-orange-dark"
          >
            Súhlasím
          </button>
        </div>
      </div>
    </div>
  );
}

export function openCookieSettings() {
  localStorage.removeItem("cookie-consent");
  window.dispatchEvent(new Event("cookie-reset"));
}
