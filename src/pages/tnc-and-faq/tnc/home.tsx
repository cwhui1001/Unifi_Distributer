import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, FileText, ChevronRight, ExternalLink } from "lucide-react";

const tncItems = [
  {
    title: "Unifi Home Free 3 Months Prime Promo Campaign T&C",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/TnC%20Broadband%20With%20Waiver%20Campaign%202025%20V2.pdf",
  },
  {
    title: "Unifi UniVerse Campaign T&C",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/TC-UniVERSE-Campaign.pdf",
  },
  {
    title: "General T&C for unifi Home",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/General-TnC-unifi-Home.pdf",
  },
  {
    title: "UNIFI TV PACK(S) SUBSCRIPTION T&C",
    url: "https://unifi.com.my/sites/default/files/page/assets/documents/unifi-tv/GENERAL%20TERMS%20AND%20CONDITIONS%20FOR%20Unifi%20TV%20PACKS%20SUBSCRIPTION%20version%204.0%20pslsip%20revision%2022.9.2023.pdf",
  },
  {
    title: "UNIFI TV SPORTS PACK, KIDS PACK, MOVIES PACK AND FAMILY PACK T&C",
    url: "https://unifi.com.my/sites/default/files/page/assets/documents/unifi-tv/SPECIFIC%20TERMS%20AND%20CONDITIONS%20FOR%20UNIFI%20TV%20SPORTS%20PACK%20UNIFI%20TV%20KIDS%20PACK%20UNIFI%20TV%20MOVIES%20PACK%20%20UNIFI%20TV%20FAMILY%20PACK%20%20pslsip%20revised%2027.9.2023%20clean.pdf",
  },
  {
    title: "Unifi Over-The-Top (OTT)/ Streaming App Subscription T&C",
    url: "https://unifi.com.my/sites/default/files/page/assets/documents/unifi-tv/General%20TC%20for%20Streaming%20App%20revised%20pslsip%2029.9.2023%20V3.pdf",
  },
  {
    title: "24 hours Restoration for unifi Home T&C",
    url: "https://unifi.com.my/sites/default/files/page/assets/pdf/fibre/24Hours-Restoration-Guarantee-For-Unifi-Service-Terms-%26-Conditions-Ver-1.2-7December-2021.pdf",
  },
  {
    title: "UNIFI EZOWN FOR HOME SMART DEVICE T&C",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/Terms-Conditions-Smart-Device-2025-EzOwn.pdf",
  },
  {
    title: "UNIFI 1GBPS AND 2GBPS T&C",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/TC-for-Unifi-2Gbps-1Gbps-Plan.pdf",
  },
  {
    title: "SMART HOME T&C",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/unifismarthome/UNIFI.SMART.HOME.TC.product.pdf",
  },
  {
    title: "Mesh wi-fi T&C",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/TnC%20Mesh%20WiFi%202025.pdf",
  },
  {
    title: "unifi cloud gaming",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/Unifi_Blacknut_Cloud_Gaming_Terms_and_Conditions.pdf",
  },
  {
    title: "DEVICE FIESTA UNIFI HOME PLUS",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/TnCs-Unifi-Home-Plus-Campaign.pdf",
  },
  {
    title: "unifi smarthome campaign promo",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/unifismarthome/UNIFI.SMART.HOME.TC.campaign.pdf",
  },
  {
    title: "HOMELINE (TELEPHONE) T&C",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/Homeline-TnC.pdf",
  },
  {
    title: "WIRELESS HOME PHONE (WHP) ON LTE NETWORK T&C",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/TC-for-wireless-home.pdf",
  },
  {
    title: "5G Wireless Backup for Consumers",
    url: "https://unifi.com.my/sites/default/files/html/List-FAQ/Home/wireless/5G-Wireless-Backup-T%26C.pdf",
  },
];

export default function HomeTNC() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Head>
        <title>Terms & Conditions | Unifi Home</title>
        <meta name="description" content="View the full Terms & Conditions for Unifi Home Fibre Broadband plans and campaigns." />
      </Head>

      <header className="relative bg-gradient-to-br from-[#FF5000] via-[#FF7A00] to-[#1800E7] text-white overflow-hidden py-12 md:py-20 flex-shrink-0">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <nav className="mb-10">
            <Link 
              href="/" 
              className="inline-flex items-center text-white/90 hover:text-white group transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
            </Link>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight uppercase animate-fade-in-up">
              Unifi Home <br className="hidden md:block" />
              Terms & Conditions
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Essential information and legal terms for our broadband services.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-16">
        <div className="grid gap-4">
          {tncItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"
              style={{ 
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 50}ms`,
                opacity: 0
              }}
            >
              <div className="flex items-center gap-5 flex-1">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 text-[#FF7A00]">
                  <FileText className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800 leading-tight group-hover:text-[#FF7A00] transition-colors duration-300">
                  {item.title}
                </h2>
              </div>
              
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#FF7A00] hover:bg-[#1800E7] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-orange-100 hover:shadow-blue-200 group/btn"
              >
                <span>View Document</span>
                <ExternalLink className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
             <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#FF7A00] font-bold hover:gap-4 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Unifi Home</span>
            </Link>
        </div>
      </main>

      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} TM Technology Services Sdn Bhd. All rights reserved.
          </p>
        </div>
      </footer>

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

