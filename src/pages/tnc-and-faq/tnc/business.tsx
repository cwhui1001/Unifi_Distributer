import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Gavel, CheckCircle2 } from "lucide-react";

export default function BusinessTNC() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>Business Terms & Conditions | Unifi Business</title>
      </Head>

      <div className="bg-[#005B9F] text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Link href="/business" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Business Plans
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight leading-none">Business Terms & Conditions</h1>
          <p className="text-xl text-white/90 font-medium">Agreement for Unifi Business Broadband Services</p>
        </div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8 pb-8 border-b border-gray-100">
              <Gavel className="w-12 h-12 text-[#FF7A00] mr-6" />
              <div>
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Business Service Policy</h2>
                <p className="text-gray-500 font-medium italic">Last updated: March 2024</p>
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h3 className="text-xl font-bold text-[#005B9F] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#005B9F] flex items-center justify-center mr-3 text-sm">01</span>
                  ELIGIBILITY & USE
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11 mb-2">
                  Unifi Business is intended for use by officially registered business entities in Malaysia (SSM-registered companies). 
                </p>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  Resale of the broadband service is strictly prohibited and may result in immediate termination of the agreement.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#005B9F] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#005B9F] flex items-center justify-center mr-3 text-sm">02</span>
                  SERVICE REPAIR (SLA)
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  TM provides a 24-hour service restoration for Unifi Business plans. Should any disruption occur, our 
                  technicians will prioritize the restoration of business services within the specified timeframe.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#005B9F] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#005B9F] flex items-center justify-center mr-3 text-sm">03</span>
                  HARDWARE & ADD-ONS
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11 mb-4">
                  Hardware provided includes a professional-grade Wi-Fi 6/7 Router. Any third-party add-ons like 
                  Digital Marketing Solutions are subject to separate terms of use with their respective providers.
                </p>
                <ul className="pl-11 space-y-2">
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mr-2" />
                    Fixed IP remains the property of TM and is provided based on availability.
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mr-2" />
                    Equipment maintenance is provided by TM for the duration of the contract.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#005B9F] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#005B9F] flex items-center justify-center mr-3 text-sm">04</span>
                  CONTRACTUAL OBLIGATION
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  A minimum 24-month contract applies to all new Unifi Business subscriptions. Early termination fees 
                  will involve the settlement of all outstanding balances and remaining contract value.
                </p>
              </section>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TM Technology Services Sdn Bhd. Dedicated to your business growth.</p>
        </div>
      </div>
    </div>
  );
}
