import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Smartphone, FileText, ExternalLink, HelpCircle } from "lucide-react";

const NEW_UNI5G_PLANS = [
  { title: "UNI5G POSTPAID NETFLIX BUNDLE", url: "/tncfaq/postpaid/faq/FAQ-UNI5G-Postpaid-Netflix-Bundle.pdf" },
  { title: "POSTPAID STREAMING APPS ADD ON", url: "/tncfaq/postpaid/faq/FAQ_Postpaid-Streaming-Apps-Add-On.pdf" },
  { title: "KONGSI RAYA ONLINE EXCLUSIVE CAMPAIGN", url: "/tncfaq/postpaid/faq/FAQ-Kongsi-Raya-Online-Campaign.pdf" },
  { title: "GENERAL FAQ UNI5G INDIVIDUAL AND FAMILY PLAN", url: "/tncfaq/postpaid/faq/GENERAL-FAQ-UNI5G-INDIVIDUAL-and-FAMILY-PLAN.pdf" },
  { title: "NEW UNI5G INDIVIDUAL & FAMILY EXCLUSIVE LAUNCH PROMO", url: "/tncfaq/postpaid/faq/NEW-UNI5G-INDIVIDUAL-and-FAMILY_EXCLUSIVE-LAUNCH-PROMO_V2.0_29022024_extend.pdf" },
  { title: "SWITCH TO UNIFI MOBILE", url: "/tncfaq/postpaid/faq/FAQ-for-switch-to-Unifi_290124.pdf" },
  { title: "200GB DATA PASS", url: "/tncfaq/postpaid/faq/FAQ_200GB-5G-Monthly-Data-Pass.pdf" },
  { title: "Unifi Mobile POSTPAID USSD", url: "/tncfaq/postpaid/faq/FAQ-POSTPAID-USSD.pdf" },
  { title: "TRY ME PLAN CAMPAIGN", url: "/tncfaq/postpaid/faq/FAQ-Try-Me-2.0-Plan.pdf" },
  { title: "NEW UNI5G INDIVIDUAL & FAMILY WITH DEVICE BUNDLE AND EZOWN", url: "/tncfaq/postpaid/faq/UNI5G-INDIVIDUAL-FAMILY-DEVICE-BUNDLE.pdf" },
  { title: "UNI5G POSTPAID FREE 5G PHONES CAMPAIGN", url: "/tncfaq/postpaid/faq/UNI5G-Postpaid-Free-5G-Phones-Campaign_FAQ.pdf" },
  { title: "Pay with unifi Direct carrier billing", url: "/tncfaq/postpaid/faq/FAQ-for-unifi-Mobile-Postpaid-Payment-with-DCB.pdf" },
  { title: "INSENTIF REBAT RAHMAH - FREE 8GB 4G/5G DATA", url: "/tncfaq/postpaid/faq/FAQ_INSENTIF-REBAT-RAHMAH_FREE-8GB-DATA.pdf" },
  { title: "UNIFI MOBILE PENJAWAT AWAM 2025 CAMPAIGN", url: "/tncfaq/postpaid/faq/FAQ-Unifi-Mobile-Penjawat-Awam-2025-Campaign.pdf" },
  { title: "UNIFI MOBILE AND MAYBANK 5G SMARTPHONE 2025 CAMPAIGN", url: "/tncfaq/postpaid/faq/FAQ_UNIFI-MOBILE-POSTPAID-MAYBANK-CAMPAIGN-2025.pdf" },
  { title: "Samsung galaxy s26 series pre order", url: "/tncfaq/postpaid/faq/Samsung-S-Series-Pre-Order_FAQ.pdf" },
];

const OTHER_POSTPAID_PLANS = [
  { title: "UNI5G POSTPAID PLANS", url: "/tncfaq/postpaid/faq/UNI5G-Postpaid-Plans_FAQ.pdf" },
  { title: "FREE UNLIMITED 5G DATA TRIAL", url: "/tncfaq/postpaid/faq/FAQ-for-FREE-Unlimited-5G-Data-Trial_Postpaid_06032023.pdf" },
  { title: "PRODUCT FAQ FOR UNIFI MOBILE 99 PLAN", url: "/tncfaq/postpaid/faq/FAQ_unifi-Mobile-99_28092022.pdf" },
  { title: "PRODUCT FAQ FOR UNIFI MOBILE VALUE PLAN (59 PLAN,39 PLAN, 29 PLAN & 19 PLAN)", url: "/tncfaq/postpaid/faq/FAQ-unifi-Mobile-59-39-29-and-19_28092022.pdf" },
  { title: "UNIFI MOBILE 99 PROMO WITH DEVICE", url: "/tncfaq/postpaid/faq/FAQ-unifi-Mobile-99-Promo-with-Device_New-devices_11th-Aug-2022.pdf" },
  { title: "BILL & PAYMENT", url: "/tncfaq/postpaid/faq/FAQ-Bill-Payment_Payment-Channel-2022.pdf" },
  { title: "UNIFI MOBILE 99 AT RM59 WITH 12 MONTHS CONTRACT CAMPAIGN", url: "/tncfaq/postpaid/faq/FAQ-unifi-Mobile-99-at-RM59-with-12-months-contract_28092022.pdf" },
  { title: "BLOCKING OF SMS CONTAINING URL, PERSONAL DETAILS AND PHONE NUMBERS", url: "/tncfaq/postpaid/faq/FAQ_SMS_URL_Block.pdf" },
];

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
  const [activeTab, setActiveTab] = useState<"new" | "other">("new");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const currentPlans = activeTab === "new" ? NEW_UNI5G_PLANS : OTHER_POSTPAID_PLANS;

  return (
    <div className="min-h-screen bg-[#FDFEFE] flex flex-col font-sans">
      <Head>
        <title>UNIFI POSTPAID FAQ | Quick Answers to Your Queries</title>
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1E2756] via-[#D81B60] to-[#FF7A00] text-white py-20 md:py-28 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Smartphone className="w-80 h-80 text-white rotate-12" />
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-5 pointer-events-none">
          <FileText className="w-64 h-64 text-white -rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <Link href="/postpaid" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="font-bold tracking-widest uppercase text-sm">Back to Postpaid Plans</span>
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
            UNIFI POSTPAID <br/> FREQUENTLY ASKED <br/> QUESTIONS
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-medium max-w-2xl leading-relaxed">
            Quick answers to your Unifi postpaid queries. Access detailed guides and official documentation.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-16">
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

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {currentPlans.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl border border-gray-100 p-6 flex items-center justify-between hover:border-[#D81B60]/30 transition-all duration-300 group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-[#D81B60]/5"
            >
              <div className="flex items-center gap-5 mr-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D81B60] transition-colors duration-500">
                  <FileText className="w-6 h-6 text-[#D81B60] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-base md:text-lg font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-[#D81B60] transition-colors">
                  {item.title}
                </h3>
              </div>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1E2756] text-white font-black px-6 py-3 rounded-2xl hover:bg-[#D81B60] transition-all duration-300 flex items-center gap-2 flex-shrink-0 group/btn"
              >
                VIEW
                <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 -ml-2 group-hover/btn:ml-0 transition-all duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

