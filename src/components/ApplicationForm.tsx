import React, { useState, useEffect } from "react";
import { 
  User, Mail, Phone, MapPin, Search, ChevronRight, Hash, Layers, Home, 
  Navigation, Globe, Send, CreditCard, Calendar, Package, Check, 
  AlertCircle, Building2, Upload, FileText, CheckCircle2, X
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

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
  }>({
    mykad_front: null,
    mykad_back: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
            <span className="text-[#FF7A00]">Application</span> <span className="text-[#1800E7]">Received!</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium max-w-md mx-auto leading-relaxed">
            Thank you for applying. Our agents will process your application and contact you within 24 hours to finalize details.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-4 bg-[#1800E7] text-white font-black rounded-full hover:bg-[#0C00B3] transition-all duration-300 shadow-xl shadow-blue-200 uppercase tracking-widest text-sm"
            >
              Return Home
            </Link>
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-8 py-4 bg-white text-[#1800E7] font-black rounded-full border-2 border-[#1800E7] hover:bg-gray-50 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              New Application
            </button>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Notice Card */}
        <div className="bg-orange-50/50 border-l-8 border-[#FF7A00] rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm animate-pulse-slow">
          <div className="flex gap-4">
            <AlertCircle className="w-8 h-8 text-[#FF7A00] shrink-0 mt-1" />
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                Kindly be informed that we can only assist customers who want to do <strong className="text-[#1800E7]">NEW APPLICATION</strong>. For <strong>RELOCATION</strong>, <strong>COMPLAINTS</strong>, etc (<strong>EXISTING USER</strong>) please refer to <strong>careline 100</strong>.
              </p>
              <p className="text-gray-800 leading-relaxed italic">
                Harap maklum bahawa kami hanya boleh membantu pelanggan yang mahu membuat <strong>PERMOHONAN BARU</strong> sahaja. Untuk pelanggan yang sedia ada, penempatan semula, aduan, lain-lain… Sila hubungi talian khidmat pelanggan <strong>100</strong>.
              </p>
              <p className="text-gray-800 leading-relaxed font-medium">
                就此通知我们只能协助您办理<strong>申请新的配套</strong>。如您有其它关于搬家、投诉或是现有用户，可以联系我们客服热线 <strong>100</strong>。
              </p>
            </div>
          </div>
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
                <div className="w-6 h-6 border-2 border-gray-300 rounded-lg peer-checked:bg-[#1800E7] peer-checked:border-[#1800E7] transition-all flex items-center justify-center group-hover:border-[#1800E7]">
                  <Check className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity stroke-[4]" />
                </div>
              </div>
              <span className="text-gray-700 font-bold select-none leading-relaxed">
                I have read, understood and agree to be bound by the <Link href="/tnc" className="text-[#1800E7] hover:underline decoration-2 underline-offset-4">Terms & Conditions</Link> accompanying the subscription of the product(s) and/or service(s).
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
                    <span className="italic uppercase">Processing App...</span>
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
