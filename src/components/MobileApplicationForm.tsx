import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { 
  User, Mail, Phone, MapPin, Search, ChevronRight, Hash, Layers, 
  Globe, Send, CreditCard, Package, Check, Smartphone, 
  AlertCircle, Upload, CheckCircle2, RefreshCcw, Star
} from "lucide-react";
import Link from "next/link";

export default function MobileApplicationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    package: "",
    "choose-number": "New Number",
    "new-number1": "",
    "new-number2": "",
    "new-number3": "",
    "new-number4": "",
    "new-number5": "",
    "user-name": "",
    phone: "",
    "user-email": "",
    mykad: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    existing_user: "New",
    accept1: false,
  });

  useEffect(() => {
    if (router.isReady) {
      const { plan } = router.query;
      if (plan) {
        // Find the matching plan in mobilePlans
        const matchedPlan = mobilePlans.find(p => 
          p.toLowerCase().includes((plan as string).toLowerCase())
        );
        if (matchedPlan) {
          setFormData(prev => ({ ...prev, package: matchedPlan }));
        }
      }
    }
  }, [router.isReady, router.query]);

  const [files, setFiles] = useState<{
    mykad_front: File | null;
    mykad_back: File | null;
  }>({
    mykad_front: null,
    mykad_back: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const mobilePlans = [
    "UNI5G POSTPAID Mobile™ 39 - RM 39/month",
    "UNI5G POSTPAID Mobile™ 69 - RM 69/month",
    "UNI5G POSTPAID Mobile™ 99 - RM 99/month",
    "UNI5G POSTPAID Family™ 129 - RM 129/month",
    "UNI5G POSTPAID Family™ 159 - RM 159/month",
    "UNI5G POSTPAID Family™ 189 - RM 189/month",
  ];

  const telcos = [
    "New",
    "Maxis/Hotlink",
    "Unifi/WeBe (Existing)",
    "DiGi",
    "Celcom",
    "Others"
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.accept1) {
      alert("Please accept the terms and conditions.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", { ...formData, ...files });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const inputClasses = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1800E7] focus:border-transparent transition-all duration-300 placeholder:text-gray-400 placeholder:font-medium";
  const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1800E7]/60";
  const groupClasses = "relative group flex flex-col gap-1.5";
  const labelClasses = "text-[13px] font-black text-gray-900 uppercase tracking-wider ml-1 mb-1";

  if (isSuccess) {
    return (
      <div className="w-full max-w-4xl mx-auto py-20 px-4">
        <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] p-8 md:p-16 text-center border border-gray-100 animate-in fade-in zoom-in duration-700">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-100 shadow-inner">
            <Send className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight italic">
            <span className="text-[#FF7A00]">Mobile App</span> <span className="text-[#1800E7]">Received!</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium max-w-md mx-auto leading-relaxed">
            Awesome! Your Unifi Mobile application has been received. Our team will verify your details and contact you for the next steps.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/postpaid"
              className="px-8 py-4 bg-[#1800E7] text-white font-black rounded-full hover:bg-[#0C00B3] transition-all duration-300 shadow-xl shadow-blue-200 uppercase tracking-widest text-sm"
            >
              Back to Plans
            </Link>
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-8 py-4 bg-white text-[#1800E7] font-black rounded-full border-2 border-[#1800E7] hover:bg-gray-50 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Apply Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20 font-sans">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-6 tracking-tight uppercase">
          <span className="text-[#1800E7]">UNIFI MOBILE </span>
          <span className="text-[#FF7A00]">POSTPAID</span>
          <br />
          <span className="text-gray-900">APPLICATION FORM</span>
        </h1>
        <p className="text-center text-gray-500 font-bold max-w-2xl mx-auto leading-relaxed italic">
          Sign up for the latest UNI5G Postpaid and Family plans. High-speed 5G, unlimited data, and special online rewards await!
        </p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative">
        <div className="h-2 bg-gradient-to-r from-[#FF7A00] via-[#9D50E5] to-[#1800E7] w-full"></div>
        
        <form onSubmit={handleSubmit} className="p-6 md:p-12 lg:p-16 space-y-16">
          
          {/* Section 1: Mobile Plan */}
          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1800E7] flex items-center justify-center shadow-inner">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Select Mobile Plan</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={groupClasses}>
                <label className={labelClasses}>Select Plan</label>
                <div className="relative">
                  <Package className={iconClasses} />
                  <select 
                    name="package" 
                    required
                    className={`${inputClasses} pl-12 appearance-none cursor-pointer pr-10`}
                    value={formData.package}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose your UNI5G plan</option>
                    {mobilePlans.map(plan => (
                      <option key={plan} value={plan}>{plan}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                </div>
              </div>

              <div className={groupClasses}>
                <label className={labelClasses}>Choose your Number</label>
                <div className="relative">
                  <RefreshCcw className={iconClasses} />
                  <select 
                    name="choose-number" 
                    required
                    className={`${inputClasses} pl-12 appearance-none cursor-pointer pr-10`}
                    value={formData["choose-number"]}
                    onChange={handleInputChange}
                  >
                    <option value="New Number">New Number</option>
                    <option value="Switch to UniFi">Switch to UniFi (MNP)</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                </div>
              </div>
            </div>

            {/* Favorite Numbers Section - Only if New Number */}
            {formData["choose-number"] === "New Number" && (
              <div className="mt-10 p-8 bg-gray-50/50 rounded-3xl border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-5 h-5 text-[#FF7A00] fill-[#FF7A00]" />
                  <h3 className="font-black text-sm text-gray-800 uppercase tracking-wider">Favourite Number (Last 4 Digits)</h3>
                </div>
                <p className="text-xs text-gray-500 font-bold mb-6 italic">List up to 5 preferred last 4 digits (e.g., 8888, 1234). We'll try to match them for you!</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5].map(num => (
                    <div key={num} className="relative">
                      <input 
                        type="text" 
                        name={`new-number${num}`}
                        maxLength={4}
                        placeholder={`Choice ${num}`}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-center font-black text-gray-700 placeholder:text-gray-300 focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all uppercase"
                        value={(formData as any)[`new-number${num}`]}
                        onChange={handleInputChange}
                      />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-[10px] font-black text-[#FF7A00]">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Section 2: Applicant Information */}
          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF7A00] flex items-center justify-center shadow-inner">
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
                        required
                      />
                      <label 
                        htmlFor="mykad_front" 
                        className={`flex items-center justify-between px-4 py-3 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                          files.mykad_front ? "border-green-200 bg-green-50" : "border-gray-200 hover:border-[#1800E7] hover:bg-blue-50/30"
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${files.mykad_front ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                            <Upload className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            <span className="text-[11px] font-black uppercase text-gray-400">FRONT SIDE</span>
                            <span className="text-sm font-bold text-gray-700 truncate">
                              {files.mykad_front ? files.mykad_front.name : "Choose File"}
                            </span>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-black text-gray-500 uppercase">Browse</div>
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
                        required
                      />
                      <label 
                        htmlFor="mykad_back" 
                        className={`flex items-center justify-between px-4 py-3 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                          files.mykad_back ? "border-green-200 bg-green-50" : "border-gray-200 hover:border-[#1800E7] hover:bg-blue-50/30"
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${files.mykad_back ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                            <Upload className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            <span className="text-[11px] font-black uppercase text-gray-400">BACK SIDE</span>
                            <span className="text-sm font-bold text-gray-700 truncate">
                              {files.mykad_back ? files.mykad_back.name : "Choose File"}
                            </span>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-black text-gray-500 uppercase">Browse</div>
                      </label>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-wider">Supports JPG / PNG / PDF, maximum 5MB per file</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Delivery Address */}
          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#9D50E5] flex items-center justify-center shadow-inner">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">SIM Delivery Address</h2>
            </div>
            
            <div className="space-y-8">
              <div className={groupClasses}>
                <label className={labelClasses}>Address Line 1</label>
                <div className="relative">
                  <Hash className={iconClasses} />
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
                  <Hash className={iconClasses} />
                  <input 
                    type="text" 
                    name="address2" 
                    placeholder="E.g. Taman Jaya / Condo Name" 
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
                      placeholder="E.g. Petaling Jaya, Selangor" 
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
                      placeholder="E.g. 47301" 
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
                      {telcos.map(telco => (
                        <option key={telco} value={telco}>{telco}</option>
                      ))}
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
                <div className="w-6 h-6 border-2 border-gray-300 rounded-lg peer-checked:bg-[#1800E7] peer-checked:border-[#1800E7] transition-all flex items-center justify-center group-hover:border-[#1800E7]">
                  <Check className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity stroke-[4]" />
                </div>
              </div>
              <span className="text-gray-700 font-bold select-none leading-relaxed">
                I have read and agree to be bound by the <Link href="/tnc" className="text-[#1800E7] hover:underline decoration-2 underline-offset-4">Terms & Conditions</Link> accompanying the Unifi Mobile subscription.
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
              <div className="flex-1 font-black text-xl md:text-2xl tracking-[0.15em] text-white transition-all rounded-l-full flex justify-center items-center shadow-2xl bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-blue-200">
                {isSubmitting ? (
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-7 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="italic uppercase tracking-widest">Applying...</span>
                  </div>
                ) : (
                  <span className="translate-x-4 uppercase italic">Submit Mobile Application</span>
                )}
              </div>
              <div className="w-[8px] bg-white z-10 shrink-0"></div>
              <div 
                className="w-24 transition-all flex items-center justify-center shrink-0 shadow-2xl bg-[#1800E7] group-hover:bg-[#0C00B3] shadow-blue-200"
                style={{ clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)", borderTopRightRadius: "99px", borderBottomRightRadius: "99px" }}
              >
                <ChevronRight className="w-10 h-10 text-white group-hover:translate-x-2 transition-transform stroke-[3]" />
              </div>
            </button>
            <div className="mt-10 bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 text-center animate-pulse-slow">
              <div className="flex items-center justify-center gap-2 text-[#1800E7] mb-2">
                <AlertCircle className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase tracking-widest">Important Note</span>
              </div>
              <p className="text-[10px] text-gray-500 font-bold leading-relaxed max-w-lg mx-auto uppercase">
                Please ensure all provided information matches your official documents. Incomplete or incorrect applications may be delayed or cancelled.
              </p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
