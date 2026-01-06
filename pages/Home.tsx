
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, SOLUTIONS, BRANDS, ICONS, PHONE_PRIMARY, WHATSAPP_LINK, ESTABLISHED_YEAR, TAGLINE, FAQS } from '../constants.tsx';
import { SEO } from '../components/SEO';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#020202] overflow-hidden">
      {/* Enhanced Structural Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Deep background glow */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#BE1E2D]/10 blur-[180px] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#00AEEF]/5 blur-[150px] rounded-full opacity-40"></div>
        
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-grid opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
        
        {/* Tech Lines Overlay */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        
        {/* Industrial texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-44 md:pt-56 lg:pt-64 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 md:px-6 py-2 rounded-full animate-in fade-in slide-in-from-left-8 duration-700">
                <span className="w-2 h-2 rounded-full bg-[#BE1E2D] shadow-[0_0_10px_#BE1E2D] animate-pulse"></span>
                <span className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em]">{TAGLINE}</span>
              </div>
              
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-black text-white leading-[0.85] lg:leading-[0.8] tracking-tighter uppercase italic">
                  ENGINEERING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E2D] via-[#ff4d5e] to-[#BE1E2D]">THE SUN.</span> <br />
                  <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl block mt-2 text-white/90">ALPHA INFRASTRUCTURE.</span>
                </h1>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed italic border-l-4 border-[#BE1E2D] pl-6 md:pl-10 py-2 animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
                DRG Power Technology Private Limited delivers high-yield energy assets. We optimize residential and industrial rooftops with Tier-1 engineering precision.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8 items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-10 md:px-14 py-5 md:py-7 bg-[#BE1E2D] text-white text-lg md:text-xl font-black rounded-2xl transition-all shadow-[0_20px_50px_-10px_rgba(190,30,45,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(190,30,45,0.7)] hover:-translate-y-1 active:scale-95 uppercase tracking-widest overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Get Site Audit</span>
                <span className="relative z-10 text-2xl transition-transform group-hover:translate-x-2">→</span>
              </a>
              <Link 
                to="/expertise"
                className="inline-flex items-center gap-4 px-10 md:px-14 py-5 md:py-7 bg-white/5 hover:bg-white/10 text-white text-lg md:text-xl font-black rounded-2xl border border-white/10 transition-all uppercase tracking-widest backdrop-blur-sm group"
              >
                Tech Specs
                <span className="opacity-40 group-hover:opacity-100 transition-opacity">/ 01</span>
              </Link>
            </div>

            <div className="flex gap-12 md:gap-20 pt-10 md:pt-16 border-t border-white/10 animate-in fade-in duration-1000 delay-500">
              <div className="space-y-2">
                <span className="block text-4xl md:text-6xl font-black text-white italic tracking-tighter">12+</span>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#BE1E2D]">Global Partners</span>
              </div>
              <div className="space-y-2">
                <span className="block text-4xl md:text-6xl font-black text-white italic tracking-tighter">100%</span>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#BE1E2D]">Yield Accuracy</span>
              </div>
              <div className="hidden sm:block space-y-2">
                <span className="block text-4xl md:text-6xl font-black text-white italic tracking-tighter">MWp</span>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#BE1E2D]">Industrial Scale</span>
              </div>
            </div>
          </div>

          {/* Right Visual (Cols 8-12) */}
          <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-300">
            {/* Main Image Container */}
            <div className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl border border-white/10 group aspect-[4/5] bg-slate-900 ring-1 ring-white/5">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" 
                alt="High Performance Solar Array" 
                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              {/* Floating Tech HUD Overlay */}
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-3xl border border-white/20 p-6 md:p-8 rounded-[2rem] text-right shadow-3xl transform hover:scale-105 transition-all cursor-default group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="block text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">Module Efficiency</span>
                    <span className="block text-2xl md:text-4xl font-black text-[#00AEEF] italic tracking-tighter">22.8%</span>
                  </div>
                  <div className="h-px bg-white/10 w-full"></div>
                  <div>
                    <span className="block text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">Structural Rating</span>
                    <span className="block text-xl md:text-2xl font-black text-white italic tracking-tighter">WIND-STABLE</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom Label */}
              <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-12 bg-[#BE1E2D]"></div>
                    <p className="text-white font-black text-sm md:text-base uppercase tracking-[0.3em] italic">ALPHA SERIES</p>
                  </div>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">DRG-INFRA-TERMINAL-01</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Tech Rings */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-[#BE1E2D]/20 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Trust bar */}
      <div className="bg-black/90 backdrop-blur-3xl border-t border-white/5 mt-auto relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-around md:justify-between py-8 md:py-12 gap-6 md:gap-10">
            {[
              { icon: "🛡️", label: "Industrial Security" },
              { icon: "🏅", label: "Tier-1 Hardware" },
              { icon: "⚙️", label: "Bespoke Design" },
              { icon: "⚡", label: "Peak Generation" },
              { icon: "🗺️", label: "Pan-India Presence" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4 group cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl md:text-2xl transition-all group-hover:bg-[#BE1E2D]/20 group-hover:scale-110">
                  <span className="grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">{item.icon}</span>
                </div>
                <span className="text-[8px] md:text-[11px] font-black text-white/30 group-hover:text-white uppercase tracking-[0.3em] transition-all whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InquirySection = () => {
  const [formData, setFormData] = React.useState({ name: '', phone: '', segment: 'Residential' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Home Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nSegment: ${formData.segment}`;
    window.open(`https://wa.me/919211592425?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative z-30 py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[2rem] md:rounded-[4rem] border border-slate-100 p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-3 md:mb-4 uppercase italic">Site <br />Evaluation.</h2>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed italic">Book a high-fidelity technical audit with our project engineers.</p>
            </div>
            <form onSubmit={handleSubmit} className="lg:w-2/3 flex flex-col sm:grid sm:grid-cols-3 gap-8 md:gap-10 w-full">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Identity</label>
                  <div className="group relative hidden sm:block">
                    <span className="cursor-help text-slate-300 hover:text-[#BE1E2D] transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-48 p-3 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-1">
                      Provide your full legal or business name so our engineers can prepare a formalized technical document for your audit.
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black"></div>
                    </div>
                  </div>
                </div>
                <input required type="text" className="w-full bg-transparent border-b-2 border-slate-200 px-2 py-3 md:py-5 font-black outline-none focus:border-[#BE1E2D] transition-all text-lg md:text-xl uppercase tracking-tighter" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Terminal</label>
                <input required type="tel" className="w-full bg-transparent border-b-2 border-slate-200 px-2 py-3 md:py-5 font-black outline-none focus:border-[#BE1E2D] transition-all text-lg md:text-xl uppercase tracking-tighter" placeholder="+91" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <button type="submit" className="bg-black hover:bg-[#BE1E2D] text-white font-black py-4 md:py-6 rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-[10px] md:text-xs self-end w-full sm:w-auto">
                Book Audit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionsGrid = () => (
  <section className="py-20 md:py-40 bg-black text-white overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 md:mb-32">
        <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 block">The Tech Stack</span>
        <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">High Efficiency <br /><span className="text-[#BE1E2D]">Solutions.</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {SOLUTIONS.map((sol, i) => (
          <div key={sol.id} className="group p-8 md:p-16 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] hover:bg-white hover:text-black transition-all duration-700 shadow-2xl">
            <div className="text-5xl md:text-7xl mb-8 md:text-12 md:mb-12 group-hover:scale-110 transition-transform origin-left">{sol.icon}</div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tight uppercase italic">{sol.title}</h3>
            <p className="text-sm md:text-base text-white/40 group-hover:text-black/60 font-medium leading-relaxed mb-6 md:mb-10 italic">{sol.desc}</p>
            <div className="space-y-3 md:space-y-4">
              {sol.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-[#BE1E2D] rounded-full"></span>
                  {benefit}
                </div>
              ))}
            </div>
            <Link to="/expertise" className="inline-flex items-center gap-3 md:gap-4 mt-8 md:mt-12 text-[#BE1E2D] font-black uppercase tracking-widest text-[10px] md:text-xs group-hover:text-black transition-colors">
              Full Specs →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SolarBrands = () => (
  <section className="py-16 md:py-32 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-24 gap-8 md:gap-12 text-center lg:text-left">
        <div className="max-w-2xl">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 block">Hardware Integrity</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">Tier-1 <br />Partnerships.</h2>
        </div>
        <p className="text-base md:text-xl text-slate-400 font-medium italic max-w-sm">We exclusively utilize components from globally recognized leaders in renewable energy.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
        {BRANDS.map((brand, i) => (
          <div key={i} className="group bg-slate-50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-slate-900 hover:text-white transition-all duration-500">
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-2 md:mb-4 text-[#BE1E2D]">{brand.role}</span>
            <span className="text-base md:text-2xl font-black tracking-tighter uppercase group-hover:scale-110 transition-transform">{brand.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 md:mt-20">
        <Link to="/brands" className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#BE1E2D] transition-colors">View All Quality Standards →</Link>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => {
  const reasons = [
    { title: "Legacy Reliability", desc: "Built on a decade of Sanduja Enterprises energy expertise and distribution trust.", icon: "💎" },
    { title: "Tier-1 Hardware", desc: "Strategic partnership with Livguard for high-yield technology and robust warranties.", icon: "⚙️" },
    { title: "Project Precision", desc: "End-to-end site evaluation and bespoke engineering for maximum solar harvesting.", icon: "📐" },
    { title: "Local Presence", desc: "Headquartered in Gurugram for rapid response, maintenance, and project liaison.", icon: "📍" }
  ];

  return (
    <section className="py-20 md:py-40 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-24 gap-8 md:gap-12 text-center lg:text-left">
           <div className="max-w-3xl">
              <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 block">Competitive Edge</span>
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] lg:leading-[0.85] italic uppercase italic">Why Industry <br /> Leaders Choose Us.</h2>
           </div>
           <p className="text-base md:text-2xl text-slate-400 font-medium italic max-w-sm mb-4 leading-relaxed">
              We don't just install panels; we engineer long-term energy assets for the next generation.
           </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {reasons.map((reason, i) => (
            <div key={i} className="group p-8 md:p-14 bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-700 shadow-sm hover:shadow-3xl">
              <div className="text-5xl md:text-6xl mb-8 md:mb-12 group-hover:scale-110 transition-transform origin-left duration-500">{reason.icon}</div>
              <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 tracking-tight uppercase italic leading-none">{reason.title}</h3>
              <p className="text-sm md:text-base text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed italic">
                {reason.desc}
              </p>
              <div className="mt-8 md:mt-10 h-1 w-0 group-hover:w-full bg-[#BE1E2D] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Domains = () => (
  <section className="py-16 md:py-32 bg-slate-50/50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-20">
        <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-3 md:mb-4 block">Our Expertise</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase italic">Premium Segments.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {SERVICES.map((s) => (
          <div key={s.id} className="group relative bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-700">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-2xl">
                  {s.icon}
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase italic">{s.title}</h3>
              </div>
            </div>
            <div className="p-8 md:p-16">
              <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed mb-8 md:mb-10 italic">{s.description}</p>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
                {s.features.slice(0, 3).map((f, i) => (
                  <span key={i} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 px-4 md:px-6 py-2 md:py-3 rounded-full">{f}</span>
                ))}
              </div>
              <Link to="/expertise" className="text-[#BE1E2D] font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-3 md:gap-4 hover:gap-8 transition-all">
                Project Audit Desk <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const selectedFaqs = FAQS.slice(2, 6);

  return (
    <section className="py-20 md:py-40 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 text-center lg:text-left">
            <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 block">Project Intel</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">Technical <br /><span className="text-[#BE1E2D]">Insights.</span></h2>
            <p className="text-base md:text-xl text-slate-400 mt-6 md:mt-8 font-medium italic">
              Addressing key performance metrics and ROI expectations for industrial and residential solar assets.
            </p>
            <div className="mt-8 md:mt-12">
              <Link to="/faq" className="inline-flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 hover:text-[#BE1E2D] transition-all group">
                Full Knowledge Base 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            {selectedFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`group border border-slate-100 rounded-2xl md:rounded-3xl transition-all duration-500 ${openIndex === idx ? 'bg-slate-50 shadow-xl' : 'bg-white hover:border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-10 flex items-center justify-between focus:outline-none"
                >
                  <span className="text-lg md:text-2xl font-black text-slate-900 tracking-tighter uppercase italic pr-6 md:pr-8">
                    {faq.question}
                  </span>
                  <span className={`text-2xl md:text-3xl font-black transition-transform duration-500 ${openIndex === idx ? 'rotate-180 text-[#BE1E2D]' : 'text-slate-300'}`}>
                    {openIndex === idx ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 md:p-10 pt-0 text-slate-500 text-base md:text-lg leading-relaxed font-medium italic border-t border-slate-100/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="One Solar Partner | Premium Solar Infrastructure" 
        description="Engineering high-yield solar ecosystems for India's leading residential and commercial sectors. Tier-1 certified partners." 
      />
      <Hero />
      <InquirySection />
      
      <WhyChooseUs />

      <SolutionsGrid />

      <SolarBrands />

      <Domains />

      <HomeFAQ />

      <section className="py-24 md:py-48 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-red-600/5 blur-[150px] md:blur-[200px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-black tracking-tighter mb-8 md:mb-16 italic uppercase italic leading-[0.9] lg:leading-[0.85]">
            Ready for <br /> <span className="text-[#BE1E2D]">Solar Autonomy?</span>
          </h2>
          <p className="text-lg md:text-3xl text-white/50 mb-10 md:mb-20 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Engineering sustainable rooftops for households and commercial spaces. Book your project audit now.
          </p>
          <Link to="/contact" className="inline-block bg-[#BE1E2D] hover:bg-[#a11a27] text-white px-10 md:px-20 py-5 md:py-8 rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-lg md:text-2xl shadow-3xl transition-all active:scale-95">
            Audit Request
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
