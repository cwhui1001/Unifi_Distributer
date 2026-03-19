import React from "react";
import Head from "next/head";
import { CheckCircle2, ArrowRight, Smartphone, Wifi, PlayCircle } from "lucide-react";

export default function PostpaidPage() {
  const plans = [
    {
      name: "UNI5G Postpaid 39",
      data: "30GB",
      price: "RM39",
      period: "/month",
      features: [
        "30GB 5G/4G Data",
        "Unlimited Calls",
        "10GB Hotspot Data",
        "No Contract"
      ],
      popular: false,
    },
    {
      name: "UNI5G Postpaid 69",
      data: "60GB",
      price: "RM69",
      period: "/month",
      features: [
        "60GB 5G/4G Data",
        "Unlimited Calls",
        "Free 5G Smartphone on 24-month contract",
        "Unlimited Hotspot Data"
      ],
      popular: true,
    },
    {
      name: "UNI5G Postpaid 99",
      data: "Unlimited",
      price: "RM99",
      period: "/month",
      features: [
        "Unlimited 5G/4G Data",
        "Unlimited Calls",
        "Free Premium 5G Smartphone",
        "Unlimited Hotspot Data",
        "Free Roaming Pass"
      ],
      popular: false,
    }
  ];

  return (
    <>
      <Head>
        <title>Mobile Postpaid | UNI5G</title>
      </Head>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8C1B70] via-[#D81B60] to-[#FF7A00] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-1/2 left-3/4 -translate-y-1/2 p-16 opacity-20 pointer-events-none mix-blend-overlay">
          <Smartphone className="w-[500px] h-[500px] text-white rotate-12" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white font-semibold mb-6 shadow-xl backdrop-blur-md">
              <span className="animate-pulse w-2 h-2 rounded-full bg-green-400"></span>
              <span>5G Network NOW LIVE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
              Unlock the Magic of <span className="text-yellow-300">UNI5G</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-xl text-shadow">
              Experience ultra-fast downloads, zero latency gaming, and crystal-clear calls with Malaysia's most accessible 5G postpaid plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#D81B60] hover:bg-gray-100 px-8 py-4 rounded-full font-extrabold text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all flex items-center justify-center gap-2 group">
                Switch to UNI5G
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#D81B60] mb-4">Unbeatable Value Postpaid</h2>
            <p className="text-lg text-gray-600">No hidden limits, no confusing tiers. Just pure 5G performance perfectly sized for your lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular ? 'ring-4 ring-[#D81B60] scale-105 md:z-10 relative' : 'border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#8C1B70] to-[#D81B60] text-white text-center py-2.5 font-bold text-sm tracking-widest uppercase">
                    Best Value Deal
                  </div>
                )}
                
                <div className="p-8 pb-8 flex-1 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-gray-500 mb-6">{plan.name}</h3>
                  <div className="mb-2 w-full">
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D81B60] to-[#FF7A00]">
                      {plan.data}
                    </div>
                    {plan.data !== 'Unlimited' && <div className="text-lg font-bold text-gray-400 -mt-1">High-Speed Data</div>}
                  </div>
                  
                  <div className="flex items-end justify-center mb-8 h-16">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 font-medium mb-1.5 ml-1">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-10 w-full text-left flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-pink-50/50 p-3 rounded-xl border border-pink-100/50">
                        <CheckCircle2 className="w-5 h-5 text-[#D81B60] shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#D81B60] to-[#FF7A00] hover:from-[#a01347] hover:to-[#e06b00] text-white shadow-xl shadow-pink-500/30' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell Banner */}
      <section className="bg-white py-16 text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#005B9F] mb-6">Want Fibre + Mobile Together?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Bundle Unifi Home Fibre with UNI5G Postpaid and unlock exclusive savings and additional perks every month.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-4 bg-blue-50 px-6 py-4 rounded-2xl">
              <Wifi className="w-8 h-8 text-[#005B9F]" />
              <div className="text-left">
                <div className="font-bold text-gray-900">Unifi Fibre</div>
                <div className="text-sm text-gray-500">From 100Mbps</div>
              </div>
            </div>
            <div className="text-[#005B9F] font-black text-2xl">+</div>
            <div className="flex items-center gap-4 bg-pink-50 px-6 py-4 rounded-2xl">
              <Smartphone className="w-8 h-8 text-[#D81B60]" />
              <div className="text-left">
                <div className="font-bold text-gray-900">UNI5G Postpaid</div>
                <div className="text-sm text-gray-500">Unlimited Data</div>
              </div>
            </div>
          </div>
          <button className="mt-10 bg-transparent border-2 border-[#005B9F] text-[#005B9F] hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-lg transition-colors inline-block">
            Explore All-In-One Plans
          </button>
        </div>
      </section>
    </>
  );
}
