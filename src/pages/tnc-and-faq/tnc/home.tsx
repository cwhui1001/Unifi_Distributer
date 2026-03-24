import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export default function HomeTNC() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>Terms & Conditions | Unifi Home</title>
      </Head>

      <div className="bg-[#1800E7] text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Terms & Conditions</h1>
          <p className="text-xl text-white/90 font-medium">Agreement for Unifi Home Broadband Services</p>
        </div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8 pb-8 border-b border-gray-100">
              <FileText className="w-12 h-12 text-[#FF7A00] mr-6" />
              <div>
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Master Service Agreement</h2>
                <p className="text-gray-500 font-medium italic">Last updated: March 2024</p>
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h3 className="text-xl font-bold text-[#1800E7] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#1800E7] flex items-center justify-center mr-3 text-sm">01</span>
                  SERVICE DESCRIPTION
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  The Service refers to the Unifi Home Broadband service provided by TM Technology Services Sdn Bhd. 
                  It includes high-speed fibre internet access, relevant hardware (Modem/Router), and optional add-on services 
                  subscribed to by the customer.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1800E7] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#1800E7] flex items-center justify-center mr-3 text-sm">02</span>
                  CONTRACT PERIOD
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  Most packages are subject to a minimum subscription period of 24 months unless stated otherwise in specific 
                  promotions. Termination of service prior to the expiry of the minimum period will result in a penalty 
                  equivalent to the remaining months' subscription fees.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1800E7] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#1800E7] flex items-center justify-center mr-3 text-sm">03</span>
                  INSTALLATION & EQUIPMENT
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11 mb-4">
                  Standard installation includes the setup of the Broadband termination and connection to the Unifi hardware. 
                  Non-standard installation requests may incur additional charges payable directly to the technician.
                </p>
                <ul className="pl-11 space-y-2">
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mr-2" />
                    Standard drilling and cabling up to 15 meters.
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mr-2" />
                    Equipment remains owned by TM until specific criteria are met.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1800E7] mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[#1800E7] flex items-center justify-center mr-3 text-sm">04</span>
                  TERMINATION & SUSPENSION
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium pl-11">
                  The customer must provide 30 days notice prior to termination. TM reserves the right to suspend the 
                  service in the event of non-payment or breach of terms of use.
                </p>
              </section>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TM Technology Services Sdn Bhd. For any concerns, please contact our helpline.</p>
        </div>
      </div>
    </div>
  );
}
