export async function getSunsetTime() {
  try {
    // Coordinate di Ibiza (lat, lng)
    const res = await fetch(
      "https://api.sunrise-sunset.org/json?lat=38.9067&lng=1.4206&formatted=0",
      {
        // Next.js memorizzerà in cache questo dato per 3600 secondi (1 ora)
        next: { revalidate: 3600 },
      },
    );
    const data = await res.json();

    // Converte la data UTC in fuso orario europeo (Ibiza)
    const sunsetDate = new Date(data.results.sunset);
    return sunsetDate.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Madrid",
    });
  } catch {
    return "19:45";
  }
}
