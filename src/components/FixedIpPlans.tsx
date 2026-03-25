import React, { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, ChevronDown, Check } from 'lucide-react';

export default function FixedIpPlans() {
  const [isTableExpanded, setIsTableExpanded] = useState(true);

  const plans = [
    {
      name: "1 Fixed IP",
      price: "200",
      features: [
        "Remote access",
        "File Transfer Protocol (FTP)",
        "Secure business solutions",
        "24-month contract"
      ],
      popular: true,
    },
    {
      name: "5 Fixed IP",
      price: "300",
      features: [
        "Remote access",
        "File Transfer Protocol (FTP)",
        "Secure business solutions",
        "24-month contract"
      ],
      popular: false,
    }
  ];

  return (
    <div className="bg-white rounded-t-3xl md:py-8 relative mt-[4dvh] z-40 mx-auto md:mt-0">
      <div>
        <div className="bottom-0 left-0 right-0 z-30 mx-auto hidden max-w-[1536px] md:block">
          <div className="mx-auto w-4/5">
            <div className="flex flex-row justify-center gap-4 xl:gap-8">
              <Link href="/business" className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 mb-2 font-hk rounded-none py-4 px-6 w-full h-auto font-bold bg-[#E6E6E6] text-tm-grey-500">
                <span className="text-sm">Unifi Business Broadband</span>
              </Link>
              <Link href="/products/wireless-broadband-unifi-air" className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 mb-2 font-hk rounded-none py-4 px-6 w-full h-auto font-bold bg-[#E6E6E6] text-tm-grey-500">
                <span className="text-sm">Unifi Air Biz</span>
              </Link>
              <Link href="/products/fixed-ip" className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 mb-2 font-hk rounded-none py-4 px-6 w-full h-auto font-bold border-x border-t-8 border-tm-cobalt-blue-600 bg-white text-tm-cobalt-blue-600">
                <span className="text-sm">Fixed IP</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:mx-18 mx-4 max-w-[1536px] whitespace-pre-wrap py-8 text-tm-grey-900 md:mx-8 xl:mx-24 2xl:mx-auto 2xl:px-4 gap-8 flex flex-col md:flex-row">
        <div className="w-full text-tm-grey-900 md:w-1/3">
          <h2 className="uppercase text-3xl font-extrabold text-[#005B9F]">TAKE CHARGE AND HOST YOUR OWN SERVERS</h2>
          <div className="mt-4 text-gray-700 whitespace-normal">Streamline your operations with a static IP for business — the backbone of smarter, more secure business solutions. A Unifi Business fixed IP unlocks greater flexibility, smoother workflows, and a better experience for your customers from end to end.</div>
        </div>
        <div className="grid h-max w-full gap-2 rounded-[10px] bg-orange-100/50 p-4 md:grid-cols-2 md:w-2/3">
          <div className="flex justify-start w-auto h-auto md:flex-row flex-row items-start gap-4 p-2 text-left">
            <span className="flex flex-row items-center md:self-start size-14">
              <span className="inline-block mx-auto mb-0 mt-auto text-[#FF7A00] md:mb-auto md:mt-0">
                <img src="/images/business/fixed-ip-accessibility.png" width="36" height="30" alt="Accessibility" />
              </span>
            </span>
            <div className="flex-1">
              <p className="mb-1 text-xl font-bold">Complete Accessibility</p>
              <p className="text-gray-600">With a fixed IP address, you can access PCs from anywhere!</p>
            </div>
          </div>
          <div className="flex justify-start w-auto h-auto md:flex-row flex-row items-start gap-4 p-2 text-left">
            <span className="flex flex-row items-center md:self-start size-14">
              <span className="inline-block mx-auto mb-0 mt-auto text-[#FF7A00] md:mb-auto md:mt-0">
                <img src="/images/business/fixed-ip-ownership.png" width="36" height="44" alt="Ownership" />
              </span>
            </span>
            <div className="flex-1">
              <p className="mb-1 text-xl font-bold">Website Ownership</p>
              <p className="text-gray-600">Set up your own website and save on web server software costs.</p>
            </div>
          </div>
          <div className="flex justify-start w-auto h-auto md:flex-row flex-row items-start gap-4 p-2 text-left">
            <span className="flex flex-row items-center md:self-start size-14">
              <span className="inline-block mx-auto mb-0 mt-auto text-[#FF7A00] md:mb-auto md:mt-0">
                <img src="/images/business/fixed-ip-data-transfer.png" width="36" height="42" alt="Data Transfer" />
              </span>
            </span>
            <div className="mb-auto flex-1">
              <p className="text-xl font-bold">Data Transfer</p>
              <p className="text-gray-600">Efficiently and reliably transfer data via a File Transfer Protocol (FTP).</p>
            </div>
          </div>
          <div className="flex justify-start w-auto h-auto md:flex-row flex-row items-start gap-4 p-2 text-left">
            <span className="flex flex-row items-center md:self-start size-14">
              <span className="inline-block mx-auto mb-0 mt-auto text-[#FF7A00] md:mb-auto md:mt-0">
                <img src="/images/business/fixed-ip-downtime.png" width="36" height="39" alt="Downtime" />
              </span>
            </span>
            <div className="mb-auto flex-1">
              <p className="text-xl font-bold">Minimised Downtime</p>
              <p className="text-gray-600">Static IP addresses experience fewer downtimes to dynamic ones.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:mx-18 mx-4 max-w-[1536px] py-8 md:mx-8 xl:mx-24 2xl:mx-auto 2xl:px-4">
        <div className="mb-5 text-tm-grey-900">
          <h2 className="uppercase text-3xl font-extrabold text-[#005B9F]">Discover Fixed ip plans</h2>
          <p className="mt-4 text-gray-700">Reliable Fixed IP plans that enable next-level business growth</p>
        </div>
        
        <div className="w-full transition-all">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden -mx-4 mt-4 px-4 md:mx-0 md:mt-0 md:px-0" style={{ scrollbarWidth: 'none' }}>
            <div className="tableContent relative z-10 mr-auto w-full" id=":rro:">
              {/* Desktop Header */}
              <div className="sticky-outer-wrapper tableHeader">
                <div className="sticky-inner-wrapper transition-all duration-300 ease-in-out" style={{ position: 'relative', top: '0px', zIndex: 100 }}>
                  <div className="flex flex-col [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                    <div className="planTable-header flex flex-row justify-start gap-4 items-end">
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

                      {/* Plan 1 Header */}
                      <div className="w-[200px] flex-none pb-0 pr-4 pt-8 md:py-8">
                        <div className="rounded-[18px] border-2 border-[#FF7A00] bg-orange-50/50 shadow-lg shadow-orange-500/20 transition-all duration-300 md:hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer h-full flex flex-col overflow-hidden w-[160px] group">
                          <div className="w-full text-center text-[11px] sm:text-[13px] py-2 text-white bg-[#F07B2D] font-bold capitalize tracking-wide uppercase">Recommended</div>
                          <div className="p-4 flex flex-col flex-1 transition-colors">
                            <div className="mb-4 h-10 font-hk font-bold text-[#005B9F]">
                              <span className="text-sm uppercase leading-tight block">1 FIXED IP</span>
                            </div>
                            <div className="mt-auto">
                              <span className="text-xs text-tm-grey-600 font-medium">From</span>
                              <div className="mb-1 flex text-[#FF7A00]">
                                <div className="flex flex-col">
                                  <div>
                                    <span className="pr-1 pt-1 text-xs font-bold text-[#FF7A00]">RM</span>
                                    <span className="pr-0.5 text-3xl font-[900] text-[#FF7A00]">200</span>
                                    <span className="mb-1.5 self-end text-xs font-bold text-[#FF7A00]">/mth*</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 text-center cursor-pointer pointer-events-auto">
                                <Link 
                                  href="/apply-unifi-business?package=Fixed%20IP&plan=1%20Fixed%20IP"
                                  className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold shadow-sm hover:shadow-lg ring-offset-white transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none text-white bg-[#005B9F] hover:bg-[#FF7A00] h-10 px-4 py-2 gap-0 pointer-events-auto w-full"
                                >
                                  <span className="flex-1">Select</span>
                                  <span className="mx-2 block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.4" height="40" viewBox="0 0 22.4 40"><g><path d="M192.2,220.14l12.166,20.027L192.2,260.14H202.6L214.6,240.167,202.6,220.14Z" transform="translate(-192.199 -220.14)" fill="currentColor"/></g></svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[200px] flex-none pb-0 pr-4 pt-8 md:py-8">
                        <div className="rounded-[18px] border-2 border-gray-200 bg-white shadow-sm transition-all duration-300 md:hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer h-full flex flex-col overflow-hidden w-[160px] group">
                          <div className="p-4 flex flex-col flex-1 bg-white md:group-hover:bg-orange-50/20 transition-colors">
                            <div className="mb-4 h-10 font-hk font-bold text-[#005B9F]">
                              <span className="text-sm uppercase leading-tight block">5 FIXED IP</span>
                            </div>
                            <div className="mt-auto">
                              <span className="text-xs text-tm-grey-600 font-medium">From</span>
                              <div className="mb-1 flex text-[#FF7A00]">
                                <div className="flex flex-col">
                                  <div>
                                    <span className="pr-1 pt-1 text-xs font-bold text-[#FF7A00]">RM</span>
                                    <span className="pr-0.5 text-3xl font-[900] text-[#FF7A00]">300</span>
                                    <span className="mb-1.5 self-end text-xs font-bold text-[#FF7A00]">/mth*</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 text-center cursor-pointer pointer-events-auto">
                                <Link 
                                  href="/apply-unifi-business?package=Fixed%20IP&plan=5%20Fixed%20IP"
                                  className="overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold shadow-sm hover:shadow-lg ring-offset-white transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none text-white bg-[#005B9F] hover:bg-[#FF7A00] h-10 px-4 py-2 gap-0 pointer-events-auto w-full"
                                >
                                  <span className="flex-1">Select</span>
                                  <span className="mx-2 block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.4" height="40" viewBox="0 0 22.4 40"><g><path d="M192.2,220.14l12.166,20.027L192.2,260.14H202.6L214.6,240.167,202.6,220.14Z" transform="translate(-192.199 -220.14)" fill="currentColor"/></g></svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Body */}
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
                      <div className="sticky left-0 top-0 w-max font-medium">Number of Addresses</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 align-top transition-colors duration-200 hover:bg-orange-50/50" style={{ opacity: 1 }}>
                    <th className="hidden w-[200px] py-4 pr-4 text-left font-medium md:table-cell">Number of Addresses</th>
                    <td className="w-[200px] py-4 pr-4 align-top"><span>1 Address</span></td>
                    <td className="w-[200px] py-4 pr-4 align-top"><span>5 Addresses</span></td>
                  </tr>

                  <tr className="table-row md:hidden" style={{ opacity: 1 }}>
                    <td className="relative w-[200px] pt-4" colSpan={2}>
                      <div className="sticky left-0 top-0 w-max font-medium">Remote Access</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 align-top transition-colors duration-200 hover:bg-orange-50/50" style={{ opacity: 1 }}>
                    <th className="hidden w-[200px] py-4 pr-4 text-left font-medium md:table-cell">Remote Access</th>
                    <td className="w-[200px] py-4 pr-4 align-top"><Check className="size-5 text-tm-cobalt-blue-600" /></td>
                    <td className="w-[200px] py-4 pr-4 align-top"><Check className="size-5 text-tm-cobalt-blue-600" /></td>
                  </tr>

                  <tr className="table-row md:hidden" style={{ opacity: 1 }}>
                    <td className="relative w-[200px] pt-4" colSpan={2}>
                      <div className="sticky left-0 top-0 w-max font-medium">File Transfer Protocol (FTP)</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 align-top transition-colors duration-200 hover:bg-orange-50/50" style={{ opacity: 1 }}>
                    <th className="hidden w-[200px] py-4 pr-4 text-left font-medium md:table-cell">File Transfer Protocol (FTP)</th>
                    <td className="w-[200px] py-4 pr-4 align-top"><Check className="size-5 text-tm-cobalt-blue-600" /></td>
                    <td className="w-[200px] py-4 pr-4 align-top"><Check className="size-5 text-tm-cobalt-blue-600" /></td>
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
