import React, { useState } from 'react';

// --- DATA CONFIGURATION START ---

const PLANS = [
  {
    id: "100mbps",
    speed: "100",
    unit: "Mbps",
    price: "129",
    originalPrice: "139",
    badge: "Best Value",
    badgeColor: "bg-[#E96615]",
    isPopular: false,
    details: {
      user: { title: "Flexible Micro Office", desc: "Supports up to 2-3 users on 5 devices." },
      usage: "Basic browsing, email, POS, light video calls",
      svp: "SVP50",
      dectPhone: "✓",
      router: "Wi-Fi 6 Combo Box",
      mesh: "-",
      backup: "Add on with RM30/mth",
      restoration: "24 hours",
      contract: "24 months"
    }
  },
  {
    id: "300mbps",
    speed: "300",
    unit: "Mbps",
    price: "199",
    originalPrice: "249",
    badge: "Most Popular",
    badgeColor: "bg-[#F07B2D]",
    isPopular: true,
    details: {
      user: { title: "Small Outlet Office or Small NGO Office", desc: "Supports up to 6 users on 10 devices." },
      usage: "Frequent video calls, cloud storage, SaaS apps",
      svp: "SVP50",
      dectPhone: "✓",
      router: "Wi-Fi 6 Combo Box",
      mesh: "WiFi 6 Mesh WiFi",
      backup: "Add on with RM30/mth",
      restoration: "24 hours",
      contract: "24 months"
    }
  },
  {
    id: "500mbps",
    speed: "500",
    unit: "Mbps",
    price: "239",
    originalPrice: "299",
    badge: "Best For Productivity",
    badgeColor: "bg-[#E96615]",
    isPopular: false,
    details: {
      user: { title: "Virtual Office / Shop", desc: "Supports up to 10 heavy users on multiple devices." },
      usage: "Heavy file sharing, multi-device usage, cloud systems",
      svp: "SVP70",
      dectPhone: "✓",
      router: "Wi-Fi 6 Combo Box",
      mesh: "WiFi 6 Mesh WiFi",
      backup: "Add on with RM30/mth",
      restoration: "24 hours",
      contract: "24 months"
    }
  },
  {
    id: "1gbps",
    speed: "1",
    unit: "Gbps",
    price: "319",
    originalPrice: "",
    badge: "High Performance",
    badgeColor: "bg-[#E96615]",
    isPopular: false,
    details: {
      user: { title: "Larger Business Premise Setting", desc: "Supports up to 10 power users on multiple devices." },
      usage: "Large files, high traffic WiFi, real-time collaboration",
      svp: "SVP70",
      dectPhone: "✓",
      router: "Wi-Fi 7 Combo Box",
      mesh: "WiFi 7 Mesh WiFi",
      backup: "FREE",
      restoration: "12 business hours",
      contract: "24 months"
    }
  },
  {
    id: "2gbps",
    speed: "2",
    unit: "Gbps",
    price: "369",
    originalPrice: "",
    badge: "Ultimate Power",
    badgeColor: "bg-[#E96615]",
    isPopular: false,
    details: {
      user: { title: "Larger Business Premise Setting", desc: "Ultimate support for up to 10 power users on multiple devices." },
      usage: "Ultra-heavy cloud use, servers, 4K/8K production, high device density",
      svp: "SVP70",
      dectPhone: "✓",
      router: "Wi-Fi 7 Combo Box",
      mesh: "WiFi 7 Mesh WiFi",
      backup: "FREE",
      restoration: "12 business hours",
      contract: "24 months"
    }
  }
];

