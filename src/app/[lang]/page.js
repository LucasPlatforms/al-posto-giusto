import Home from "@/components/Home";
import { getSunsetTime } from "@/lib/sunset";

export default async function Page({ params }) {
  const { lang } = await params;
  const sunsetTime = await getSunsetTime();
  return <Home sunsetTime={sunsetTime} initialLang={lang} />;
}
