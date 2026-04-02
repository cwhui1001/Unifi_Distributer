import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const PostpaidPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the popup after a brief delay when the component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Lock scroll when popup is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-500" 
        onClick={() => setIsOpen(false)}
      />
      
      {/* Popup Content */}
      <div className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-in zoom-in slide-in-from-bottom-12 duration-500 border-4 border-[#FF6B01]">
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-[10002] p-2 bg-white/90 rounded-full shadow-lg border border-gray-100 text-[#FF6B01] hover:scale-110 transition-all duration-300 active:scale-95"
        >
          <X className="w-5 h-5 stroke-[3]" />
        </button>

        {/* Image Container */}
        <div className="w-full h-auto flex flex-col">
          <img 
            src="/images/postpaid-popup.jpeg" 
            alt="Postpaid Special Promo" 
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>
    </div>
  );
};

export default PostpaidPopup;
