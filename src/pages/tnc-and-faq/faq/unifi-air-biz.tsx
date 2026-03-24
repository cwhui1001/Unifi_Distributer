import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown, ArrowLeft, HelpCircle, Wifi, Zap } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What is Unifi Air Biz?",
    answer: "Unifi Air Biz is a wireless broadband solution designed for businesses. It uses 5G and 4G technology to provide high-speed internet without the need for physical fibre cabling, making it a 'Plug and Play' solution."
  },
  {
    question: "Do I need to wait for installation?",
    answer: "No! Unifi Air Biz is a plug-and-play service. Once you receive your router and SIM card, simply insert the SIM, power on the device, and you're ready to go within minutes."
  },
  {
    question: "How many devices can I connect?",
    answer: "The Unifi Air Biz 5G routers can support up to 64 concurrent device connections, making it suitable for small to medium-sized offices or retail outlets."
  },
  {
    question: "What happens if I move my business to a new location?",
    answer: "Since Unifi Air Biz is wireless, it is highly portable. You can take your router to any location with Unifi 5G/4G coverage and continue your operations immediately."
  },
  {
    question: "Is there a data cap? (FUP)",
    answer: "Unifi Air Biz comes with Unlimited 5G Data. However, a Fair Usage Policy (FUP) applies to ensure consistent network quality for all users. If the FUP threshold is reached, speeds may be moderated until the next billing cycle."
  }
];

export default function UnifiAirBizFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>Unifi Air Biz FAQ | Wireless Business Broadband</title>
      </Head>

      <div className="bg-[#005B9F] text-white py-16 text-center relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Wifi className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link href="/products/wireless-broadband-unifi-air" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-sans">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Air Biz Plans
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Air Biz FAQ</h1>
          <p className="text-xl text-white/90 font-medium">Plug & Play wireless connectivity for your business</p>
        </div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-orange-50/30 transition-colors group"
              >
                <div className="flex items-center">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors ${openIndex === idx ? 'bg-[#FF7A00] text-white' : 'bg-orange-50 text-[#FF7A00]'}`}>
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <span className={`font-bold text-lg ${openIndex === idx ? 'text-[#FF7A00]' : 'text-gray-900'}`}>
                    {item.question}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} strokeWidth={3} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}>
                <div className="px-16 text-gray-600 leading-relaxed font-medium">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#005B9F] to-[#003d6b] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Fast Setup, Zero Wait</h3>
            <p className="text-white/90 font-medium">Get your business online today with our Mi-Fi bundles.</p>
          </div>
          <Link href="/check-coverage" className="bg-[#FF7A00] text-white font-black px-8 py-3 rounded-full hover:bg-[#e66e00] transition-all transform hover:scale-105 shadow-lg">
            CHECK 5G COVERAGE
          </Link>
        </div>
      </div>
    </div>
  );
}
