import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Wifi, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function UnifiAirBizTNC() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>Unifi Air Biz Terms & Conditions | Unifi Business</title>
      </Head>

      <div className="bg-[#005B9F] text-white py-16 text-center relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Wifi className="w-64 h-64 text-white rotate-12" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Link href="/products/wireless-broadband-unifi-air" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Air Biz Plans
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight leading-none">Air Biz Terms & Conditions</h1>
          <p className="text-xl text-white/90 font-medium font-sans">Agreement for Unifi Air Biz Wireless Services</p>
        </div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8 pb-8 border-b border-gray-100">
              <ShieldCheck className="w-12 h-12 text-[#FF7A00] mr-6" />
              <div>
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Wireless Service Agreement</h2>
                <p className="text-gray-500 font-medium italic">Last updated: March 2024</p>
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h3 className="text-xl font-bold text-[#005B9F] mb-4 flex items-center font-sans">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#005B9F] flex items-center justify-center mr-3 text-sm">01</span>
                  SERVICE NATURE
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11 mb-2">
                  Unifi Air Biz is a wireless broadband service that provides internet connectivity via our 5G and 4G 
                  networks. It is a location-flexible solution that does not require fixed line cabling.
                </p>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  Speed and stability may vary based on signal strength and network environment at the point of use.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#005B9F] mb-4 flex items-center font-sans">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#005B9F] flex items-center justify-center mr-3 text-sm">02</span>
                  HARDWARE & OWNERSHIP
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  TM provides high-performance 5G/4G routers for use with the service. The hardware remains the 
                  property of the business owner only after the 24-month contract has been fully settled. 
                  Premature termination requires the return of functional hardware.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#005B9F] mb-4 flex items-center font-sans">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#005B9F] flex items-center justify-center mr-3 text-sm">03</span>
                  DATA LIMITS & FUP
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11 mb-4">
                  The 'Unlimited 5G Data' is provided subject to our Fair Usage Policy (FUP). This policy is designed 
                  to prevent misuse of the network that may result in degradation for other users.
                </p>
                <ul className="pl-11 space-y-2">
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mr-2" />
                    Unlimited 5G data for all local use.
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mr-2" />
                    Speed may be throttle if FUP threshold is exceeded.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#005B9F] mb-4 flex items-center font-sans">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#005B9F] flex items-center justify-center mr-3 text-sm">04</span>
                  PLUG & PLAY INSTALLATION
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  The service is considered fully installed once the SIM has been activated and data usage has commenced. 
                  Technical support is provided for any network-related connectivity issues.
                </p>
              </section>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TM Technology Services Sdn Bhd. Connecting businesses wirelessly.</p>
        </div>
      </div>
    </div>
  );
}
