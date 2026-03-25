import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Search, HelpCircle } from "lucide-react";


const CAMPAIGN_FAQS = [
  {
    title: "Unifi Home Free 3 Months Prime Promo Campaign FAQ",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/FAQ%20Broadband%20With%20Waiver%20Campaign%202025%20V2.pdf"
  },
  {
    title: "KONGSI RAYA ONLINE EXCLUSIVE CAMPAIGN",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/FAQ-Kongsi-Raya-Online-Campaign.pdf"
  },
  {
    title: "Unifi UniVerse Campaign FAQ",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/FAQ-Universe-Campaign-Q2_2025.pdf"
  },
  {
    title: "Upgrading Your Existing Plans To New Platform Plans FAQ",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/Unifi_Universe_Campaign_FAQ.pdf"
  },
  {
    title: "General FAQ for unifi Home",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/General-FAQ-unifi-Home-Plan-updated-August-2023.pdf"
  },
  {
    title: "UNIFI TV PACKS FAQ",
    link: "https://unifi.com.my/tv/faq/tv-packs"
  },
  {
    title: "STREAMING APP (OTT) SUBSCRIPTION AND ACTIVATION FAQ",
    link: "https://unifi.com.my/tv/faq/streaming-apps"
  },
  {
    title: "Unifi Home bill date realignment FAQ",
    link: "https://unifi.com.my/sites/default/files/page/assets/pdf/fibre/Bill-Date-(Bill-Period)-Realignment-FAQ-14January-2022.pdf"
  },
  {
    title: "UNIFI EZOWN FOR HOME SMART DEVICE FAQ",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/FAQ.Smart.Device.2025.EzOwn.New.and.Existing._01022026.pdf"
  },
  {
    title: "TM Wi-Fi 6 Combo Box FAQ",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/FAQ-Wi-Fi-6-Combo-Box.pdf"
  },
  {
    title: "Mesh Wi-Fi FAQ",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/FAQ-Mesh-Wi-Fi-2025.pdf"
  },
  {
    title: "On Site Support and Customer Charging Proposition FAQ",
    link: "https://unifi.com.my/sites/default/files/page/assets/pdf/fibre/FAQ%20CCP%20and%20OSS%20ver2.pdf"
  },
  {
    title: "SMART HOME FAQ",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/unifismarthome/Smart_Home_product-FAQ.pdf"
  },
  {
    title: "UNIFI 1GBPS AND 2GBPS FAQ",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/FAQ-for-basic-1Gbps-2Gbps.pdf"
  },
  {
    title: "DEVICE FIESTA UNIFI HOME PLUS",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/FAQ-Home-Broadband-Plus-Campaign.pdf"
  },
  {
    title: "unifi cloud gaming",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/Blacknut-Cloud-Gaming-FAQ.pdf"
  },
  {
    title: "unifi smarthome campaign promo",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/unifismarthome/Unifi-smart-home-campaign-promo-faq.pdf"
  },
  {
    title: "5G Wireless Backup for Consumers",
    link: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/wireless/FAQ-5G-Wireless-Backup.pdf"
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

      <header className="relative bg-gradient-to-br from-[#FF5000] via-[#FF7A00] to-[#1800E7] text-white overflow-hidden py-10 md:py-15">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <nav className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-white/90 hover:text-white group transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span className="text-sm font-bold tracking-widest uppercase">Back to Plans</span>
            </Link>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight uppercase animate-fade-in-up">
              Unifi Home <br className="hidden md:block" />
              Broadband FAQ
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Everything you need to know about Unifi Home Broadband. Find answers to common questions about installation, billing, and technical support.
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        

        <div className="space-y-6">
          
          <div className="grid grid-cols-1 gap-4">
            {CAMPAIGN_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-orange-200 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight group-hover:text-[#FF7A00] transition-colors leading-tight">
                    {faq.title}
                  </h3>
                </div>
                <a 
                  href={faq.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-[#FF7A00] hover:text-white transition-all duration-300 min-w-[120px]"
                >
                  VIEW
                </a>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}
