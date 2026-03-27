import React from "react";
import Head from "next/head";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyBusiness() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Apply Unifi Business | New Application</title>
        <meta name="description" content="Official Unifi Business Broadband New Application Form. Sign up now for 100Mbps, 300Mbps, 500Mbps, or 1Gbps plans." />
      </Head>
      
      <main className="pt-20">
        <ApplicationForm initialType="business" />
      </main>
    </div>
  );
}
