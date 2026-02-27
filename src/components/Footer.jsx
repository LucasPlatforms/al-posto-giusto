import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 bg-stone-900 text-white/90 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <Image
          src="/media/logo-footer-sm.webp"
          alt="Footer Logo"
          width={120}
          height={48}
          className="h-12 w-auto mx-auto mb-8 opacity-90 block md:hidden"
        />
        <Image
          src="/media/logo-full-min.webp"
          alt="Footer Logo"
          width={400}
          height={48}
          className="h-12 w-auto mx-auto mb-8 opacity-90 hidden md:block"
        />
        <div className="h-px bg-white/10 w-full mb-8" />
        <p className="text-[10px] opacity-40 uppercase tracking-[0.4em]">
          © 2026 Al Posto Giusto Ibiza • Tradizione Italiana • Balearic Soul
        </p>
      </div>
    </footer>
  );
};

export default Footer;
