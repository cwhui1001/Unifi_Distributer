import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Search, HelpCircle, Briefcase } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How is Unifi Business different from Unifi Home?",
    answer: "Unifi Business is specifically designed for commercial use, offering features like Fixed IP options, higher upload speeds, priority customer support (SLA), and specialized productivity tools like Digital Marketing Solutions and Cloud Storage."
  },
  {
    question: "Do business plans include a Fixed IP?",
    answer: "Fixed IP is available as an add-on or included in certain premium business broadband plans. This is essential for businesses running their own servers, CCTV systems, or remote access VPNs."
  },
  {
    question: "What is the Service Level Agreement (SLA)?",
    answer: "Business plans come with a 24-hour service restoration guarantee. If your internet goes down, our specialized business technicians prioritize your connection to ensure minimal business disruption."
  },
  {
    question: "Can I upgrade my existing home plan to a business plan?",
    answer: "Yes, we encourage businesses operating from home to upgrade to a business plan for better stability and professional support features. Contact our business support for migration assistance."
  },
  {
    question: "Are there any tax benefits for Unifi Business?",
    answer: "Unifi Business expenses are generally tax-deductible as a business expense for registered companies in Malaysia. Please consult your tax professional for specific advice."
  }
];

export default function BusinessFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>Business FAQ | Unifi Business</title>
      </Head>

      <div className="bg-[#005B9F] text-white py-16 text-center relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Briefcase className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link href="/business" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Business Plans
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Business FAQ</h1>
          <p className="text-xl text-white/90 font-medium">Empowering your enterprise with reliable fibre connectivity</p>
        </div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-blue-50/30 transition-colors group"
              >
                <div className="flex items-center">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors ${openIndex === idx ? 'bg-[#005B9F] text-white' : 'bg-blue-50 text-[#005B9F]'}`}>
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <span className={`font-bold text-lg ${openIndex === idx ? 'text-[#005B9F]' : 'text-gray-900'}`}>
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

        <div className="mt-16 bg-[#005B9F] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Enterprise Solutions</h3>
            <p className="text-white/90 font-medium">Need a customized solution for your large-scale business?</p>
          </div>
          <Link href="/contact" className="bg-white text-[#005B9F] font-black px-8 py-3 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            CONSULT OUR EXPERTS
          </Link>
        </div>
      </div>
    </div>
  );
}
