import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppProvider from "@/components/AppProvider";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://www.alpostogiu.sto"), // ← il tuo dominio reale
  title: {
    default: "Al Posto Giusto Ibiza | Bar & Ristorante Italiano",
    template: "%s | Al Posto Giusto Ibiza",
  },
  description:
    "Bar e ristorante italiano nel cuore del porto di Santa Eulària, Ibiza. Cocktail, cucina italiana autentica, vista sul porto. Prenota il tuo tavolo.",
  keywords: [
    "bar ibiza",
    "ristorante italiano ibiza",
    "santa eularia ibiza",
    "cocktail ibiza",
    "aperitivo ibiza",
    "al posto giusto ibiza",
  ],
  openGraph: {
    title: "Al Posto Giusto Ibiza | Bar Italiano",
    description: "L'autentica ospitalità italiana nel cuore di Ibiza.",
    url: "https://www.tuodominio.com",
    siteName: "Al Posto Giusto Ibiza",
    images: [{ url: "/media/hero-img-full.webp", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Posto Giusto Ibiza",
    description: "Bar e ristorante italiano a Ibiza.",
    images: ["/media/hero-img-full.webp"],
  },
  alternates: {
    canonical: "https://www.tuodominio.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-stone-50 font-sans text-stone-900">
        <JsonLd />
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
