import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, FileText, ChevronRight, ExternalLink, ShieldCheck, Info, Smartphone } from "lucide-react";

const newPostpaidTNC = [
  {
    title: "UNI5G POSTPAID NETFLIX BUNDLE",
    url: "/tncfaq/postpaid/tnc/TnC-Postpaid-Netflix-Bundle.pdf",
  },
  {
    title: "POSTPAID STREAMING APPS ADD ON",
    url: "/tncfaq/postpaid/tnc/TnC-Postpaid-Streaming-Appps-Add-On.pdf",
  },
  {
    title: "KONGSI RAYA ONLINE EXCLUSIVE CAMPAIGN",
    url: "/tncfaq/postpaid/tnc/Terms-Conditions-Kongsi-Raya-Online-Exclusive-Campaign.pdf",
  },
  {
    title: "ACCEPTABLE USE POLICY",
    url: "/tncfaq/postpaid/tnc/Acceptable-Use-Policy.pdf",
  },
  {
    title: "TERMS AND CONDITIONS",
    url: "/tncfaq/postpaid/tnc/Postpaid-Consumer-TC-for-UNI5G-Postpaid-Individual-Family-Plans.pdf",
  },
  {
    title: "PRIVACY STATEMENT",
    url: "/tncfaq/postpaid/tnc/Privacy-Statement.pdf",
  },
  {
    title: "SPECIFIC TERM",
    url: "/tncfaq/postpaid/tnc/Specific-Terms-Postpaid-Consumer-for-UNI5G-Postpaid-Individual-&Family-Plans_Dec.pdf",
  },
  {
    title: "TERM OF USE",
    url: "/tncfaq/postpaid/tnc/Terms-of-Use.pdf",
  },
  {
    title: "200GB 5G MONTHLY DATA PASS",
    url: "/tncfaq/postpaid/tnc/TnC-200GB-5G-Monthly-Data-Pass-Campaign.pdf",
  },
  {
    title: "TRY ME PLAN CAMPAIGN",
    url: "/tncfaq/postpaid/tnc/Try-Me-Plan_TnC.pdf",
  },
  {
    title: "UNI5G Postpaid with Device and Unifi EzOwn",
    url: "/tncfaq/postpaid/tnc/UNI5G-Postpaid-with-Device-and-Unifi-EzOwn_TnC.pdf",
  },
  {
    title: "UNI5G POSTPAID FREE 5G PHONES CAMPAIGN",
    url: "/tncfaq/postpaid/tnc/Terms-and-Conditions-UNI5G-Postpaid-Free-5G-Phones-Campaign.pdf",
  },
  {
    title: "PAKEJ PENJAWAT AWAM 2025 CAMPAIGN",
    url: "/tncfaq/postpaid/tnc/Terms-and-Conditions-Unifi-Mobile-Penjawat-Awam-2025-Campaign.pdf",
  },
  {
    title: "UNIFI MOBILE AND MAYBANK 5G SMARTPHONE 2025 CAMPAIGN",
    url: "/tncfaq/postpaid/tnc/Terms-and-Conditions-Unifi-Mobile-and-Maybank-5G-Smartphone-2025-Campaign.pdf",
  },
  {
    title: "Unifi Home New Port Application",
    url: "/tncfaq/postpaid/tnc/TNC-Demand-List-(Unifi-Home).pdf",
  },
  {
    title: "Samsung galaxy s26 series pre order",
    url: "/tncfaq/postpaid/tnc/Samsung-S26-Series-Pre-Order_TnC.pdf",
  },
];

