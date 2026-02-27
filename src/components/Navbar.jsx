"use client";
import React, { useState, useEffect, useRef } from "react";
import { content, whatsappUrl, menuLanguages } from "@/lib/constants";
import { Sun, Menu, X, Globe, ChevronDown } from "lucide-react";

const Navbar = () => {
  const { lang, handleLangChange } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sunsetTime, setSunsetTime] = useState("Loading...");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const lat = 38.9784;
    const lng = 1.432;

    const fetchSunsetTime = async () => {
      try {
        const response = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`,
        );
        const data = await response.json();

        if (data.status === "OK") {
          const sunsetUtc = new Date(data.results.sunset);
          const options = { hour: "2-digit", minute: "2-digit", hour12: false };
          const localTime = sunsetUtc.toLocaleTimeString([], options);
          setSunsetTime(localTime);
        }
      } catch (error) {
        console.error("Error fetching sunset time:", error);
        setSunsetTime("19:45");
      }
    };
    fetchSunsetTime();
  }, []);

  // Chiudi dropdown se si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Chiudi dropdown lingue
      if (
        langDropdownOpen &&
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setLangDropdownOpen(false);
      }
      // Chiudi menu hamburger mobile
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen, langDropdownOpen]);

  return (
    <div>
      {/* Dark Header for White Logo - Responsive */}
      <header className="fixed top-0 w-full z-50 px-4 pt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center bg-stone-950/90 backdrop-blur-md px-4 sm:px-8 py-4 sm:py-6 rounded-3xl border border-white/5 shadow-2xl relative">
          {/* Col 1: Mobile Toggle & Desktop Nav */}
          <div className="flex items-center">
            <button
              className="lg:hidden text-white hover:text-amber-400 transition-colors p-2 -ml-2"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            <nav className="hidden lg:flex items-center gap-6 text-white/70 font-bold text-[10px] uppercase tracking-[0.2em]">
              <a
                href="#menu"
                className="hover:text-amber-400 transition-colors"
              >
                {content[lang].nav.menu}
              </a>
              <a
                href="#contact"
                className="hover:text-amber-400 transition-colors"
              >
                {content[lang].nav.find}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                className="hover:text-amber-400 transition-colors"
              >
                {content[lang].nav.book}
              </a>
            </nav>
          </div>

          {/* Col 2: Logo Centrale (Protetto) */}
          <div className="flex justify-center">
            <a href="/">
              <img
                src="media/logo-navbar-sm.webp"
                alt="Al Posto Giusto Logo"
                className="h-10 sm:h-10 w-auto object-contain block md:hidden"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <img
                src="media/logo-full-min.webp"
                alt="Al Posto Giusto Logo"
                className="h-10 sm:h-10 w-auto object-contain hidden md:block"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
            </a>
            <span className="hidden text-white font-serif text-lg italic font-bold tracking-tighter uppercase text-center leading-none">
              Al Posto Giusto
            </span>
          </div>

          {/* Col 3: Selettore Lingue Mobile Dropdown / Desktop Row */}
          <div className="flex justify-end items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-white/40">
              <Sun size={14} className="text-amber-500 animate-spin-slow" />
              <span className="text-[9px] uppercase font-black tracking-widest leading-none">
                {lang == "it"
                  ? "Tramonto: "
                  : lang == "en"
                    ? "Sunset: "
                    : lang == "es"
                      ? "Atardecer: "
                      : "Sonnenuntergang: "}
                {sunsetTime}
              </span>
            </div>

            {/* Language Selector Container */}
            <div className="relative" ref={langDropdownRef}>
              {/* Desktop Row */}
              <div className="hidden lg:flex items-center bg-white/5 rounded-full p-1 gap-1 border border-white/10">
                {menuLanguages.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => handleLangChange(l.id)}
                    className={`text-[9px] font-black w-7 h-7 rounded-full uppercase transition-all duration-300 ${lang === l.id ? "bg-amber-600 text-white shadow-lg" : "text-white/40 hover:text-white hover:bg-white/10"}`}
                  >
                    {l.id}
                  </button>
                ))}
              </div>

              {/* Mobile Dropdown Trigger */}
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="lg:hidden flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-2 rounded-xl text-white transition-all active:scale-95 outline-none"
              >
                <Globe size={18} className="text-amber-500" />
                <span className="text-xs font-black uppercase">{lang}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mobile Dropdown Menu */}

              <div
                className={`absolute right-0 mt-3 w-40 bg-stone-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-60 lg:hidden transition-all duration-300 ease-in-out ${langDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}
              >
                {menuLanguages.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      handleLangChange(l.id);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold border-b border-white/5 last:border-0 transition-colors ${lang === l.id ? "bg-amber-600 text-white" : "text-white/70 hover:bg-white/5"}`}
                  >
                    <span>{l.label}</span>
                    <span className="text-lg">{l.flag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Mobile Overlay (Hamburger) */}

        <div
          ref={mobileMenuRef}
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-stone-950/95 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl mt-3 ${mobileMenuOpen ? "max-h-100 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"}`}
        >
          <nav className="flex flex-col gap-8 text-center text-white font-black uppercase tracking-[0.3em] text-sm p-8">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {content[lang].nav.menu}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {content[lang].nav.find}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {content[lang].nav.book}
            </a>
            <div className="h-px bg-white/5 w-full" />
            <div className="flex items-center justify-center gap-3 text-amber-500 text-[10px]">
              <Sun className="text-amber-500 animate-spin-slow" size={20} />{" "}
              {lang == "it"
                ? "Tramonto: "
                : lang == "en"
                  ? "Sunset: "
                  : lang == "es"
                    ? "Atardecer: "
                    : "Sonnenuntergang: "}
              {sunsetTime}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
