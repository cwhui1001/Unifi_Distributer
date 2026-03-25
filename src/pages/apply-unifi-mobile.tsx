import React from "react";
import Head from "next/head";
import MobileApplicationForm from "@/components/MobileApplicationForm";

export default function ApplyMobilePage() {
  return (
    <div className="min-h-screen bg-gray-50/30">
      <Head>
        <title>Apply unifi Mobile | Postpaid Plan Application</title>
        <meta name="description" content="Official unifi mobile application form. Sign up for UNI5G Postpaid and Family plans with unlimited 5G data." />
      </Head>

      <div className="relative pt-20 pb-10 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-[#FF7A00]/5 to-transparent skew-y-3 -translate-y-20 transform-gpu"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#1800E7]/5 to-transparent -skew-y-3 transform-gpu"></div>

        <div className="relative z-10">
          <MobileApplicationForm />
        </div>
      </div>
    </div>
  );
}
