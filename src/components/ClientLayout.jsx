"use client";
import { AppProvider } from "./AppProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children, initialLang, initialSunset }) {
  return (
    <AppProvider initialSunset={initialSunset} initialLang={initialLang}>
      <Navbar />
      {children}
      <Footer />
    </AppProvider>
  );
}