const ADDONS = [
  {
    id: "mesh",
    title: "Mesh Wi-Fi",
    options: [
      { label: "Mesh Wi-Fi (non ultra)", price: 15 },
      { label: "Mesh Wi-Fi (ultra)", price: 20 },
      { label: "Deco XE75", price: 45 },
      { label: "Deco BE65", price: 65 },
    ],
    defaultPrice: 15,
    productDetails: (
      <div className="space-y-3">
        <div>
          <span className="font-semibold block text-gray-700">Extensive coverage</span>
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Up to 7,800* sq ft worth of wi-fi coverage</li>
            <li>Ideal for up to 3 – 5 rooms</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold block text-gray-700">Security & control</span>
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Assign priority based on devices</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "digital",
    title: "Digital Marketing Solution",
    options: [
      { label: "Starter Pack", price: 50 },
      { label: "Standard Pack", price: 100 },
      { label: "Premium Pack", price: 200 },
    ],
    defaultPrice: 50,
    productDetails: (
      <div className="space-y-3">
        <div>
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Up to 800 ad credit</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "svp",
    title: "Simple Voice Plus (SVP)",
    options: [
      { label: "Simple Voice Plus SVP30", price: 30 },
      { label: "Simple Voice Plus SVP50", price: 50 },
      { label: "Simple Voice Plus SVP70", price: 70 },
      { label: "Basic Toll Free Link 1300", price: 80 },
      { label: "Basic Toll Free Link 1800", price: 80 },
      { label: "Premium Toll Free Link 1300", price: 100 },
      { label: "Premium Toll Free Link 1800", price: 100 },
    ],
    defaultPrice: 30,
    productDetails: (
      <div className="space-y-3">
        <div>
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Professional landline voice service built for commercial needs.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "fixedIp",
    title: "Fixed IP",
    options: [
      { label: "1 Fixed IP", price: 200 },
      { label: "5 Fixed IP", price: 300 },
    ],
    defaultPrice: 200,
    productDetails: (
      <div className="space-y-3">
        <div>
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Remote access</li>
            <li>File Transfer Protocol(FTP)</li>
            <li>5 fixed IP address</li>
          </ul>
        </div>
      </div>
    )
  }
];

const TABLE_ROWS = [
  { label: 'User', key: 'user' },
  { label: 'Usage', key: 'usage' },
  { label: 'Free Business Call Plan (Simple Voice Plus)', key: 'svp', sublabel: '(Simple Voice Plus)' },
  { label: 'Free DECT Phone', key: 'dectPhone' },
  { label: 'Free Router', key: 'router' },
  { label: 'Mesh Wifi', key: 'mesh' },
  { label: 'Biz 5G Wireless Backup', key: 'backup' },
  { label: 'Restoration', key: 'restoration' },
  { label: 'Contract Period', key: 'contract' },
];

// --- DATA CONFIGURATION END ---

const NAV_LINKS = [
  { label: "Unifi Business Broadband", href: "/business", active: true },
  { label: "Unifi Air Biz", href: "/products/wireless-broadband-unifi-air", active: false },
  { label: "Fixed IP", href: "/products/fixed-ip", active: false },
];

const FEATURES = [
  {
    title: "Blazing Fast",
    description: "Enjoy speeds up to 2Gbps so your business can operate seamlessly with reliable fibre internet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="43.971" height="52.207" viewBox="0 0 43.971 52.207">
        <defs>
          <clipPath id="rocket-clipPath">
            <rect id="Rectangle_314" data-name="Rectangle 314" width="43.971" height="52.207" fill="none"></rect>
          </clipPath>
        </defs>
        <g id="icon" transform="translate(1 1)">
          <g id="Group_579" data-name="Group 579" transform="translate(-1 -1)" clipPath="url(#rocket-clipPath)">
            <path id="Path_393" data-name="Path 393" d="M36.28,19.9l-.029,17.011H13.382l-.021-16.419a22.067,22.067,0,0,1,1.905-9.176A20.2,20.2,0,0,1,17.25,7.891a17.116,17.116,0,0,1,7.571-6.158,18.387,18.387,0,0,1,7.635,6.115,19.6,19.6,0,0,1,2.747,5.23A20.71,20.71,0,0,1,36.28,19.9Z" transform="translate(-2.846 0.485)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path id="Path_394" data-name="Path 394" d="M34.017,7.848A12.232,12.232,0,0,1,26.382,10.5a12.231,12.231,0,0,1-7.571-2.6,17.116,17.116,0,0,1,7.571-6.158A18.387,18.387,0,0,1,34.017,7.848Z" transform="translate(-4.407 0.485)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path id="Path_395" data-name="Path 395" d="M32.558,32.808a5.228,5.228,0,1,1-5.227-5.227A5.228,5.228,0,0,1,32.558,32.808Z" transform="translate(-5.35 -6.919)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <line id="Line_120" data-name="Line 120" y1="4.745" transform="translate(5.063 12.962)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <line id="Line_121" data-name="Line 121" y1="2.977" transform="translate(34.878 1.695)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <line id="Line_122" data-name="Line 122" y1="4.721" transform="translate(41.077 19.807)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <path id="Path_396" data-name="Path 396" d="M35.674,56.089a15.626,15.626,0,0,1-20.85.2" transform="translate(-3.265 -15.085)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path id="Path_397" data-name="Path 397" d="M38.086,60.371a20.25,20.25,0,0,1-29.456.2" transform="translate(-1.491 -16.312)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path id="Path_398" data-name="Path 398" d="M9.826,33.972a5.466,5.466,0,0,1-4.118,4.14c-3.493.826-5.03,3.053-4.652,8.034H9.842Z" transform="translate(0.695 -8.75)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path id="Path_399" data-name="Path 399" d="M45.5,33.972a5.466,5.466,0,0,0,4.118,4.14c3.493.826,5.03,3.053,4.652,8.034H45.481Z" transform="translate(-12.047 -8.75)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </g>
        </g>
      </svg>
    )
  },
  {
    title: "Consistent Stability",
    description: "Enjoy uninterrupted connectivity with wide fibre coverage, no matter rain or shine.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="2.5em" height="2.5em" viewBox="0 0 40 40">
        <defs>
          <clipPath id="a">
            <rect width="40" height="40" fill="none"></rect>
          </clipPath>
        </defs>
        <g transform="translate(0 0)">
          <g transform="translate(0 0)" clipPath="url(#a)">
            <path d="M38.867,11.8A19.3,19.3,0,0,1,11.8,38.87" transform="translate(-3.563 -3.564)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M4.994,32.06A19.3,19.3,0,0,1,32.059,5" transform="translate(-0.302 -0.303)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M31.6,35.888c-1.083,6.165-3.251,10.372-5.749,10.372-3.58,0-6.484-8.642-6.484-19.3,0-1.343.046-2.654.134-3.92" transform="translate(-5.846 -6.955)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M20.408,11.394C21.489,5.218,23.66,1,26.162,1c3.58,0,6.483,8.643,6.483,19.3,0,1.333-.045,2.633-.131,3.89" transform="translate(-6.162 -0.302)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M23.839,32.29H2.1a19.345,19.345,0,0,1,0-12.838H11.68" transform="translate(-0.302 -5.873)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M23.5,19.452H45.3a19.345,19.345,0,0,1,0,12.838H35.659" transform="translate(-7.095 -5.873)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M21.326,18.366a2.513,2.513,0,1,1-2.514-2.514A2.514,2.514,0,0,1,21.326,18.366Z" transform="translate(-4.921 -4.786)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M49.585,8.051a2.513,2.513,0,1,1-2.514-2.514A2.514,2.514,0,0,1,49.585,8.051Z" transform="translate(-13.453 -1.672)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M38.744,36.759a2.513,2.513,0,1,1-2.514-2.514A2.514,2.514,0,0,1,38.744,36.759Z" transform="translate(-10.18 -10.34)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M10.56,47.074A2.513,2.513,0,1,1,8.046,44.56,2.514,2.514,0,0,1,10.56,47.074Z" transform="translate(-1.671 -13.454)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </g>
        </g>
      </svg>
    )
  },
  {
    title: "Rapid Set-Up",
    description: "Get the entire system installed, running and restored within 24 hours!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="61.355" height="47.822" viewBox="0 0 61.355 47.822">
        <defs>
          <clipPath id="clock-clipPath">
            <rect id="Rectangle_318" data-name="Rectangle 318" width="61.355" height="47.822" transform="translate(-1 -1)" fill="none"></rect>
          </clipPath>
        </defs>
        <g id="Group_582" data-name="Group 582" transform="translate(1 1)">
          <g id="Group_581" data-name="Group 581" transform="translate(0 0)" clipPath="url(#clock-clipPath)">
            <path id="Path_412" data-name="Path 412" d="M21.967,12.383a22.136,22.136,0,1,1-.548,20.465" transform="translate(-4.874 -0.229)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <line id="Line_123" data-name="Line 123" y2="3.947" transform="translate(36.443 0.772)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <line id="Line_124" data-name="Line 124" y2="3.947" transform="translate(36.443 41.102)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <line id="Line_125" data-name="Line 125" x2="3.947" transform="translate(54.635 22.912)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <line id="Line_126" data-name="Line 126" x2="17.22" transform="translate(5.692 15.532)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <line id="Line_127" data-name="Line 127" x2="17.22" transform="translate(0.772 22.297)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <line id="Line_128" data-name="Line 128" x2="15.996" transform="translate(6.922 29.062)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <path id="Path_413" data-name="Path 413" d="M39.216,22.568l6.15,6.15,9.84-8.611" transform="translate(-8.923 -4.576)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </g>
        </g>
      </svg>
    )
  }
];

