import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, FileText, ExternalLink, Briefcase, HelpCircle } from "lucide-react";

const BUSINESS_FAQ_ITEMS = [
  {
    title: "FAQ OF IPAD FOR BUSINESS",
    link: "/tncfaq/business/fibre/faq/FAQ-IPAD-FOR-BUSINESS-14042025.pdf"
  },
  {
    title: "FAQ OF UNIFIBIZ 1GBPS 2GBPS",
    link: "/tncfaq/business/fibre/faq/FAQ for UnifiBiz 1Gbps 2Gbps.pdf"
  },
  {
    title: "FAQ OF UNIFI (GENERAL)",
    link: "/tncfaq/business/fibre/faq/FAQ_unifi_Biz_General_updated_August_2023.pdf"
  },
  {
    title: "HOW DOES THE UNIFI 2GBPS WITH AGGREGATED OFFERING WORK?",
    link: "/tncfaq/business/fibre/faq/Infographic 2Gbps- Business.png"
  },
  {
    title: "SME SMART DEVICE",
    link: "/tncfaq/business/fibre/faq/FAQ_SmartDevice_updateJuly2023.pdf"
  },
  {
    title: "FAQ FOR MESH WI-FI 7, WI-FI 6 AND TP-LINK",
    link: "/tncfaq/business/fibre/faq/FAQ for Mesh Wi-Fi 7, Wi-Fi 6 and TP-Link.pdf"
  },
  {
    title: "5G DONGLE QUICK START GUIDE (QIG)",
    link: "/tncfaq/business/fibre/faq/5G_Dongle_Quick_Start_Guide_(QIG).pdf"
  },
  {
    title: "FAQ OF BIZ 5G WIRELESS BACKUP",
    link: "/tncfaq/business/fibre/faq/FAQ_Biz_5G_Wireless_Backup.pdf"
  }
];

export default function BusinessFAQ() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>Frequently Asked Questions | Unifi Business</title>
        <meta name="description" content="Find answers to all your Unifi Business broadband questions. Download FAQ documents for various plans and devices." />
      </Head>

      <header className="relative bg-[#005B9F] text-white overflow-hidden py-12 md:py-20 flex-shrink-0">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Briefcase className="w-64 h-64 text-white" />
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <nav className="mb-10">
            <Link 
              href="/business" 
              className="inline-flex items-center text-white/90 hover:text-white group transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span className="text-sm font-bold tracking-widest uppercase">Back to Business</span>
            </Link>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight uppercase animate-fade-in-up">
              Unifi Business <br className="hidden md:block" />
              Broadband FAQ
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Empowering your enterprise with reliable information. Access comprehensive guides and FAQs for all business services.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-16">
        <h2 className="text-2xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="grid gap-4">
          {BUSINESS_FAQ_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"
              style={{ 
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 50}ms`,
                opacity: 0
              }}
            >
              <div className="flex items-center gap-5 flex-1 w-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 text-[#005B9F]">
                  <HelpCircle className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h2 className="text-lg md:text-xl font-extrabold text-gray-800 leading-tight group-hover:text-[#005B9F] transition-colors duration-300 uppercase tracking-tight">
                  {item.title}
                </h2>
              </div>
              
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#005B9F] hover:bg-[#FF7A00] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-100 hover:shadow-orange-200 group/btn"
              >
                <span>VIEW DOCUMENT</span>
                <ExternalLink className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        
      </main>

    

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
