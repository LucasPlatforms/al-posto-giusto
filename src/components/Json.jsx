export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Al Posto Giusto",
    image: "https://www.tuodominio.com/media/hero-img-full.webp",
    description: "Bar e ristorante italiano nel porto di Santa Eulària, Ibiza.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Ricardo Curtoys Gotarredona, 5a",
      addressLocality: "Santa Eulària des Riu",
      postalCode: "07840",
      addressRegion: "Illes Balears",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.9831107,
      longitude: 1.5335815,
    },
    telephone: "+34600000000",
    url: "https://www.tuodominio.com",
    openingHours: "Mo-Su 08:00-00:00",
    servesCuisine: "Italian",
    priceRange: "€€",
    hasMap: "https://maps.app.goo.gl/phQ88VnRjg1fybAo7",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
