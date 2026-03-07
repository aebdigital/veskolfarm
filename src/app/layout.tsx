import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import PageTransition from "@/components/PageTransition";
import CookieConsent from "@/components/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Veskol – Rodinná farma s hovädzím, ošípanými a mangalicami",
    template: "%s",
  },
  description:
    "Rodinná farma Veskol pri Kolárove – s láskou chováme hovädzí dobytok, ošípané a mangalice. Udržateľný chov, zdravé zvieratá a kvalitné mäso priamo z farmy.",
  metadataBase: new URL("https://www.veskolfarm.sk"),
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "Veskol Farm",
    title: "Veskol – Rodinná farma s hovädzím, ošípanými a mangalicami",
    description:
      "Rodinná farma Veskol pri Kolárove – s láskou chováme hovädzí dobytok, ošípané a mangalice. Udržateľný chov, zdravé zvieratá a kvalitné mäso priamo z farmy.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Veskol Farm – Rodinná farma",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.veskolfarm.sk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans antialiased`}
      >
        <LenisProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <CookieConsent />
        </LenisProvider>
      </body>
    </html>
  );
}
