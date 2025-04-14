"use client";
import { SearchProvider } from "./context/SearchContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function ClientLayout({ children }) {
  return (
    <SearchProvider>
      <Nav />
      <hr />
      {children}
      <Footer />
    </SearchProvider>
  );
}