import React from "react";
import Head from "next/head";
import PostpaidPlans from "@/components/PostpaidPlans";
import PostpaidFAQ from "@/components/PostpaidFAQ";

export default function PostpaidPage() {

  return (
    <>
      <Head>
        <title>Mobile Postpaid | UNI5G</title>
      </Head>
      
      {/* Hero Section */}
      <section className="relative bg-[#FF6B01] text-white min-h-[400px] lg:min-h-[500px] flex items-center overflow-visible pb-20 lg:pb-32">
        {/* Background Decorative Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Orange Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B01] via-[#FF8A00] to-[#FF6B01]"></div>
          
          {/* Decorative Circles (matching the screenshot's subtle patterns) */}
          <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] border-[60px] border-white/5 rounded-full"></div>
          <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] border-[80px] border-white/5 rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Curved Bottom Mask */}
          <div className="absolute bottom-[-2px] left-0 w-full z-20">
            <svg viewBox="0 0 1440 120" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L1440 120L1440 0C1440 0 1080 120 720 120C360 120 0 40 0 40L0 120Z" />
            </svg>
          </div>
        </div>

        {/* Limited Time Offer Tab */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
          <div className="bg-[#FF6B01] text-white px-3 py-8 rounded-r-xl border-y border-r border-white/20 shadow-lg flex items-center justify-center [writing-mode:vertical-rl] rotate-180 font-bold tracking-widest text-sm">
            Limited Time Offer
            <div className="w-2 h-2 rounded-full bg-white mt-4 animate-pulse"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-12 lg:pt-15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-left">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight drop-shadow-md uppercase max-w-2xl">
                GET EXTRA 200GB TO STREAM, SCROLL, GAME & MORE!
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium mb-10 max-w-xl drop-shadow-sm">
                Get UNI5G Postpaid 39 online & enjoy FREE RM20 TNG Voucher!
              </p>
            </div>
            
            <div className="lg:col-span-5 flex justify-center items-center relative h-full">
              <div className="relative z-20 w-full max-w-[450px] lg:max-w-none transform hover:scale-110 transition-transform duration-700 animate-float">
                <img 
                  src="/images/200mb-RM1_HOMEPAGE-HERO_blurb.png" 
                  alt="Uni5G Postpaid 200GB for only RM1" 
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                  width={362} 
                  height={234}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section (Find the Best Plan) */}
      <section className="pt-24 pb-4 bg-white text-center overflow-hidden">
        <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Subtle Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(24,0,231,0.03)_0%,transparent_70%)] pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-[900] text-gray-900 mb-8 uppercase tracking-tighter leading-[0.9] drop-shadow-sm">
            FIND THE BEST UNLIMITED 
            <span className="text-[#1800E7]"> POSTPAID PLAN</span> FOR YOU
          </h2>
          
          <p className="text-1xl text-gray-500 max-w-auto mx-auto leading-relaxed font-bold tracking-tight opacity-90">
            Enjoy an unlimited postpaid plan experience for you and your family with the best mobile postpaid plan in Malaysia.<br className="hidden lg:block" />
            Explore our wide range of mobile plans tailored to suit every need, ensuring seamless connectivity wherever you go.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="pb-15 bg-white relative">
        <PostpaidPlans />
      </section>

      {/* Why Choose Section */}
      <section className="py-15 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(24,0,231,0.02)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,1,0.02)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-gray-900 mb-6 tracking-tighter uppercase leading-[1.1]">
              WHY POSTPAID USERS CHOOSE <br className="hidden md:block" />
              <span className="text-[#1800E7]">UNI5G POSTPAID MOBILE PLANS</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Experience the freedom of Unifi’s UNI5G postpaid plans, designed to meet every need with high-speed connectivity and unbeatable value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Feature 1 */}
            <div className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(24,0,231,0.08)] bg-gray-50/50 border border-transparent hover:border-gray-100">
              <div className="w-24 h-24 mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#1800E7]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <img 
                  src="/images/postpaid/connected.gif" 
                  alt="Stay Connected Anywhere" 
                  className="w-20 h-20 relative z-10 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Stay Connected Anywhere</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Our mobile postpaid plan offers postpaid unlimited data and the widest coverage to keep you connected at all times.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(24,0,231,0.08)] bg-gray-50/50 border border-transparent hover:border-gray-100">
              <div className="w-24 h-24 mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#1800E7]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <img 
                  src="/images/postpaid/switch.gif" 
                  alt="Easy Switch" 
                  className="w-20 h-20 relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Easy Switch</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Switching to our postpaid plan is simple, free, and gives you the freedom to choose the best option for your needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(24,0,231,0.08)] bg-gray-50/50 border border-transparent hover:border-gray-100">
              <div className="w-24 h-24 mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#1800E7]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <img 
                  src="/images/postpaid/overpopulation-unscreen.gif" 
                  alt="Family Plans" 
                  className="w-20 h-20 relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Family Plans</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                We offer affordable postpaid plans designed for family use, ensuring everyone stays connected with unlimited data.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(24,0,231,0.08)] bg-gray-50/50 border border-transparent hover:border-gray-100">
              <div className="w-24 h-24 mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#1800E7]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <img 
                  src="/images/postpaid/abroad.gif" 
                  alt="Stay Connected Abroad" 
                  className="w-20 h-20 relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Stay Connected Abroad</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Travel globally with peace of mind, using our mobile postpaid plan that offers unlimited data without hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PostpaidFAQ />
    </>
  );
}
