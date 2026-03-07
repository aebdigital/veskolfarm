"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxHero({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
}) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      const offset = scrollY * 0.2;
      imageRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-screen">
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-black/55" />
      {children}
    </section>
  );
}
