
import React, { useState } from 'react';
import { PHONE_PRIMARY, PHONE_SECONDARY, EMAIL_ADDRESS, ADDRESS, ICONS, BRAND_NAME, GROUP_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', type: 'Home', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form Submitted:", formState);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', type: 'Home', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-24 perspective-1000">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info Side */}
          <div className="text-center lg:text-left">
            <span className="text-green-600 font-black uppercase tracking-widest text-xs mb-4 block">Connect with us</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 lg:mb-8 leading-[0.95] tracking-tighter">
              Ready for <span className="text-gradient">Zero-Bill</span> Life?
            </h1>
            <p className="text-lg text-slate-500 font-medium mb-10 lg:mb-12 leading-relaxed">
              Our experts are ready to audit your rooftop and provide a detailed 3D design and ROI roadmap. 
            </p>

            <div className="space-y-4 lg:space-y-6 text-left">
              <div className="group p-6 lg:p-8 bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all lg:hover:translate-y-[-4px]">
                <div className="flex gap-4 lg:gap-6">
                  <div className="bg-green-50 text-green-600 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    <span className="text-xl lg:text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 tracking-tight">Visit Headquarters</h4>
                    <p className="text-slate-500 font-medium text-xs lg:text-sm leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 lg:p-8 bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all lg:hover:translate-y-[-4px]">
                <div className="flex gap-4 lg:gap-6">
                  <div className="bg-green-50 text-green-600 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    <span className="text-xl lg:text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 tracking-tight">Direct Lines</h4>
                    <div className="flex flex-col gap-1">
                      <a href={`tel:${PHONE_PRIMARY}`} className="text-slate-500 hover:text-green-600 transition-colors font-bold text-sm lg:text-base">{PHONE_PRIMARY}</a>
                      <a href={`tel:${PHONE_SECONDARY}`} className="text-slate-500 hover:text-green-600 transition-colors font-bold text-sm lg:text-base">{PHONE_SECONDARY}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group p-6 lg:p-8 bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all lg:hover:translate-y-[-4px]">
                <div className="flex gap-4 lg:gap-6">
                  <div className="bg-green-50 text-green-600 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    <span className="text-xl lg:text-2xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 tracking-tight">Support Email</h4>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-500 hover:text-green-600 transition-colors font-bold text-sm lg:text-base">{EMAIL_ADDRESS}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="mt-10 lg:mt-12 h-48 lg:h-64 bg-slate-200 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden relative border-4 border-white shadow-xl preserve-3d group">
              <div className="absolute inset-0 bg-slate-100 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center flex-col text-slate-400 p-6 lg:p-8 text-center">
                <span className="text-4xl lg:text-5xl mb-3 lg:mb-4 group-hover:animate-float">🗺️</span>
                <p className="font-black uppercase tracking-widest text-[8px] lg:text-[10px]">Office Location Map</p>
                <p className="text-[10px] font-bold mt-2">Basai, Main Ghari Road, Gurugram</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-6 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl border border-slate-100 relative mt-4 lg:mt-0">
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-green-600 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-900/20 animate-pulse z-10">
              <span className="font-black text-[10px] lg:text-xs uppercase tracking-tighter text-center leading-none">Best <br/> Rates</span>
            </div>

            {isSuccess ? (
              <div className="text-center py-16 lg:py-20 animate-in zoom-in duration-300">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-green-100 text-green-600 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-6 lg:mb-8 text-3xl lg:text-4xl shadow-inner">
                  {ICONS.Check}
                </div>
                <h3 className="text-2xl lg:text-3xl font-black mb-3 lg:mb-4 tracking-tighter">Inquiry Logged!</h3>
                <p className="text-slate-500 font-medium text-sm lg:text-base">Our expert from {BRAND_NAME} will contact you shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 lg:mt-10 bg-slate-900 text-white px-8 py-3 rounded-xl lg:rounded-2xl font-black hover:bg-green-600 transition-all active:scale-95"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <h2 className="text-xl lg:text-2xl font-black mb-6 lg:mb-8 tracking-tight border-b pb-4 lg:pb-6 border-slate-100">Quick Estimate Form</h2>
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 lg:mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all font-bold text-sm"
                      placeholder="Rahul S."
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 lg:mb-2">Mobile</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all font-bold text-sm"
                      placeholder="+91 00000 00000"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 lg:mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all font-bold text-sm"
                    placeholder="email@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 lg:mb-2">Project Category</label>
                  <select 
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all appearance-none font-bold text-sm"
                    value={formState.type}
                    onChange={(e) => setFormState({...formState, type: e.target.value})}
                  >
                    <option value="Home">Residential / Villa</option>
                    <option value="Society">Housing Society (RWA)</option>
                    <option value="Commercial">Commercial / Factory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 lg:mb-2">Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all font-bold text-sm"
                    placeholder="Brief description of your rooftop area..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 lg:py-5 rounded-xl lg:rounded-2xl text-white font-black text-lg shadow-xl transition-all active:scale-95 ${
                    isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 hover:shadow-green-900/30'
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Secure Free Proposal'}
                </button>
                <p className="text-center text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Secure Data • Group of Sanduja Enterprises
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
