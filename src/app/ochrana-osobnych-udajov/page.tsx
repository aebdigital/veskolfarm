import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | Veskol – Rodinná farma",
  description:
    "Zásady ochrany osobných údajov VESKOL-Farm s. r. o. – informácie o spracovaní údajov a cookies.",
};

export default function OchranaOsobnychUdajovPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden md:min-h-[60vh]">
        <Image
          src="/images/cta-bg.jpg"
          alt="Ochrana osobných údajov"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Ochrana osobných údajov
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none text-[#6a6a6a]">
            <h2 className="text-2xl font-bold text-[#313338]">
              1. Prevádzkovateľ
            </h2>
            <p>
              Prevádzkovateľom osobných údajov je spoločnosť VESKOL-Farm s. r.
              o., so sídlom Partizánska 2619/1, 946 03 Kolárovo, IČO: 54240239,
              IČ DPH: SK2121608313 (ďalej len &quot;prevádzkovateľ&quot;).
            </p>

            <h2 className="mt-10 text-2xl font-bold text-[#313338]">
              2. Účel spracovania osobných údajov
            </h2>
            <p>
              Osobné údaje spracovávame za účelom:
            </p>
            <ul className="list-disc pl-6">
              <li>Spracovania dopytov a komunikácie prostredníctvom kontaktného formulára</li>
              <li>Plnenia zmluvných povinností</li>
              <li>Zasielania obchodných oznámení (len so súhlasom)</li>
              <li>Zlepšovania našich služieb a webovej stránky</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-[#313338]">
              3. Rozsah spracovávaných údajov
            </h2>
            <p>
              Spracovávame nasledujúce osobné údaje: meno a priezvisko, e-mailová
              adresa, telefónne číslo a obsah správy zadanej do kontaktného
              formulára.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-[#313338]">
              4. Doba uchovávania údajov
            </h2>
            <p>
              Osobné údaje uchovávame po dobu nevyhnutnú na splnenie účelu ich
              spracovania, najdlhšie však po dobu 3 rokov od posledného kontaktu,
              pokiaľ zákon nevyžaduje dlhšiu dobu uchovávania.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-[#313338]">
              5. Cookies
            </h2>
            <p>
              Naša webová stránka používa cookies – malé textové súbory, ktoré sa
              ukladajú vo vašom prehliadači. Cookies nám pomáhajú zabezpečiť
              správne fungovanie stránky a zlepšovať váš zážitok z jej
              používania.
            </p>
            <p>
              <strong>Typy cookies, ktoré používame:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Nevyhnutné cookies</strong> – potrebné na správne
                fungovanie webovej stránky
              </li>
              <li>
                <strong>Analytické cookies</strong> – pomáhajú nám pochopiť, ako
                návštevníci používajú našu stránku
              </li>
            </ul>
            <p>
              Súhlas s používaním cookies môžete kedykoľvek odvolať kliknutím na
              odkaz &quot;Cookies&quot; v pätičke stránky.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-[#313338]">
              6. Vaše práva
            </h2>
            <p>Máte právo:</p>
            <ul className="list-disc pl-6">
              <li>Požiadať o prístup k vašim osobným údajom</li>
              <li>Požiadať o opravu nesprávnych údajov</li>
              <li>Požiadať o vymazanie vašich údajov</li>
              <li>Namietať proti spracovaniu vašich údajov</li>
              <li>Na prenosnosť údajov</li>
              <li>Podať sťažnosť na Úrad na ochranu osobných údajov SR</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-[#313338]">
              7. Kontakt
            </h2>
            <p>
              V prípade akýchkoľvek otázok ohľadom spracovania osobných údajov
              nás neváhajte kontaktovať:
            </p>
            <ul className="list-none pl-0">
              <li>
                <strong>Email:</strong> info@veskolfarm.sk
              </li>
              <li>
                <strong>Telefón:</strong> +421 907 214 361
              </li>
              <li>
                <strong>Adresa:</strong> Partizánska 2619/1, 946 03 Kolárovo
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
