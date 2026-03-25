import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, Wifi } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home Plan", path: "/" },
    { name: "Business", path: "/business" },
    { name: "Postpaid", path: "/postpaid" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <img 
                src="/images/unifi.svg" 
                alt="logo" 
                className="mr-2 group-hover:scale-105 transition-transform" 
                width="121" 
                height="39" 
                id="unifiLogo" 
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 hover:text-[#FF7A00] ${
                    isActive ? "text-[#FF7A00]" : "text-[#005B9F]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/check-coverage">
              <button className="bg-[#FF7A00] hover:bg-[#e06b00] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-500/50 hover:-translate-y-0.5 ml-4">
                Check Coverage
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#005B9F] hover:text-[#FF7A00] focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-xl text-base font-semibold ${
                  isActive
                    ? "bg-orange-50 text-[#FF7A00]"
                    : "text-[#005B9F] hover:bg-orange-50 hover:text-[#FF7A00]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 px-3">
            <Link href="/check-coverage" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#FF7A00] hover:bg-[#e06b00] text-white px-4 py-3 rounded-full font-bold shadow-md transition-colors">
                Check Coverage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
