import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main className="flex-1 w-full pt-20">{children}</main>
      <Footer />
    </div>
  );
}
