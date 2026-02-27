"use client";
import { createContext, useContext, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const AppContext = createContext(null);

export function AppProvider({
  children,
  initialLang = "en",
  initialSunset = "19:45",
}) {
  const [vibe, setVibe] = useState("Sunset Vibes");
  const [isChanging, setIsChanging] = useState(false);
  const [sunsetTime, setSunsetTime] = useState(initialSunset);
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (newLang) => {
    const scrollY = window.scrollY;
    setIsChanging(true);
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLang}`);
    router.replace(newPath, { scroll: false });
    setTimeout(() => {
      window.scrollTo(0, scrollY);
      setIsChanging(false);
    }, 250);
  };

  return (
    <AppContext.Provider
      value={{
        lang: initialLang,
        vibe,
        setVibe,
        isChanging,
        setIsChanging,
        handleLangChange,
        sunsetTime,
        setSunsetTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
