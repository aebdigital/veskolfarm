import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";

const animals = [
  {
    title: "Hovädzí dobytok",
    image: "/images/cattle-card.jpg",
    href: "/kategorie-chovu",
  },
  {
    title: "Ošípané",
    image: "/images/pigs-card.jpg",
    href: "/kategorie-chovu",
  },
  {
    title: "Mangalice",
    image: "/images/mangalica-card.jpg",
    href: "/kategorie-chovu",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section with Parallax */}
      <ParallaxHero src="/images/hero-bg.jpg" alt="VESKOL Farm">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            S láskou k zvieratám,
            <br />
            <span className="text-orange">S rešpektom k prírode</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Vitajte na našej rodinnej farme, kde s láskou a starostlivosťou
            chováme hovädzí dobytok, ošípané a mangalice.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base text-white/70">
            Našim cieľom je zdravý, udržateľný chov a kvalitné produkty z našej
            farmy.
          </p>
          <Link
            href="/kategorie-chovu"
            className="inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-400 hover:scale-[1.04] hover:bg-orange-dark hover:shadow-lg"
          >
            Naše zvieratá
          </Link>
        </div>
      </ParallaxHero>

      {/* About / Náš príbeh */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="Náš príbeh"
                width={600}
                height={900}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange">
                O nás
              </span>
              <h2 className="mb-6 text-3xl font-bold text-[#313338] md:text-4xl">
                Náš príbeh
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
                Naša rodinná farma bola založená v roku 2022, keď sme sa
                skromnými začiatkami pustili do chovu hovädzieho dobytka.
                Postupne sme rozšírili naše hospodárstvo o chov ošípaných,
                vrátane vzácnych plemien.
              </p>
              <p className="mb-6 text-base leading-relaxed text-[#6a6a6a]">
                Našou filozofiou je umožniť zvieratám prirodzený vývoj v
                kvalitných podmienkach, čo sa odráža na kvalite a chuti našich
                produktov. Veríme, že zodpovedný prístup k chovu je základom
                kvalitnej produkcie.
              </p>
              <Link
                href="/kontakt"
                className="inline-block rounded-full border-2 border-orange px-6 py-3 text-sm font-semibold uppercase tracking-wider text-orange transition-all duration-400 hover:scale-[1.04] hover:bg-orange hover:text-white"
              >
                Kontaktujte nás
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Animal Categories */}
      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange">
                Kategórie chovu
              </span>
              <h2 className="text-3xl font-bold text-[#313338] md:text-4xl">
                Naše zvieratá
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {animals.map((animal, index) => (
              <ScrollReveal key={animal.title} delay={index * 200}>
                <Link href={animal.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="aspect-[3/4]">
                      <Image
                        src={animal.image}
                        alt={animal.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {animal.title}
                      </h3>
                      <span className="mt-2 inline-block text-sm font-medium text-orange transition-transform duration-300 group-hover:translate-x-2">
                        Zistiť viac →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <Image
          src="/images/cta-bg.jpg"
          alt="Farma"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Máte záujem o naše produkty?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
              Neváhajte nás kontaktovať. Radi vám poradíme a odpovieme na
              všetky vaše otázky ohľadom našej farmy a produktov.
            </p>
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-400 hover:scale-[1.04] hover:bg-orange-dark hover:shadow-lg"
            >
              Kontaktujte nás
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
