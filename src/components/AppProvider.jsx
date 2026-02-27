"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [vibe, setVibe] = useState("Sunset Vibes");
  const [isChanging, setIsChanging] = useState(false);

  const handleLangChange = (newLang) => {
    setIsChanging(true);
    setTimeout(() => {
      setLang(newLang);
      setIsChanging(false);
    }, 200);
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        vibe,
        setVibe,
        isChanging,
        setIsChanging,
        handleLangChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
