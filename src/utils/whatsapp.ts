export const sendToWhatsApp = (formType: string, formData: Record<string, any>) => {
  const phoneNumber = "601133383836";
  
  let message = ` *NEW ${formType.toUpperCase()}*\n`;
  message += `----------------------------\n\n`;
  
  const labelMap: Record<string, string> = {
    // Common
    "user-name": "Name",
    "user-email": "Email",
    "phone": "Phone",
    "user-contact": "Contact",
    "address1": "Address 1",
    "address2": "Address 2",
    "city": "City/State",
    "postcode": "Postcode",
    "existing_user": "Existing User",
    "full_address": "Full Address",
    "state": "State",
    
    // Application Form
    "package": "Package",
    "plan": "Interested Plan",
    "installation_date": "Preferred Installation Date",
    "mykad": "MyKad/Passport",
    
    // Coverage Form
    "building_name": "Building Name",
    "floor_no": "Building Floor",
    "unit_no": "Unit No",
    "block_no": "Block No",
    "street": "Street",
    "section_no": "Section",
    "telco": "Current Telco",
    "region": "Region/Area",
    "current_home_wifi": "Current Using Home Wifi",
    
    // Mobile Form
    "choose-number": "Number Type",
    "new-number1": "Choice 1",
    "new-number2": "Choice 2",
    "new-number3": "Choice 3",
    "new-number4": "Choice 4",
    "new-number5": "Choice 5",
    "device": "Bundled Device",
  };

  Object.entries(formData).forEach(([key, value]) => {
    if (key === "accept1" || value === "" || value === null || value === undefined) return;
    
    const label = labelMap[key] || key;
    message += `*${label}*: ${value}\n`;
  });

  message += `\n----------------------------\n`;
  message += `_Sent from unifi Distributer Portal_`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Try to open in new tab (often blocked after async)
  const newWin = window.open(whatsappUrl, "_blank");
  
  // Fallback: If blocked, we might want to offer a way for the calling component to know
  // but for now, we just rely on the manual button in the success UI.
  
  return whatsappUrl;
};

