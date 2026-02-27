"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  content,
  menuLanguages,
  menuUrl,
  whatsappUrl,
  imgFlags,
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
} from "lucide-react";

const Home = ({ lang, setLang, vibe, setVibe, isChanging }) => {
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 17) setVibe("Afternoon Chill");
    else if (hour >= 17 && hour < 21) setVibe("Sunset Magic");
    else setVibe("Night Spirit");
  }, []);

  const handleLangChange = (newLang) => {
    setIsChanging(true);
    setTimeout(() => {
      setLang(newLang);
      setIsChanging(false);
    }, 200);
  };
  const [isChanging, setIsChanging] = useState(false);
  const [lang, setLang] = useState("en");
  const [vibe, setVibe] = useState("Sunset Vibes");

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-amber-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="media/hero-img-full.webp"
            alt="Al Posto Giusto Hero Background"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-black/70" />
        </div>

        <div
          className={`relative z-10 px-6 transition-all duration-500 ${isChanging ? "opacity-0 scale-95 blur-md" : "opacity-100 scale-100 blur-0"}`}
        >
          <Image
            src="media/logo-hero-sm.webp"
            alt="Logo Al Posto Giusto"
            className="py-8 block md:hidden max-h-37.5 w-auto mx-auto "
          />
          <Image
            src="media/logo-full-md.webp"
            alt="Logo Al Posto Giusto"
            width="1200px"
            height="266px"
            className="py-8 hidden md:block"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#menu"
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full font-bold shadow-2x1 transition-all hover:translate-y-1 text-center"
            >
              {content[lang].digitalMenu}
            </a>
            <a
              href={whatsappUrl}
              className="w-full sm:w-auto bg-white/10 hover:backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold shadow-2xl transition-all hover:translate-y-1 flex items-center justify-center gap-2"
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
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
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
              <Image
                src="media/feature-2-sm.webp"
                className="rounded-2xl shadow-lg mt-12 transform hover:scale-105 transition-transform duration-500 block w-auto md:hidden"
                alt="Cocktail Detail"
              />
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop"
                className="rounded-2xl shadow-lg mt-12 transform hover:scale-105 transition-transform duration-500 hidden md:block"
                alt="Cocktail Detail"
              />

              <Image
                src="media/feature-1-sm.webp"
                className="rounded-2xl shadow-lg transform hover:-translate-y-6 transition-transform duration-500 block w-auto md:hidden"
                alt="Bar Vibe"
              />
              <Image
                src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000&auto=format&fit=crop"
                className="rounded-2xl shadow-lg transform hover:-translate-y-6 transition-transform duration-500 hidden md:block"
                alt="Bar Vibe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Menu Links */}
      <section id="menu" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-serif italic transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"}`}
            >
              {content[lang].digitalMenu}
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuLanguages.map((ml) => (
              <a
                key={ml.id}
                href={menuUrl[ml.id]}
                target="_blank"
                className="group relative bg-white border border-stone-200 p-8 rounded-3xl text-center hover:border-amber-600 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <Image
                  src={imgFlags[ml.id]}
                  alt={ml.label}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h4 className="text-xl font-bold mb-4">{ml.label}</h4>
                <div className="inline-flex items-center gap-2 text-stone-400 group-hover:text-amber-600 font-bold text-xs uppercase tracking-widest transition-colors">
                  {content[lang].menuCta} <ChevronRight size={14} />
                </div>
                <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity rotate-12">
                  <FileText size={150} />
                </div>
              </a>
            ))}
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
                className={`text-4xl font-serif italic transition-opacity duration-300 ${isChanging ? "opacity-0" : "opacity-100"}`}
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
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">+34 600 000 000</p>
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
                    <p className="font-bold text-lg">{content[lang].hours}</p>
                    <p className="text-stone-500 text-sm">Open all season</p>
                  </div>
                </div>
              </div>
              <div className="inset-0 flex items-center justify-center">
                <div className="bg-white px-8 py-6 rounded-3xl shadow-2xl text-center">
                  <Sun className="text-amber-600 mx-auto mb-2 animate-spin-slow" />
                  <p className="font-serif italic text-2xl font-bold">
                    Steps from the Port
                  </p>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">
                    Get Directions
                  </p>
                  <button className="mt-6 bg-stone-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors">
                    <a
                      href="https://maps.app.goo.gl/vXFdRXYp7EcYWzd26"
                      target="_blank"
                    >
                      Open in Maps ↗
                    </a>
                  </button>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.instagram.com/al_posto_giusto_ibiza/"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-stone-900 text-white flex items-center justify-center hover:bg-amber-600 transition-all shadow-lg hover:-translate-y-1"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-8 relative rounded-[3rem] overflow-hidden h-100 sm:h-125 shadow-3xl border-8 border-white group cursor-pointer">
              <MapWidget />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
