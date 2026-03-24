import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Smartphone, HelpCircle, Wifi } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Is 5G included in all postpaid plans?",
    answer: "Yes! All our new UNI5G Postpaid plans (UNI5G 39, 69, 99) include access to Malaysia's 5G network. High-speed 4G data is also included to ensure seamless coverage nationwide."
  },
  {
    question: "Do I need a new SIM card for 5G?",
    answer: "Most modern Unifi SIM cards are 5G ready. If you're an existing customer and not getting 5G, you can swap your SIM at any Unifi Store or through the MyUnifi app."
  },
  {
    question: "How does the mobile hotspot work?",
    answer: "Our UNI5G 69 and UNI5G 99 plans offer Unlimited Hotspot data, allowing you to share your 5G/4G connection with other devices without additional charges."
  },
  {
    question: "Can I keep my existing phone number?",
    answer: "Absolutely! You can easily port-in your existing mobile number from any other provider in Malaysia through our MNP (Mobile Number Portability) process."
  },
  {
    question: "Are there any roaming charges?",
    answer: "Our UNI5G 99 plan includes a Free Monthly Roaming Pass for selected countries. For other plans, we offer affordable daily and weekly roaming passes."
  }
];

export default function PostpaidFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>UNI5G Postpaid FAQ | Mobilize Your Life</title>
      </Head>

      <div className="bg-gradient-to-br from-[#8C1B70] via-[#D81B60] to-[#FF7A00] text-white py-16 text-center relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Smartphone className="w-64 h-64 text-white rotate-12" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Link href="/postpaid" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Postpaid Plans
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Postpaid FAQ</h1>
          <p className="text-xl text-white/90 font-medium">Unlocking the magic of UNI5G connectivity</p>
        </div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-pink-50/30 transition-colors group"
              >
                <div className="flex items-center">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors ${openIndex === idx ? 'bg-[#D81B60] text-white' : 'bg-pink-50 text-[#D81B60]'}`}>
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <span className={`font-bold text-lg ${openIndex === idx ? 'text-[#D81B60]' : 'text-gray-900'}`}>
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

        <div className="mt-16 bg-gradient-to-r from-[#D81B60] to-[#FF7A00] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Need 5G Now?</h3>
            <p className="text-white/90 font-medium">Check out our latest 5G device bundles starting from RM0 upfront.</p>
          </div>
          <Link href="/postpaid" className="bg-white text-[#D81B60] font-black px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            BROWSE 5G PHONES
          </Link>
        </div>
      </div>
    </div>
  );
}
