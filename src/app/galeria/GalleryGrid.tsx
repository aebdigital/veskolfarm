"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

interface GalleryImage {
  src: string;
  alt: string;
}

const IMAGES_PER_PAGE = 12;

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [columnCount, setColumnCount] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Handle responsive column count
  useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth >= 1024) setColumnCount(4);
      else if (window.innerWidth >= 768) setColumnCount(3);
      else if (window.innerWidth >= 640) setColumnCount(2);
      else setColumnCount(1);
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback(
    (direction: number) => {
      if (lightboxIndex === null) return;
      const newIndex =
        (lightboxIndex + direction + images.length) % images.length;
      setLightboxIndex(newIndex);
    },
    [lightboxIndex, images.length]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, navigate]);

  // Infinite scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < images.length) {
          setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, images.length));
        }
      },
      { threshold: 0.1, rootMargin: "400px" } // Increased rootMargin for smoother loading
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, images.length]);

  // Group images into columns for a better masonry effect
  const columns = useMemo(() => {
    const cols: { image: GalleryImage; originalIndex: number }[][] = Array.from(
      { length: columnCount },
      () => []
    );
    
    // Distribute the visible images across columns
    images.slice(0, visibleCount).forEach((image, index) => {
      cols[index % columnCount].push({ image, originalIndex: index });
    });
    
    return cols;
  }, [visibleCount, columnCount, images]);

  return (
    <>
      {/* Grid */}
      <div className="flex gap-4">
        {columns.map((column, colIndex) => (
          <div key={`col-${colIndex}`} className="flex flex-1 flex-col gap-4">
            {column.map(({ image, originalIndex }) => (
              <ScrollReveal key={image.src} delay={(originalIndex % 4) * 100}>
                <button
                  onClick={() => openLightbox(originalIndex)}
                  className="group block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="h-auto w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                  />
                </button>
              </ScrollReveal>
            ))}
          </div>
        ))}
      </div>

      {/* Loading Trigger */}
      {visibleCount < images.length && (
        <div ref={loaderRef} className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-orange border-t-transparent" />
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 text-4xl text-white/70 transition-colors hover:text-white"
            aria-label="Zavrieť"
          >
            ✕
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-2xl text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
            aria-label="Predchádzajúca"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              quality={90}
              priority
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-2xl text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
            aria-label="Nasledujúca"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
