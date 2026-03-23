import React, { useState } from 'react';
import Link from 'next/link';
import { Wifi, Plug, Smartphone, CheckCircle2, Minus, Plus, ChevronDown } from 'lucide-react';

export default function UnifiAirBizPlans() {
  const [isTableExpanded, setIsTableExpanded] = useState(true);

  const plans = [
    {
      name: "Unifi Air Biz 5G 99",
      price: "RM99",
      period: "/mth",
      features: [
        "Unlimited 5G Data (FUP applies)",
        "Free 5G Router or 5G Mi-Fi",
        "Plug and Play Setup",
        "24-month contract"
      ],
      popular: false,
    },
    {
      name: "Unifi Air Biz 5G 149",
      price: "RM149",
      period: "/mth",
      features: [
        "Unlimited 5G Data (FUP applies)",
        "Free Premium Wi-Fi 6 5G Router",
        "Plug and Play Setup",
        "24-month contract"
      ],
      popular: true,
    }
  ];

  return (
    <div className="bg-white rounded-t-3xl md:py-8 relative mt-[4dvh] z-40 mx-auto md:mt-0">
      <div>
        <div className=" bottom-0 left-0 right-0 z-30 mx-auto hidden max-w-[1536px] md:block">
          <div className="mx-auto w-4/5">
            <div className="flex flex-row justify-center gap-4 xl:gap-8">
              <Link href="/business" className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 mb-2 font-hk rounded-none py-4 px-6 w-full h-auto font-bold bg-[#E6E6E6] text-tm-grey-500">
                <span className="text-sm">Unifi Business Broadband</span>
              </Link>
              <Link href="/products/wireless-broadband-unifi-air" className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 mb-2 font-hk rounded-none py-4 px-6 w-full h-auto font-bold border-x border-t-8 border-tm-cobalt-blue-600 bg-white text-tm-cobalt-blue-600">
                <span className="text-sm">Unifi Air Biz</span>
              </Link>
              <Link href="/products/fixed-ip" className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 mb-2 font-hk rounded-none py-4 px-6 w-full h-auto font-bold bg-[#E6E6E6] text-tm-grey-500">
                <span className="text-sm">Fixed IP</span>
              </Link>
              <Link href="/products/smart-internet" className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 mb-2 font-hk rounded-none py-4 px-6 w-full h-auto font-bold bg-[#E6E6E6] text-tm-grey-500">
                <span className="text-sm">SMART Internet</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:mx-18 mx-4 max-w-[1536px] whitespace-pre-wrap py-8 text-tm-grey-900 md:mx-8 xl:mx-24 2xl:mx-auto 2xl:px-2 gap-8 flex flex-col md:flex-row">
        <div className="w-full text-tm-grey-900 md:w-1/3">
          <h2 className="uppercase text-3xl font-extrabold text-[#005B9F]">Connect Multiple Devices with Unifi Air Biz (Wireless Broadband)</h2>
          <div className="mt-4 text-gray-700">Converge all business connections with a simple, wireless portable broadband solution. Its ultra-easy setup ensures a seamless, friction-free experience from the moment you plug it in.</div>
        </div>
        <div className="grid h-max w-full gap-2 rounded-[10px] bg-orange-100/50 p-4 md:grid-cols-2 md:w-2/3">
          
          <div className="flex justify-start w-auto h-auto md:flex-row flex-row items-start gap-4 p-2 text-left">
            <span className="flex flex-row items-center md:self-start size-14">
              <span className="inline-block mx-auto text-[#FF7A00] mt-1">
                <Wifi className="w-10 h-10" />
              </span>
            </span>
            <div className="flex-1">
              <p className="mb-1 text-xl font-bold">Unlimited 5G Data</p>
              <p className="text-gray-600">Stay connected on our 5G Network throughout Malaysia for undisrupted operations.</p>
            </div>
          </div>
          
          <div className="flex justify-start w-auto h-auto md:flex-row flex-row items-start gap-4 p-2 text-left">
            <span className="flex flex-row items-center md:self-start size-14">
              <span className="inline-block mx-auto text-[#FF7A00] mt-1">
                <Plug className="w-10 h-10" />
              </span>
            </span>
            <div className="flex-1">
              <p className="mb-1 text-xl font-bold">Plug and Play</p>
              <p className="text-gray-600">No complex installation required, just plug in and connect seamlessly within minutes.</p>
            </div>
          </div>
          
          <div className="flex justify-start w-auto h-auto md:flex-row flex-row items-start gap-4 p-2 text-left">
            <span className="flex flex-row items-center md:self-start size-14">
              <span className="inline-block mx-auto text-[#FF7A00] mt-1">
                <Smartphone className="w-10 h-10" />
              </span>
            </span>
            <div className="flex-1">
              <p className="mb-1 text-xl font-bold">Connect Up to 64 Devices</p>
              <p className="text-gray-600">Share your high-speed network effortlessly with multiple users and devices at once.</p>
            </div>
          </div>

        </div>
      </div>
      
      <div className="relative py-8">
        <div className="lg:mx-18 mx-4 max-w-[1536px] py-8 md:mx-8 xl:mx-24 2xl:mx-auto">
          <div className="mb-5 text-tm-grey-900">
            <h2 className="uppercase text-3xl font-extrabold text-[#005B9F]">Discover unifi air biz plans</h2>
            <p className="mt-4 text-gray-600">Reliable wireless broadband plans that enable next-level business growth</p>
          </div>
          <div className="w-full transition-all">
            <div>
              <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden -mx-4 mt-4 px-4 md:mx-0 md:mt-0 md:px-0" style={{ scrollbarWidth: 'none' }}>
                <div className="tableContent relative z-10 mr-auto w-full" id=":rag:">
                  <div className="sticky-outer-wrapper tableHeader">
                    <div className="sticky-inner-wrapper" style={{ position: 'relative', top: '0px', zIndex: 100 }}>
                      <div className="flex flex-col [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                        <div className="planTable-header flex flex-row justify-start">
                          <div className="hidden w-[200px] flex-none self-end pb-0 pr-8 pt-8 text-start md:block md:py-8">
                            <button 
                              onClick={() => setIsTableExpanded(!isTableExpanded)}
                              className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-tm-cobalt-blue-600 hover:text-tm-accent-orange-500 h-10 px-4 py-2 pl-0"
                            >
                              {isTableExpanded ? 'Collapse Table' : 'Expand Table'}
                              <span className="mx-1">
                                {isTableExpanded ? <Minus className="size-4" /> : <Plus className="size-4" />}
                              </span>
                            </button>
                          </div>
                          <div className="w-[200px] flex-none pb-0 pr-4 pt-8 md:py-8">
                            <div className="rounded-3xl bg-transparent text-slate-900 relative z-20 w-[160px] cursor-pointer text-xs shadow-none md:pointer-events-none md:cursor-auto group mt-4 lg:mt-0">
                              <div className="absolute -top-7 left-0 w-full text-center text-sm py-1 rounded-t-[14px] text-white bg-gradient-to-r from-[#DB2E00] to-[#FF7A00] font-semibold h-12 shadow-sm uppercase tracking-wider">Recommended</div>
                              <div className="h-auto rounded-[14px] border-2 border-[#FF7A00] bg-gradient-to-br from-white to-orange-50 p-4 text-left transition-all duration-300 md:group-hover:scale-[1.03] shadow-xl shadow-orange-500/20 relative z-10">
                                <div className="mb-4 h-10 font-hk font-bold"><span className="text-sm uppercase text-[#005B9F]">Unifi Air Biz 5G 99</span></div>
                                <span className="text-xs text-gray-500">From </span>
                                <div className="flex h-auto flex-col items-end">
                                  <div className="mb-1 flex text-[#FF7A00]">
                                    <div className="flex flex-col">
                                      <div><span className="pr-1 pt-1 text-xs font-bold text-[#FF7A00]">RM</span><span className="pr-0.5 text-3xl font-[900] text-[#FF7A00]">99</span><span className="mb-1.5 self-end text-xs font-bold text-[#FF7A00]">/mth*</span></div>
                                      <div className="block"><span className="mt-1 text-xs text-gray-400 line-through invisible">RM 0</span></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <button className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold shadow-md hover:shadow-lg ring-offset-white transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none text-white bg-[#005B9F] hover:bg-[#FF7A00] h-10 px-4 py-2 gap-0 pointer-events-auto w-full">
                                    <span className="flex-1">Select</span>
                                    <span className="mx-2 block">
                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22.4" height="40" viewBox="0 0 22.4 40"><defs><filter id="Path_1"><feOffset dx="2" in="SourceAlpha"></feOffset><feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur><feFlood floodOpacity="0.302" result="color"></feFlood><feComposite operator="out" in="SourceGraphic" in2="blur"></feComposite><feComposite operator="in" in="color"></feComposite><feComposite operator="in" in2="SourceGraphic"></feComposite></filter></defs><g data-type="innerShadowGroup"><path id="Path_1-2" data-name="Path 1" d="M192.2,220.14l12.166,20.027L192.2,260.14H202.6L214.6,240.167,202.6,220.14Z" transform="translate(-192.199 -220.14)" fill="currentColor"></path><g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)"><path id="Path_1-3" data-name="Path 1" d="M192.2,220.14l12.166,20.027L192.2,260.14H202.6L214.6,240.167,202.6,220.14Z" transform="translate(-192.2 -220.14)" fill="currentColor"></path></g></g></svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[200px] flex-none pb-0 pr-4 pt-8 md:py-8">
                            <div className="rounded-3xl bg-transparent text-slate-900 relative z-20 w-[160px] cursor-pointer text-xs shadow-none md:pointer-events-none md:cursor-auto group mt-4 lg:mt-0">
                              <div className="h-auto rounded-[14px] border border-gray-200 bg-white p-4 text-left transition-all duration-300 md:group-hover:scale-[1.03] md:group-hover:border-[#FF7A00]/50 hover:bg-orange-50/20 relative z-10 md:mt-5 lg:mt-5 shadow-sm hover:shadow-xl hover:shadow-orange-500/10">
                                <div className="mb-4 h-10 font-hk font-bold"><span className="text-sm uppercase text-[#005B9F]">Unifi Air Biz 5G 149</span></div>
                                <span className="text-xs text-gray-500">From </span>
                                <div className="flex h-auto flex-col items-end">
                                  <div className="mb-1 flex text-[#FF7A00]">
                                    <div className="flex flex-col">
                                      <div><span className="pr-1 pt-1 text-xs font-bold text-[#FF7A00]">RM</span><span className="pr-0.5 text-3xl font-[900] text-[#FF7A00]">149</span><span className="mb-1.5 self-end text-xs font-bold text-[#FF7A00]">/mth*</span></div>
                                      <div className="block"><span className="mt-1 text-xs text-gray-400 line-through invisible">RM 0</span></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <button className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold shadow-sm hover:shadow-lg ring-offset-white transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none text-white bg-[#005B9F] hover:bg-[#FF7A00] h-10 px-4 py-2 gap-0 pointer-events-auto w-full">
                                    <span className="flex-1">Select</span>
                                    <span className="mx-2 block">
                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22.4" height="40" viewBox="0 0 22.4 40"><defs><filter id="Path_1"><feOffset dx="2" in="SourceAlpha"></feOffset><feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur><feFlood floodOpacity="0.302" result="color"></feFlood><feComposite operator="out" in="SourceGraphic" in2="blur"></feComposite><feComposite operator="in" in="color"></feComposite><feComposite operator="in" in2="SourceGraphic"></feComposite></filter></defs><g data-type="innerShadowGroup"><path id="Path_1-2" data-name="Path 1" d="M192.2,220.14l12.166,20.027L192.2,260.14H202.6L214.6,240.167,202.6,220.14Z" transform="translate(-192.199 -220.14)" fill="currentColor"></path><g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)"><path id="Path_1-3" data-name="Path 1" d="M192.2,220.14l12.166,20.027L192.2,260.14H202.6L214.6,240.167,202.6,220.14Z" transform="translate(-192.2 -220.14)" fill="currentColor"></path></g></g></svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="table-fixed w-full">
                    <colgroup>
                      <col className="hidden w-[200px] md:table-column" />
                      <col className="w-[200px]" />
                      <col className="w-[200px]" />
                      <col className="w-[calc(100%_-_600px)]" />
                    </colgroup>
                    <thead>
                      <tr className="table-row md:hidden" style={{ opacity: 1 }}>
                        <td className="relative w-[200px] pb-4" colSpan={2}>
                          <div className="sticky left-0 top-0 w-max">
                            <div className="planTable-header-button sticky left-0 md:hidden">
                              <button 
                                onClick={() => setIsTableExpanded(!isTableExpanded)}
                                className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-tm-cobalt-blue-600 hover:text-tm-accent-orange-500 h-8 rounded-md px-3 pl-0"
                              >
                                {isTableExpanded ? 'Collapse Table' : 'Expand Table'}
                                <span className="mx-1">
                                  {isTableExpanded ? <Minus className="size-4" /> : <Plus className="size-4" />}
                                </span>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody className={`text-base text-tm-grey-900 ${isTableExpanded ? '' : 'hidden'}`} data-state={isTableExpanded ? "open" : "closed"} style={{ transitionDuration: '0s', animationName: 'none' } as React.CSSProperties}>
                      <tr className="table-row md:hidden" style={{ opacity: 1 }}>
                        <td className="relative w-[200px] pt-4" colSpan={2}>
                          <div className="sticky left-0 top-0 w-max font-medium">FREE Device</div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 align-top transition-colors duration-200 hover:bg-orange-50/50" style={{ opacity: 1 }}>
                        <th className="hidden w-[200px] py-4 pr-4 text-left font-medium md:table-cell">FREE Device</th>
                        <td className="w-[200px] py-4 pr-4 align-top"><span>5G Router (Wi-Fi 6) or 5G Mi-Fi</span></td>
                        <td className="w-[200px] py-4 pr-4 align-top"><span>5G Router (Wi-Fi 6)</span></td>
                      </tr>
                      <tr className="table-row md:hidden" style={{ opacity: 1 }}>
                        <td className="relative w-[200px] pt-4" colSpan={2}>
                          <div className="sticky left-0 top-0 w-max font-medium">Network</div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 align-top transition-colors duration-200 hover:bg-orange-50/50" style={{ opacity: 1 }}>
                        <th className="hidden w-[200px] py-4 pr-4 text-left font-medium md:table-cell">Network</th>
                        <td className="w-[200px] py-4 pr-4 align-top">
                          <p>Unlimited 5G Data<br /><span className="text-sm text-gray-500">Fair Usage Policy (FUP applies)</span></p>
                        </td>
                        <td className="w-[200px] py-4 pr-4 align-top">
                          <p>Unlimited 5G Data<br /><span className="text-sm text-gray-500">Enjoy high-speed internet with no data caps</span></p>
                        </td>
                      </tr>
                      <tr className="table-row md:hidden" style={{ opacity: 1 }}>
                        <td className="relative w-[200px] pt-4" colSpan={2}>
                          <div className="sticky left-0 top-0 w-max font-medium">Connectivity</div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 align-top transition-colors duration-200 hover:bg-orange-50/50" style={{ opacity: 1 }}>
                        <th className="hidden w-[200px] py-4 pr-4 text-left font-medium md:table-cell">Connectivity</th>
                        <td className="w-[200px] py-4 pr-4 align-top"><span>Up to 5 devices</span></td>
                        <td className="w-[200px] py-4 pr-4 align-top"><span>Up to 10 devices</span></td>
                      </tr>
                      <tr className="table-row md:hidden" style={{ opacity: 1 }}>
                        <td className="relative w-[200px] pt-4" colSpan={2}>
                          <div className="sticky left-0 top-0 w-max font-medium">Upfront Payment</div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 align-top transition-colors duration-200 hover:bg-orange-50/50" style={{ opacity: 1 }}>
                        <th className="hidden w-[200px] py-4 pr-4 text-left font-medium md:table-cell">Upfront Payment</th>
                        <td className="w-[200px] py-4 pr-4 align-top"><span>RM99</span></td>
                        <td className="w-[200px] py-4 pr-4 align-top"><span>RM149</span></td>
                      </tr>
                      <tr className="table-row md:hidden" style={{ opacity: 1 }}>
                        <td className="relative w-[200px] pt-4" colSpan={2}>
                          <div className="sticky left-0 top-0 w-max font-medium">Contract</div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 align-top transition-colors duration-200 hover:bg-orange-50/50" style={{ opacity: 1 }}>
                        <th className="hidden w-[200px] py-4 pr-4 text-left font-medium md:table-cell">Contract</th>
                        <td className="w-[200px] py-4 pr-4 align-top">
                          <p><span>With Device &ndash; 24 months<br /></span><span>SIM Only &ndash; No Contract<br /></span></p>
                        </td>
                        <td className="w-[200px] py-4 pr-4 align-top">
                          <p><span>With Device &ndash; 24 months<br /></span><span>SIM Only &ndash; No Contract<br /></span></p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="relative w-full text-center" style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}>
                <div className="max-w-[100vw]">
                  <button 
                    onClick={() => setIsTableExpanded(!isTableExpanded)}
                    className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-tm-cobalt-blue-600 hover:text-tm-accent-orange-500 h-10 px-4 py-2 my-6"
                  >
                    {isTableExpanded ? 'View Less' : 'View More'}
                    <span className={`inline-block ml-4 transition-transform ${isTableExpanded ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown className="size-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
