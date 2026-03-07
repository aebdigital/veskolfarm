import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Kategórie chovu | Veskol – Rodinná farma",
  description:
    "Chováme hovädzí dobytok, ošípané a mangalice s dôrazom na kvalitu a udržateľnosť. Rodinná farma Veskol pri Kolárove.",
};

const categories = [
  {
    id: "hovadzi-dobytok",
    title: "Hovädzí dobytok",
    description:
      "Na našej farme sa venujeme chovu kvalitného hovädzieho dobytka, pričom sa zameriavame na plemená Angus, Charolais, Limousin a Jersey. Naše zvieratá sa pasú na prírodných pastvinách, kde majú dostatok priestoru a kvalitnej potravy. Starostlivo dbáme na ich zdravie a pohodu, čo sa odráža na výnimočnej kvalite mäsa. Naším cieľom je udržateľný chov, ktorý rešpektuje prírodu a zabezpečuje prémiovú kvalitu produktov.",
    image: "/images/cattle-card.jpg",
    imagePosition: "right" as const,
  },
  {
    id: "osipane",
    title: "Ošípané",
    description:
      "Chováme ošípané alternatívnym spôsobom, s dôrazom na prirodzené prostredie a kvalitnú výživu. Naše ošípané majú dostatok voľného priestoru a prístup k čerstvému vzduchu. Vyhýbame sa nadmernému priemyselnému kŕmeniu, čo sa odráža na kvalite a chuti bravčového mäsa. Výsledkom je kvalitné a chutné bravčové mäso, ktoré si zachováva autentickú chuť a nutričné vlastnosti.",
    image: "/images/kategorie-pigs.jpg",
    imagePosition: "left" as const,
  },
  {
    id: "mangalice",
    title: "Mangalice",
    description:
      "Mangalica je vzácne plemeno ošípaných, ktoré sa vyznačuje jedinečným vzhľadom a výnimočne chutným mramorovaným mäsom. Na našej farme poskytujeme mangaliciam dostatok priestoru, prírodnú výživu a starostlivosť, ktorú si zaslúžia. Mäso z mangalíc je bohaté na zdravé tuky a má jedinečnú chuťovú kvalitu, ktorú oceňujú gurmáni aj znalci tradičných chutí.",
    image: "/images/kategorie-mangalica.jpg",
    imagePosition: "right" as const,
  },
];

export default function KategorieChovu() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden md:min-h-[60vh]">
        <Image
          src="/images/kategorie-hero.jpg"
          alt="Kategórie chovu"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Kategórie chovu
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange" />
        </div>
      </section>

      {/* Categories */}
      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="bg-white py-24 even:bg-[#fafafa]"
        >
          <div
            className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 ${
              category.imagePosition === "left" ? "" : "lg:[direction:rtl]"
            }`}
          >
            <ScrollReveal>
              <div className="overflow-hidden rounded-2xl lg:[direction:ltr]">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={700}
                  height={500}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="lg:[direction:ltr]">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange">
                  Naše zvieratá
                </span>
                <h2 className="mb-6 text-3xl font-bold text-[#313338] md:text-4xl">
                  {category.title}
                </h2>
                <p className="text-base leading-relaxed text-[#6a6a6a]">
                  {category.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </main>
  );
}
