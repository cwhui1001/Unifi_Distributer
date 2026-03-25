import React from "react";
import Head from "next/head";
import { Settings, ChevronRight, CheckCircle2, Home, Wifi, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function InstallationGuide() {
  return (
    <>
      <Head>
        <title>Installation Guide | Unifi Home Fibre Broadband</title>
        <meta name="description" content="Everything you need to know about your Unifi Home installation journey. Step-by-step guide for a seamless experience." />
      </Head>

      <div className="w-full bg-white relative overflow-hidden">
        {/* Premium Hero Section */}
        <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden">
          {/* Main Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFDEBB] via-white to-[#FFDEBB]"></div>
          
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-[100px]"></div>
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#005B9F 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Left Column: Text Content */}
              <div className="w-full lg:w-[58%] text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#005B9F] text-[13px] font-bold uppercase tracking-wider mb-8 animate-fade-in shadow-sm">
                  <Settings className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>Installation Journey</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#005B9F] leading-[1.1] mb-8 tracking-tight uppercase">
                  Everything that you need to know about <span className="text-[#FF7A00]">Unifi Home Installation</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 font-medium max-w-2xl mx-auto lg:mx-0">
                  We are delighted to welcome you to the <span className="text-[#FF7A00] font-bold">Unifi family</span> and look forward to your Unifi installation journey experience. We will assist you to benefit most from Unifi Home fibre broadband experience and help you get the most from us.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  <Link href="#steps" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-[#005B9F] hover:bg-[#004a82] text-white px-10 py-4 rounded-full font-black text-[15px] tracking-widest uppercase shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 decoration-transparent">
                      Start Guide
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-orange-600" />
                        </div>
                    </div>
                    <span className="text-[14px] text-gray-500 font-bold uppercase tracking-wide">Professional & Secure</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Aspect */}
              <div className="w-full lg:w-[42%] flex justify-center lg:justify-end mt-4 lg:mt-0">
                <div className="relative group">
                  {/* Floating Elements */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block animate-bounce-slow">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <div className="text-[12px] font-black text-gray-800 uppercase leading-none">Standard & Non Standard Setup</div>
                        </div>
                     </div>
                  </div>

                  {/* Main Visual Container */}
                  <div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/60 p-6 md:p-10 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-50"></div>
                    
                    <img 
                      src="/images/illustration.png" 
                      alt="Installation guide illustration" 
                      className="relative z-10 w-full max-w-[340px] h-auto drop-shadow-2xl animate-float"
                    />
                    
                    {/* Glowing Accent */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200/40 rounded-full blur-3xl group-hover:bg-orange-300/50 transition-colors"></div>
                  </div>

                  {/* Shadow Effect */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/5 blur-2xl rounded-full"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Floating Scroll Indicator */}
        <div id="steps" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer flex flex-col items-center">
            <span className="text-[10px] font-black text-[#005B9F] uppercase tracking-[0.2em] mb-1">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#005B9F] to-transparent"></div>
        </div>
      </div>

      {/* Standard and Non-Standard Installation Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005B9F] mb-6 uppercase tracking-tight">
              Standard and <span className="text-[#FF7A00]">Non-Standard Installation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
              Installing your Unifi service may involve either standard or non-standard procedures, depending on your home or building setup. Our technicians will assess the layout, the location of the Distribution Point (DP), and the cabling requirements to determine the most suitable installation method.
            </p>
          </div>

          <div className="space-y-24">
            {/* Outside Premise */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-orange-100"></div>
                <h3 className="text-2xl font-black text-[#FF7A00] uppercase tracking-widest px-6 py-2 bg-orange-50 rounded-full border border-orange-100">Outside Premise</h3>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-orange-100"></div>
              </div>

              <div className="grid grid-cols-1 gap-12 items-start">
                {/* DP On Ground */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
                  <div className="p-1">
                    <img 
                      src="/images/DP_on_ground.png" 
                      alt="DP on ground" 
                      className="w-full h-auto rounded-t-[1.8rem] object-cover"
                      onError={(e) => { e.currentTarget.src = "/images/banner-homefibre.png"; }}
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl font-black text-gray-900 mb-6 uppercase">Distribution Point (DP) On Ground</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b-2 border-orange-100">
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider">Scenario</th>
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider text-center">Category</th>
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider text-right">Responsibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          <tr>
                            <td className="py-4 px-2 text-[14px] font-medium text-gray-600">1. If cable is blocked outside customer's compound</td>
                            <td className="py-4 px-2 text-center align-middle" rowSpan={3}>
                              <span className="bg-blue-50 text-[#005B9F] text-[10px] font-black px-3 py-1 rounded-full border border-blue-100 uppercase">Standard</span>
                            </td>
                            <td className="py-4 px-2 text-[13px] font-bold text-gray-800 text-right align-middle" rowSpan={3}>Provided by TM</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-2 text-[14px] font-medium text-gray-600">2. If cable is blocked within customer's compound</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-2 text-[14px] font-medium text-gray-600">2.1 Surface cabling requirement</td>
                          </tr>
                          <tr className="bg-orange-50/30">
                            <td className="py-5 px-2 text-[14px] font-medium text-gray-600">2.2 Underground cabling requirement</td>
                            <td className="py-5 px-2 text-center">
                              <span className="bg-orange-100 text-[#FF7A00] text-[10px] font-black px-3 py-1 rounded-full border border-orange-200 uppercase">Non-Standard</span>
                            </td>
                            <td className="py-5 px-2 text-[13px] font-bold text-[#FF7A00] text-right">Customer to bear cost</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <div className="text-[11px] font-black text-black-400 uppercase tracking-widest mb-3">Materials: GI Pipe, Jubilee Clip, Microduct & Cement</div>
                      <ol className="text-[13px] text-black-500 font-medium list-decimal ml-4 space-y-2">
                        <li>Follows TM standard installation policy (subject to housing policy).</li>
                        <li>Scenario 2.2 requires customer to appoint their own contractor.</li>
                        <li>Only applicable to landed properties.</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* DP On Pole */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
                  <div className="p-1">
                    <img 
                      src="/images/DP_on_pole.png" 
                      alt="DP on pole" 
                      className="w-full h-auto rounded-t-[1.8rem] object-cover"
                      onError={(e) => { e.currentTarget.src = "/images/banner-homefibre.png"; }}
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl font-black text-gray-900 mb-6 uppercase">Distribution Point (DP) On Pole</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b-2 border-orange-100">
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider">Scenario</th>
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider text-center">Category</th>
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider text-right">Responsibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          <tr>
                            <td className="py-6 px-2 text-[14px] font-medium text-gray-600">3. Direct cabling from pole directly to Entry Wall</td>
                            <td className="py-6 px-2 text-center">
                              <span className="bg-blue-50 text-[#005B9F] text-[10px] font-black px-3 py-1 rounded-full border border-blue-100 uppercase">Standard</span>
                            </td>
                            <td className="py-6 px-2 text-[13px] font-bold text-gray-800 text-right">Provided by TM</td>
                          </tr>
                          <tr className="bg-orange-50/30">
                            <td className="py-6 px-2 text-[14px] font-medium text-gray-600">4. From pole to Entry Wall via underground and surface cabling</td>
                            <td className="py-6 px-2 text-center">
                              <span className="bg-orange-100 text-[#FF7A00] text-[10px] font-black px-3 py-1 rounded-full border border-orange-200 uppercase">Non-Standard</span>
                            </td>
                            <td className="py-6 px-2 text-right">
                                <div className="text-[13px] font-bold text-[#FF7A00] leading-none mb-1">Customer to bear cost</div>
                                <div className="text-[16px] font-black text-[#1800E7]">RM212.00</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <div className="text-[11px] font-black text-black-400 uppercase tracking-widest mb-3">Materials: GI Pipe, Jubilee Clip, Microduct & Cement</div>
                      <ol className="text-[13px] text-black-500 font-medium list-decimal ml-4 space-y-2">
                        <li>TM Scope for Scenario 4 includes underground (outside) and surface (inside) cabling.</li>
                        <li>Only applicable to landed properties.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inside Premise */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-blue-100"></div>
                <h3 className="text-2xl font-black text-[#005B9F] uppercase tracking-widest px-6 py-2 bg-blue-50 rounded-full border border-blue-100">Inside Premise</h3>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-blue-100"></div>
              </div>

              <div className="grid grid-cols-1 gap-12 items-start">
                {/* Internal Cabling */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
                  <div className="p-1">
                    <img 
                      src="/images/internal_cabling.png" 
                      alt="Internal Cabling" 
                      className="w-full h-auto rounded-t-[1.8rem] object-cover"
                      onError={(e) => { e.currentTarget.src = "/images/banner-homefibre.png"; }}
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl font-black text-gray-900 mb-6 uppercase">Internal Premise Cabling</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b-2 border-blue-100">
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider">Scenario</th>
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider text-center">Category</th>
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider text-right">Responsibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          <tr>
                            <td className="py-6 px-2 text-[14px] font-medium text-gray-600">5. Internal cabling for the first 50 meters</td>
                            <td className="py-6 px-2 text-center">
                              <span className="bg-blue-50 text-[#005B9F] text-[10px] font-black px-3 py-1 rounded-full border border-blue-100 uppercase">Standard</span>
                            </td>
                            <td className="py-6 px-2 text-[13px] font-bold text-gray-800 text-right">Provided by TM</td>
                          </tr>
                          <tr className="bg-blue-50/20">
                            <td className="py-6 px-2 text-[14px] font-medium text-gray-600">5.1 Internal cabling beyond 50 meters</td>
                            <td className="py-6 px-2 text-center">
                              <span className="bg-indigo-50 text-indigo-500 text-[10px] font-black px-3 py-1 rounded-full border border-indigo-100 uppercase">Optional</span>
                            </td>
                            <td className="py-6 px-2 text-right">
                                <div className="text-[13px] font-bold text-gray-800 leading-none mb-1">Customer to bear cost</div>
                                <div className="text-[16px] font-black text-[#1800E7]">RM2.50 / meter</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <div className="text-[11px] font-black text-black-400 uppercase tracking-widest mb-3">Materials: RJ45 and RJ11</div>
                      <ol className="text-[13px] text-black-500 font-medium list-decimal ml-4 space-y-2">
                        <li>Length calculation starts from Entry Wall to furthest Unifi equipment.</li>
                        <li>Raceway (casing) provided up to 50 meters (additional at RM2.50/m).</li>
                        <li>Applicable to both landed and high-rise properties.</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Inside Ceiling */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
                  <div className="p-1">
                    <img 
                      src="/images/inside_ceiling.png" 
                      alt="Inside Ceiling" 
                      className="w-full h-auto rounded-t-[1.8rem] object-cover"
                      onError={(e) => { e.currentTarget.src = "/images/banner-homefibre.png"; }}
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl font-black text-gray-900 mb-6 uppercase">Cabling Inside Ceiling</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b-2 border-blue-100">
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider">Scenario</th>
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider text-center">Category</th>
                            <th className="py-4 px-2 text-[12px] font-black text-[#005B9F] uppercase tracking-wider text-right">Responsibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          <tr className="bg-blue-50/20">
                            <td className="py-8 px-2 text-[14px] font-medium text-gray-600">6. Inside the ceiling with microduct protection</td>
                            <td className="py-8 px-2 text-center">
                              <span className="bg-indigo-50 text-indigo-500 text-[10px] font-black px-3 py-1 rounded-full border border-indigo-100 uppercase">Optional</span>
                            </td>
                            <td className="py-8 px-2 text-right">
                                <div className="text-[13px] font-bold text-gray-800 leading-none mb-1">Customer to bear cost</div>
                                <div className="text-[16px] font-black text-[#1800E7]">RM66.00</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <div className="text-[11px] font-black text-black-400 uppercase tracking-widest mb-3">Materials: Cement and Microduct</div>
                      <ol className="text-[13px] text-black-500 font-medium list-decimal ml-4 space-y-2">
                        <li>Only applicable to landed properties.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Global Style and Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}