const otherPostpaidTNC = [
  {
    title: "ACCEPTABLE USE POLICY",
    url: "/tncfaq/postpaid/tnc/Acceptable%20Use%20Policy.pdf",
  },
  {
    title: "PRIVACY STATEMENT",
    url: "/tncfaq/postpaid/tnc/Privacy%20Statement.pdf",
  },
  {
    title: "SPECIFIC TERMS-POSTPAID CONSUMER",
    url: "/tncfaq/postpaid/tnc/Specific-Terms-Postpaid-Consumer_Other%20FAQ_Dec.pdf",
  },
  {
    title: "POSTPAID CONSUMER T&C FOR MOBILE SERVICE",
    url: "/tncfaq/postpaid/tnc/Postpaid%20Consumer%20TC%20for%20Mobile%20Service.pdf",
  },
  {
    title: "TERMS OF USE",
    url: "/tncfaq/postpaid/tnc/Terms%20of%20Use.pdf",
  },
  {
    title: "UNIFI MOBILE 99 PROMO",
    url: "/tncfaq/postpaid/tnc/T&C%20unifi%20Mobile%2099%20Promo%20(V2)%20-%2005012021.pdf",
  },
  {
    title: "UNIFI MOBILE 99 FOR THE PRICE OF RM59 SPECIAL PLAN",
    url: "/tncfaq/postpaid/tnc/UM-99-at-the-price-of-RM59-(12-months-contract)-Campaign-Terms-and-Conditions_280421_updated.pdf",
  },
  {
    title: "UNIFI MOBILE 99 AT RM59 WITH 12 MONTHS CONTRACT CAMPAIGN",
    url: "/tncfaq/postpaid/tnc/UM-99-at-the-price-of-RM59-(12-months-contract)-Campaign-Terms-and-Conditions_280421_updated.pdf",
  },
  {
    title: "UNIFI MOBILE 99 PROMO WITH DEVICE",
    url: "/tncfaq/postpaid/tnc/TnC-unifi-Mobile-99-Promo-with-Device_New-devices_11thAug2022_Updated.pdf",
  },
];

export default function PostpaidTNC() {
  const [activeTab, setActiveTab] = useState<"new" | "other">("new");

  const currentItems = activeTab === "new" ? newPostpaidTNC : otherPostpaidTNC;

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
      <Head>
        <title>UNI5G Postpaid Terms & Conditions | UNI5G</title>
        <meta name="description" content="Official Terms & Conditions for UNI5G Postpaid plans, campaigns and mobile services." />
      </Head>

      <header className="relative bg-gradient-to-br from-[#1E2756] via-[#D81B60] to-[#FF7A00] text-white py-20 md:py-28 relative overflow-hidden shadow-2xl">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Smartphone className="w-80 h-80 text-white rotate-12" />
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-5 pointer-events-none">
          <FileText className="w-64 h-64 text-white -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <Link 
            href="/postpaid" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="font-bold tracking-widest uppercase text-sm">Back to Postpaid Plans</span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
            UNI5G POSTPAID <br/> TERMS & <br/> CONDITIONS
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-medium max-w-2xl leading-relaxed">
            Official agreements, legislation, and specific terms for your mobile experience.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-16">
        {/* Tab Switcher */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex bg-gray-100/80 p-1.5 rounded-2xl backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("new")}
              className={`flex-1 py-4 px-6 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-500 ${
                activeTab === "new"
                  ? "bg-white text-[#D81B60] shadow-lg ring-1 ring-black/5"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              New UNI5G Postpaid plans
            </button>
            <button
              onClick={() => setActiveTab("other")}
              className={`flex-1 py-4 px-6 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-500 ${
                activeTab === "other"
                  ? "bg-white text-[#D81B60] shadow-lg ring-1 ring-black/5"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Other Postpaid Plans
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {currentItems.map((item, index) => (
            <div 
              key={`${activeTab}-${index}`}
              className="bg-white rounded-3xl border border-gray-100 p-6 flex items-center justify-between hover:border-[#D81B60]/30 transition-all duration-300 group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-[#D81B60]/5"
            >
              <div className="flex items-center gap-5 mr-4 overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D81B60] transition-colors duration-500">
                  <FileText className="w-6 h-6 text-[#D81B60] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-sm md:text-base font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-[#D81B60] transition-colors truncate">
                  {item.title}
                </h3>
              </div>

              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E2756] text-white font-black px-6 py-3 rounded-2xl hover:bg-[#D81B60] transition-all duration-300 flex items-center gap-2 flex-shrink-0 group/btn"
              >
                <span>VIEW</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 -ml-2 group-hover/btn:ml-0 transition-all duration-300" />
              </a>
            </div>
          ))}
        </div>

        
      </main>

      

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
