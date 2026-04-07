import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronDown, ChevronUp, Star, Gift, Zap, Smartphone, Globe, ShieldCheck, ArrowRight } from "lucide-react";

interface PlanFeature {
  icon?: string;
  text: string;
}

interface PlanAddon {
  title: string;
  items: string[];
}

interface PlanData {
  id: string;
  name: string;
  speed: string;
  data: string;
  dataPromo?: string;
  price: number;
  priceWithNetflix?: number;
  hotspot: string;
  calls: string;
  sms: string;
  contract: string;
  labels: string[];
  bannerImage?: string;
  netflixTitle?: string;
  netflixFeatures?: string[];
  sims?: string;
  addons?: {
    extraData: string;
    familyLines?: string;
    offers?: {
      title: string;
      items: string[];
      icon: "ticket" | "addon_data";
    }[];
  };
  buyNowUrl: string;
  buyNowWithNetflixUrl?: string;
}

export default function PostpaidPlans() {
  const [activeTab, setActiveTab] = useState<"individual" | "family">("individual");
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});
  const [expandedNetflix, setExpandedNetflix] = useState<{ [key: string]: boolean }>({});

  const individualPlans: PlanData[] = [
    {
      id: "postpaid_39",
      name: "UNI5G Postpaid 39",
      speed: "UNI5G Postpaid 39",
      data: "30GB (4G+5G) Data",
      dataPromo: "Free Upgrade 250GB (4G+5G) Data",
      price: 39,
      hotspot: "up to 30GB",
      calls: "Unlimited Calls",
      sms: "RM0.15 per SMS",
      contract: "No contract",
      labels: ["ONLINE EXCLUSIVE", "BEST VALUE"],
      bannerImage: "/images/postpaid/tng-voucher-promo.png",
      addons: {
        extraData: "10GB for RM10 / 50GB for RM45",
        offers: [
          {
            title: "Get 230GB data for only RM1",
            items: ["with 100GB 5G and 100GB 4G/5G data add-on"],
            icon: "addon_data"
          }
        ]
      },
      buyNowUrl: "https://estore.unifi.com.my/eshop/offer-detail/61"
    },
    {
      id: "postpaid_69",
      name: "UNI5G Postpaid 69",
      speed: "UNI5G Postpaid 69",
      data: "Unlimited 5G",
      dataPromo: "Free Upgrade 60GB (4G+5G) Data",
      price: 69,
      priceWithNetflix: 79,
      hotspot: "up to 60GB",
      calls: "Unlimited Calls",
      sms: "RM0.15 per SMS",
      contract: "No contract",
      labels: [],
      netflixTitle: "Netflix Basic",
      netflixFeatures: [
        "Unlimited ad-free movies, TV shows, and mobile games",
        "Download & watch on 1 supported device at a time",
        "Watch in 720p (HD)"
      ],
      addons: {
        extraData: "10GB for RM10 / 50GB for RM45",
        offers: [
          
        ]
      },
      buyNowUrl: "https://estore.unifi.com.my/eshop/offer-detail/62",
      buyNowWithNetflixUrl: "https://estore.unifi.com.my/eshop/offer-detail/11529"
    },
    {
      id: "postpaid_99",
      name: "UNI5G Postpaid 99",
      speed: "UNI5G Postpaid 99",
      data: "Unlimited 5G/4G",
      dataPromo: "Free Upgrade 100GB (4G+5G) Data",
      price: 99,
      priceWithNetflix: 100,
      hotspot: "up to 100GB",
      calls: "Unlimited Calls",
      sms: "RM0.15 per SMS",
      contract: "No contract",
      labels: [],
      netflixTitle: "Netflix Basic",
      netflixFeatures: [
        "Unlimited ad-free movies, TV shows, and mobile games",
        "Download & watch on 1 supported device at a time",
        "Watch in 720p (HD)"
      ],
      addons: {
        extraData: "10GB for RM10 / 50GB for RM45",
        offers: []
      },
      buyNowUrl: "https://estore.unifi.com.my/eshop/offer-detail/63",
      buyNowWithNetflixUrl: "https://estore.unifi.com.my/eshop/offer-detail/11530"
    }
  ];

  const familyPlans: PlanData[] = [
    {
      id: "family_129",
      name: "UNI5G Postpaid Family 129",
      speed: "UNI5G Postpaid Family 129",
      data: "Unlimited 5G/4G",
      dataPromo: "Free Upgrade 150GB (4G+5G) Data",
      price: 129,
      priceWithNetflix: 130,
      hotspot: "150GB limit for Principal and 30GB for each supplementary line",
      calls: "Unlimited Calls",
      sms: "RM0.15 per SMS",
      contract: "No contract",
      sims: "1 + 1 SIMs (1 Family Line)",
      labels: ["Limited Time Offer"],
      netflixTitle: "Netflix Basic",
      netflixFeatures: [
        "Unlimited ad-free movies, TV shows, and mobile games",
        "Download & watch on 1 supported device at a time",
        "Watch in 720p (HD)"
      ],
      addons: {
        extraData: "10GB for RM10 / 50GB for RM45",
        familyLines: "Max 5 Family Lines, add Family Line at RM39/Mth with 30GB/SIM",
        offers: []
      },
      buyNowUrl: "https://estore.unifi.com.my/eshop/offer-detail/64",
      buyNowWithNetflixUrl: "https://estore.unifi.com.my/eshop/offer-detail/11534"
    },
    {
      id: "family_159",
      name: "UNI5G Postpaid Family 159",
      speed: "UNI5G Postpaid Family 159",
      data: "Unlimited 5G/4G",
      dataPromo: "Free Upgrade 200GB (4G+5G) Data",
      price: 159,
      priceWithNetflix: 160,
      hotspot: "200GB limit for Principal and 30GB for each supplementary line",
      calls: "Unlimited Calls",
      sms: "RM0.15 per SMS",
      contract: "No contract",
      sims: "1 + 2 SIMs (2 Family Line)",
      labels: ["Limited Time Offer"],
      netflixTitle: "Netflix Basic",
      netflixFeatures: [
        "Unlimited ad-free movies, TV shows, and mobile games",
        "Download & watch on 1 supported device at a time",
        "Watch in 720p (HD)"
      ],
      addons: {
        extraData: "10GB for RM10 / 50GB for RM45",
        familyLines: "Max 5 Family Lines, add Family Line at RM39/Mth with 30GB/SIM",
        offers: []
      },
      buyNowUrl: "https://estore.unifi.com.my/eshop/offer-detail/65",
      buyNowWithNetflixUrl: "https://estore.unifi.com.my/eshop/offer-detail/11535"
    },
    {
      id: "family_189",
      name: "UNI5G Postpaid Family 189",
      speed: "UNI5G Postpaid Family 189",
      data: "Unlimited 5G/4G",
      dataPromo: "Free Upgrade 250GB (4G+5G) Data",
      price: 189,
      priceWithNetflix: 190,
      hotspot: "250GB limit for Principal and 30GB for each supplementary line",
      calls: "Unlimited Calls",
      sms: "RM0.15 per SMS",
      contract: "No contract",
      sims: "1 + 3 SIMs (3 Family Line)",
      labels: ["Limited Time Offer"],
      netflixTitle: "Netflix Basic",
      netflixFeatures: [
        "Unlimited ad-free movies, TV shows, and mobile games",
        "Download & watch on 1 supported device at a time",
        "Watch in 720p (HD)"
      ],
      addons: {
        extraData: "10GB for RM10 / 50GB for RM45",
        familyLines: "Max 5 Family Lines, add Family Line at RM39/Mth with 30GB/SIM",
        offers: []
      },
      buyNowUrl: "https://estore.unifi.com.my/eshop/offer-detail/66",
      buyNowWithNetflixUrl: "https://estore.unifi.com.my/eshop/offer-detail/11536"
    }
  ];

  const currentPlans = activeTab === "individual" ? individualPlans : familyPlans;

  const toggleNetflixExpansion = (planId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedNetflix(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const toggleOption = (planId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      {/* Tab Switcher */}
      <div className="max-w-7xl mx-auto px-4 mt-8 mb-12">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setActiveTab("individual")}
            className={`flex flex-col items-center justify-center px-8 py-3 rounded-full transition-all duration-300 min-w-[240px] ${
              activeTab === "individual"
                ? "bg-[#1800E7] text-white shadow-xl"
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
          >
            <span className="text-base font-bold">For Individuals</span>
            <span className={`text-[10px] ${activeTab === "individual" ? "text-blue-100" : "text-blue-400"}`}>
              Unlimited 5G, just for You
            </span>
          </button>

          <button
            onClick={() => setActiveTab("family")}
            className={`flex flex-col items-center justify-center px-8 py-3 rounded-full transition-all duration-300 min-w-[240px] ${
              activeTab === "family"
                ? "bg-[#1800E7] text-white shadow-xl"
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
          >
            <span className="text-base font-bold">For Family</span>
            <span className={`text-[10px] ${activeTab === "family" ? "text-blue-100" : "text-blue-400"}`}>
              Maximum value for your family
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 text-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-[1.25rem] flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 group pointer-events-auto ${
                plan.id === "postpaid_39"
                  ? "z-10 border-[3px] border-[#1800E7] shadow-[0_15px_40px_rgba(24,0,231,0.12)] hover:shadow-[0_25px_70px_rgba(24,0,231,0.22)]"
                  : "border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]"
              } ${
                (activeTab === "individual" && plan.id !== "postpaid_39") || activeTab === "family" ? "mt-[42px]" : ""
              }`}
            >
              {/* Header Slot Spacer - Ensures Tops Align */}
              <div className="w-full shrink-0 relative z-0 flex flex-col justify-end">
                {plan.id === "postpaid_39" && (
                  <div className="bg-[#1800E7] text-white text-center py-[10px] font-black text-[13px] tracking-widest uppercase w-full rounded-t-[1.1rem] relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)", backgroundSize: "20px 20px" }}></div>
                    <span className="relative z-10">BEST VALUE</span>
                  </div>
                )}
              </div>

              {/* Main White Body - Wrapping card content area */}
              <div className="relative flex-1 flex flex-col bg-white overflow-hidden w-full h-full">
                {/* Top Badges */}
                <div className="flex justify-between items-start w-full relative z-20">
                  <div className={`bg-orange-50 text-orange-600 text-[11px] font-bold px-4 py-[6px] rounded-br-[1rem] ${plan.id === "postpaid_39" ? '' : 'rounded-tl-[1.25rem]'}`}>
                    UNI5G Postpaid
                  </div>
                  {plan.id === "postpaid_39" && (
                    <div className="bg-[#FF6B01] text-white text-[11px] font-extrabold px-3 py-[6px] rounded-bl-[1rem] uppercase tracking-wider">
                      Online Exclusive
                    </div>
                  )}
                  {plan.labels.includes("Limited Time Offer") && (
                    <div className="bg-gradient-to-r from-[#FF7A00] to-[#1800E7] text-white text-[11px] font-extrabold px-3 py-[6px] rounded-bl-[1rem]">
                      Limited Time Offer
                    </div>
                  )}
                </div>

                <div className="p-8 pt-6 flex-1 flex flex-col">
                  {/* Plan Name & Speed */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">
                      {plan.name}
                    </h3>
                    <div className="text-gray-900 font-bold mt-1">
                      {plan.data.split(" (")[0]}
                    </div>
                    {plan.dataPromo && (
                      <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase">
                        Free Upgrade <span className="line-through">{plan.dataPromo.split("Upgrade ")[1]}</span>
                      </div>
                    )}
                  </div>

                  {/* What's included */}
                  <div className="mb-8">
                    <h4 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-tighter">What's included</h4>
                    <ul className="space-y-4">
                      {plan.sims && (
                        <li className="flex items-center gap-3 text-xs font-bold text-gray-600">
                          <div className="w-5 h-5 rounded-full bg-[#FFF5EF] flex items-center justify-center shrink-0">
                            <img src="/images/postpaid/circled_sim.svg" alt="SIM" className="w-3 h-3" />
                          </div>
                          {plan.sims}
                        </li>
                      )}
                      <li className="flex items-center gap-3 text-xs font-bold text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-[#FFF5EF] flex items-center justify-center shrink-0">
                          <img src="/images/postpaid/circled_no_contract.svg" alt="Contract" className="w-3 h-3" />
                        </div>
                        {plan.contract}
                      </li>
                      <li className="flex items-center gap-3 text-xs font-bold text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-[#FFF5EF] flex items-center justify-center shrink-0">
                          <img src="/images/postpaid/circled_phone.svg" alt="Calls" className="w-3 h-3" />
                        </div>
                        {plan.calls}
                      </li>
                      <li className="flex items-center gap-3 text-xs font-bold text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-[#FFF5EF] flex items-center justify-center shrink-0">
                          <img src="/images/postpaid/circled_sms.svg" alt="SMS" className="w-3 h-3" />
                        </div>
                        {plan.sms}
                      </li>
                      <li className="flex items-center gap-3 text-xs font-bold text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-[#FFF5EF] flex items-center justify-center shrink-0">
                          <img src="/images/postpaid/circled_hotspot.svg" alt="Hotspot" className="w-3 h-3" />
                        </div>
                        Hotspot available ({plan.hotspot})
                      </li>
                    </ul>
                  </div>

                  {/* Optional Bundle */}
                  {plan.netflixTitle && (
                    <div className="mb-8">
                      <h4 className="text-sm font-black text-gray-900 mb-3 uppercase tracking-tighter">Optional Bundle:</h4>
                      <div 
                        className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${selectedOptions[plan.id] ? "border-blue-300 ring-1 ring-blue-100" : ""}`}
                      >
                        {/* Header Row */}
                        <div 
                          onClick={() => toggleOption(plan.id)}
                          className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50/50"
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedOptions[plan.id] ? "bg-[#1800E7] border-[#1800E7]" : "bg-white border-gray-300"}`}>
                            {selectedOptions[plan.id] && <div className="text-white text-[12px] font-bold">✓</div>}
                          </div>
                          <div className="h-8 w-[1px] bg-gray-200 ml-1"></div>
                          <img 
                            src="/images/postpaid/netflix-logo.png" 
                            alt="Netflix" 
                            className="h-7 w-auto" 
                          />
                          <span className="font-black text-gray-800 text-[13px]">{plan.netflixTitle}</span>
                          <div 
                            onClick={(e) => toggleNetflixExpansion(plan.id, e)}
                            className="ml-auto p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
                          >
                            {expandedNetflix[plan.id] ? (
                              <ChevronUp className="w-4 h-4 text-[#FF6B01]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#FF6B01]" />
                            )}
                          </div>
                        </div>

                        {/* Details Column */}
                        {expandedNetflix[plan.id] && (
                          <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50/30">
                            <div className="font-black text-gray-900 text-sm mb-4">Netflix Basic</div>
                            <ul className="space-y-4">
                              {plan.netflixFeatures?.map((feature, idx) => (
                                <li key={idx} className="flex gap-3">
                                  <CheckCircle2 className="w-4 h-4 text-[#FF6B01] shrink-0 mt-0.5" />
                                  <span className="text-[11px] font-bold text-gray-600 leading-tight">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Pricing Area */}
                  <div className="mt-8 mb-2">
                    <div className="flex items-end gap-[2px] mb-2 text-gray-900">
                      <span className="text-[1.5rem] font-black leading-none mb-[2px] tracking-tight">RM</span>
                      <span className="text-[3.5rem] font-black leading-none tracking-tighter text-[#FF6B01]">
                        {selectedOptions[plan.id] && plan.priceWithNetflix ? plan.priceWithNetflix : plan.price}
                      </span>
                      <span className="font-extrabold text-[12px] mb-[8px] ml-[2px]">/mth</span>
                    </div>

                    {/* Standardized CTA Button inspired by Home Plans */}
                    <div className="mt-6 mb-2 w-full flex items-stretch h-[50px] group/btn cursor-pointer pointer-events-auto transition-all duration-300">
                      <Link
                        href={`/apply-unifi-mobile?plan=${plan.name}`}
                        className={`flex-1 font-black text-[14px] tracking-widest text-white transition-all rounded-l-full flex justify-center items-center outline-none bg-[#1800E7] hover:bg-[#0C00B3] decoration-transparent`}
                      >
                        <span className="translate-x-3">BUY NOW</span>
                      </Link>
                      <div className="w-[4px] bg-white z-10 shrink-0"></div>
                      <div 
                        className="w-14 transition-all flex items-center justify-center shrink-0 bg-[#1800E7] group-hover/btn:bg-[#0C00B3]"
                        style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
                      >
                        <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[9px] border-transparent border-l-white ml-2 group-hover/btn:translate-x-1 transition-transform"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Add-ons Area with refined headers */}
              <div className="bg-gray-50/50 p-6 flex flex-col gap-4">
                {/* Add-on Extra Data Box */}
                <div className="rounded-[0.85rem] border border-gray-200 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col bg-white">
                  <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF5E00] text-white text-[12px] font-black px-4 py-2 uppercase tracking-wider">
                    Add-on Extra Data
                  </div>
                  <div className="p-3.5 flex items-center gap-3 text-[13px] font-bold text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                      {activeTab === 'family' ? (
                        <img src="/images/postpaid/circled_phone_vibrate.svg" alt="Add-on" className="w-3.5 h-3.5" />
                      ) : (
                        <img src="/images/postpaid/circled_hotspot.svg" alt="Hotspot" className="w-3.5 h-3.5" />
                      )}
                    </div>
                    {plan.addons?.extraData}
                  </div>
                </div>

                {/* Add-on Family Lines Box */}
                {plan.addons?.familyLines && (
                  <div className="rounded-[0.85rem] border border-gray-200 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col bg-white">
                    <div className="bg-gradient-to-r from-[#1800E7] to-[#4A8DF8] text-white text-[12px] font-black px-4 py-2 uppercase tracking-wider">
                      Add-on Family Lines
                    </div>
                    <div className="p-3.5 flex items-center gap-3 text-[13px] font-bold text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <img src="/images/postpaid/circled_addon_family.svg" alt="Family" className="w-3.5 h-3.5" />
                      </div>
                      {plan.addons.familyLines}
                    </div>
                  </div>
                )}

                {/* Limited Time Offer Section inspired by Home Special Promo */}
                {plan.addons?.offers && plan.addons.offers.length > 0 && (
                  <div className="rounded-[0.85rem] border border-[#FF6B01]/30 overflow-hidden shadow-[0_4px_15px_rgba(255,107,1,0.05)] flex flex-col bg-white">
                    <div className="bg-gradient-to-r from-[#FF6B01] via-[#9D50E5] to-[#1800E7] text-white text-[13px] font-black px-4 py-2.5 uppercase tracking-wide">
                      Limited Time Special
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                      {plan.addons.offers.map((offer, idx) => (
                        <div key={idx} className="flex gap-4 items-start group/offer">
                          <div className="w-8 h-8 rounded-lg bg-[#FFF5EF] flex items-center justify-center shrink-0 transition-transform group-hover/offer:scale-110">
                            {offer.icon === 'ticket' ? <Gift className="w-4 h-4 text-[#FF6B01]" /> : <Zap className="w-4 h-4 text-[#FF6B01]" />}
                          </div>
                          <div className="flex flex-col">
                            {offer.title.includes("Voucher") ? (
                              <span className="bg-[#FF6B01] text-white text-[12px] font-black px-2 py-0.5 rounded-md w-fit mb-1.5 shadow-sm">{offer.title}</span>
                            ) : (
                              <span className="text-gray-900 text-[14px] font-black leading-tight mb-1">{offer.title}</span>
                            )}
                            {offer.items.map((item, i) => (
                              <p key={i} className="text-[12px] text-gray-500 font-semibold leading-snug">
                                {item.includes("promo code") ? (
                                  <>Enter <span className="text-[#1800E7] font-black">PROMO CODE {item.split("code ")[1].split(" on")[0]}</span> {item.split(item.split("code ")[1].split(" on")[0])[1]}</>
                                ) : item}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
