import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Phone, Building2, MapPin, Search, ChevronRight, Hash, Layers, Home, Navigation, Globe, Send, Smartphone } from "lucide-react";

export default function CoverageForm() {
  const [formData, setFormData] = useState({
    "user-name": "",
    "user-email": "",
    "user-contact": "",
    "building_name": "",
    "floor_no": "",
    "unit_no": "",
    "block_no": "",
    "street": "",
    "section_no": "",
    "city": "",
    "telco": "No",
    "postcode": "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        setIsSuccess(true);
        // Also send to WhatsApp
        import("../utils/whatsapp").then(({ sendToWhatsApp }) => {
          sendToWhatsApp("Coverage Check Request", formData);
        });
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
          setIsSuccess(true);
          import("../utils/whatsapp").then(({ sendToWhatsApp }) => {
            sendToWhatsApp("Coverage Check Request (Fallback)", formData);
          });
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

  const inputClasses = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1800E7] focus:border-transparent transition-all duration-300 placeholder:text-gray-400 placeholder:font-medium";
  const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1800E7]/60";
  const groupClasses = "relative group flex flex-col gap-1.5";
  const labelClasses = "text-[13px] font-black text-gray-900 uppercase tracking-wider ml-1";

  if (isSuccess) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-16 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-100 shadow-inner">
          <Send className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Request Received!</h2>
        <p className="text-gray-600 text-lg font-medium max-w-md mx-auto leading-relaxed">
          Thank you for checking your coverage. Our team will verify your location and get back to you within 24 hours.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              import("../utils/whatsapp").then(({ sendToWhatsApp }) => {
                sendToWhatsApp("Coverage Check Request", formData);
              });
            }}
            className="px-8 py-4 bg-green-500 text-white font-black rounded-full hover:bg-green-600 transition-all duration-300 shadow-xl shadow-green-200 uppercase tracking-widest text-sm flex items-center justify-center gap-2"
          >
            <Smartphone className="w-5 h-5" />
            Chat on WhatsApp
          </button>
          <button 
            onClick={() => setIsSuccess(false)}
            className="px-8 py-4 bg-[#1800E7] text-white font-black rounded-full hover:bg-[#0C00B3] transition-all duration-300 shadow-xl shadow-blue-200 uppercase tracking-widest text-sm"
          >
            Verify Another Address
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative">
        <div className="h-2 bg-gradient-to-r from-[#FF7A00] via-[#9D50E5] to-[#1800E7] w-full"></div>
        
        <div className="p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 uppercase tracking-tight select-none">
              Check unifi Coverage
            </h2>
            <p className="text-gray-500 font-bold text-lg select-none">
              Enter your details below to see if unifi is available in your area.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Personal Information */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <User className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="font-black text-lg text-gray-800 uppercase tracking-tight">Personal Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className={groupClasses}>
                  <label className={labelClasses}>Full Name</label>
                  <div className="relative">
                    <User className={iconClasses} />
                    <input 
                      type="text" 
                      name="user-name" 
                      placeholder="Name" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["user-name"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Email Address</label>
                  <div className="relative">
                    <Mail className={iconClasses} />
                    <input 
                      type="email" 
                      name="user-email" 
                      placeholder="Email Address" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["user-email"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Contact Number</label>
                  <div className="relative">
                    <Phone className={iconClasses} />
                    <input 
                      type="tel" 
                      name="user-contact" 
                      placeholder="Contact Number" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["user-contact"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Building Details */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-3 mt-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-black text-lg text-gray-800 uppercase tracking-tight">Installation Address</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className={groupClasses}>
                  <label className={labelClasses}>Building Unit</label>
                  <div className="relative">
                    <Home className={iconClasses} />
                    <input 
                      type="text" 
                      name="building_name" 
                      placeholder="Building Unit" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["building_name"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Building Floor</label>
                  <div className="relative">
                    <Layers className={iconClasses} />
                    <input 
                      type="text" 
                      name="floor_no" 
                      placeholder="Building Floor" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["floor_no"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Building Block</label>
                  <div className="relative">
                    <Hash className={iconClasses} />
                    <input 
                      type="text" 
                      name="unit_no" 
                      placeholder="Building Block" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["unit_no"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Building Name</label>
                  <div className="relative">
                    <Building2 className={iconClasses} />
                    <input 
                      type="text" 
                      name="block_no" 
                      placeholder="Building Name" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["block_no"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className={groupClasses}>
                  <label className={labelClasses}>Street Name</label>
                  <div className="relative">
                    <Navigation className={iconClasses} />
                    <input 
                      type="text" 
                      name="street" 
                      placeholder="Street Name" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["street"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Section</label>
                  <div className="relative">
                    <MapPin className={iconClasses} />
                    <input 
                      type="text" 
                      name="section_no" 
                      placeholder="Section" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["section_no"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>City/State</label>
                  <div className="relative">
                    <Globe className={iconClasses} />
                    <input 
                      type="text" 
                      name="city" 
                      placeholder="City/State" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["city"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className={groupClasses}>
                  <label className={labelClasses}>Postcode</label>
                  <div className="relative">
                    <Search className={iconClasses} />
                    <input 
                      type="text" 
                      name="postcode" 
                      placeholder="Postcode" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["postcode"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Current Telco Service</label>
                  <div className="relative">
                    <Layers className={iconClasses} />
                    <select 
                      name="telco" 
                      className={`${inputClasses} pl-12 appearance-none cursor-pointer`}
                      value={formData["telco"]}
                      onChange={handleInputChange}
                    >
                      <option value="No">No</option>
                      <option value="Unifi">Unifi</option>
                      <option value="Streamxy">Streamxy</option>
                      <option value="Maxis">Maxis</option>
                      <option value="Time Fibre">Time Fibre</option>
                      <option value="Symphonet">Symphonet</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-stretch h-[60px] group cursor-pointer transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="flex-1 font-black text-lg tracking-widest text-white transition-all rounded-l-full flex justify-center items-center bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-[0_10px_25px_rgba(24,0,231,0.2)]">
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>CHECKING...</span>
                    </div>
                  ) : (
                    <span className="translate-x-3 uppercase">Check Coverage Now</span>
                  )}
                </div>
                <div className="w-[5px] bg-white z-10 shrink-0"></div>
                <div 
                  className="w-16 transition-all flex items-center justify-center shrink-0 bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-[0_10px_25px_rgba(24,0,231,0.2)]"
                  style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 font-bold text-sm select-none">
        <p>By submitting this form, you agree to being contacted for unifi coverage verification and promotions.</p>
      </div>
    </div>
  );
}
