import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Veskol – Rodinná farma",
  description:
    "Kontaktujte rodinnu farmu Veskol – VESKOL-Farm s. r. o., Veľký Ostrov 15935, 946 03 Kolárovo. Telefón: +421 907 214 361.",
};

export default function KontaktPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden md:min-h-[60vh]">
        <Image
          src="/images/cta-bg.jpg"
          alt="Kontakt VESKOL Farm"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Kontakt
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange">
              Spojte sa s nami
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#313338] md:text-4xl">
              Napíšte nám
            </h2>
            <p className="mb-10 text-base leading-relaxed text-[#6a6a6a]">
              Napíšte nám krátku správu o tom, s čím vám môžeme poradiť a my sa
              vám čoskoro ozveme.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                  <svg
                    className="h-5 w-5 text-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#313338]">
                    Adresa
                  </h3>
                  <p className="mt-1 text-sm text-[#6a6a6a]">
                    VESKOL-Farm s. r. o.
                    <br />
                    Veľký Ostrov 15935
                    <br />
                    946 03 Kolárovo
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                  <svg
                    className="h-5 w-5 text-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#313338]">
                    Email
                  </h3>
                  <a
                    href="mailto:info@veskolfarm.sk"
                    className="mt-1 block text-sm text-[#6a6a6a] transition-colors hover:text-orange"
                  >
                    info@veskolfarm.sk
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                  <svg
                    className="h-5 w-5 text-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#313338]">
                    Telefón
                  </h3>
                  <a
                    href="tel:+421907214361"
                    className="mt-1 block text-sm text-[#6a6a6a] transition-colors hover:text-orange"
                  >
                    +421 907 214 361
                  </a>
                </div>
              </div>

              {/* Business Info */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                  <svg
                    className="h-5 w-5 text-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#313338]">
                    Firemné údaje
                  </h3>
                  <p className="mt-1 text-sm text-[#6a6a6a]">
                    IČO: 54240239
                    <br />
                    IČ DPH: SK2121608313
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
