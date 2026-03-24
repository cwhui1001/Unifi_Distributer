import React, { useState } from "react";
import { ChevronDown, MessageCircle, Smartphone, HelpCircle } from "lucide-react";

const PostpaidFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are UNI5G Postpaid plans?",
      answer: "UNI5G Postpaid is the latest postpaid plan from Unifi Mobile that provides you with the most UPSIZED value. It offers convergence benefits for both mobile and home services and ensures seamless onboarding into 5G devices for you."
    },
    {
      question: "Who is eligible to subscribe to the UNI5G Postpaid plans?",
      answer: "All of you! We welcome everyone; Malaysian or Non-Malaysian, aged 18 years and above, to subscribe to our new UNI5G Postpaid plans."
    },
    {
      question: "How do I get the FREE RM20 Touch ‘n Go voucher?",
      answer: (
        <>
          This promotion is <strong>only applicable when you subscribe to UNI5G Postpaid 39</strong> and is <strong>exclusive to online channels</strong>: Unifi Self Care, Portal (Postpaid), MyUnifi App, and Unifi UniVerse App. Enter promo code <strong>KONGSI20</strong> on the <strong>Review Order</strong> page during checkout and activate your SIM successfully to receive your FREE RM20 Touch ‘n Go voucher.
        </>
      )
    },
    {
      question: "Will there be a limit to the maximum no. of lines that I can subscribe to?",
      answer: (
        <>
          Yes, you are entitled to sign up for a maximum of three (3) Principal lines per NRIC/Passport and maximum of five (5) supplementary lines per principal (FREE & Chargeable Supplementary Lines)
          <br /><br />
          UNI5G Postpaid Supplementary 39 is only applicable for the Family Plans.
        </>
      )
    },
    {
      question: "Can I port in another telco mobile number to UNI5G Postpaid Plan?",
      answer: "Yes. You can port in and subscribe to UNI5G Postpaid plans, provided you do not have any outstanding balance, are not blacklisted, or under contract with your current mobile service provider."
    },
    {
      question: "Are there any delivery charges for the SIM card if I opt for delivery?",
      answer: "Yes, there is a delivery charge of RM10.60 per delivery in a single order."
    },
    {
      question: "How do I set up and fix issues with iMessage or Personal Hotspot on my iPhone?",
      answer: (
        <div className="space-y-4">
          <div>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-bold">To activate iMessage & Facetime:</li>
            </ul>
            <p className="mt-2 text-gray-600">
              Go to <strong>Settings</strong> &gt; Select <strong>Message</strong> or <strong>Facetime</strong> &gt; Enable <strong>iMessage</strong> or <strong>Facetime</strong> toggle function &gt; Click <strong>OK</strong> on the message prompt.
            </p>
            <p className="mt-2 text-gray-500 italic text-sm">
              It is highly recommended that you activate iMessage and Facetime services by using your Apple ID.
            </p>
          </div>
          <div>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-bold">To enable Personal Hotspot on your iPhone:</li>
            </ul>
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-600">
              <li>Go to <strong>Settings &gt; Mobile Service &gt; Mobile Data Network.</strong></li>
              <li>Under <strong>Personal Hotspot</strong>, enter ‘unifi’ in the <strong>APN</strong> &amp; <strong>Username</strong> fields (leave Password blank).</li>
              <li>Return to <strong>Mobile Service</strong> settings and tap <strong>Personal Hotspot</strong> and switch on <strong>Allow Others to Join</strong>.</li>
            </ol>
            <p className="mt-3 text-gray-600">
              You're all set to share your internet! If Personal Hotspot doesn’t appear, try restarting your phone and checking your APN settings again.
            </p>
          </div>
        </div>
      )
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="postpaid-faq" className="bg-white py-24 relative overflow-hidden">
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
                  <div className="text-gray-600 leading-relaxed text-[15px] font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/tnc-and-faq/faq/postpaid" 
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
            href="/tnc-and-faq/tnc/postpaid" 
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

export default PostpaidFAQ;
