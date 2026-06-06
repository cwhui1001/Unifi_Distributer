import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { User, Mail, Phone, Building2, MapPin, Search, ChevronRight, Hash, Layers, Home, Navigation, Globe, Send, Smartphone } from "lucide-react";

export default function CoverageForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    "user-name": "",
    "user-contact": "",
    "building_name": "",
    "full_address": "",
    "plan": "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Coverage Check Request",
          formData,
        }),
      });

      if (response.ok) {
        console.log("Coverage form submitted successfully");
        // Also send to WhatsApp
        import("../utils/whatsapp").then(({ sendToWhatsApp }) => {
          sendToWhatsApp("Coverage Check Request", formData);
        });
        await router.push("/thankyou");
      } else {
        let errorMessage = "Server error";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          errorMessage = "PHP script not found or server error (this is normal in local development).";
        }
        
        // Even if email fails locally, we can still trigger WhatsApp for testing
        if (window.location.hostname === "localhost") {
          import("../utils/whatsapp").then(({ sendToWhatsApp }) => {
            sendToWhatsApp("Coverage Check Request (Fallback)", formData);
          });
          await router.push("/thankyou");
        } else {
          alert(`Failed to submit request: ${errorMessage}`);
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = compact
    ? "w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1800E7] focus:border-transparent transition-all duration-300 placeholder:text-gray-400 placeholder:font-medium text-sm"
    : "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1800E7] focus:border-transparent transition-all duration-300 placeholder:text-gray-400 placeholder:font-medium";
  const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1800E7]/60";
  const groupClasses = "relative group flex flex-col gap-1.5";
  const labelClasses = compact
    ? "text-[11px] font-black text-gray-900 uppercase tracking-wider ml-1"
    : "text-[13px] font-black text-gray-900 uppercase tracking-wider ml-1";

  return (
    <div className={`w-full mx-auto ${compact ? "max-w-2xl" : "max-w-5xl"} flex flex-col h-full`}>
      <div className={`bg-white shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative flex-1 flex flex-col ${compact ? "rounded-[1.5rem]" : "rounded-[2rem]"}`}>
        <div className="h-2 bg-gradient-to-r from-[#FF7A00] via-[#9D50E5] to-[#1800E7] w-full"></div>
        
        <div className={`flex-1 flex flex-col ${compact ? "p-6 sm:p-8" : "p-8 md:p-12"}`}>
          <div className={`text-center ${compact ? "mb-6" : "mb-12"}`}>
            <h2 className={`font-black text-gray-900 mb-1.5 uppercase tracking-tight select-none ${compact ? "text-xl sm:text-2xl" : "text-3xl md:text-4xl"}`}>
              Check unifi Coverage
            </h2>
            <p className={`text-gray-500 font-bold select-none ${compact ? "text-sm" : "text-lg"}`}>
              Enter your details below to see if unifi is available in your area.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`flex-1 flex flex-col justify-between ${compact ? "space-y-4" : "space-y-8"}`}>
            <div className="space-y-6 flex-1">
              {/* Full Name */}
              <div className={groupClasses}>
                <label className={labelClasses}>Full Name *</label>
                <input 
                  type="text" 
                  name="user-name" 
                  placeholder="e.g. Ahmad bin Ali" 
                  className={inputClasses}
                  required
                  value={formData["user-name"]}
                  onChange={handleInputChange}
                />
              </div>

              {/* Phone Number */}
              <div className={groupClasses}>
                <label className={labelClasses}>Phone Number *</label>
                <input 
                  type="tel" 
                  name="user-contact" 
                  placeholder="e.g. 011-1234 5678" 
                  className={inputClasses}
                  required
                  value={formData["user-contact"]}
                  onChange={handleInputChange}
                />
              </div>

              {/* Full Address */}
              <div className={groupClasses}>
                <label className={labelClasses}>Full Address *</label>
                <textarea 
                  name="full_address" 
                  placeholder="e.g. No 12, Jalan Ampang, 50450 Kuala Lumpur" 
                  className={`${inputClasses} resize-none h-20`}
                  required
                  value={formData["full_address"]}
                  onChange={handleInputChange}
                />
              </div>

              {/* Building Name */}
              <div className={groupClasses}>
                <label className={labelClasses}>Building Name</label>
                <input 
                  type="text" 
                  name="building_name" 
                  placeholder="e.g. Menara 118" 
                  className={inputClasses}
                  value={formData["building_name"]}
                  onChange={handleInputChange}
                />
              </div>

              {/* Interested Plan */}
              <div className={groupClasses}>
                <label className={labelClasses}>Interested Plan *</label>
                <div className="relative">
                  <select 
                    name="plan" 
                    className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                    required
                    value={formData["plan"]}
                    onChange={handleInputChange}
                  >
                    <option value="">Please select plan</option>
                    <optgroup label="Unifi Home Fibre">
                      <option value="100Mbps (RM89/mth)">100Mbps (RM89/mth)</option>
                      <option value="300Mbps (RM129/mth)">300Mbps (RM129/mth)</option>
                      <option value="500Mbps (RM149/mth)">500Mbps (RM149/mth)</option>
                      <option value="1Gbps (RM249/mth)">1Gbps (RM249/mth)</option>
                      <option value="2Gbps (RM319/mth)">2Gbps (RM319/mth)</option>
                    </optgroup>
                    <optgroup label="Unifi Business Fibre">
                      <option value="Business 100Mbps (RM139/mth)">Business 100Mbps (RM139/mth)</option>
                      <option value="Business 300Mbps (RM249/mth)">Business 300Mbps (RM249/mth)</option>
                      <option value="Business 500Mbps (RM299/mth)">Business 500Mbps (RM299/mth)</option>
                      <option value="Business 1Gbps (RM399/mth)">Business 1Gbps (RM399/mth)</option>
                    </optgroup>
                    <optgroup label="Unifi Air Biz (Wireless)">
                      <option value="Unifi Air Biz 5G 99 (RM99/mth)">Unifi Air Biz 5G 99 (RM99/mth)</option>
                      <option value="Unifi Air Biz 5G 149 (RM149/mth)">Unifi Air Biz 5G 149 (RM149/mth)</option>
                    </optgroup>
                    <optgroup label="Fixed IP Add-on">
                      <option value="1 Fixed IP (RM200/mth)">1 Fixed IP (RM200/mth)</option>
                      <option value="5 Fixed IP (RM300/mth)">5 Fixed IP (RM300/mth)</option>
                    </optgroup>
                    <optgroup label="Unifi Mobile Postpaid">
                      <option value="UNI5G Postpaid 39 (RM39/mth)">UNI5G Postpaid 39 (RM39/mth)</option>
                      <option value="UNI5G Postpaid 69 (RM69/mth)">UNI5G Postpaid 69 (RM69/mth)</option>
                      <option value="UNI5G Postpaid 99 (RM99/mth)">UNI5G Postpaid 99 (RM99/mth)</option>
                      <option value="UNI5G Postpaid Family 129 (RM129/mth)">UNI5G Postpaid Family 129 (RM129/mth)</option>
                      <option value="UNI5G Postpaid Family 159 (RM159/mth)">UNI5G Postpaid Family 159 (RM159/mth)</option>
                      <option value="UNI5G Postpaid Family 189 (RM189/mth)">UNI5G Postpaid Family 189 (RM189/mth)</option>
                    </optgroup>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                </div>
              </div>
            </div>

            

            <div className={compact ? "pt-4" : "pt-8"}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-stretch group cursor-pointer transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${compact ? "h-[46px]" : "h-[60px]"}`}
              >
                <div className={`flex-1 font-black tracking-widest text-white transition-all rounded-l-full flex justify-center items-center bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-[0_10px_25px_rgba(24,0,231,0.2)] ${compact ? "text-sm" : "text-lg"}`}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>CHECKING...</span>
                    </div>
                  ) : (
                    <span className="translate-x-3 uppercase">Check Coverage Now</span>
                  )}
                </div>
                <div className="w-[4px] bg-white z-10 shrink-0"></div>
                <div 
                  className={`transition-all flex items-center justify-center shrink-0 bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-[0_10px_25px_rgba(24,0,231,0.2)] ${compact ? "w-12" : "w-16"}`}
                  style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
                >
                  <ChevronRight className={`text-white group-hover:translate-x-1 transition-transform ${compact ? "w-4 h-4" : "w-6 h-6"}`} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      {!compact && (
        <div className="mt-12 text-center text-gray-400 font-bold text-sm select-none pb-12">
          <p>By submitting this form, you agree to being contacted for unifi coverage verification and promotions.</p>
        </div>
      )}
    </div>
  );
}
