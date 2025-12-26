import React, { useState, useEffect } from 'react';
import { PHONE_JATIN, PHONE_DHIRAJ, EMAIL_ADDRESS, ADDRESS, ICONS, BRAND_NAME } from '../constants';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', requirement: 'Residential', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `Hello, I am interested in solar panel installation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nRequirement: ${formData.requirement}\nMessage: ${formData.message}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        window.open(`https://wa.me/919211592425?text=${encodeURIComponent(message)}`, '_blank');
        setShowSuccess(false);
      }, 1500);
    }, 800);
  };

  return (
    <div className="pt-32 lg:pt-48 pb-24 bg-white selection:bg-green-100">
      <SEO 
        title="Contact Us" 
        description="Get a free solar audit. Contact DRG Power Technology for residential, commercial, and industrial solar inquiries. Visit our regional HQ in Gurugram."
      />
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-700">India-Wide Service Coverage</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-[900] text-slate-950 leading-[0.9] tracking-tighter mb-8">
            LET'S <span className="text-gradient">CONNECT.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Switching to solar is a big decision. Our team is here to make the transition transparent, affordable, and professional.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            
            <div className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <a href={`tel:${PHONE_JATIN}`} className="group p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col gap-4">
                  <div className="w-10 h-10 bg-white text-green-700 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Director - Jatin</p>
                    <p className="text-sm font-black text-slate-900 group-hover:text-green-700 transition-colors">{PHONE_JATIN}</p>
                  </div>
                </a>
                <a href={`tel:${PHONE_DHIRAJ}`} className="group p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col gap-4">
                  <div className="w-10 h-10 bg-white text-green-700 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Director - Dhiraj</p>
                    <p className="text-sm font-black text-slate-900 group-hover:text-green-700 transition-colors">{PHONE_DHIRAJ}</p>
                  </div>
                </a>
              </div>

              <a href={`mailto:${EMAIL_ADDRESS}`} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex items-start gap-6">
                <div className="w-14 h-14 bg-white text-green-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Corporate Inquiries</p>
                  <p className="text-xl font-black text-slate-900 group-hover:text-green-700 transition-colors break-all">{EMAIL_ADDRESS}</p>
                  <p className="text-sm font-bold text-slate-400 mt-1">Response within 4 hours</p>
                </div>
              </a>

              <div className="p-8 bg-slate-950 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/20 blur-3xl rounded-full"></div>
                <div className="relative z-10 flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 text-green-400 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Corporate HQ</p>
                    <address className="text-lg font-bold leading-snug not-italic">
                      {ADDRESS}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50 aspect-video lg:aspect-square relative group bg-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.828551733224!2d76.97556107528216!3d28.45465717576288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzE2LjgiTiA3Niw1OCc0MS4zIkU!5e0!3m2!1sen!2sin!4v1715870000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="DRG Power Technology Location Map in Gurugram"
                className="grayscale-[0.3] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 lg:p-16 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 sticky top-32">
              <div className="mb-12">
                <h2 className="text-3xl font-black mb-4 tracking-tight text-slate-950 italic uppercase">
                  Project <span className="text-gradient">Inquiry.</span>
                </h2>
                <p className="text-slate-500 font-medium">Fill in the details below for a customized solar design and payback analysis.</p>
              </div>

              {showSuccess ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
                    ✓
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 mb-4">Request Received!</h3>
                  <p className="text-slate-500 font-medium max-w-xs mx-auto">Redirecting you to WhatsApp to connect with our technical desk...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                      <input
                        id="name"
                        required
                        type="text"
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all font-bold text-slate-900"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all font-bold text-slate-900"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Location / City</label>
                      <input
                        id="city"
                        required
                        type="text"
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all font-bold text-slate-900"
                        placeholder="e.g. Gurugram"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="requirement" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Requirement Type</label>
                      <div className="relative">
                        <select 
                          id="requirement"
                          className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all appearance-none font-bold text-slate-900 cursor-pointer"
                          value={formData.requirement}
                          onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                        >
                          <option value="Residential">Residential Solar</option>
                          <option value="Commercial">Commercial Solar</option>
                          <option value="Industrial">Industrial Plant</option>
                          <option value="AMC/Service">Maintenance Only</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Additional Details</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none transition-all font-bold text-slate-900 resize-none"
                      placeholder="e.g. Roof size, monthly electricity bill, etc."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full py-6 lg:py-8 rounded-3xl text-white font-black text-xl lg:text-2xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-4 ${
                        isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-950 hover:bg-green-700 shadow-slate-200'
                      }`}
                    >
                      TALK TO AN EXPERT
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
