import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Wifi } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#005B9F] text-white pt-16 pb-8 border-t-[6px] border-[#FF7A00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6 md:col-span-1">
            <Link href="/" className="flex items-center group inline-flex mb-2">
              <img 
                src="https://unifi.com.my/themes/unifi/img/newest2022/unifi.svg" 
                alt="logo" 
                className="mr-2 brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
                width="121" 
                height="39" 
                id="unifiLogo-footer" 
              />
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
              Experience lighting-fast internet, endless entertainment with Unifi TV, and uninterrupted connectivity with our all-new postpaid plans.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-colors hover:-translate-y-1 transform duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-colors hover:-translate-y-1 transform duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-colors hover:-translate-y-1 transform duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Plans</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>Home Broadband</Link></li>
              <li><Link href="/business" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>Business Broadband</Link></li>
              <li><Link href="/postpaid" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>Postpaid Mobile</Link></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>Unifi TV</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Help Centre</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Check Coverage</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Find TMpoint</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Fair Usage Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} Telekom Malaysia Berhad. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Powered by KFJ Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
