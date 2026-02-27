import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-serif italic text-amber-600 mb-4">404</h1>
      <p className="text-xl text-stone-600 mb-8">Pagina non trovata</p>
      <Link
        href="/"
        className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 transition-colors"
      >
        Torna alla Home
      </Link>
    </div>
  );
}
