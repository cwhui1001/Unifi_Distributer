import React, { useState, useEffect } from "react";
import Head from "next/head";
import FixedIpPlans from "../../components/FixedIpPlans";

export default function FixedIpPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Fixed IP | unifi Business</title>
      </Head>
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white h-[120vw] md:h-[23vh] lg:h-[22rem] xl:h-[67vh] 2xl:h-[50.8vh]">
        <div className="h-full overflow-hidden relative group">
          <div 
            className="flex h-full w-full transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1 */}
            <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full relative h-full">
              <div className="banner-content relative h-full w-full">
                <img 
                  alt="Fixed IP" 
                  loading="eager" 
                  className="max-w-full h-full w-full object-cover absolute hidden md:block" 
                  style={{ left: 0, top: 0 }} 
                  src="/images/business/fibre-web.png" 
                />
                <img 
                  alt="Fixed IP" 
                  loading="eager" 
                  className="max-w-full h-full w-full object-cover absolute block md:hidden" 
                  style={{ left: 0, top: 0 }} 
                  src="/images/business/fibre-mobi.png" 
                />
                <div className="relative h-full select-none pointer-events-none">
                  <div className="pointer-events-auto h-full">
                    <div className="h-full w-full">
                      <div className="flex flex-col md:flex-row h-full w-full md:justify-start justify-start">
                        <div className="h-full w-full">
                          <div className="mx-auto mt-16 flex h-full w-[70%] flex-col justify-start md:mx-0 md:-mt-14 md:ml-10 md:w-[48%] lg:mt-14 lg:w-1/2 xl:ml-32 xl:mt-0 xl:w-[40%] xl:justify-center 2xl:-mt-8 2xl:ml-[10%] 2xl:w-[32%]">
                            <h2 className="font-[900] text-3xl md:text-5xl uppercase leading-none text-[#005B9F]">Unifi</h2>
                            <h1 className="font-[900] text-4xl mt-2 md:text-6xl uppercase leading-none text-[#FF7A00]">Fixed IP</h1>
                            <p className="text-xl md:text-2xl mt-4 font-semibold text-[#005B9F] opacity-90 drop-shadow-sm">The Backbone of Secure Business Solutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slide 2 */}
            <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full relative h-full">
              <div className="banner-content relative h-full w-full">
                <img 
                  alt="wib desktop" 
                  loading="eager" 
                  className="max-w-full h-full w-full object-contain md:object-center absolute hidden md:block" 
                  style={{ left: 0, top: 0 }} 
                  src="/images/business/wib_desktop.png" 
                />
                <img 
                  alt="wib mobile" 
                  loading="eager" 
                  className="max-w-full h-full w-full object-contain md:object-center absolute block md:hidden" 
                  style={{ left: 0, top: 0 }} 
                  src="/images/business/wib_mobile.png" 
                />
                <div className="relative h-full select-none pointer-events-none">
                  <div className="pointer-events-auto h-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-50">
            <button 
              onClick={() => setCurrentSlide(0)} 
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === 0 ? 'bg-[#FF7A00]' : 'bg-gray-400/50 hover:bg-gray-400'}`}
              aria-label="Go to slide 1"
            ></button>
            <button 
              onClick={() => setCurrentSlide(1)} 
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === 1 ? 'bg-[#FF7A00]' : 'bg-gray-400/50 hover:bg-gray-400'}`}
              aria-label="Go to slide 2"
            ></button>
          </div>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 1 : 0))}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-50 hover:bg-white/40"
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 1 : 0))}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-50 hover:bg-white/40"
          >
            →
          </button>
        </div>
      </section>

      {/* Fixed IP Plans Section */}
      <FixedIpPlans />
    </>
  );
}
