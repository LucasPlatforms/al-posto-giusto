"use client";
import { useState, useEffect, useRef } from "react";

const MapWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin: "300px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-stone-100"
    >
      {isVisible ? (
        <iframe
          title="Al Posto Giusto Location on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.4111999920287!2d1.5335815!3d38.9831107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129915002b61d47b%3A0xde5df60ba3aaf97a!2sAl%20posto%20giusto!5e0!3m2!1sit!2sit!4v1769870954533!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        // placeholder visivo mentre la mappa non è ancora caricata
        <div className="w-full h-full flex items-center justify-center bg-stone-100">
          <div className="text-stone-400 text-sm font-medium">
            📍 Santa Eulària des Riu
          </div>
        </div>
      )}
    </div>
  );
};

export default MapWidget;
