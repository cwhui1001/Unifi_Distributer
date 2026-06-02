import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { 
  Tv, 
  Laptop, 
  Check, 
  ChevronDown, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";

// Product Type Definitions
interface PlanOption {
  id: string;
  name: string;
  speed: string;
  price: number;
}

interface Variant {
  id: string;
  label: string;
  subtitle?: string;
  plans: PlanOption[];
}

interface Product {
  id: string;
  name: string;
  brand: string;
  category: "tvs" | "laptops" | "phones";
  addonBadge?: string; // e.g. "ADD ON RM10/M"
  image: string;
  rrpText: string;
  variants: Variant[];
}

export default function DevicesPage() {
  const router = useRouter();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Keep track of active variant for each product
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({
    "sharp-samsung-tv-small": "43",
    "apple-ipad-11": "128GB",
    "sharp-samsung-tv-large": "65",
    "samsung-a16": "256GB",
    "redmi-note-14": "256GB",
    "oppo-a5": "256GB",
    "samsung-a06": "128GB",
    "honor-x7d": "128GB",
    "zte-blade-a75": "128GB",
    "vivo-y29s": "128GB",
  });

  // Keep track of active plan for each product's active variant
  const [selectedPlans, setSelectedPlans] = useState<Record<string, string>>({
    "sharp-samsung-tv-small-43": "300mbps-43",
    "sharp-samsung-tv-small-55": "500mbps-55",
    "apple-ipad-11-128GB": "500mbps-ipad",
    "sharp-samsung-tv-large-65": "500mbps-65",
    "sharp-samsung-tv-large-75": "1gbps-75",
    "samsung-a16-256GB": "uni5g99-a16",
    "redmi-note-14-256GB": "uni5g99-redmi14",
    "oppo-a5-256GB": "uni5g99-oppoa5",
    "samsung-a06-128GB": "uni5g69-a06",
    "honor-x7d-128GB": "uni5g69-honor",
    "zte-blade-a75-128GB": "uni5g69-zte",
    "vivo-y29s-128GB": "uni5g69-vivo",
  });

  const whatsappNumber = "601133383836";

  // Redirect to application form with package, speed/plan, and device prefilled
  const handleBuyNow = (productName: string, variantLabel: string, planName: string, speed: string, price: number) => {
    const isMobilePlan = speed.startsWith("UNI5G");
    const deviceName = `${productName} (${variantLabel})`;
    
    if (isMobilePlan) {
      // Mobile postpaid smartphones -> Switch to mobile application form
      const planNumber = speed.replace(/\D/g, ""); // Extract MNP plan e.g. "99" or "69"
      router.push(`/apply-unifi-mobile?plan=${planNumber}&device=${encodeURIComponent(deviceName)}`);
    } else {
      // Home fibre TVs and iPads -> Switch to home fibre application form
      router.push(`/apply-unifi-home?package=Unifi%20Home%20Plan&plan=${encodeURIComponent(speed)}&device=${encodeURIComponent(deviceName)}`);
    }
  };

  // Unifi Device Fiesta Product Data mapped exactly from mockup image
  const products: Product[] = [
    {
      id: "sharp-samsung-tv-small",
      name: "Samsung/Sharp TV (43\" / 55\")",
      brand: "Samsung/Sharp",
      category: "tvs",
      image: "/images/devices/sharp-tv.png",
      rrpText: "",
      variants: [
        {
          id: "43",
          label: "43\"",
          plans: [
            { id: "300mbps-43", name: "Unifi 300Mbps Home Fibre + Smart TV Pack", speed: "300Mbps", price: 139 }
          ]
        },
        {
          id: "55",
          label: "55\"",
          plans: [
            { id: "500mbps-55", name: "Unifi 500Mbps Home Fibre + Smart TV Pack", speed: "500Mbps", price: 159 }
          ]
        }
      ]
    },
    {
      id: "apple-ipad-11",
      name: "iPad 11 (A16) 128GB WiFi",
      brand: "Apple",
      category: "laptops",
      addonBadge: "ADD ON RM10/M",
      image: "/images/devices/ipad.png",
      rrpText: "",
      variants: [
        {
          id: "128GB",
          label: "128GB",
          plans: [
            { id: "500mbps-ipad", name: "Unifi 500Mbps Home Fibre + iPad Add-on", speed: "500Mbps", price: 159 }
          ]
        }
      ]
    },
    {
      id: "sharp-samsung-tv-large",
      name: "Samsung/Sharp TV (65\" / 75\")",
      brand: "Samsung/Sharp",
      category: "tvs",
      addonBadge: "ADD ON RM20/M",
      image: "/images/devices/samsung-tv.png",
      rrpText: "",
      variants: [
        {
          id: "65",
          label: "65\"",
          plans: [
            { id: "500mbps-65", name: "Unifi 500Mbps Home Fibre + 65\" TV Pack", speed: "500Mbps", price: 169 },
            { id: "1gbps-65", name: "Unifi 1Gbps Home Fibre + 65\" TV Pack", speed: "1Gbps", price: 259 }
          ]
        },
        {
          id: "75",
          label: "75\"",
          plans: [
            { id: "1gbps-75", name: "Unifi 1Gbps Home Fibre + 75\" TV Pack", speed: "1Gbps", price: 269 }
          ]
        }
      ]
    },
    {
      id: "samsung-a16",
      name: "Samsung Galaxy A16 5G",
      brand: "Samsung",
      category: "phones",
      image: "/images/devices/samsungA16.png",
      rrpText: "RRP RM899",
      variants: [
        {
          id: "256GB",
          label: "256GB",
          plans: [
            { id: "uni5g99-a16", name: "UNI5G Postpaid 99 (1 SIM)", speed: "UNI5G99", price: 69 }
          ]
        }
      ]
    },
    {
      id: "redmi-note-14",
      name: "Redmi Note 14 5G",
      brand: "Redmi",
      category: "phones",
      image: "/images/devices/redmiNote14.png",
      rrpText: "RRP RM899",
      variants: [
        {
          id: "256GB",
          label: "256GB",
          plans: [
            { id: "uni5g99-redmi14", name: "UNI5G Postpaid 99 (1 SIM)", speed: "UNI5G99", price: 69 }
          ]
        }
      ]
    },
    {
      id: "oppo-a5",
      name: "OPPO A5 5G",
      brand: "OPPO",
      category: "phones",
      image: "/images/devices/oppoA5.png",
      rrpText: "RRP RM1099",
      variants: [
        {
          id: "256GB",
          label: "256GB",
          plans: [
            { id: "uni5g99-oppoa5", name: "UNI5G Postpaid 99 (1 SIM)", speed: "UNI5G99", price: 69 }
          ]
        }
      ]
    },
    {
      id: "samsung-a06",
      name: "Samsung Galaxy A06 5G",
      brand: "Samsung",
      category: "phones",
      image: "/images/devices/samsungA06.png",
      rrpText: "RRP RM699",
      variants: [
        {
          id: "128GB",
          label: "128GB",
          plans: [
            { id: "uni5g69-a06", name: "UNI5G Postpaid 69 (1 SIM)", speed: "UNI5G69", price: 59 }
          ]
        }
      ]
    },
    {
      id: "honor-x7d",
      name: "Honor X7d 5G",
      brand: "Honor",
      category: "phones",
      image: "/images/devices/honor_x7d.png",
      rrpText: "RRP RM699",
      variants: [
        {
          id: "128GB",
          label: "128GB",
          plans: [
            { id: "uni5g69-honor", name: "UNI5G Postpaid 69 (1 SIM)", speed: "UNI5G69", price: 59 }
          ]
        }
      ]
    },
    {
      id: "zte-blade-a75",
      name: "ZTE Blade A75 5G",
      brand: "ZTE",
      category: "phones",
      image: "/images/devices/zte.png",
      rrpText: "RRP RM749",
      variants: [
        {
          id: "128GB",
          label: "128GB",
          plans: [
            { id: "uni5g69-zte", name: "UNI5G Postpaid 69 (1 SIM)", speed: "UNI5G69", price: 59 }
          ]
        }
      ]
    },
    {
      id: "vivo-y29s",
      name: "vivo Y29s 5G",
      brand: "vivo",
      category: "phones",
      addonBadge: "NEW",
      image: "/images/devices/vivo.png",
      rrpText: "RRP RM899",
      variants: [
        {
          id: "128GB",
          label: "128GB",
          plans: [
            { id: "uni5g69-vivo", name: "UNI5G Postpaid 69 (1 SIM)", speed: "UNI5G69", price: 59 }
          ]
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "What is the Unifi Device Fiesta campaign?",
      a: "Unifi Device Fiesta is an exclusive promotion allowing Unifi Home Fibre broadband subscribers to own premium smart devices (like Samsung/Sharp 4K TVs or iPads) bundled directly with high-speed internet. Device installment rates are integrated directly into your Unifi monthly TM statement, requiring no credit card pre-authorizations!"
    },
    {
      q: "How does the pricing work for different TV sizes?",
      a: "The pricing is dynamically set based on the selected device size and speed tier:\n• 43\" TV comes with Unifi 300Mbps at only RM139/month.\n• 55\" TV comes with Unifi 500Mbps at only RM159/month.\n• 65\" TV can be bundled with Unifi 500Mbps at RM169/month or 1Gbps at RM259/month.\n• 75\" TV comes bundled with Unifi 1Gbps at RM269/month."
    },
    {
      q: "What is the iPad 11 (A16) deal?",
      a: "You can own the brand new iPad 11 (A16) 128GB WiFi as a low-cost add-on of only RM10/month, bundled directly with Unifi 500Mbps Home Fibre for an all-in-one monthly price of only RM159/month!"
    },
    {
      q: "Are these authorized units with manufacturer warranties?",
      a: "Yes, 100%! All devices delivered under the Unifi Device Fiesta campaign are original, factory-sealed Malaysian units and come with a standard 1-Year Official Manufacturer Warranty claimable at authorized service centers nationwide."
    }
  ];

  return (
    <>
      <Head>
        <title>Unifi Device Fiesta | Own Smart TVs & iPads from RM10/mth</title>
        <meta name="description" content="Get premium Samsung/Sharp 4K Smart TVs and iPads bundled with Unifi 300Mbps, 500Mbps, or 1Gbps fibre broadband. Easy monthly TM bill installments, no credit card required!" />
        <meta name="keywords" content="unifi device fiesta, unifi smart tv bundle, own tv unifi, unifi 300mbps, unifi 500mbps, unifi 1gbps, tm device promo" />
        <link rel="canonical" href="https://unifi-online.my/devices" />
      </Head>

      {/* 1. Hero Section */}
      <section id="hero-banner" className="relative bg-gradient-to-br from-[#1800E7]/90 via-[#3B00E7] to-[#FF6B01]/30 text-white min-h-[460px] lg:min-h-[540px] flex items-center overflow-hidden pb-12 lg:pb-24">
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] border-[50px] border-white/5 rounded-full"></div>
          <div className="absolute bottom-[-15%] right-[-10%] w-[650px] h-[650px] bg-[#FF6B01]/10 rounded-full blur-3xl"></div>
          
          {/* Curved Bottom Mask */}
          <div className="absolute bottom-[-2px] left-0 w-full z-20">
            <svg viewBox="0 0 1440 120" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L1440 120L1440 0C1440 0 1080 120 720 120C360 120 0 40 0 40L0 120Z" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-16 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Info Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex py-1.5 px-4 rounded-full bg-[#FF6B01] text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-orange-500/20">
                Device Fiesta
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
                Own A Brand New <br className="hidden sm:inline" />
                <span className="text-[#FF8A00]">Device From RM1!</span>
              </h1>
              <h5 className="text-lg md:text-xl text-blue-100 font-medium max-w-xl leading-relaxed">
                Now you can bring home the device you love with Unifi Home Plus bundles. Enjoy massive discounts on TVs, iPads, and smartphones.
              </h5>
              <div className="pt-4">
                <a 
                  href="#explore-plans" 
                  className="inline-flex items-center justify-center px-10 py-4.5 bg-[#FF6B01] hover:bg-[#e05b00] text-white rounded-full font-black text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all uppercase tracking-wider gap-2 group"
                >
                  Find Out More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Hero Graphic Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative transform hover:scale-105 transition-transform duration-700 animate-float">
                <div className="absolute inset-0 bg-[#FF6B01]/10 rounded-full blur-[80px] scale-75 opacity-60"></div>
                <img 
                  src="/images/devices/fiesta-hero.png" 
                  alt="Unifi Device Fiesta" 
                  className="relative z-10 w-full max-w-[460px] h-auto drop-shadow-[0_25px_30px_rgba(0,0,0,0.25)]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Headline Title */}
      <section id="explore-plans" className="pt-24 pb-8 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight text-center">
            EXPLORE THE HOME PLUS PLANS
          </h2>
          <p className="text-sm md:text-base font-bold text-[#FF7A00] uppercase tracking-wider text-center max-w-lg mb-4">
            Select Your Device Size & Instantly Match the perfect High-Speed Plan Bundle
          </p>
        </div>
      </section>

      {/* 3. Interactive Products Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {products.map((product) => {
              // Retrieve active variant
              const activeVarId = selectedVariants[product.id];
              const activeVariant = product.variants.find(v => v.id === activeVarId) || product.variants[0];

              // Retrieve active plan
              const activePlanKey = `${product.id}-${activeVarId}`;
              const activePlanId = selectedPlans[activePlanKey] || activeVariant.plans[0].id;
              const activePlan = activeVariant.plans.find(p => p.id === activePlanId) || activeVariant.plans[0];

              return (
                <div 
                  key={product.id} 
                  className="group flex flex-col justify-between bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_25px_60px_rgba(24,0,231,0.06)] hover:border-orange-100 transition-all duration-300 relative"
                >
                  {/* Badge */}
                  <span className="absolute top-4 left-4 z-10 py-1 px-3.5 bg-[#FF7A00] text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                    {product.category === "phones" ? "FREE 5G PHONE" : "Device Fiesta"}
                  </span>

                  {/* Addon overlay badge (like ADD ON RM10/M) */}
                  {product.addonBadge && (
                    <span className="absolute top-4 right-4 z-10 py-1 px-3 bg-gradient-to-r from-[#1800E7] to-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm animate-pulse">
                      {product.addonBadge}
                    </span>
                  )}

                  {/* Image Container */}
                  <div className="bg-slate-50/50 p-6 flex flex-col items-center justify-center relative border-b border-slate-100 h-64">
                    <div className="h-full w-full flex items-center justify-center p-2">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-h-full max-w-[85%] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.05)] group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>

                  {/* Interactivity & Details Area */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#1800E7] transition-colors uppercase leading-tight min-h-[56px] flex items-center">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-bold mt-2 uppercase tracking-wide">
                        {product.rrpText}
                      </p>
                    </div>

                    {/* Variant Size/Storage Selector */}
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                        {product.category === "tvs" ? "Select TV Size" : "Storage Selection"}
                      </label>
                      <div className="flex gap-3">
                        {product.variants.map((v) => {
                          const isSelected = activeVarId === v.id;
                          return (
                            <button
                              key={v.id}
                              onClick={() => setSelectedVariants({
                                ...selectedVariants,
                                [product.id]: v.id
                              })}
                              className={`flex-1 py-3 px-4 rounded-xl border text-sm font-black uppercase transition-all duration-200 ${
                                isSelected 
                                  ? "border-[#FF7A00] text-[#FF7A00] bg-orange-50/20" 
                                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              {v.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Plan Options Selector */}
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                        {product.category === "phones" ? "Selected Postpaid Plan:" : "Select speed & plan:"}
                      </label>
                      <div className="space-y-3 pr-1">
                        {activeVariant.plans.map((plan) => {
                          const isSelected = activePlanId === plan.id;
                          return (
                            <div
                              key={plan.id}
                              onClick={() => setSelectedPlans({
                                ...selectedPlans,
                                [activePlanKey]: plan.id
                              })}
                              className={`cursor-pointer border rounded-2xl p-4 transition-all relative ${
                                isSelected 
                                  ? "border-[#FF7A00] bg-orange-50/5 shadow-sm" 
                                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                              }`}
                            >
                              <div className="flex justify-between items-center gap-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                    isSelected ? "border-[#FF7A00] bg-[#FF7A00]" : "border-slate-300"
                                  }`}>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                                  </div>
                                  <span className="text-xs md:text-sm font-bold text-slate-800 leading-tight">
                                    {plan.name}
                                  </span>
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="text-xs font-black bg-blue-50 text-blue-700 py-0.5 px-2 rounded uppercase mr-2 tracking-wider">
                                    {plan.speed}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Checkout Box */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                          Total Subscription
                        </span>
                        <span className="text-2xl font-black text-[#1800E7] leading-none">
                          RM{activePlan.price}<span className="text-xs font-bold text-slate-400">/mth</span>
                        </span>
                      </div>
                      <button
                        onClick={() => handleBuyNow(product.name, activeVariant.label, activePlan.name, activePlan.speed, activePlan.price)}
                        className="px-8 py-3.5 bg-[#1800E7] hover:bg-[#FF7A00] text-white rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-orange-500/20"
                      >
                        Buy Now
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Easy Process Steps Section */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1800E7] text-xs font-black uppercase tracking-widest inline-block mb-3">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
              HOW TO ORDER WITH <span className="text-[#FF6B01]">UNIFI HOME PLUS</span>
            </h2>
            <p className="text-base text-gray-500 font-bold max-w-xl mx-auto leading-relaxed">
              Bringing home your brand new device is extremely simple and fast. Follow our 3-step consultation program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/60 shadow-sm relative space-y-4">
              <span className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1800E7] flex items-center justify-center font-black text-xl">1</span>
              <h3 className="text-lg font-black text-gray-900 uppercase">Consult & Check Eligibility</h3>
              <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                Connect with our independent TM sales consultant via WhatsApp. Submit your IC verification to check your address coverage and device bundle eligibility.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/60 shadow-sm relative space-y-4">
              <span className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-black text-xl">2</span>
              <h3 className="text-lg font-black text-gray-900 uppercase">Lock Your Speed & Plan</h3>
              <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                Choose the Home Plus plan matching your selected device size (100Mbps, 300Mbps, 500Mbps, or 1Gbps) that fits your household's digital lifestyle.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/60 shadow-sm relative space-y-4">
              <span className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center font-black text-xl">3</span>
              <h3 className="text-lg font-black text-gray-900 uppercase">Approval & Door Delivery</h3>
              <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                Once registered and approved by TM, your high-speed fibre broadband is set up, and your brand-new, factory-sealed device is delivered straight to your home with RM0 upfront!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Device FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-base text-gray-500 font-bold max-w-md mx-auto">
              Got questions about Unifi Device Fiesta and the Home Plus plans? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-all gap-4"
                  >
                    <span className="font-extrabold text-slate-800 text-sm md:text-base leading-snug uppercase tracking-tight">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#005B9F] shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-[300px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 text-xs md:text-sm font-medium text-slate-600 whitespace-pre-line leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Bottom Call to Action Section */}
      <section className="py-16 bg-[#1800E7] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1800E7] to-[#FF6B01]/40 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Ready to bring your favorite device home?
          </h2>
          <p className="text-blue-100 font-bold max-w-xl mx-auto text-sm md:text-base">
            Click below to chat with our independent sales support agent. We will handle address coverage check, plan selection, and order registration for you completely free!
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in checking the Unifi Device Fiesta promotions. Please guide me through checking my eligibility.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#FF6B01] hover:bg-[#e05b00] text-white rounded-full font-black text-base shadow-xl shadow-orange-500/30 uppercase tracking-widest gap-2.5 transition-transform hover:-translate-y-0.5"
            >
              Start Registration Inquiries
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
