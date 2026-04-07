import React from 'react';

const FreeDeviceSection: React.FC = () => {
  const whatsappNumber = "601133383836";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in getting the FREE 5G smartphone with UNI5G Postpaid plan. Can you help me?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Enhanced Images Part */}
          <div className="flex-1 relative h-[320px] md:h-[450px] flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#1800E7]/5 rounded-full blur-[100px] scale-75 opacity-60"></div>
            
            {/* vivo Phone (Back) */}
            <div className="absolute left-4 md:left-[1%] bottom-6 md:bottom-12 w-[250px] md:w-[350px] z-10 transform -rotate-[8deg] hover:rotate-0 hover:scale-110 hover:z-30 transition-all duration-700 animate-float-slow">
              <div className="p-3 bg-white/30 backdrop-blur-[2px] rounded-[2.5rem] border border-gray-200/20 shadow-sm">
                <img 
                  src="/images/postpaid/vivo-phone.jpeg" 
                  alt="vivo 5G Smartphone"
                  className="w-full h-auto rounded-3xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>

            {/* Samsung Phone (Front) */}
            <div className="absolute right-4 md:right-[2%] top-6 md:top-12 w-[250px] md:w-[350px] z-20 transform rotate-[12deg] hover:rotate-0 hover:scale-110 hover:z-30 transition-all duration-700 animate-float">
              <div className="p-3 bg-white/40 backdrop-blur-[2px] rounded-[2.5rem] border border-gray-200/30 shadow-md">
                <img 
                  src="/images/postpaid/samsung-a06.jpeg" 
                  alt="Samsung Galaxy A06 5G"
                  className="w-full h-auto rounded-3xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
                />
              </div>
            </div>

            
          </div>

          {/* Text & Button Column */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase tracking-tight">
              Get Your <span className="text-[#1800E7]">5G Smartphone For </span> <span className="text-[#FF6B01]">FREE</span> With UNI5G Postpaid Plan!
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed">
              Upgrade today and enjoy unlimited 5G data along with the latest devices at RM0 upfront.
            </p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#25D366] text-white rounded-full font-black text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-xl shadow-green-200 uppercase tracking-widest gap-3"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat With Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeDeviceSection;
