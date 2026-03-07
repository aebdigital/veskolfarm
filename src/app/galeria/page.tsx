import type { Metadata } from "next";
import Image from "next/image";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Galéria | Veskol – Rodinná farma",
  description:
    "Fotogaléria z rodinnej farmy Veskol pri Kolárove – hovädzí dobytok, ošípané a mangalice v ich prirodzenom prostredí.",
};

const galleryImages = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `VESKOL Farm galéria ${i + 1}`,
}));

export default function GaleriaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden md:min-h-[60vh]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Galéria VESKOL Farm"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Galéria
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-24">
        <div className="px-4 md:px-8 lg:px-12">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </main>
  );
}
