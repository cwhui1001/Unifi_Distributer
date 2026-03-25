import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyHome() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Apply Unifi Home Fibre | New Application</title>
        <meta name="description" content="Official Unifi Home Fibre Broadband New Application Form. Sign up now for 100Mbps, 300Mbps, 500Mbps, 1Gbps, or 2Gbps plans." />
      </Head>
      
      <Navbar />
      
      <main className="pt-20">
        <ApplicationForm initialType="home" />
      </main>
      
      <Footer />
    </div>
  );
}
