import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const HomeFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can you tell me more about Unifi?",
      answer: "Unifi provides access to a digital lifestyle for Malaysians through its converged offerings of reliable internet connectivity, content and devices for everyone in a household.<br/><br/>We offer seamless internet connectivity at home and beyond through our fibre, wireless, mobile, and solutions that help consumers stay connected at all times."
    },
    {
      question: "What are the benefits if I subscribe to Unifi Home?",
      answer: "Unifi will enhance your high speed Internet, mobile and entertainment experience by providing the fastest internet speed, greater variety of entertainment options for you and the whole family, affordable mobile packages with unlimited data and better service stability. For more information or to subscribe to Unifi Home, email us at <a href='mailto:help@tm.com.my' class='text-[#1800E7] underline font-bold'>help@tm.com.my</a>"
    },
    {
      question: "Is there any penalty charge if I terminate my Unifi Home AFTER the minimum subscription period is over?",
      answer: "There will be no penalty charge for termination made after the minimum contract period (24 months)."
    },
    {
      question: "You can check Unifi service availability in your area via the following methods",
      answer: "(a) Check via Unifi portal at <a href='/check-coverage' class='text-[#1800E7] underline font-bold'>Check Coverage</a><br/>(b) Check via our digital channels below:<br/>Live Chat or MyUnifi app<br/>Facebook at facebook.com/weareunifi<br/>Twitter at @helpmeunifi<br/>Email to <a href='mailto:help@tm.com.my' class='text-[#1800E7] underline font-bold'>help@tm.com.my</a>"
    },
    {
      question: "Can I upgrade/downgrade my Unifi Home plan?",
      answer: "Yes, you are allowed to change to the higher/lower speed package at any time. However, depending on your package selection, you will be tied to a new contract period if the package offers better value such as it comes with a new device, discounted price or any other value added regardless of whether you are within or beyond the contract period."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="home-faq" className="bg-white py-24 relative overflow-hidden">
      {/* Background patterns matching the rest of the site */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(24,0,231,0.02)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-gray-900 mb-6 tracking-tighter uppercase leading-[1.1]">
            FREQUENTLY ASKED <span className="text-[#1800E7]">QUESTIONS</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#FF6B01] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`group border rounded-2xl transition-all duration-300 ${
                expandedIndex === index 
                ? "border-[#1800E7] bg-[#1800E7]/[0.02] shadow-lg shadow-blue-500/5 scale-[1.01]" 
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={expandedIndex === index}
              >
                <span className={`text-lg font-bold tracking-tight pr-8 transition-colors ${
                  expandedIndex === index ? "text-[#1800E7]" : "text-gray-900"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  expandedIndex === index 
                  ? "bg-[#1800E7] text-white rotate-180" 
                  : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                }`}>
                  <ChevronDown className="w-5 h-5" strokeWidth={3} />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100/50">
                  <div 
                    className="text-gray-600 leading-relaxed text-[15px] font-medium"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/tnc-and-faq/faq/home" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group cursor-pointer flex items-stretch h-[54px] w-full sm:w-auto min-w-[220px] decoration-transparent relative z-10 pointer-events-auto shadow-[0_5px_15px_rgba(24,0,231,0.2)] rounded-full overflow-hidden"
          >
            <div className="flex-1 font-extrabold text-[15px] tracking-wide text-white transition-all rounded-l-full flex justify-center items-center outline-none bg-[#1800E7] group-hover:bg-[#0C00B3] border-y-[2px] border-l-[2px] border-[#1800E7] group-hover:border-[#0C00B3] px-6">
              <span>View All FAQ</span>
            </div>
            <div className="w-[5px] bg-white z-10 shrink-0 shadow-sm"></div>
            <div 
              className="w-[48px] transition-all flex items-center justify-center shrink-0 bg-[#1800E7] group-hover:bg-[#0C00B3] border-y-[2px] border-r-[2px] border-[#1800E7] group-hover:border-[#0C00B3]"
              style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
            ></div>
          </a>

          <a 
            href="/tnc-and-faq/tnc/home" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group cursor-pointer flex items-stretch h-[54px] w-full sm:w-auto min-w-[220px] decoration-transparent relative z-10 pointer-events-auto shadow-[0_5px_15px_rgba(255,107,1,0.2)] rounded-full overflow-hidden"
          >
            <div className="flex-1 font-extrabold text-[15px] tracking-wide text-white transition-all rounded-l-full flex justify-center items-center outline-none bg-[#FF6B01] group-hover:bg-[#E05200] border-y-[2px] border-l-[2px] border-[#FF6B01] group-hover:border-[#E05200] px-6">
              <span>View T&C</span>
            </div>
            <div className="w-[5px] bg-white z-10 shrink-0 shadow-sm"></div>
            <div 
              className="w-[48px] transition-all flex items-center justify-center shrink-0 bg-[#FF6B01] group-hover:bg-[#E05200] border-y-[2px] border-r-[2px] border-[#FF6B01] group-hover:border-[#E05200]"
              style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
            ></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