export default function BusinessPlans() {
  const [isTableCollapsed, setIsTableCollapsed] = useState(true);

  // Consolidated states for add-ons
  const [addonState, setAddonState] = useState<{
    [key: string]: { optionsOpen: boolean; detailsOpen: boolean; selectedIdx: number | null }
  }>({
    mesh: { optionsOpen: false, detailsOpen: false, selectedIdx: null },
    digital: { optionsOpen: false, detailsOpen: false, selectedIdx: null },
    svp: { optionsOpen: false, detailsOpen: false, selectedIdx: null },
    fixedIp: { optionsOpen: false, detailsOpen: false, selectedIdx: null },
  });

  const toggleAddonOption = (id: string) => {
    setAddonState(prev => ({
      ...prev,
      [id]: { ...prev[id], optionsOpen: !prev[id].optionsOpen }
    }));
  };

  const toggleAddonDetails = (id: string) => {
    setAddonState(prev => ({
      ...prev,
      [id]: { ...prev[id], detailsOpen: !prev[id].detailsOpen }
    }));
  };

  const setAddonSelection = (id: string, idx: number | null) => {
    setAddonState(prev => ({
      ...prev,
      [id]: { ...prev[id], selectedIdx: idx, optionsOpen: false }
    }));
  };

  return (
    <div className="bg-white rounded-t-3xl md:py-8 relative mt-[4dvh] z-40 mx-auto md:mt-0">
      <div>
        <div className=" bottom-0 left-0 right-0 z-30 mx-auto hidden max-w-[1536px] md:block">
          <div className="mx-auto w-4/5">
            <div className="flex flex-row justify-center gap-4 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label}
                  className={`overflow-hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 mb-2 rounded-none py-4 px-6 w-full h-auto font-bold ${link.active ? 'border-x border-t-8 border-tm-cobalt-blue-600 bg-white text-tm-cobalt-blue-600' : 'bg-[#E6E6E6] text-tm-grey-500'}`} 
                  href={link.href}
                >
                  <span className="text-sm font-sans">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:mx-18 mx-4 max-w-[1536px] py-8 md:mx-8 xl:mx-24 2xl:mx-auto 2xl:px-2 gap-8 flex flex-col md:flex-row">
        <div className="w-full text-tm-grey-900 md:w-1/3">
          <h2 className="uppercase text-3xl font-extrabold text-[#005B9F]">UNIFI BUSINESS BROADBAND MAKES WAY FOR NEW OPPORTUNITIES</h2>
        </div>
        <div className="grid h-max w-full gap-2 rounded-[10px] bg-orange-100/50 p-4 md:grid-cols-2 md:w-2/3">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex justify-start w-auto h-auto md:flex-row flex-row items-start gap-4 p-2 text-left">
              <span className="flex flex-row items-center md:self-start size-14">
                <span className="inline-block mx-auto text-[#FF7A00]">
                  {feature.icon}
                </span>
              </span>
              <div className="flex-1">
                <p className="mb-1 text-xl font-bold">{feature.title}</p>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative py-8">
        <div>
          <div className="relative z-20">
            <div className="overlay absolute top-0 left-0 -z-10 hidden w-full md:block"></div>
            <div className="mb-4 pb-8 pt-4">
              <div>
                <div className="bg-cover bg-no-repeat py-2 text-black sm:py-8 md:bg-none">
                  <div className="lg:mx-18 mx-4 max-w-[1536px] md:mx-8 xl:mx-24 2xl:mx-auto">
                    <h2 className="uppercase text-3xl font-extrabold text-[#005B9F]">Discover Unifi Business Broadband Plans</h2>
                    <p className="text-gray-600 mt-2">Reliable broadband plans that enable next-level business growth</p>
                  </div>
                </div>
                
                <div className="lg:mx-18 mx-4 md:mx-8 xl:mx-24 mt-8">
                  <div className="w-full transition-all">
                    <div>
                      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden -mx-4 mt-4 px-4 md:mx-0 md:mt-0 md:px-0" style={{ scrollbarWidth: 'none' }}>
                        <div className="tableContent relative z-10 mr-auto w-max" id=":r7h:">
                          <div className="sticky-outer-wrapper tableHeader">
                            <div className="sticky-inner-wrapper" style={{ position: 'relative', top: '0px', zIndex: 100 }}>
                              <div className="flex flex-col [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                                <div className="planTable-header flex flex-row justify-start gap-4">
                                  <div className="w-[200px] flex-none pb-0 pt-8 md:py-8 flex flex-col justify-end">
                                    <button 
                                      onClick={() => setIsTableCollapsed(!isTableCollapsed)}
                                      className="text-[#005B9F] hover:text-[#FF7A00] font-bold text-left mb-4 flex items-center transition-colors"
                                    >
                                      {isTableCollapsed ? 'View Full Details' : 'Collapse Table'}
                                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-300 ${isTableCollapsed ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    </button>
                                  </div>
                                  
                                  {PLANS.map((plan) => (
                                    <div key={plan.id} className="w-[200px] flex-none pb-0 pr-4 pt-8 md:py-8">
                                      <div className={`rounded-[18px] border-2 ${plan.isPopular ? 'border-[#FF7A00] bg-orange-50/50 shadow-lg shadow-orange-500/20' : 'border-gray-200 bg-white shadow-sm'} transition-all duration-300 md:hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer h-full flex flex-col overflow-hidden w-[160px] group`}>
                                        <div className={`w-full text-center text-[11px] sm:text-[13px] py-2 text-white ${plan.badgeColor} font-bold capitalize tracking-wide`}>{plan.badge}</div>
                                        <div className={`p-4 flex flex-col flex-1 ${!plan.isPopular ? 'bg-white md:group-hover:bg-orange-50/20' : ''} transition-colors`}>
                                          <div className="mb-4 h-10 font-bold text-[#005B9F]">
                                            <span className="text-4xl">{plan.speed}</span>
                                            <span className="text-lg">{plan.unit}</span>
                                          </div>
                                          <div className="mt-auto">
                                            <span className="text-xs text-gray-500">From</span>
                                            <div className="mb-1 flex text-[#FF7A00]">
                                              <div className="flex flex-col">
                                                <div>
                                                  <span className="pr-1 pt-1 text-xs font-bold text-[#FF7A00]">RM</span>
                                                  <span className="pr-0.5 text-3xl font-[900] text-[#FF7A00]">{plan.price}</span>
                                                  <span className="mb-1.5 self-end text-xs font-bold text-[#FF7A00]">/mth*</span>
                                                </div>
                                                {plan.originalPrice && (
                                                  <div className="block">
                                                    <span className="mt-1 text-xs text-gray-400 line-through">RM {plan.originalPrice}</span>
                                                  </div>
                                                )}
                                                {!plan.originalPrice && (
                                                  <div className="block">
                                                    <span className="mt-1 text-xs text-gray-400 line-through invisible">RM 0</span>
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                            <div className="mt-2 text-center cursor-pointer pointer-events-auto">
                                              <button className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold shadow-sm hover:shadow-lg ring-offset-white transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none text-white bg-[#005B9F] hover:bg-[#FF7A00] h-10 px-4 py-2 gap-0 pointer-events-auto w-full">
                                                <span className="flex-1">Select</span>
                                                <span className="mx-2 block"><svg xmlns="http://www.w3.org/2000/svg" width="22.4" height="40" viewBox="0 0 22.4 40"><g><path d="M192.2,220.14l12.166,20.027L192.2,260.14H202.6L214.6,240.167,202.6,220.14Z" transform="translate(-192.199 -220.14)" fill="currentColor"/></g></svg></span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className={`transition-all duration-500 overflow-hidden ${isTableCollapsed ? 'max-h-0 opacity-0' : 'max-h-[2000px] opacity-100'}`}>
                                  <table className="table-fixed mt-8 w-max border-collapse">
                                    <tbody className="text-sm text-gray-700">
                                      {TABLE_ROWS.map((row) => (
                                        <tr key={row.key} className="border-b border-gray-200">
                                          <th className="w-[216px] py-4 pr-10 text-left font-medium align-top">
                                            {row.label}
                                            {row.sublabel && <span className="text-xs block font-normal text-gray-500 mt-1">{row.sublabel}</span>}
                                          </th>
                                          {PLANS.map((plan) => {
                                            const val = plan.details[row.key as keyof typeof plan.details];
                                            return (
                                              <td key={`${plan.id}-${row.key}`} className="w-[216px] py-4 pr-10 align-top">
                                                {row.key === 'user' ? (
                                                  <>
                                                    <p className="font-bold">{(val as any).title}</p>
                                                    <p className="text-xs">{(val as any).desc}</p>
                                                  </>
                                                ) : row.key === 'usage' ? (
                                                  <p className="text-xs">{val as string}</p>
                                                ) : row.key === 'backup' ? (
                                                  <span className={val === 'FREE' ? 'font-bold text-[#FF7A00]' : ''}>{val as string}</span>
                                                ) : (
                                                  val as string
                                                )}
                                              </td>
                                            );
                                          })}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                  <div className="flex justify-center mt-8 mb-4">
                                    <button 
                                      onClick={() => setIsTableCollapsed(true)}
                                      className="text-[#005B9F] hover:text-[#FF7A00] font-bold flex items-center bg-gray-50 px-6 py-2 rounded-full transition-colors"
                                    >
                                      View Less
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Plan Add-ons Section */}
      <div className="bg-orange-50 py-16 mt-12">
        <div className="lg:mx-18 relative mx-4 md:mx-8 xl:mx-24">
          <div className="mx-4 max-w-[1536px] md:mx-8 2xl:mx-auto">
            <div>
              <h2 className="mb-2 text-3xl font-extrabold text-[#005B9F] uppercase">Plan Add-ons</h2>
              <p className="text-gray-600 mb-8 text-lg">Service and device add-ons to supercharge your Unifi Business experience</p>
              
              <div className="flex flex-row flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center text-sm font-semibold transition-colors select-none text-white bg-[#005B9F] rounded-full py-2 px-4 cursor-pointer hover:bg-opacity-90 shadow-sm">Internet &amp; Connectivity</div>
                <div className="inline-flex items-center text-sm font-semibold transition-colors select-none text-[#005B9F] bg-blue-100 border border-blue-200 rounded-full py-2 px-4 cursor-pointer hover:bg-blue-200">Digital Solutions</div>
              </div>
              
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex flex-row gap-6 min-w-max">
                  {ADDONS.map((addon) => (
                    <div key={addon.id} className="rounded-3xl bg-white shadow-lg w-[320px] flex flex-col transition-transform hover:-translate-y-1">
                      <div className="p-6 bg-blue-50/50 rounded-t-3xl border-b border-gray-100">
                        <h5 className="text-xl font-bold text-gray-900">{addon.title}</h5>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-auto">
                          <div className="relative mb-6">
                            <button 
                              onClick={() => toggleAddonOption(addon.id)}
                              className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-lg flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#005B9F] focus:border-[#005B9F] shadow-sm select-none"
                            >
                              <span className="text-sm">
                                {addonState[addon.id].selectedIdx === null 
                                  ? "Select an option" 
                                  : addon.options[addonState[addon.id].selectedIdx!].label}
                              </span>
                              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${addonState[addon.id].optionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {addonState[addon.id].optionsOpen && (
                              <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-xl z-50 py-1 overflow-hidden">
                                <ul className="max-h-56 overflow-y-auto">
                                  <li className={`px-4 py-2 text-sm cursor-pointer hover:bg-orange-50 ${addonState[addon.id].selectedIdx === null ? 'bg-orange-50 text-[#FF7A00] font-semibold' : 'text-gray-700'}`} onClick={() => setAddonSelection(addon.id, null)}>Select an option</li>
                                  {addon.options.map((opt, idx) => (
                                    <li key={idx} className={`px-4 py-2 text-sm cursor-pointer hover:bg-orange-50 ${addonState[addon.id].selectedIdx === idx ? 'bg-orange-50 text-[#FF7A00] font-semibold' : 'text-gray-700'}`} onClick={() => setAddonSelection(addon.id, idx)}>{opt.label}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          <button 
                            onClick={() => toggleAddonDetails(addon.id)}
                            className="flex items-center justify-between w-full text-left focus:outline-none mb-2 group"
                          >
                            <span className="text-sm font-bold text-gray-800 group-hover:text-[#1800E7] transition-colors">Product Details</span>
                            <span className={`text-xl text-gray-500 group-hover:text-[#1800E7] transition-transform duration-300 ${addonState[addon.id].detailsOpen ? 'rotate-45' : ''}`}>+</span>
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 text-xs text-gray-600 ${addonState[addon.id].detailsOpen ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                            {addon.productDetails}
                          </div>
                        </div>
                        <div className="mt-6">
                          <p className="text-center text-[10px] text-gray-400 uppercase tracking-wider mb-1 font-semibold">{addonState[addon.id].selectedIdx === null ? "From as low as" : "Price"}</p>
                          <div className="text-center text-[#FF7A00] mb-6 flex items-baseline justify-center">
                            <span className="text-sm font-bold self-start mt-1">RM</span>
                            <span className="text-5xl font-black mx-1 leading-none">
                              {addonState[addon.id].selectedIdx === null 
                                ? addon.defaultPrice 
                                : addon.options[addonState[addon.id].selectedIdx!].price}
                            </span>
                            <span className="text-sm font-bold">/mth*</span>
                          </div>
                          
                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Links (FAQ & T&C) */}
      <div className="mx-4 flex flex-col sm:flex-row items-center justify-center gap-6 py-12 border-t border-gray-200 xl:mx-28 2xl:mx-auto 2xl:px-8">
        <a href="/tnc-and-faq/faq/business" target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex items-stretch h-[54px] w-full sm:w-auto min-w-[220px] decoration-transparent relative z-10 pointer-events-auto shadow-[0_5px_15px_rgba(24,0,231,0.2)] rounded-full">
          <div className="flex-1 font-extrabold text-[15px] tracking-wide text-white transition-all rounded-l-full flex justify-center items-center outline-none bg-[#1800E7] group-hover:bg-[#0C00B3] border-y-[2px] border-l-[2px] border-[#1800E7] group-hover:border-[#0C00B3] px-6">
            <span>View All FAQ</span>
          </div>
          <div className="w-[5px] bg-white z-10 shrink-0 shadow-sm"></div>
          <div 
            className="w-[48px] transition-all flex items-center justify-center shrink-0 bg-[#1800E7] group-hover:bg-[#0C00B3] border-y-[2px] border-r-[2px] border-[#1800E7] group-hover:border-[#0C00B3]"
            style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
          ></div>
        </a>

        <a href="/tnc-and-faq/tnc/business" target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex items-stretch h-[54px] w-full sm:w-auto min-w-[220px] decoration-transparent relative z-10 pointer-events-auto shadow-[0_5px_15px_rgba(24,0,231,0.2)] rounded-full">
          <div className="flex-1 font-extrabold text-[15px] tracking-wide text-white transition-all rounded-l-full flex justify-center items-center outline-none bg-[#1800E7] group-hover:bg-[#0C00B3] border-y-[2px] border-l-[2px] border-[#1800E7] group-hover:border-[#0C00B3] px-6">
            <span>View T&C</span>
          </div>
          <div className="w-[5px] bg-white z-10 shrink-0 shadow-sm"></div>
          <div 
            className="w-[48px] transition-all flex items-center justify-center shrink-0 bg-[#1800E7] group-hover:bg-[#0C00B3] border-y-[2px] border-r-[2px] border-[#1800E7] group-hover:border-[#0C00B3]"
            style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
          ></div>
        </a>
      </div>
    </div>
  );
}
