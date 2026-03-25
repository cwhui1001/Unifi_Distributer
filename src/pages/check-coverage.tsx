import React from "react";
import Head from "next/head";
import CoverageForm from "@/components/CoverageForm";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function CheckCoveragePage() {
  return (
    <>
      <Head>
        <title>Check unifi Coverage | unifi Distributor</title>
        <meta name="description" content="Verify unifi fibre coverage in your area. Enter your address to check availability for high-speed home broadband." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 md:pb-48 overflow-hidden z-10 bg-[#FF7A00]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFA200] via-[#FF7A00] to-[#D64400]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-sm">
            Check Your <span className="text-blue-900/40">unifi</span> Coverage
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-bold max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Ready for a faster, more reliable internet connection? Fill in the details below, and we'll check the fibre availability at your exact location.
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[80px] md:h-[120px] text-gray-50 fill-current"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,211.52,110.14,264,97.16,289.43,62.38,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-20 -mt-20 md:-mt-32 px-4 pb-24">
        <CoverageForm />
      </section>
    </>
  );
}

// Dummy Search icon since I didn't import it in the mapping
function Search(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  );
}
