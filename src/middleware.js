// src/middleware.js
import { NextResponse } from "next/server";

// Definisci le lingue supportate
const locales = ["en", "it", "es", "de"];
const defaultLocale = "en";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Controlla se l'URL contiene già una lingua supportata
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Se non c'è la lingua, reindirizza aggiungendo il defaultLocale
  // Es: /chi-siamo -> /it/chi-siamo
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Evita che il middleware agisca su file statici e immagini
  matcher: [
    "/((?!api|_next/static|_next/image|media|fonts|favicon.ico|robots.txt).*)",
  ],
};
