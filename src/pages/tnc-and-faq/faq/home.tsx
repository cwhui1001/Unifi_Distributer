import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Search, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Can you tell me more about Unifi Home?",
    answer: "Unifi Home provides high-speed fibre internet access for a digital lifestyle, converged offerings of reliable connectivity, content, and devices for everyone in your household."
  },
  {
    question: "What are the benefits of Unifi Home?",
    answer: "Benefits include high-speed internet (up to 2Gbps), Wi-Fi 6/7 equipment, 24-hour service guarantee, and access to entertainment content like Unifi TV and streaming apps."
  },
  {
    question: "How long is the contract period?",
    answer: "Most Unifi Home plans come with a 24-month contract. Check specific promotional plans for any variations (e.g., 30 or 36 months for certain device bundles)."
  },
  {
    question: "Is installation free?",
    answer: "Standard installation is free for new subscribers. This includes standard drilling, cabling, and device setup by our technicians."
  },
  {
    question: "How do I check if my area has Unifi coverage?",
    answer: "You can check coverage on our website through the 'Check Coverage' tool or contact our authorized resellers for a quick check."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>Frequently Asked Questions | Unifi Home</title>
      </Head>

      <div className="bg-[#1800E7] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">FAQ</h1>
          <p className="text-xl text-white/90 font-medium font-sans">Everything you need to know about Unifi Home Broadband</p>
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

        <div className="mt-16 bg-[#FF7A00] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Still have questions?</h3>
            <p className="text-white/90 font-medium">Our customer service team is ready to assist you anytime.</p>
          </div>
          <Link href="/check-coverage" className="bg-white text-[#FF7A00] font-black px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            CONTACT SUPPORT
          </Link>
        </div>
      </div>
    </div>
  );
}
