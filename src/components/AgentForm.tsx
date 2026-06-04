import React, { useState } from "react";
import { useRouter } from "next/router";
import { User, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export default function AgentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    "user-name": "",
    "user-contact": "",
    "user-email": "",
    "region": "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          formType: "Join TM unifi Agent",
          formData,
        }),
      });

      if (response.ok) {
        console.log("Agent form submitted successfully");
        // Trigger WhatsApp submission
        import("../utils/whatsapp").then(({ sendToWhatsApp }) => {
          sendToWhatsApp("Join TM unifi Agent", formData);
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
        
        // Even if email fails locally, trigger WhatsApp for testing
        if (window.location.hostname === "localhost") {
          import("../utils/whatsapp").then(({ sendToWhatsApp }) => {
            sendToWhatsApp("Join TM unifi Agent (Fallback)", formData);
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

  const inputClasses = "w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1800E7] focus:border-transparent transition-all duration-300 placeholder:text-gray-400 placeholder:font-medium text-sm";
  const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1800E7]/60 group-focus-within:text-[#1800E7] transition-colors";
  const groupClasses = "relative group flex flex-col gap-1.5 w-full";
  const labelClasses = "text-[11px] font-black text-gray-900 uppercase tracking-wider ml-1";

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden relative">
        <div className="h-2 bg-gradient-to-r from-[#FF7A00] via-[#9D50E5] to-[#1800E7] w-full"></div>
        
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1.5 uppercase tracking-tight">
              Join TM unifi Agent
            </h2>
            <p className="text-gray-500 font-bold text-sm">
              Join us now by filling up the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Name */}
            <div className={groupClasses}>
              <label className={labelClasses}>Name *</label>
              <div className="relative w-full">
                <input 
                  type="text" 
                  name="user-name" 
                  placeholder="Name" 
                  className={inputClasses}
                  required
                  value={formData["user-name"]}
                  onChange={handleInputChange}
                />
                <User className={iconClasses} />
              </div>
            </div>

            {/* Contact Number */}
            <div className={groupClasses}>
              <label className={labelClasses}>Contact Number *</label>
              <div className="relative w-full">
                <input 
                  type="tel" 
                  name="user-contact" 
                  placeholder="Whatsapp Number" 
                  className={inputClasses}
                  required
                  pattern="[0-9()#&amp;+*-=.]+"
                  title="Only numbers and phone characters (#, -, *, etc) are accepted."
                  value={formData["user-contact"]}
                  onChange={handleInputChange}
                />
                <Phone className={iconClasses} />
              </div>
            </div>

            {/* Email */}
            <div className={groupClasses}>
              <label className={labelClasses}>Email *</label>
              <div className="relative w-full">
                <input 
                  type="email" 
                  name="user-email" 
                  placeholder="Email" 
                  className={inputClasses}
                  required
                  value={formData["user-email"]}
                  onChange={handleInputChange}
                />
                <Mail className={iconClasses} />
              </div>
            </div>

            {/* Region/Area */}
            <div className={groupClasses}>
              <label className={labelClasses}>Region/Area *</label>
              <div className="relative w-full">
                <input 
                  type="text" 
                  name="region" 
                  placeholder="Region/Area" 
                  className={inputClasses}
                  required
                  value={formData["region"]}
                  onChange={handleInputChange}
                />
                <MapPin className={iconClasses} />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-stretch h-[46px] group cursor-pointer transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="flex-1 font-black text-sm tracking-widest text-white transition-all rounded-l-full flex justify-center items-center bg-[#FF7A00] group-hover:bg-[#e06b00] shadow-[0_8px_20px_rgba(255,122,0,0.2)]">
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>SUBMITTING...</span>
                    </div>
                  ) : (
                    <span className="translate-x-3 uppercase">Submit</span>
                  )}
                </div>
                <div className="w-[4px] bg-white z-10 shrink-0"></div>
                <div 
                  className="w-12 transition-all flex items-center justify-center shrink-0 bg-[#FF7A00] group-hover:bg-[#e06b00] shadow-[0_8px_20px_rgba(255,122,0,0.2)]"
                  style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
                >
                  <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
