import React, { useRef, useState } from "react";
import Head from "next/head";
import { CheckCircle2, Zap, Home, ShieldCheck, ChevronDown, ChevronLeft, ChevronRight, ArrowUpDown, Router, Headset } from "lucide-react";
import Link from "next/link";
import HomeFAQ from "@/components/HomeFAQ";

export default function HomePage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [expandedPlans, setExpandedPlans] = useState<Record<number, boolean>>({
    0: true, 1: true, 2: true, 3: true, 4: true
  });

  const togglePlan = (index: number) => {
    setExpandedPlans(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const [expandedWinback, setExpandedWinback] = useState<Record<number, boolean>>({
    0: true, 1: true, 2: true, 3: true
  });

  const toggleWinback = (index: number) => {
    setExpandedWinback(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const [expandedAddons, setExpandedAddons] = useState<Record<string, boolean>>({});
  
  const toggleAddon = (planIndex: number, addonIndex: number) => {
    const key = `${planIndex}-${addonIndex}`;
    setExpandedAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({});
  
  const toggleSelectedAddon = (e: React.MouseEvent, planIndex: number, addonIndex: number) => {
    e.stopPropagation();
    const key = `${planIndex}-${addonIndex}`;
    setSelectedAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };


  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const winbackPlans = [
    {
      speedNum: "100", speedUnit: "Mbps",
      bestValue: false,
      description: "Great for small households and apartments with 2 to 4 users/devices.",
      promoImg: "/images/unifi_special_promo.png",
      deals: [
        { highlight: "Free", text: "6 Months WiFi" }
      ],
      features: [
        { title: "Unlimited Data", text: "Download speed up to 100mbps\nUpload speed up to 50mbps" },
        { title: "FREE WiFi 6 Combo Box Router", text: "" },
        { title: "Beyond Call Rate", text: "Mobile/All Fixed Line: 20sen/min" }
      ],
      price: "89",
      slashed: "RRP: RM99/mth",
      contract: "36-months contract"
    },
    {
      speedNum: "300", speedUnit: "Mbps",
      bestValue: false,
      description: "Optimal for Families, Home Offices and Townhouses with 4 to 6 users/devices.",
      promoImg: "/images/unifi_special_promo.png",
      deals: [
        { highlight: "Free", text: "6 Months WiFi (30-months contract)" },
        { highlight: "ADD-ON", text: "RM10/mth Get 43″ TV (36-months contract)" }
      ],
      features: [
        { title: "Unlimited Data", text: "Download speed up to 300mbps\nUpload speed up to 50mbps" },
        { title: "FREE WiFi 6 Combo Box Router", text: "" },
        { title: "Get 600 minutes to fixed & mobile", text: "" },
        { title: "Beyond Call Rate", text: "TM Fixed Line: FREE\nMobile/Other Fixed Line: 10sen/min" }
      ],
      price: "129",
      slashed: "RRP: RM139/mth",
      contract: ""
    },
    {
      speedNum: "500", speedUnit: "Mbps",
      bestValue: true,
      description: "Perfect for gamers and streamers in houses with 6 to 8 users/devices.",
      promoImg: "/images/unifi_special_promo.png",
      deals: [
        { highlight: "Free", text: "6 Months WiFi (30-months contract)" },
        { highlight: "ADD-ON", text: "RM10/mth Get 55″ TV (36-months contract)" },
        { highlight: "ADD-ON", text: "RM20/mth Get 65″ TV (36-months contract)" },
        { highlight: "ADD-ON", text: "RM10/mth Get iPad 11″ A16 WiFi 128GB (36-months contract)" }
      ],
      features: [
        { title: "Unlimited Data", text: "Download speed up to 500mbps\nUpload speed up to 100mbps" },
        { title: "FREE WiFi 6 Combo Box Router", text: "" },
        { title: "Get 600 minutes to fixed & mobile", text: "" },
        { title: "Beyond Call Rate", text: "TM Fixed Line: FREE\nMobile/Other Fixed Line: 10sen/min" }
      ],
      price: "149",
      slashed: "RRP: RM159/mth",
      contract: ""
    },
    {
      speedNum: "1", speedUnit: "Gbps",
      bestValue: false,
      description: "Lightning-Fast Speed for Power Users in Larger Homes with 8 to 10 users/devices.",
      promoImg: "/images/unifi_special_promo.png",
      deals: [
        { highlight: "Free", text: "6 Months WiFi (30-months contract)" },
        { highlight: "ADD-ON", text: "RM10/mth Get 65″ TV (36-months contract)" },
        { highlight: "ADD-ON", text: "RM20/mth Get 75″ TV (36-months contract)" }
      ],
      features: [
        { title: "Unlimited Data", text: "Download speed up to 1Gbps\nUpload speed up to 500mbps" },
        { title: "FREE WiFi 7 Combo Box Router", text: "" },
        { title: "Get 600 minutes to fixed & mobile", text: "" },
        { title: "Beyond Call Rate", text: "TM Fixed Line: FREE\nMobile/Other Fixed Line: 10sen/min" }
      ],
      price: "249",
      slashed: "",
      contract: ""
    }
  ];


  const plans = [
    {
      speed: "100 Mbps",
      label: "Unifi Home",
      bestSeller: false,
      has3MonthFree: true,
      description: "Great for small households and apartments with 2 to 4 users/devices.",
      included: ["100Mbps / 50Mbps", "Wi-Fi 6 Combo Box", "24 Hrs Service Guarantee"],
      addOns: ["Netflix Basic"],
      limitedOffer: "Limited Time: RM10 Off + 3 Months Free!",
      saveForever: "Save RM10/month forever",
      price: "89",
      slashedPrice: "RRP RM99/mth",
    },
    {
      speed: "300 Mbps",
      label: "Unifi Home",
      bestSeller: true,
      has3MonthFree: true,
      description: "Optimal for Families, Home Offices and Townhouses with 4 to 6 users/devices.",
      included: ["300Mbps / 50Mbps", "Wi-Fi 6 Combo Box", "24 Hrs Service Guarantee"],
      addOns: ["Netflix Basic", "Max Standard"],
      limitedOffer: "Limited Time: RM10 Off + 3 Months Free!",
      saveForever: "Save RM10/month forever",
      price: "129",
      slashedPrice: "RRP RM139/mth",
    },
    {
      speed: "500 Mbps",
      label: "Unifi Home",
      bestSeller: false,
      has3MonthFree: true,
      description: "Perfect for gamers and streamers in houses with 6 to 8 users/devices.",
      included: ["500Mbps / 100Mbps", "Wi-Fi 6 Combo Box", "24 Hrs Service Guarantee"],
      addOns: ["Netflix Standard"],
      limitedOffer: "Limited Time: RM10 Off + 3 Months Free!",
      saveForever: "Save RM10/month forever",
      price: "149",
      slashedPrice: "RRP RM159/mth",
    },
    {
      speed: "1 Gbps",
      label: "Unifi Home",
      bestSeller: false,
      has3MonthFree: false,
      description: "Lightning-Fast Speed for Power Users in Larger Homes with 8 to 10 users/devices.",
      included: ["1Gbps / 500Mbps", "Wi-Fi 7 Combo Box", "12 Business Hours Service Restoration", "Premium services"],
      addOns: ["Netflix Standard"],
      limitedOffer: "Save RM40",
      saveForever: null,
      price: "249",
      slashedPrice: "RRP RM289/mth",
    },
    {
      speed: "2 Gbps",
      label: "Unifi Home",
      bestSeller: false,
      has3MonthFree: false,
      description: "Ultimate Internet Experience for Large Households with 10+ users/devices.",
      included: ["2Gbps / 1Gbps", "Wi-Fi 7 Combo Box", "12 Business Hours Service Restoration", "Premium services"],
      addOns: ["Netflix Standard"],
      limitedOffer: null,
      saveForever: null,
      price: "319",
      slashedPrice: null,
    }
  ];

  return (
    <>
      <Head>
        <title>Home Broadband | unifi Fibre</title>
      </Head>
      
      {/* Hero Section */}
      <div className="w-full bg-white relative">
        <section 
          className="relative text-white pt-2 pb-40 overflow-hidden innerHeroBanner z-10"
        >
          {/* Vibrant Orange to Blue Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFA200] via-[#FF7A00] to-[#1800E7]"></div>
          
          {/* Swooping Wave at the bottom matching the Unifi style */}
          <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="relative block w-full h-[80px] md:h-[100px] text-white"
            >
              <path 
                d="M0,60 Q500,180 1200,0 L1200,120 L0,120 Z" 
                className="fill-current"
              ></path>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 container mt-10 mb-[-50px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Info Column */}
              <div className="info w-full md:w-3/5 lg:w-[55%]">
                <h1 className="title text-[2.75rem] md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-0 leading-[1.1] uppercase drop-shadow-sm text-balance">
                  GET FIBRE BROADBAND FOR LIGHTNING-FAST CONNECTIVITY
                </h1>
              </div>
              
              {/* Hero Image Column */}
              <div className="hero floating w-full md:w-2/5 lg:w-[45%] flex justify-center lg:justify-end mt-8 md:mt-0 animate-float">
                <img 
                  src="/images/banner-homefibre.png" 
                  className="img w-full max-w-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]" 
                  alt="A mother wearing earphones, sharing laughter with her daughter" 
                  width="400" 
                  height="261" 
                />
              </div>
            </div>
          </div>
        </section>

        
      </div>

      <div className="w-full bg-white pt-8 pb-4 relative z-20">
        {/* Customise Plan Text */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">
            CUSTOMISE YOUR UNIFI HOME BROADBAND PLAN
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-6xl mx-auto leading-relaxed font-medium">
            Create a broadband internet plan that fits your daily needs. Enjoy lightning-fast fibre broadband with seamless connectivity for streaming, gaming, and working from home. Choose from the best broadband plans in Malaysia for reliable, high-speed broadband across all your devices.
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <section className="py-8 bg-gray-50 relative">
        <div className="max-w-[1350px] mx-auto relative px-2 sm:px-6 lg:px-8">
          {/* WINBACK SPECIAL PROMO SECTION */}
          <div className="mb-10 px-4 sm:px-0">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.5rem] font-black tracking-tight leading-none uppercase">
                <span className="text-[#FF7A00]">Unifi </span>
                <span className="text-[#1800E7]">Winback Special Promo Plan</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] items-start">
              {winbackPlans.map((wp, index) => (
                <div 
                  key={index} 
                  className={`flex-none w-full h-auto flex flex-col transition-all duration-500 hover:-translate-y-2 relative group pointer-events-auto ${
                    wp.bestValue ? 'z-20' : 'hover:z-10'
                  }`}
                >
                  {/* Header Spacer for Top Alignment */}
                  <div className="w-full shrink-0 relative z-0 flex flex-col justify-end" style={{ height: '42px' }}>
                    {wp.bestValue && (
                      <div className="bg-[#FF7A00] text-white text-center py-[10px] font-black text-[13px] tracking-widest uppercase w-full rounded-t-[1.25rem] border-t-[3px] border-x-[3px] border-[#FF7A00] relative overflow-hidden h-full">
                        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)", backgroundSize: "20px 20px" }}></div>
                        <span className="relative z-10">BEST VALUE</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Main White Body */}
                  <div className={`relative flex flex-col bg-white overflow-hidden w-full h-auto transition-all duration-500 ${
                    wp.bestValue 
                      ? 'rounded-b-[1.25rem] border-b-[3px] border-x-[3px] border-[#FF7A00] shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_60px_rgba(255,122,0,0.2)]' 
                      : 'rounded-[1.25rem] border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]'
                  }`}>
                    
                    {/* Top Badges */}
                    <div className="flex justify-between items-start w-full">
                      <div className={`bg-orange-50 text-orange-600 text-[11px] font-bold px-4 py-[6px] rounded-br-[1rem] ${wp.bestValue ? '' : 'rounded-tl-[1.25rem]'}`}>
                        Unifi Home
                      </div>
                      <div className={`bg-gradient-to-r from-[#FF7A00] to-[#1800E7] text-white text-[11px] font-extrabold px-3 py-[6px] rounded-bl-[1rem] ${wp.bestValue ? '' : 'rounded-tr-[1.25rem]'}`}>
                        Winback Promo
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      {/* Header/Speed */}
                      <div 
                        className="flex justify-between items-center mt-2 mb-2 cursor-pointer group"
                        onClick={() => toggleWinback(index)}
                      >
                        <h3 className="text-[2rem] leading-none font-black text-black tracking-tight group-hover:text-orange-600 transition-colors uppercase select-none">
                          {wp.speedNum} {wp.speedUnit}
                        </h3>
                        <ChevronDown className={`w-5 h-5 text-[#FF7A00] stroke-[3] transition-transform duration-300 ${expandedWinback[index] ? 'rotate-180' : ''}`} />
                      </div>

                      <p className="text-gray-800 text-[14px] mb-6 leading-relaxed pr-4 font-medium min-h-[50px] w-[110%]">
                        {wp.description}
                      </p>
                      
                      <div className={`transition-all duration-300 overflow-hidden ${expandedWinback[index] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        {/* What's Included */}
                        <div className="mb-6 mt-0 flex flex-col gap-[12px] bg-[#F9F9F9] p-4 rounded-[1rem]">
                          <div className="text-[14px] font-extrabold text-black mb-[4px]">What's included</div>
                          {wp.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`flex w-[18px] items-center justify-center shrink-0 text-[#FF914D] mt-[2px]`}>
                                {idx === 0 && <ArrowUpDown className="w-[18px] h-[18px] stroke-[2.5]" />}
                                {idx === 1 && <Router className="w-[18px] h-[18px] stroke-[2.5]" />}
                                {idx === 2 && <Headset className="w-[18px] h-[18px] stroke-[2.5]" />}
                                {idx > 2 && <CheckCircle2 className="w-[18px] h-[18px] stroke-[2.5]" />}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px] font-semibold text-gray-800 leading-tight">{feature.title}</span>
                                {feature.text && <span className="text-[12px] text-gray-500 font-medium leading-[1.3] mt-1 whitespace-pre-line">{feature.text}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Promo Box identically styled as Add-ons box */}
                      {wp.deals.length > 0 && (
                        <div className="mb-4 rounded-[0.85rem] border border-gray-200 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col">
                          <div className="bg-gradient-to-r from-[#FF7A00] via-[#9D50E5] to-[#1800E7] text-white text-[16px] font-extrabold px-4 py-2.5">
                            Limited-Time Special
                          </div>
                          <div className="bg-white p-3 pt-3">
                            <div className="text-[14px] font-extrabold text-black mb-2.5">Choose ONE exclusive deal:</div>
                            <div className="flex flex-col gap-2.5">
                              {wp.deals.map((deal, dIdx) => (
                                <div key={dIdx} className="border border-gray-200 rounded-lg flex flex-col overflow-hidden transition-colors group hover:border-[#9D50E5] p-2 bg-white">
                                  <div className="flex items-center gap-3">
                                    
                                    <span className="text-[14px] font-bold text-gray-800 leading-tight w-[100%]">
                                      <span className="text-[#FF7A00] uppercase font-bold mr-1">{deal.highlight}</span>
                                      {deal.text}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className="text-[10px] text-gray-400 italic mt-3 font-medium">*Terms & Conditions Apply</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex-1"></div>

                      {/* Pricing */}
                      <div className="flex flex-col mt-4">
                        <div className="bg-[#FF6A00] text-white font-bold text-[11px] px-3 py-[3px] rounded-full inline-flex self-start mb-3 shadow-sm">
                          Winback Special
                        </div>
                        
                        <div className="flex items-end gap-[2px] mb-1">
                          <span className="text-[1.5rem] font-black text-[#1800E7] leading-none mb-[2px] tracking-tight">RM</span>
                          <span className="text-[3rem] font-black text-[#1800E7] leading-none tracking-tighter">
                            {wp.price}
                          </span>
                          <span className="text-black font-extrabold text-[12px] mb-[6px] ml-[2px]">/mth</span>
                          {wp.slashed && (
                            <span className="text-[#FF7A00] font-bold text-[11px] line-through ml-2 mb-[6px]">{wp.slashed.replace('RRP: ', '')}</span>
                          )}
                        </div>
                        
                        {wp.contract ? (
                          <div className="bg-[#EEF2FF] text-[#1800E7] font-extrabold text-[11px] px-3 py-1.5 rounded-[6px] inline-flex self-start mt-1 relative">
                            {wp.contract}
                          </div>
                        ) : (
                           <div className="h-[28px] mt-1"></div> 
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 mb-2 w-full flex items-stretch h-[46px] group cursor-pointer pointer-events-auto">
                        <Link 
                          href={`/apply-unifi-home?package=Unifi%20Winback%20Special%20Promo%20Plan&plan=${wp.speedNum}${wp.speedUnit}`} 
                          className={`flex-1 font-extrabold text-[13px] tracking-widest text-white transition-all rounded-l-full flex justify-center items-center outline-none ${
                            wp.bestValue ? 'bg-[#FF7A00] group-hover:bg-[#E05200]' : 'bg-[#1800E7] group-hover:bg-[#0C00B3]'
                          }`}
                        >
                          <span className="translate-x-3">SIGN UP NOW</span>
                        </Link>
                        <div className="w-[4px] bg-white z-10 shrink-0"></div>
                        <div 
                          className={`w-12 transition-all flex items-center justify-center shrink-0 ${
                            wp.bestValue ? 'bg-[#FF7A00] group-hover:bg-[#E05200]' : 'bg-[#1800E7] group-hover:bg-[#0C00B3]'
                          }`}
                          style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
                        ></div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-[1350px] mx-auto relative px-2 sm:px-6 lg:px-8">
          
          
           

          <div className="text-center mb-10">
              <h2 className="text-3xl md:text-[2.5rem] font-black tracking-tight leading-none uppercase">
                <span className="text-[#FF7A00]">Unifi </span>
                <span className="text-[#1800E7]">Home Plan</span>
              </h2>
            </div>

          <div className="relative w-full">
            {/* Slider Controls */}
            <button 
              onClick={scrollLeft}
              className="absolute left-2 lg:-left-6 top-[45%] -translate-y-1/2 z-30 bg-[#A688FD]/90 hover:bg-[#A688FD] text-white w-11 h-11 flex items-center justify-center rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-transform hover:scale-110 hidden md:flex"
            >
              <ChevronLeft className="w-8 h-8 stroke-white shrink-0 mr-0.5" strokeWidth={3} />
            </button>
            
            <button 
              onClick={scrollRight}
              className="absolute right-2 lg:-right-6 top-[45%] -translate-y-1/2 z-30 bg-[#351AE1]/90 hover:bg-[#351AE1] text-white w-11 h-11 flex items-center justify-center rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-transform hover:scale-110 hidden md:flex"
            >
              <ChevronRight className="w-8 h-8 stroke-white shrink-0 ml-0.5" strokeWidth={3} />
            </button>

          <div 
            ref={sliderRef}
            className="flex items-start overflow-x-auto snap-x snap-mandatory gap-[24px] pb-12 pt-8 px-4"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`flex-none w-[85vw] sm:w-[350px] snap-center h-auto flex flex-col transition-all duration-500 hover:-translate-y-2 relative group pointer-events-auto ${
                  plan.bestSeller ? 'z-10' : ''
                }`}
              >
                {/* Header Slot Spacer - Ensures Tops Align */}
                <div className="w-full shrink-0 relative z-0 flex flex-col justify-end" style={{ height: '42px' }}>
                  {plan.bestSeller && (
                    <div className="bg-[#FF7A00] text-white text-center py-[10px] font-black text-[13px] tracking-widest uppercase w-full rounded-t-[1.25rem] border-t-[3px] border-x-[3px] border-[#FF7A00] relative overflow-hidden h-full">
                      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)", backgroundSize: "20px 20px" }}></div>
                      <span className="relative z-10">BEST SELLER</span>
                    </div>
                  )}
                </div>
                
                {/* Main White Body */}
                <div className={`relative flex-1 flex flex-col bg-white overflow-hidden w-full h-full transition-all duration-500 ${
                  plan.bestSeller 
                    ? 'rounded-b-[1.25rem] border-b-[3px] border-x-[3px] border-[#FF7A00] shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_60px_rgba(255,122,0,0.2)]' 
                    : 'rounded-[1.25rem] border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]'
                }`}>
                  {/* Top Badges */}
                  <div className="flex justify-between items-start w-full">
                    <div className={`bg-orange-50 text-orange-600 text-[11px] font-bold px-4 py-[6px] rounded-br-[1rem] ${plan.bestSeller ? '' : 'rounded-tl-[1.25rem]'}`}>
                      {plan.label}
                    </div>
                    {plan.has3MonthFree && (
                      <div className={`bg-gradient-to-r from-[#FF7A00] to-[#1800E7] text-white text-[11px] font-extrabold px-3 py-[6px] rounded-bl-[1rem] ${plan.bestSeller ? '' : 'rounded-tr-[1.25rem]'}`}>
                        3 Month Free
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Header/Speed */}
                    <div 
                      className="flex justify-between items-center mt-2 mb-2 cursor-pointer group"
                      onClick={() => togglePlan(index)}
                    >
                      <h3 className="text-[2rem] leading-none font-black text-black tracking-tight group-hover:text-orange-600 transition-colors uppercase select-none">{plan.speed}</h3>
                      <ChevronDown className={`w-5 h-5 text-[#FF7A00] stroke-[3] transition-transform duration-300 ${expandedPlans[index] ? 'rotate-180' : ''}`} />
                    </div>

                    <p className="text-gray-800 text-[14px] mb-6 leading-relaxed pr-4 font-medium min-h-[50px]">
                        {plan.description}
                      </p>
                    
                    <div className={`transition-all duration-300 overflow-hidden ${expandedPlans[index] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      

                      {/* What's Included */}
                      <div className="mb-6 mt-0 flex flex-col gap-[12px]">
                        <div className="text-[14px] font-extrabold text-black mb-[4px]">What's included</div>
                        {plan.included.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`flex w-[18px] items-center justify-center shrink-0 ${plan.bestSeller ? 'text-[#4A8DF8]' : 'text-[#FF914D]'}`}>
                              {idx === 0 && <ArrowUpDown className="w-[18px] h-[18px] stroke-[2.5]" />}
                              {idx === 1 && <Router className="w-[18px] h-[18px] stroke-[2.5]" />}
                              {idx === 2 && <Headset className="w-[18px] h-[18px] stroke-[2.5]" />}
                              {idx > 2 && <CheckCircle2 className="w-[18px] h-[18px] stroke-[2.5]" />}
                            </div>
                            <span className="text-[14px] font-semibold text-gray-800 leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>

                      
                    </div>

                    {/* Add-Ons Box */}
                      {plan.addOns.length > 0 && (
                        <div className="mb-4 rounded-[0.85rem] border border-gray-200 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col">
                          <div className="bg-gradient-to-r from-[#FF7A00] via-[#9D50E5] to-[#1800E7] text-white text-[16px] font-extrabold px-4 py-2.5">
                            Get Add-Ons. Get a voucher.
                          </div>
                          <div className="bg-white p-3 pt-3">
                            <div className="text-[14px] font-extrabold text-black mb-2.5">Optional Bundle (Select One):</div>
                            <div className="flex flex-col gap-2.5">
                              {plan.addOns.map((addon, aIdx) => {
                                const key = `${index}-${aIdx}`;
                                const isExpanded = expandedAddons[key];
                                const isSelected = selectedAddons[key];
                                
                                return (
                                  <div key={aIdx} className="border border-gray-200 rounded-lg flex flex-col overflow-hidden transition-colors group hover:border-[#9D50E5]">
                                    <div 
                                      className="p-2 flex items-center justify-between cursor-pointer bg-white"
                                      onClick={() => toggleAddon(index, aIdx)}
                                    >
                                      <div className="flex items-center gap-3">
                                        <div 
                                          className={`w-[18px] h-[18px] border rounded-[4px] flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer ${
                                            isSelected ? 'bg-[#9D50E5] border-[#9D50E5]' : 'border-gray-300 group-hover:border-[#9D50E5]'
                                          }`}
                                          onClick={(e) => toggleSelectedAddon(e, index, aIdx)}
                                        >
                                          {isSelected && <CheckCircle2 className="w-3 h-3 text-white stroke-[4]" />}
                                        </div>
                                        <div className="w-[24px] h-[24px] bg-black flex items-center justify-center rounded-[5px] flex-shrink-0">
                                          {addon.includes('Netflix') ? <span className="text-[#E50914] font-black text-[14px]">N</span> : <span className="text-white font-black text-[8px] italic mt-[1px]">MAX</span>}
                                        </div>
                                        <span className="text-[14px] font-bold text-gray-800 leading-tight select-none">{addon}</span>
                                      </div>
                                      <ChevronDown className={`w-4 h-4 text-[#FF7A00] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                    </div>
                                    
                                    {/* Addon Details Description */}
                                    <div className={`transition-all duration-300 bg-white px-3.5 overflow-hidden ${
                                      isExpanded ? 'max-h-[350px] pb-3.5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                                    }`}>
                                      <h4 className="font-bold text-[13px] text-gray-900 mb-2.5 mt-2">{addon}</h4>
                                      <div className="flex flex-col gap-[10px]">
                                        {addon === 'Netflix Basic' && (
                                          <>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Unlimited ad-free movies, TV shows, and mobile games</span>
                                            </div>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Download & watch on 1 supported device at a time</span>
                                            </div>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Watch in HD</span>
                                            </div>
                                          </>
                                        )}
                                        {addon === 'Netflix Standard' && (
                                          <>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Unlimited ad-free movies, TV shows, and mobile games</span>
                                            </div>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Download & watch on 2 supported device at a time</span>
                                            </div>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Watch in Full HD</span>
                                            </div>
                                          </>
                                        )}
                                        {addon === 'Max Standard' && (
                                          <>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Enjoy blockbusters, groundbreaking series, iconic hits, real-life stories and family favorites from HBO, Harry Potter, the DC Universe, Cartoon Network, Warner Bros. and Discovery, with Max</span>
                                            </div>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Download & watch on 2 supported device at a time</span>
                                            </div>
                                            <div className="flex items-start gap-[8px]">
                                              <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] shrink-0 text-white" fill="#FF7A00" strokeWidth={2} />
                                              <span className="text-[13px] text-gray-700 font-medium leading-[1.3] tracking-wide">Watch in HD</span>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    
                    <div className="flex-1"></div>

                    {/* Pricing */}
                    <div className="flex flex-col mt-4">
                      {plan.limitedOffer ? (
                        <div className="bg-[#FF6A00] text-white font-bold text-[11px] px-3 py-[3px] rounded-full inline-flex self-start mb-3 shadow-sm">
                          {plan.limitedOffer}
                        </div>
                      ) : (
                         <div className="h-[26px] mb-3"></div>
                      )}
                      
                      <div className="flex items-end gap-[2px] mb-1">
                        <span className="text-[1.5rem] font-black text-[#1800E7] leading-none mb-[2px] tracking-tight">RM</span>
                        <span className="text-[3rem] font-black text-[#1800E7] leading-none tracking-tighter">
                          {plan.price}
                        </span>
                        <span className="text-black font-extrabold text-[12px] mb-[6px] ml-[2px]">/mth</span>
                        {plan.slashedPrice && (
                          <span className="text-[#FF7A00] font-bold text-[11px] line-through ml-2 mb-[6px]">{plan.slashedPrice}</span>
                        )}
                      </div>
                      
                      {plan.saveForever ? (
                        <div className="bg-[#EEF2FF] text-[#1800E7] font-extrabold text-[11px] px-3 py-1.5 rounded-[6px] inline-flex self-start mt-1 relative">
                          {plan.saveForever}
                        </div>
                      ) : (
                         <div className="h-[28px] mt-1"></div> 
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 mb-2 w-full flex items-stretch h-[46px] group cursor-pointer pointer-events-auto">
                      <Link 
                        href={`/apply-unifi-home?package=Unifi%20Home%20Plan&plan=${plan.speed.replace(' ', '')}`}
                        className={`flex-1 font-extrabold text-[13px] tracking-widest text-white transition-all rounded-l-full flex justify-center items-center outline-none ${
                          plan.bestSeller ? 'bg-[#FF7A00] group-hover:bg-[#E05200]' : 'bg-[#1800E7] group-hover:bg-[#0C00B3]'
                        }`}
                      >
                        <span className="translate-x-3">{plan.speed.includes("2 Gb") ? "GET IT NOW" : "SIGN UP NOW"}</span>
                      </Link>
                      <div className="w-[4px] bg-white z-10 shrink-0"></div>
                      <div 
                        className={`w-12 transition-all flex items-center justify-center shrink-0 ${
                          plan.bestSeller ? 'bg-[#FF7A00] group-hover:bg-[#E05200]' : 'bg-[#1800E7] group-hover:bg-[#0C00B3]'
                        }`}
                        style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
                      ></div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="relative pt-16 pb-28 md:pb-36 overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFA200] via-[#FF7A00] to-[#1800E7]"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-30 container text-center pt-6">
            <h2 className="text-[1.8rem] md:text-4xl lg:text-[2.8rem] font-black uppercase tracking-tight text-white mb-5 leading-[1.1] drop-shadow-sm px-2">
                IS UNIFI HOME FIBRE BROADBAND AVAILABLE IN YOUR AREA?
            </h2>
            <div className="text-white text-[15px] md:text-lg mb-10 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-sm px-2">
                Experience ultra-fast fibre internet. Check Unifi Fibre Broadband coverage in your area and enjoy smooth streaming, lag-free gaming, and fast browsing at home.
            </div>
            
            <div className="flex justify-center w-full mt-8">
               <Link href="/check-coverage" className="group cursor-pointer flex items-stretch h-[54px] w-full max-w-[320px] decoration-transparent relative z-40 pointer-events-auto">
                    <div className="flex-1 font-extrabold text-[15px] tracking-wide text-white transition-all rounded-l-full flex justify-center items-center outline-none bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-[0_8px_20px_rgba(24,0,231,0.25)] border-y-[2px] border-l-[2px] border-[#1800E7] group-hover:border-[#0C00B3]">
                        <span className="translate-x-3">Check Fibre Coverage</span>
                    </div>
                    <div className="w-[5px] bg-white z-10 shrink-0 shadow-sm"></div>
                    <div 
                        className="w-[60px] transition-all flex items-center justify-center shrink-0 bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-[0_8px_20px_rgba(24,0,231,0.25)] border-y-[2px] border-r-[2px] border-[#1800E7] group-hover:border-[#0C00B3]"
                        style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
                    ></div>
               </Link>
            </div>
        </div>

        {/* Swooping Wave at the bottom with Blue Border */}
        <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="relative block w-full h-[60px] md:h-[110px]"
            >
              <path 
                d="M0,0 Q600,100 1200,0 L1200,120 L0,120 Z" 
                className="fill-white"
              ></path>
              <path 
                d="M0,0 Q600,100 1200,0" 
                fill="none"
                stroke="#1800E7"
                strokeWidth="10"
              ></path>
            </svg>
        </div>
      </section>

      {/* Home Installation Section */}
      <section id="home-installation" className="bg-white py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-[1.8rem] md:text-3xl lg:text-[2.2rem] font-black uppercase tracking-tight text-black leading-[1.2]">
                    WHY FAMILIES LOVE UNIFI HOME BROADBAND FIBRE INTERNET
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24 px-2 lg:px-8">
                <div className="item flex flex-col items-center group">
                    <div className="image w-[110px] h-[110px] mb-6 flex items-center justify-center bg-gray-50 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-2">
                        <img src="/images/gear-unscreen.gif" alt="Free Installation" width="70" height="70" className="object-contain mix-blend-multiply" />
                    </div>
                    <h3 className="title text-[1.3rem] font-black text-black mb-4">Free Installation</h3>
                    <div className="desc text-gray-600 text-[15px] font-medium leading-relaxed max-w-[280px] mx-auto">
                        Experts in residential drilling, cabling, &amp; router placement for optimal Unifi installation. Standard setup is free!
                    </div>
                </div>

                <div className="item flex flex-col items-center group">
                    <div className="image w-[110px] h-[110px] mb-6 flex items-center justify-center bg-gray-50 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-2">
                        <img src="/images/repair-tools-unscreen.gif" alt="Convenience of EasyFix" width="70" height="70" className="object-contain mix-blend-multiply" />
                    </div>
                    <h3 className="title text-[1.3rem] font-black text-black mb-4">Convenience of EasyFix</h3>
                    <div className="desc text-gray-600 text-[15px] font-medium leading-relaxed max-w-[280px] mx-auto">
                        Enjoy seamless fibre broadband connectivity with our EasyFix solutions, designed for easy and sustainable use.
                    </div>
                </div>

                <div className="item flex flex-col items-center group">
                    <div className="image w-[110px] h-[110px] mb-6 flex items-center justify-center bg-gray-50 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-2">
                        <img src="/images/24-hours-support-unscreen.gif" alt="24 Hours Service Restoration" width="70" height="70" className="object-contain mix-blend-multiply" />
                    </div>
                    <h3 className="title text-[1.3rem] font-black text-black mb-4">24 Hours Service Restoration</h3>
                    <div className="desc text-gray-600 text-[15px] font-medium leading-relaxed max-w-[280px] mx-auto">
                        Count on us to keep your fibre internet running smoothly with 24/7 service restoration, ensuring your home stays connected at all times.
                    </div>
                </div>
            </div>

            <div className="content-bottom text-center flex flex-col items-center justify-center mt-4">
                <div className="image mb-6">
                    <img src="/images/illustration.png" alt="Yunni" width="276" height="200" className="object-contain hover:scale-105 transition-transform duration-500" />
                </div>
                <h2 className="title text-[1.8rem] md:text-[2.2rem] font-black uppercase tracking-tight text-black mb-8 leading-[1.15]">
                    YOUR UNIFI HOME <br className="hidden md:block"/>INSTALLATION GUIDE
                </h2>
                <div className="button button-arrow w-full flex justify-center">
                    <Link href="/installation-guide" className="group cursor-pointer flex items-stretch h-[54px] w-full max-w-[280px] decoration-transparent relative z-10 pointer-events-auto shadow-[0_8px_20px_rgba(24,0,231,0.25)] rounded-full">
                        <div className="flex-1 font-extrabold text-[15px] tracking-wide text-white transition-all rounded-l-full flex justify-center items-center outline-none bg-[#1800E7] group-hover:bg-[#0C00B3] border-y-[2px] border-l-[2px] border-[#1800E7] group-hover:border-[#0C00B3]">
                            <span className="translate-x-3">See My Guide</span>
                        </div>
                        <div className="w-[5px] bg-white z-10 shrink-0 shadow-sm"></div>
                        <div 
                            className="w-[60px] transition-all flex items-center justify-center shrink-0 bg-[#1800E7] group-hover:bg-[#0C00B3] border-y-[2px] border-r-[2px] border-[#1800E7] group-hover:border-[#0C00B3]"
                            style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
                        ></div>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <HomeFAQ />
    </>
  );
}
