import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { X } from "lucide-react";
import CoverageForm from "./CoverageForm";

export default function CoverageModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isThankYouRoute = router.pathname === "/thankyou";

  useEffect(() => {
    if (isThankYouRoute) {
      setIsOpen(false);
      return;
    }

    // Show modal after a short delay on mount
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isThankYouRoute]);

  useEffect(() => {
    const handleRouteChangeStart = () => setIsOpen(false);
    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.events]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  if (!isOpen || isThankYouRoute) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500" 
        onClick={closeModal}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] animate-in zoom-in slide-in-from-bottom-8 duration-500">
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 z-[10000] p-2 bg-white rounded-full shadow-lg border border-gray-100 text-gray-400 hover:text-[#1800E7] hover:scale-110 transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-0">
          <CoverageForm />
        </div>
      </div>
    </div>
  );
}
