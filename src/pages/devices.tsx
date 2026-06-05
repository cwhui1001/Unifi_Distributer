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
  Info,
  Maximize2,
  X
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

  // Lightbox State
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

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
    
    if (isMobilePlan) {
      // Mobile postpaid smartphones -> Switch to mobile application form
      const deviceName = `${productName} (${variantLabel})`;
      const planNumber = speed.replace(/\D/g, ""); // Extract MNP plan e.g. "99" or "69"
      router.push(`/apply-unifi-mobile?plan=${planNumber}&device=${encodeURIComponent(deviceName)}`);
    } else {
      // Home fibre TVs and iPads -> Prefill Unifi Winback Special Promo Plan and their specific deals
      let deviceQuery = "";
      if (productName.includes("TV")) {
        if (variantLabel.includes("43")) {
          deviceQuery = "43 INCH SMART TV (ADDON RM10)";
        } else if (variantLabel.includes("55")) {
          deviceQuery = "55 INCH SMART TV (ADDON RM10)";
        } else if (variantLabel.includes("65")) {
          if (speed.toLowerCase().includes("1gbps")) {
            deviceQuery = "65 INCH SMART TV (ADDON RM10)";
          } else {
            deviceQuery = "65 INCH SMART TV (ADDON RM20)";
          }
        } else if (variantLabel.includes("75")) {
          deviceQuery = "75 INCH SMART TV (ADDON RM20)";
        }
      } else if (productName.toLowerCase().includes("ipad")) {
        deviceQuery = "IPAD 11 A16 128GB (ADDON RM10)";
      }

      const cleanSpeed = speed.replace(" ", ""); // e.g. "300Mbps", "500Mbps", "1Gbps"

      if (deviceQuery) {
        router.push(`/apply-unifi-home?package=Unifi%20Winback%20Special%20Promo%20Plan&plan=${cleanSpeed}&device=${encodeURIComponent(deviceQuery)}`);
      } else {
        const deviceName = `${productName} (${variantLabel})`;
        router.push(`/apply-unifi-home?package=Unifi%20Home%20Plan&plan=${encodeURIComponent(speed)}&device=${encodeURIComponent(deviceName)}`);
      }
    }
  };

  // Unifi Device Fiesta Product Data mapped exactly from mockup image
  const products: Product[] = [
    {
      id: "sharp-samsung-tv-small",
      name: "Samsung/Sharp/LG TV (43\" / 55\")",
      brand: "Samsung/Sharp/LG",
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
      name: "Samsung/Sharp/LG TV (65\" / 75\")",
      brand: "Samsung/Sharp/LG",
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

      {/* Choose Your Devices Section */}
      <section className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1800E7] text-xs font-black uppercase tracking-widest inline-block mb-3">Device Matcher</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              CHOOSE YOUR DEVICES WITH UNIFI HOME PLAN
            </h2>
            <p className="text-base text-gray-500 font-bold max-w-xl mx-auto leading-relaxed">
              Get premium smart devices bundled directly with your high-speed fibre broadband plan.
            </p>
          </div>

          {/* Row 1: 300Mbps & 500Mbps (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* 300Mbps Card */}
            <div className="group flex flex-col justify-between bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_25px_60px_rgba(24,0,231,0.06)] hover:border-orange-100 transition-all duration-300">
              <div className="bg-[#1800E7] text-white py-3.5 px-6 text-center font-black text-lg uppercase tracking-widest">
                300Mbps
              </div>
              <div className="bg-slate-50/30 p-8 flex flex-col items-center justify-center border-b border-slate-100 h-64">
                <img 
                  src="https://unififibre.com.my/wp-content/uploads/2026/05/steve-11.png" 
                  alt='43" Smart TV' 
                  className="max-h-full max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-center space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                  43" SMART TV
                </h3>
                <button
                  onClick={() => handleBuyNow("Samsung/Sharp TV", "43\"", "Unifi 300Mbps Home Fibre + Smart TV Pack", "300Mbps", 139)}
                  className="w-full py-4 bg-[#1800E7] hover:bg-[#FF7A00] text-white rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-orange-500/20"
                >
                  I WANT THIS
                </button>
              </div>
            </div>

            {/* 500Mbps Card */}
            <div className="group flex flex-col justify-between bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_25px_60px_rgba(24,0,231,0.06)] hover:border-orange-100 transition-all duration-300">
              <div className="bg-[#1800E7] text-white py-3.5 px-6 text-center font-black text-lg uppercase tracking-widest">
                500Mbps
              </div>
              <div className="bg-slate-50/30 p-8 flex flex-col items-center justify-center border-b border-slate-100 h-64">
                <img 
                  src="https://unififibre.com.my/wp-content/uploads/2026/05/steve-10.png" 
                  alt='55" Smart TV' 
                  className="max-h-full max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-center space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                  55" SMART TV
                </h3>
                <button
                  onClick={() => handleBuyNow("Samsung/Sharp TV", "55\"", "Unifi 500Mbps Home Fibre + Smart TV Pack", "500Mbps", 159)}
                  className="w-full py-4 bg-[#1800E7] hover:bg-[#FF7A00] text-white rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-orange-500/20"
                >
                  I WANT THIS
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: iPad, 65" TV, 75" TV (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* iPad Card */}
            <div className="group flex flex-col justify-between bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_25px_60px_rgba(24,0,231,0.06)] hover:border-orange-100 transition-all duration-300">
              <div className="bg-[#1800E7] text-white py-3.5 px-6 text-center font-black text-lg uppercase tracking-widest">
                500Mbps
              </div>
              <div className="bg-slate-50/30 p-8 flex flex-col items-center justify-center border-b border-slate-100 h-64">
                <img 
                  src="https://unififibre.com.my/wp-content/uploads/2025/10/IMG-16744992_962698e3-302c-4932-b26d-1aec0439df67-1.webp" 
                  alt='APPLE IPAD A16 11"' 
                  className="max-h-full max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-center space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase min-h-[56px] flex items-center justify-center">
                  APPLE IPAD A16 11"
                </h3>
                <button
                  onClick={() => handleBuyNow("iPad 11 (A16) 128GB WiFi", "128GB", "Unifi 500Mbps Home Fibre + iPad Add-on", "500Mbps", 159)}
                  className="w-full py-4 bg-[#1800E7] hover:bg-[#FF7A00] text-white rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-orange-500/20"
                >
                  I WANT THIS
                </button>
              </div>
            </div>

            {/* 65" TV Card */}
            <div className="group flex flex-col justify-between bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_25px_60px_rgba(24,0,231,0.06)] hover:border-orange-100 transition-all duration-300">
              <div className="bg-[#1800E7] text-white py-3.5 px-6 text-center font-black text-lg uppercase tracking-widest">
                500Mbps
              </div>
              <div className="bg-slate-50/30 p-8 flex flex-col items-center justify-center border-b border-slate-100 h-64">
                <img 
                  src="https://unififibre.com.my/wp-content/uploads/2026/05/steve-12.png" 
                  alt='65" Smart TV' 
                  className="max-h-full max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-center space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase min-h-[56px] flex items-center justify-center">
                  65" SMART TV
                </h3>
                <button
                  onClick={() => handleBuyNow("Samsung/Sharp TV", "65\"", "Unifi 500Mbps Home Fibre + 65\" TV Pack", "500Mbps", 169)}
                  className="w-full py-4 bg-[#1800E7] hover:bg-[#FF7A00] text-white rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-orange-500/20"
                >
                  I WANT THIS
                </button>
              </div>
            </div>

            {/* 75" TV Card */}
            <div className="group flex flex-col justify-between bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_25px_60px_rgba(24,0,231,0.06)] hover:border-orange-100 transition-all duration-300">
              <div className="bg-[#1800E7] text-white py-3.5 px-6 text-center font-black text-lg uppercase tracking-widest">
                1Gbps
              </div>
              <div className="bg-slate-50/30 p-8 flex flex-col items-center justify-center border-b border-slate-100 h-64">
                <img 
                  src="https://unififibre.com.my/wp-content/uploads/2026/05/steve-12.png" 
                  alt='75" Smart TV' 
                  className="max-h-full max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-center space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase min-h-[56px] flex items-center justify-center">
                  75" SMART TV
                </h3>
                <button
                  onClick={() => handleBuyNow("Samsung/Sharp TV", "75\"", "Unifi 1Gbps Home Fibre + 75\" TV Pack", "1Gbps", 269)}
                  className="w-full py-4 bg-[#1800E7] hover:bg-[#FF7A00] text-white rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-orange-500/20"
                >
                  I WANT THIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Specifications Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF7A00] text-xs font-black uppercase tracking-widest inline-block mb-3">Specifications</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              Device Specifications & Details
            </h2>
            <p className="text-sm md:text-base text-gray-500 font-bold max-w-lg mx-auto">
              Review full device compatibility, size options, and package rules. Click on any image to zoom and pan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Specification 1 */}
            <div 
              onClick={() => setLightboxImg("/images/devices/specification.png")}
              className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex justify-center relative cursor-pointer group"
            >
              <img 
                src="/images/devices/specification.png" 
                alt="Device Specifications 1" 
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Hover View Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-black tracking-wider uppercase select-none">
                  Click to View
                </span>
              </div>
            </div>

            {/* Specification 2 */}
            <div 
              onClick={() => setLightboxImg("/images/devices/specification2.png")}
              className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex justify-center relative cursor-pointer group"
            >
              <img 
                src="/images/devices/specification2.png" 
                alt="Device Specifications 2" 
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Hover View Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-black tracking-wider uppercase select-none">
                  Click to View
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          {/* Close Button */}
          <button 
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 z-[10002] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/10 transition-all hover:scale-110"
            title="Close View"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Clickable Backdrop to close */}
          <div 
            className="absolute inset-0 z-[10000]" 
            onClick={() => setLightboxImg(null)}
          />

          {/* Image Wrapper */}
          <div className="relative w-[90%] max-w-5xl max-h-[85vh] flex items-center justify-center p-4 z-[10001] pointer-events-none">
            <img 
              src={lightboxImg} 
              alt="Fullscreen View" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </div>
        </div>
      )}
    </>
  );
}
