import "../globals.css";
import JsonLd from "@/components/JsonLd";
import ClientLayout from "@/components/ClientLayout";
import { getSunsetTime } from "@/lib/sunset";
import { Lora, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
});

export async function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }, { lang: "es" }, { lang: "de" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const titles = {
    it: "Al Posto Giusto Ibiza",
    en: "Al Posto Giusto Ibiza",
    es: "Al Posto Giusto Ibiza",
    de: "Al Posto Giusto Ibiza",
  };
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    ),
    title: titles[lang] || titles.it,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        it: "/it",
        en: "/en",
        es: "/es",
        de: "/de",
      },
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const sunsetTime = await getSunsetTime();

  return (
    <html lang={lang} className={`${montserrat.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-stone-50 font-sans text-stone-900">
        <JsonLd />
        <ClientLayout initialLang={lang} initialSunset={sunsetTime}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
