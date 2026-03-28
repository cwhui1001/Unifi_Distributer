import React from "react";
import Head from "next/head";
import { Shield, Clock, Mail, Smartphone, Info, Lock, Eye, Share2, FileCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>When you use our website to inquire about or register for Unifi services, we may collect:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-bold">Personal Identification:</span> Name, NRIC/Passport number (for registration), and contact details (phone number, email).</li>
            <li><span className="font-bold">Installation Details:</span> Full address for coverage checking and installation purposes.</li>
            <li><span className="font-bold">Technical Data:</span> IP address, browser type, and usage data via cookies.</li>
          </ul>
        </div>
      )
    },
    {
      title: "2. How We Use Your Information",
      icon: <Info className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>We use the data collected for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To check Unifi service availability at your location.</li>
            <li>To process your application for Telekom Malaysia (TM) services.</li>
            <li>To contact you regarding your inquiry or subscription.</li>
            <li>To improve our website performance and user experience.</li>
            <li>To comply with legal obligations and TM’s registration requirements.</li>
          </ul>
        </div>
      )
    },
    {
      title: "3. Google Ads & Third-Party Advertising",
      icon: <Share2 className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>We use Google Ads Remarketing and Conversion Tracking. This means:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-bold">Cookies:</span> Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits to our website.</li>
            <li><span className="font-bold">Personalized Ads:</span> Information collected (like pages visited) may be used by Google to show you our ads on other sites across the internet.</li>
            <li><span className="font-bold">Opt-Out:</span> You can opt out of Google's use of cookies by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#1800E7] hover:underline font-bold">Google’s Ads Settings</a>.</li>
          </ul>
        </div>
      )
    },
    {
      title: "4. Disclosure of Information",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>We do not sell your data. However, as an authorized reseller/agent, we will share your information with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-bold">Telekom Malaysia (TM):</span> To process your internet service application.</li>
            <li><span className="font-bold">Authorized Technicians:</span> To facilitate the installation of your broadband service.</li>
            <li><span className="font-bold">Regulatory Bodies:</span> If required by Malaysian law.</li>
          </ul>
        </div>
      )
    },
    {
      title: "5. Data Security",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <p>We implement various security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure. We encourage you to use secure connections when submitting sensitive data.</p>
      )
    },
    {
      title: "6. Your Rights (PDPA Compliance)",
      icon: <FileCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Under the PDPA 2010, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access and request a copy of your personal data held by us.</li>
            <li>Correct or update any inaccurate information.</li>
            <li>Withdraw consent for us to process your data (this may affect our ability to provide services).</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/30">
      <Head>
        <title>Privacy Policy | unifi-online.my</title>
        <meta name="description" content="Privacy Policy for unifi-online.my. We respect your privacy and are committed to protecting your personal data in compliance with the Malaysian PDPA 2010." />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-[#1800E7]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Privacy <span className="text-[#FF7A00]">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-bold uppercase tracking-widest text-sm">
            <Clock className="w-4 h-4 text-[#FF7A00]" />
            Last Updated: 28/3/2026
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.05)] border border-gray-100">
          {/* Intro Text */}
          <p className="text-lg text-gray-700 leading-relaxed font-semibold mb-12 pb-10 border-b border-gray-100">
            At <span className="text-[#1800E7] font-black italic">unifi-online.my</span>, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information in compliance with the <span className="text-black font-extrabold underline decoration-[#FF7A00] decoration-2">Malaysian Personal Data Protection Act (PDPA) 2010</span> and Google Ads policies.
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-1.5 h-6 bg-[#FF7A00] rounded-full"></div>
                  <h2 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight italic">
                    {section.title}
                  </h2>
                </div>
                <div className="text-gray-600 leading-relaxed font-medium pl-0 md:pl-5 text-[15px] md:text-base">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact Block */}
            <div className="pt-12 mt-12 border-t border-gray-100">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight italic mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#1800E7] rounded-full"></span>
                7. Contact Us
              </h2>
              <p className="mb-10 text-gray-600 font-medium leading-relaxed">
                If you have any questions regarding this Privacy Policy or wish to update your data, please contact our Data Protection Lead:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="mailto:sales@unifi-online.my" className="group/item flex items-center gap-4 bg-gray-50 hover:bg-[#1800E7] p-6 rounded-2xl transition-all duration-300 border border-gray-100 hover:border-[#1800E7]">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1800E7] group-hover/item:scale-110 transition-transform shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-gray-400 group-hover/item:text-blue-100 tracking-widest mb-1">Email Support</div>
                    <div className="font-bold text-gray-900 group-hover/item:text-white transition-colors">sales@unifi-online.my</div>
                  </div>
                </a>
                
                <a href="https://wa.me/601133383836" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-4 bg-gray-50 hover:bg-green-600 p-6 rounded-2xl transition-all duration-300 border border-gray-100 hover:border-green-600">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-500 group-hover/item:scale-110 transition-transform shadow-sm">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-gray-400 group-hover/item:text-green-50 tracking-widest mb-1">WhatsApp/Phone</div>
                    <div className="font-bold text-gray-900 group-hover/item:text-white transition-colors">01133383836</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
