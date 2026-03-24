import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Smartphone, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PostpaidTNC() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>UNI5G Postpaid Terms & Conditions | UNI5G</title>
      </Head>

      <div className="bg-gradient-to-br from-[#8C1B70] via-[#D81B60] to-[#FF7A00] text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Link href="/postpaid" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Postpaid Plans
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight leading-none">UNI5G Terms & Conditions</h1>
          <p className="text-xl text-white/90 font-medium">Agreement for UNI5G Mobile Services</p>
        </div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8 pb-8 border-b border-gray-100">
              <ShieldCheck className="w-12 h-12 text-[#FF7A00] mr-6" />
              <div>
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Postpaid Service Agreement</h2>
                <p className="text-gray-500 font-medium italic">Last updated: March 2024</p>
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h3 className="text-xl font-bold text-[#D81B60] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-pink-50 text-[#D81B60] flex items-center justify-center mr-3 text-sm">01</span>
                  DATA USAGE POLICY
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11 mb-2">
                  UNI5G Postpaid plans provide data for 5G/4G use within Malaysia. Unlimited data is subject to our Fair 
                  Usage Policy (FUP) to ensure optimal experience for all users.
                </p>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  Speed may be adjusted if the monthly data allowance is reached (for non-unlimited plans) or in cases 
                  of network congestion.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#D81B60] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-pink-50 text-[#D81B60] flex items-center justify-center mr-3 text-sm">02</span>
                  CALLS & SMS
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  Unlimited calls apply to all local numbers within Malaysia only. International calls (IDD) and 
                  premium number calls are charged according to standard rates.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#D81B60] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-pink-50 text-[#D81B60] flex items-center justify-center mr-3 text-sm">03</span>
                  DEVICE BUNDLING
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11 mb-4">
                  For plans involving a device bundle, a 24-month contract period applies. The device warranty is 
                  provided by the respective manufacturer and not by TM directly.
                </p>
                <ul className="pl-11 space-y-2">
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mr-2" />
                    Upfront payment may be required based on credit assessment.
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mr-2" />
                    Early termination will incur device-related penalty fees.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#D81B60] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-pink-50 text-[#D81B60] flex items-center justify-center mr-3 text-sm">04</span>
                  ROAMING & INTERNATIONAL
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  International roaming must be activated prior to travel. Data roaming passes can be purchased via 
                  the MyUnifi app. UNI5G 99 includes specific roaming perks as stated in the plan details.
                </p>
              </section>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TM Technology Services Sdn Bhd. Connecting you wherever you go.</p>
        </div>
      </div>
    </div>
  );
}
