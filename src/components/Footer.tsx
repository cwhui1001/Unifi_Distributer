import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Wifi } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white pt-16 pb-8 border-t-[6px] border-[#FF7A00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center group inline-flex mb-2">
                <img 
                src="/images/unifi-logo2.png" 
                alt="logo 2" 
                className="h-8 md:h-10 w-auto mb-2" 
                id="unifiLogo2-footer" 
                /> 
              </Link>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
              Experience lighting-fast internet, endless entertainment with Unifi TV, and uninterrupted connectivity with our all-new postpaid plans.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Plans</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>Home Broadband</Link></li>
              <li><Link href="/business/" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>Business Broadband</Link></li>
              <li><Link href="/postpaid/" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>Postpaid Mobile</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/check-coverage/" className="text-blue-200 hover:text-white transition-colors">Check Coverage</Link></li>
              <li><Link href="/installation-guide/" className="text-blue-200 hover:text-white transition-colors">Installation Guide</Link></li>
              <li><a href="mailto:sales@unifi-online.my" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/tnc-and-faq/tnc/home/" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/tnc-and-faq/faq/home/" className="text-blue-200 hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/privacy-policy/" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p>Authorized Dealer for TM TECHNOLOGY SERVICES SDN. BHD | Independent Sales & Consultation</p>
            <p>© 2026 | All Rights Reserved | All trademarks are the property of their respective owner.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
