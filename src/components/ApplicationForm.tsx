import React, { useState, useEffect } from "react";
import { 
  User, Mail, Phone, MapPin, Search, ChevronRight, Hash, Layers, Home, 
  Navigation, Globe, Send, CreditCard, Calendar, Package, Check, 
  AlertCircle, Building2, Upload, FileText, CheckCircle2, X, Smartphone
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sendToWhatsApp } from "../utils/whatsapp";

interface ApplicationFormProps {
  initialType: "home" | "business";
}

export default function ApplicationForm({ initialType }: ApplicationFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    package: "",
    plan: "",
    installation_date: "",
    "user-name": "",
    phone: "",
    "user-email": "",
    mykad: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    existing_user: "",
    accept1: false,
  });

  useEffect(() => {
    if (router.isReady) {
      const { package: pkg, plan } = router.query;
      if (pkg || plan) {
        setFormData(prev => ({
          ...prev,
          package: (pkg as string) || prev.package,
          plan: (plan as string) || prev.plan
        }));
      }
    }
  }, [router.isReady, router.query]);

  const [files, setFiles] = useState<{
    mykad_front: File | null;
    mykad_back: File | null;
    utility_bill: File | null;
  }>({
    mykad_front: null,
    mykad_back: null,
    utility_bill: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const homePackages = ["Unifi Winback Special Promo Plan", "Unifi Home Plan"];
  const businessPackages = ["Unifi Business Broadband", "Unifi Air Biz", "Fixed IP"];

  const plansByPackage: Record<string, string[]> = {
    "Unifi Winback Special Promo Plan": ["100Mbps", "300Mbps", "500Mbps", "1Gbps"],
    "Unifi Home Plan": ["100Mbps", "300Mbps", "500Mbps", "1Gbps", "2Gbps"],
    "Unifi Business Broadband": ["100Mbps", "300Mbps", "500Mbps", "1Gbps"],
    "Unifi Air Biz": ["Unifi Air Biz 5G 99", "Unifi Air Biz 5G 149"],
    "Fixed IP": ["1 Fixed IP", "5 Fixed IP"],
  };

  const currentPackages = initialType === "home" ? homePackages : businessPackages;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selectedFiles } = e.target;
    if (selectedFiles && selectedFiles[0]) {
      setFiles((prev) => ({ ...prev, [name]: selectedFiles[0] }));
    }
  };

  const removeFile = (name: "mykad_front" | "mykad_back" | "utility_bill") => {
    setFiles(prev => ({ ...prev, [name]: null }));
    // Also clear the file input value
    const element = document.getElementById(name) as HTMLInputElement;
    if (element) element.value = "";
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.accept1) {
      alert("Please accept the terms and conditions.");
      return;
    }

    if (!files.mykad_front || !files.mykad_back) {
      alert("Please upload both the front and back side of your ID.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare attachments if files are selected
      const attachments = [];
      if (files.mykad_front) {
        const base64 = await fileToBase64(files.mykad_front);
        attachments.push({
          filename: `mykad_front_${formData["user-name"] || 'unnamed'}.${files.mykad_front.name.split('.').pop()}`,
          content: base64,
          encoding: 'base64'
        });
      }
      if (files.mykad_back) {
        const base64 = await fileToBase64(files.mykad_back);
        attachments.push({
          filename: `mykad_back_${formData["user-name"] || 'unnamed'}.${files.mykad_back.name.split('.').pop()}`,
          content: base64,
          encoding: 'base64'
        });
      }
      if (files.utility_bill) {
        const base64 = await fileToBase64(files.utility_bill);
        attachments.push({
          filename: `utility_bill_${formData["user-name"] || 'unnamed'}.${files.utility_bill.name.split('.').pop()}`,
          content: base64,
          encoding: 'base64'
        });
      }

      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Broadband Application",
          formData,
          attachments,
        }),
      });

      if (response.ok) {
        console.log("Form Submitted Successfully");
        // Send to WhatsApp first before UI changes
        const label = initialType === 'home' ? 'Home' : 'Business';
        sendToWhatsApp(`Unifi ${label} Broadband Application`, formData);
        await router.push("/thankyou");
      } else {
        let errorMessage = "Server error";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          errorMessage = "PHP script not found or server error (normal in local development).";
        }

        // Handle local testing fallback
        if (window.location.hostname === "localhost") {
          const label = initialType === 'home' ? 'Home' : 'Business';
          sendToWhatsApp(`Unifi ${label} Broadband Application (Fallback)`, formData);
          await router.push("/thankyou");
        } else {
          alert(`Failed to send application: ${errorMessage}`);
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
  const labelClasses = "text-[13px] font-black text-gray-900 uppercase tracking-wider ml-1 mb-1";

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      {/* Choice Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-10 tracking-tight uppercase">
          <span className="text-[#1800E7]">UNIFI {initialType} </span>
          <span className="text-[#FF7A00]">FIBRE BROADBAND</span>
          <br />
          <span className="text-gray-900">APPLICATION FORM</span>
        </h1>

        {/* Home/Business Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-16">
          <Link 
            href="/apply-unifi-home"
            className={`flex-1 py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all duration-500 shadow-lg ${
              initialType === "home" 
                ? "bg-[#1800E7] text-white shadow-blue-200 scale-105 z-10" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            <Home className="w-6 h-6" />
            HOME & PERSONAL
          </Link>
          <Link 
            href="/apply-unifi-business"
            className={`flex-1 py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all duration-500 shadow-lg ${
              initialType === "business" 
                ? "bg-[#FF7A00] text-white shadow-orange-200 scale-105 z-10" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            <Building2 className="w-6 h-6" />
            BUSINESS
          </Link>
        </div>

        
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative">
        <div className={`h-2 bg-gradient-to-r ${initialType === 'home' ? 'from-[#FF7A00] via-[#9D50E5] to-[#1800E7]' : 'from-[#1800E7] via-[#9D50E5] to-[#FF7A00]'} w-full`}></div>
        
        <form onSubmit={handleSubmit} className="p-6 md:p-12 lg:p-16 space-y-16">
          
          {/* Section 1: Plan Selection */}
          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
              <div className={`w-12 h-12 rounded-2xl ${initialType === 'home' ? 'bg-blue-50 text-[#1800E7]' : 'bg-orange-50 text-[#FF7A00]'} flex items-center justify-center shadow-inner`}>
                <Package className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Select Your Plan</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={groupClasses}>
                <label className={labelClasses}>Select Package</label>
                <div className="relative">
                  <Layers className={iconClasses} />
                  <select 
                    name="package" 
                    required
                    className={`${inputClasses} pl-12 appearance-none cursor-pointer pr-10`}
                    value={formData.package}
                    onChange={handleInputChange}
                  >
                    <option value="">Please select package</option>
                    {currentPackages.map(pkg => (
                      <option key={pkg} value={pkg}>{pkg}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                </div>
              </div>

              <div className={groupClasses}>
                <label className={labelClasses}>Select Plan</label>
                <div className="relative">
                  <Zap className={iconClasses} />
                  <select 
                    name="plan" 
                    required
                    disabled={!formData.package}
                    className={`${inputClasses} pl-12 appearance-none cursor-pointer pr-10 disabled:bg-gray-50 disabled:cursor-not-allowed`}
                    value={formData.plan}
                    onChange={handleInputChange}
                  >
                    <option value="">--- Please select ---</option>
                    {formData.package && plansByPackage[formData.package]?.map(plan => (
                      <option key={plan} value={plan}>{plan}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                </div>
              </div>

              <div className={groupClasses}>
                <label className={labelClasses}>Preferred Installation Date</label>
                <div className="relative">
                  <Calendar className={iconClasses} />
                  <select 
                    name="installation_date" 
                    required
                    className={`${inputClasses} pl-12 appearance-none cursor-pointer pr-10`}
                    value={formData.installation_date}
                    onChange={handleInputChange}
                  >
                    <option value="">Please select date</option>
                    <option value="Weekday">Weekday</option>
                    <option value="Saturday Morning">Saturday Morning</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Applicant Information */}
          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
              <div className={`w-12 h-12 rounded-2xl ${initialType === 'home' ? 'bg-orange-50 text-[#FF7A00]' : 'bg-blue-50 text-[#1800E7]'} flex items-center justify-center shadow-inner`}>
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Applicant Information</h2>
            </div>
            
            <div className="space-y-8">
              <div className={groupClasses}>
                <label className={labelClasses}>Full Name (as per MyKad/Passport)</label>
                <div className="relative">
                  <User className={iconClasses} />
                  <input 
                    type="text" 
                    name="user-name" 
                    placeholder="Full Name" 
                    className={`${inputClasses} pl-12 uppercase`}
                    required
                    value={formData["user-name"]}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={groupClasses}>
                  <label className={labelClasses}>Phone Number</label>
                  <div className="flex group">
                    <div className="bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl px-4 flex items-center justify-center text-gray-500 font-bold">
                      +60
                    </div>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="e.g. 12345678" 
                      className={`${inputClasses} rounded-l-none`}
                      required
                      value={formData.phone}
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
                      placeholder="e.g. youremail@gmail.com" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData["user-email"]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={groupClasses}>
                  <label className={labelClasses}>Identity Card / Passport Number</label>
                  <div className="relative">
                    <CreditCard className={iconClasses} />
                    <input 
                      type="text" 
                      name="mykad" 
                      placeholder="e.g. 880808038888" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData.mykad}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Attach Applicant IC / Passport / Visa</label>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="relative">
                      <input 
                        type="file" 
                        id="mykad_front" 
                        name="mykad_front" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                      />
                      <label 
                        htmlFor="mykad_front" 
                        className={`flex items-center justify-between px-4 py-3 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                          files.mykad_front ? "border-green-200 bg-green-50" : "border-gray-200 hover:border-[#1800E7] hover:bg-blue-50/30"
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden flex-1">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${files.mykad_front ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                            {files.mykad_front ? <CheckCircle2 className="w-4 h-4" /> : <Upload className="w-4 h-4" />}
                          </div>
                          <div className="flex flex-col overflow-hidden mr-auto">
                            <span className="text-[11px] font-black uppercase text-gray-400">FRONT SIDE</span>
                            <span className="text-sm font-bold text-gray-700 truncate">
                              {files.mykad_front ? files.mykad_front.name : "Choose File"}
                            </span>
                          </div>
                          {files.mykad_front && (
                            <button 
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeFile("mykad_front");
                              }}
                              className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors group/btn"
                              title="Remove file"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        {!files.mykad_front && (
                          <div className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-black text-gray-500 uppercase">Browse</div>
                        )}
                      </label>
                    </div>

                    <div className="relative">
                      <input 
                        type="file" 
                        id="mykad_back" 
                        name="mykad_back" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                      />
                      <label 
                        htmlFor="mykad_back" 
                        className={`flex items-center justify-between px-4 py-3 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                          files.mykad_back ? "border-green-200 bg-green-50" : "border-gray-200 hover:border-[#1800E7] hover:bg-blue-50/30"
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden flex-1">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${files.mykad_back ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                            {files.mykad_back ? <CheckCircle2 className="w-4 h-4" /> : <Upload className="w-4 h-4" />}
                          </div>
                          <div className="flex flex-col overflow-hidden mr-auto">
                            <span className="text-[11px] font-black uppercase text-gray-400">BACK SIDE</span>
                            <span className="text-sm font-bold text-gray-700 truncate">
                              {files.mykad_back ? files.mykad_back.name : "Choose File"}
                            </span>
                          </div>
                          {files.mykad_back && (
                            <button 
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeFile("mykad_back");
                              }}
                              className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors group/btn"
                              title="Remove file"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        {!files.mykad_back && (
                          <div className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-black text-gray-500 uppercase">Browse</div>
                        )}
                      </label>
                    </div>

                    <div className={groupClasses + " mt-4 md:mt-2"}>
                      <label className={labelClasses}>Attach water bill / electric bill / tenancy agreement</label>
                      <div className="relative">
                        <input 
                          type="file" 
                          id="utility_bill" 
                          name="utility_bill" 
                          className="hidden" 
                          onChange={handleFileChange}
                          accept="image/*,.pdf"
                        />
                        <label 
                          htmlFor="utility_bill" 
                          className={`flex items-center justify-between px-4 py-3 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                            files.utility_bill ? "border-green-200 bg-green-50" : "border-gray-200 hover:border-[#1800E7] hover:bg-blue-50/30"
                          }`}
                        >
                          <div className="flex items-center gap-3 overflow-hidden flex-1">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${files.utility_bill ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                              {files.utility_bill ? <CheckCircle2 className="w-4 h-4" /> : <Upload className="w-4 h-4" />}
                            </div>
                            <div className="flex flex-col overflow-hidden mr-auto">
                              <span className="text-[11px] font-black uppercase text-gray-400">SUPPORTING DOC</span>
                              <span className="text-sm font-bold text-gray-700 truncate">
                                {files.utility_bill ? files.utility_bill.name : "Choose File"}
                              </span>
                            </div>
                            {files.utility_bill && (
                              <button 
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  removeFile("utility_bill");
                                }}
                                className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors group/btn"
                                title="Remove file"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          {!files.utility_bill && (
                            <div className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-black text-gray-500 uppercase">Browse</div>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-wider">Supports JPG / PNG / PDF, maximum 5MB per file</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Installation Address */}
          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
              <div className={`w-12 h-12 rounded-2xl ${initialType === 'home' ? 'bg-purple-50 text-[#9D50E5]' : 'bg-purple-50 text-[#9D50E5]'} flex items-center justify-center shadow-inner`}>
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Installation Address</h2>
            </div>
            
            <div className="space-y-8">
              <div className={groupClasses}>
                <label className={labelClasses}>Address Line 1</label>
                <div className="relative">
                  <Navigation className={iconClasses} />
                  <input 
                    type="text" 
                    name="address1" 
                    placeholder="E.g. No 1, Jalan 1/1" 
                    className={`${inputClasses} pl-12`}
                    required
                    value={formData.address1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={groupClasses}>
                <label className={labelClasses}>Address Line 2 (Optional)</label>
                <div className="relative">
                  <Navigation className={iconClasses} />
                  <input 
                    type="text" 
                    name="address2" 
                    placeholder="E.g. Taman Jaya" 
                    className={`${inputClasses} pl-12`}
                    value={formData.address2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={groupClasses}>
                  <label className={labelClasses}>City / State</label>
                  <div className="relative">
                    <Globe className={iconClasses} />
                    <input 
                      type="text" 
                      name="city" 
                      placeholder="E.g. Kuala Lumpur, Selangor" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={groupClasses}>
                  <label className={labelClasses}>Postcode</label>
                  <div className="relative">
                    <Search className={iconClasses} />
                    <input 
                      type="text" 
                      name="postcode" 
                      placeholder="E.g. 50000" 
                      className={`${inputClasses} pl-12`}
                      required
                      value={formData.postcode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={groupClasses}>
                  <label className={labelClasses}>Existing User?</label>
                  <div className="relative">
                    <Layers className={iconClasses} />
                    <select 
                      name="existing_user" 
                      required
                      className={`${inputClasses} pl-12 appearance-none cursor-pointer pr-10`}
                      value={formData.existing_user}
                      onChange={handleInputChange}
                    >
                      <option value="">Please select</option>
                      <option value="No">No</option>
                      <option value="Maxis Fibre">Maxis Fibre</option>
                      <option value="Unifi">Unifi</option>
                      <option value="Streamyx">Streamyx</option>
                      <option value="Time Fibre">Time Fibre</option>
                      <option value="Symphonet">Symphonet</option>
                      <option value="Others">Others</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Terms */}
          <section className="bg-gray-50/80 rounded-3xl p-6 md:p-10 border border-gray-100">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative mt-1">
                <input 
                  type="checkbox" 
                  name="accept1" 
                  className="peer hidden" 
                  checked={formData.accept1}
                  onChange={handleInputChange}
                  required
                />
                <div className={`w-6 h-6 border-2 rounded-lg transition-all flex items-center justify-center shadow-sm ${formData.accept1 ? 'bg-[#1800E7] border-[#1800E7]' : 'border-gray-300 bg-white group-hover:border-[#1800E7]'}`}>
                  {formData.accept1 && (
                    <Check className="w-4 h-4 text-white stroke-[4]" />
                  )}
                </div>
              </div>
              <span className="text-gray-700 font-bold select-none leading-relaxed">
                I have read, understood and agree to be bound by the <Link href="/tnc-and-faq/tnc/home" className="text-[#1800E7] hover:underline decoration-2 underline-offset-4">Terms & Conditions</Link> accompanying the subscription of the product(s) and/or service(s).
              </span>
            </label>
          </section>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative flex items-stretch h-[74px] group cursor-pointer transition-all duration-300 disabled:opacity-70 disabled:grayscale disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className={`flex-1 font-black text-xl md:text-2xl tracking-[0.15em] text-white transition-all rounded-l-full flex justify-center items-center shadow-2xl ${initialType === 'home' ? 'bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-blue-200' : 'bg-[#FF7A00] group-hover:bg-[#E05200] shadow-orange-200'}`}>
                {isSubmitting ? (
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-7 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="italic uppercase">Processing...</span>
                  </div>
                ) : (
                  <span className="translate-x-4 uppercase italic">Submit Application</span>
                )}
              </div>
              <div className="w-[8px] bg-white z-10 shrink-0"></div>
              <div 
                className={`w-24 transition-all flex items-center justify-center shrink-0 shadow-2xl ${initialType === 'home' ? 'bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-blue-200' : 'bg-[#FF7A00] group-hover:bg-[#E05200] shadow-orange-200'}`}
                style={{ clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
              >
                <ChevronRight className="w-10 h-10 text-white group-hover:translate-x-2 transition-transform stroke-[3]" />
              </div>
            </button>
            <p className="text-center text-gray-400 font-bold text-xs mt-8 uppercase tracking-[0.2em]">
              Safe & Secure Application • No Hidden Charges
            </p>
          </div>

        </form>
      </div>
      
      {/* Visual Support Icons */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex flex-col items-center gap-3">
          <ShieldCheck className="w-10 h-10" />
          <span className="text-[10px] font-black uppercase">Official Distributor</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <CheckCircle2 className="w-10 h-10" />
          <span className="text-[10px] font-black uppercase">Verified Process</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FileText className="w-10 h-10" />
          <span className="text-[10px] font-black uppercase">Standard Contract</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Globe className="w-10 h-10" />
          <span className="text-[10px] font-black uppercase">Nationwide Coverage</span>
        </div>
      </div>
    </div>
  );
}

function Zap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.71 13 3l-1.4 8.29H20L11 21l1.4-8.29H4z" />
    </svg>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
