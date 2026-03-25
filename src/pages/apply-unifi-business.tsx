import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyBusiness() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Apply Unifi Business | New Application</title>
        <meta name="description" content="Official Unifi Business Broadband New Application Form. Sign up now for 100Mbps, 300Mbps, 500Mbps, or 1Gbps plans." />
      </Head>
      
      <Navbar />
      
      <main className="pt-20">
        <ApplicationForm initialType="business" />
      </main>
      
      <Footer />
    </div>
  );
}
