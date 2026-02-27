const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="py-12 bg-stone-900 text-white/90 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <img
            src="media/logo-footer-sm.webp"
            alt="Footer Logo"
            className="h-12 mx-auto mb-8 opacity-90 block md:hidden w-auto"
          />
          <img
            src="media/logo-full-min.webp"
            alt="Footer Logo"
            className="h-12 mx-auto mb-8 opacity-90 hidden md:block"
          />
          <div className="h-px bg-white/10 w-full mb-8" />
          <p className="text-[10px] opacity-40 uppercase tracking-[0.4em]">
            © 2026 Al Posto Giusto Ibiza • Tradizione Italiana • Balearic Soul
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
