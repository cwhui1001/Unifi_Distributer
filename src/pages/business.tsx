import React from "react";
import Head from "next/head";
import { CheckCircle2, ArrowRight, Briefcase, Globe, HeadphonesIcon, TrendingUp } from "lucide-react";

export default function BusinessPage() {
  const plans = [
    {
      speed: "100Mbps",
      price: "RM139",
      period: "/month",
      features: [
        "Dynamic IP",
        "Free Business WiFi 6 Router",
        "Business Voice Service (VDSL)",
        "Priority Customer Support"
      ],
      popular: false,
    },
    {
      speed: "300Mbps",
      price: "RM249",
      period: "/month",
      features: [
        "Fixed IP Available",
        "Free Business WiFi 6 Router",
        "Advanced Security Endpoint",
        "24/7 Premium Support SLA"
      ],
      popular: true,
    },
    {
      speed: "500Mbps",
      price: "RM299",
      period: "/month",
      features: [
        "Fixed IP Available",
        "Enterprise-Grade Mesh WiFi",
        "Cloud Storage Included",
        "Dedicated Account Manager"
      ],
      popular: false,
    },
    {
      speed: "1Gbps",
      price: "RM399",
      period: "/month",
      features: [
        "Multiple Fixed IPs",
        "2x Enterprise Mesh WiFi",
        "Comprehensive Cybersecurity",
        "Highest Support Priority SLA"
      ],
      popular: false,
    }
  ];

  return (
    <>
      <Head>
        <title>Business Broadband | unifi Fibre</title>
      </Head>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-[#005B9F] to-gray-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-10 p-16 opacity-10 pointer-events-none">
          <Briefcase className="w-96 h-96 text-white rotate-12" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-100 font-semibold mb-6 shadow-sm backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-[#FF7A00]" />
              <span>For Your Business</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Empower Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-yellow-400">Enterprise</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium leading-relaxed">
              Accelerate your business growth with robust, reliable, and secure enterprise-grade fibre connections designed for modern workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF7A00] hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,122,0,0.4)] hover:shadow-[0_0_30px_rgba(255,122,0,0.6)] transition-all flex items-center justify-center gap-2 group">
                Check Business Coverage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-colors flex items-center justify-center">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">High-Performance Business Plans</h2>
            <p className="text-lg text-gray-600">Elevate productivity with uncompromised connectivity tailored to businesses of all sizes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`flex flex-col rounded-3xl overflow-hidden bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular ? 'ring-4 ring-[#FF7A00] scale-105 lg:z-10 relative' : 'border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="bg-[#FF7A00] text-white text-center py-2 font-bold text-sm tracking-wider uppercase">
                    Recommended for SMEs
                  </div>
                )}
                
                <div className="p-8 pb-6 bg-gradient-to-b from-gray-50 flex-1 flex flex-col">
                  <h3 className="text-4xl font-black text-gray-900 mb-2">{plan.speed}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-3xl font-extrabold text-[#005B9F]">{plan.price}</span>
                    <span className="text-gray-500 font-medium mb-1 ml-1">{plan.period}</span>
                  </div>
                  
                  <div className="w-full h-px bg-gray-200 mb-6"></div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-bold text-lg transition-colors border-2 ${
                    plan.popular 
                      ? 'bg-[#005B9F] border-[#005B9F] hover:bg-blue-800 text-white shadow-lg' 
                      : 'bg-transparent border-[#005B9F] text-[#005B9F] hover:bg-blue-50'
                  }`}>
                    Register Interest
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-[#FF7A00]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Routing</h3>
              <p className="text-gray-400">Optimized routing for international tools: Microsoft 365, Google Workspace, AWS, and more.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-6">
                <HeadphonesIcon className="w-8 h-8 text-[#FF7A00]" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Priority Support</h3>
              <p className="text-gray-400">Dedicated B2B customer support line with strict SLAs to keep your business running smoothly.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#FF7A00]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
              <p className="text-gray-400">Grow seamlessly. Easily upgrade your bandwidth or add static IP addresses as your team expands.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
