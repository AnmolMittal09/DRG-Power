
import React, { useState } from 'react';
import { PHONE_PRIMARY, PHONE_SECONDARY, EMAIL_ADDRESS, ADDRESS, ICONS, BRAND_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', requirement: 'Residential', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // WhatsApp lead gen format
    const message = `Hello, I am interested in solar panel installation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nRequirement: ${formData.requirement}\nMessage: ${formData.message}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/919211592425?text=${encodeURIComponent(message)}`, '_blank');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-40 lg:pt-48 pb-24 perspective-1000">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-center lg:text-left">
            <span className="text-green-700 font-black uppercase tracking-widest text-xs mb-4 block">Connect with us</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 lg:mb-8 leading-[0.95] tracking-tighter">
              Get Your <span className="text-gradient">Solar Proposal</span> Today
            </h1>
            <p className="text-lg text-slate-500 font-medium mb-10 lg:mb-12 leading-relaxed">
              Our experts are ready to audit your rooftop and provide a detailed 3D design and ROI roadmap. 
            </p>

            <div className="space-y-4 lg:space-y-6 text-left">
              <div className="group p-6 lg:p-8 bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-4 lg:gap-6">
                  <div className="bg-green-50 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center shrink-0" aria-hidden="true">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">Visit Headquarters</h4>
                    <address className="text-slate-500 font-medium text-xs lg:text-sm not-italic">{ADDRESS}</address>
                  </div>
                </div>
              </div>

              <div className="group p-6 lg:p-8 bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-4 lg:gap-6">
                  <div className="bg-green-50 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center shrink-0" aria-hidden="true">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">Direct Lines</h4>
                    <div className="flex flex-col gap-1">
                      <a href={`tel:${PHONE_PRIMARY}`} className="text-slate-500 hover:text-green-700 font-bold" aria-label={`Call primary phone ${PHONE_PRIMARY}`}>{PHONE_PRIMARY}</a>
                      <a href={`tel:${PHONE_SECONDARY}`} className="text-slate-500 hover:text-green-700 font-bold" aria-label={`Call secondary phone ${PHONE_SECONDARY}`}>{PHONE_SECONDARY}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group p-6 lg:p-8 bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-4 lg:gap-6">
                  <div className="bg-green-50 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center shrink-0" aria-hidden="true">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">Support Email</h4>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-500 hover:text-green-700 font-bold">{EMAIL_ADDRESS}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-12 h-48 lg:h-64 bg-slate-200 rounded-[2rem] overflow-hidden relative border-4 border-white shadow-xl" role="img" aria-label="Map location placeholder for DRG Power Technology">
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center flex-col text-slate-400 p-8 text-center">
                <span className="text-5xl mb-4" aria-hidden="true">🗺️</span>
                <p className="font-black uppercase tracking-widest text-[10px]">Office Location Map Placeholder</p>
                <p className="text-[10px] font-bold mt-2">Basai, Main Ghari Road, Gurugram</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 relative">
            <h2 className="text-2xl lg:text-3xl font-black mb-8 tracking-tight">Project Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Name</label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-green-700 outline-none transition-all font-bold text-sm"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Phone</label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-green-700 outline-none transition-all font-bold text-sm"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">City</label>
                  <input
                    id="city"
                    required
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-green-700 outline-none transition-all font-bold text-sm"
                    placeholder="Your City"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="requirement" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Requirement</label>
                  <select 
                    id="requirement"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-green-700 outline-none transition-all appearance-none font-bold text-sm cursor-pointer"
                    value={formData.requirement}
                    onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Requirement Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-green-700 outline-none transition-all font-bold text-sm"
                  placeholder="Tell us about your roof area or monthly power bill..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl text-white font-black text-xl shadow-xl transition-all active:scale-95 ${
                  isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send to WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
