"use client";
import { useApp } from "./AppProvider";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  content,
  menuLanguages,
  menuUrl,
  whatsappUrl,
  imgFlags,
  hoverBorderColors,
  menuCategories,
} from "@/lib/constants";
import MapWidget from "./MapWidget";
import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  Sun,
  Waves,
  ChevronRight,
  MessageCircle,
  FileText,
  Coffee,
  GlassWater,
  Utensils,
} from "lucide-react";

const Home = () => {
  const { lang, vibe, setVibe, isChanging, handleLangChange } = useApp();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 17) setVibe("Afternoon Chill");
    else if (hour >= 17 && hour < 21) setVibe("Sunset Magic");
    else setVibe("Night Spirit");
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-amber-100">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="w-full absolute inset-0 z-0">
          <Image
            src="/media/hero-img-full.webp"
            alt="Al Posto Giusto Hero Background"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/70" />
        </div>

        <div
          className={`w-full sm:w-auto relative z-10 px-6 transition-all duration-500 ${isChanging ? "opacity-0 scale-95 blur-md" : "opacity-100 scale-100 blur-0"}`}
        >
          <Image
            src="/media/logo-full-md.webp"
            alt="Logo Al Posto Giusto"
            width={364}
            height={81}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 80vw, 0px"
            className="py-8 block md:hidden w-full mx-auto h-auto"
          />
          <Image
            src="/media/logo-full-md.webp"
            alt="Logo Al Posto Giusto"
            width={1200}
            height={266}
            priority
            sizes="(max-width: 768px) 0px, 1200px"
            className="py-8 hidden md:block w-full h-auto"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#menu"
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-sm font-bold uppercase shadow-2xl transition-all hover:translate-y-1 text-center"
            >
              {content[lang].digitalMenu}
            </a>
            <a
              href={whatsappUrl}
              className="w-full sm:w-auto bg-white/10 hover:backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full text-sm font-bold uppercase shadow-2xl transition-all hover:translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> {content[lang].book}
            </a>
          </div>
        </div>
        {/* Status Badge */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 flex items-center gap-4 bg-white/95 backdrop-blur px-6 py-4 rounded-full shadow-2xl border border-stone-100 z-20 group cursor-default">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping absolute" />
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full relative shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          </div>
          <div className="text-left">
            <p className="text-[8px] font-black text-stone-400 uppercase tracking-widest leading-none mb-1">
              {content[lang].liveVibe}
            </p>
            <p className="text-xs font-black text-stone-900 uppercase tracking-tighter">
              {vibe}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pt-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"}`}
          >
            <span className="text-amber-600 font-bold uppercase tracking-widest flex items-center gap-2 text-sm">
              <Waves size={16} /> Welcome to "Al Posto Giusto"
            </span>

            <h2
              className={`text-5xl md:text-6xl font-serif italic font-bold transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"}`}
            >
              {content[lang].storyTitle}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              {content[lang].storyText}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <p className="text-2xl font-serif italic text-amber-600">
                  Fresh
                </p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">
                  Local Ingredients
                </p>
              </div>
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <p className="text-2xl font-serif italic text-amber-600">
                  Authentic
                </p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">
                  Italian Roots
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl shadow-lg mt-12 overflow-hidden aspect-[4/5] block md:hidden hover:scale-105 transition-transform duration-500">
                <Image
                  src="/media/feature-3-md.webp"
                  alt="Cocktail Detail"
                  fill
                  sizes="(max-width: 768px) 50vw, 0px"
                  className="object-cover"
                />
              </div>

              <div className="relative rounded-2xl shadow-lg mt-12 overflow-hidden aspect-[4/5] hidden md:block hover:scale-105 transition-transform duration-500">
                <Image
                  src="/media/feature-3-md.webp"
                  alt="Cocktail Detail"
                  fill
                  sizes="(max-width: 768px) 50vw, 0px"
                  className="object-cover"
                />
              </div>

              <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[4/5] block md:hidden hover:-translate-y-6 transition-transform duration-500">
                <Image
                  src="/media/feature-1-md.webp"
                  alt="Bar Vibe"
                  fill
                  sizes="(max-width: 768px) 50vw, 0px"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[4/5] hidden md:block hover:-translate-y-6 transition-transform duration-500">
                <Image
                  src="/media/feature-1-md.webp"
                  alt="Bar Vibe"
                  fill
                  sizes="(max-width: 768px) 50vw, 0px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*SEZIONE MENU NUOVA*/}
      <section id="menu" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className=" mb-12 space-y-4">
            <h2
              className={`text-5xl md:text-6xl font-serif italic font-bold transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"}`}
            >
              {content[lang].digitalMenu}
            </h2>
          </div>

          {/* Switcher lingua rapido appositamente per i Menu (Perfetto per Mobile) */}
          <div className="flex flex-wrap  gap-3 sm:gap-6 mb-16">
            {menuLanguages.map((l) => (
              <button
                key={`menu-lang-${l.id}`}
                onClick={() => handleLangChange(l.id)}
                className={`flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 rounded-full transition-all duration-300 border-2 ${lang === l.id ? "bg-stone-900 text-white border-stone-900 shadow-2xl scale-105" : `bg-white text-stone-500 border-stone-100 hover:bg-stone-50 ${hoverBorderColors[l.id]}`}`}
              >
                <Image
                  src={`/${imgFlags[l.id]}`}
                  alt={l.label}
                  width={24}
                  height={24}
                />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                  {l.label}
                </span>
              </button>
            ))}
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"}`}
          >
            {/* Menu Colazione */}
            <a
              href={menuUrl[lang].breakfast}
              target="_blank"
              className={`group relative bg-white border-2 border-stone-100 p-10 rounded-[3rem] text-center ${hoverBorderColors[lang]} transition-all duration-500 overflow-hidden text-stone-900 flex flex-col items-center justify-center`}
            >
              <h4 className="text-3xl font-serif italic font-bold mb-2 relative z-10">
                {menuCategories[lang].breakfast.title}
              </h4>
              <p className="text-stone-500 text-sm mb-4 relative z-10">
                {menuCategories[lang].breakfast.desc}
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-stone-500 font-black text-[12px] uppercase tracking-widest transition-colors relative z-10">
                {content[lang].menuCta}{" "}
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-[0.3] group-hover:opacity-[0.06] transition-opacity rotate-12 pointer-events-none text-amber-600">
                <Coffee size={130} />
              </div>
            </a>

            {/* Menu Beveraggio */}
            <a
              href={menuUrl[lang].drinks}
              target="_blank"
              className={`group relative bg-white border-2 border-stone-100 p-10 rounded-[3rem] text-center ${hoverBorderColors[lang]} transition-all duration-500 overflow-hidden text-stone-900 flex flex-col items-center justify-center`}
            >
              <h4 className="text-3xl font-serif italic font-bold mb-2 relative z-10">
                {menuCategories[lang].drinks.title}
              </h4>
              <p className="text-stone-500 text-sm mb-4 relative z-10">
                {menuCategories[lang].drinks.desc}
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-stone-500 font-black text-[12px] uppercase tracking-widest transition-colors relative z-10">
                {content[lang].menuCta}{" "}
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-[0.3] group-hover:opacity-[0.06] transition-opacity rotate-12 pointer-events-none text-amber-600">
                <GlassWater size={130} />
              </div>
            </a>

            {/* Menu Cibo */}
            <a
              href={menuUrl[lang].food}
              target="_blank"
              className={`group relative bg-white border-2 border-stone-100 p-10 rounded-[3rem] text-center ${hoverBorderColors[lang]} transition-all duration-500 overflow-hidden text-stone-900 flex flex-col items-center justify-center`}
            >
              <h4 className="text-3xl font-serif italic font-bold mb-2 relative z-10">
                {menuCategories[lang].food.title}
              </h4>
              <p className="text-stone-500 text-sm mb-4 relative z-10">
                {menuCategories[lang].food.desc}
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-stone-500 font-black text-[12px] uppercase tracking-widest transition-colors relative z-10">
                {content[lang].menuCta}{" "}
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-[0.3] group-hover:opacity-[0.06] transition-opacity rotate-12 pointer-events-none text-amber-600">
                <Utensils size={130} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="contact"
        className="py-24 bg-stone-50 border-t border-stone-100 px-6"
      >
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-10">
              <h2
                className={`text-5xl md:text-6xl font-serif italic font-bold transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"}`}
              >
                {content[lang].where}
              </h2>

              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <a
                      href="https://maps.app.goo.gl/phQ88VnRjg1fybAo7"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-amber-400 transition-colors"
                    >
                      <p className="font-bold text-lg">
                        Carrer Ricardo Curtoys Gotarredona, 5a
                      </p>
                    </a>
                    <p className="text-stone-500 text-sm">
                      07840 Santa Eulària des Riu, Illes Balears, Spain
                    </p>
                    <a
                      href="https://maps.app.goo.gl/vXFdRXYp7EcYWzd26"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-stone-900 text-white px-8 py-3 mt-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors "
                    >
                      Open in Maps ↗
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <a href={whatsappUrl} className="font-bold text-lg">
                      +34 600 000 000
                    </a>
                    <p className="text-stone-500 text-sm">
                      Reservations via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-lg opacity-100">
                      {content[lang].hours}
                    </p>
                    <p className="text-stone-500 text-sm">Open all season</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                    <Instagram size={22} />
                  </div>
                  <div className="my-auto">
                    <a
                      href="https://www.instagram.com/al_posto_giusto_ibiza/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram Al Posto Giusto Ibiza"
                      className="text-amber-600  italic font-bold text-lg"
                    >
                      al_posto_giusto_ibiza
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-8 relative rounded-[3rem] overflow-hidden h-[400px] sm:h-[500px] shadow-3xl border-8 border-white group cursor-pointer">
              <MapWidget />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
