"use client";
import { AppProvider } from "./AppProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <AppProvider>
      <Navbar />
      {children}
      <Footer />
    </AppProvider>
  );
}
