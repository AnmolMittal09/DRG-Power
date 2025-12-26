
import React from 'react';
import { ICONS, PHONE_PRIMARY } from '../constants';

const StepCard: React.FC<{ number: string; title: string; desc: string; icon: string; delay: string }> = ({ number, title, desc, icon, delay }) => (
  <div className={`group perspective-1000 animate-in fade-in slide-in-from-bottom-12 duration-1000 ${delay}`}>
    <div className="relative bg-white p-8 md:p-12 rounded-sm border border-slate-100 shadow-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-3xl hover:border-[#BE1E2D]/20 h-full flex flex-col">
      <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-black text-white rounded-sm flex items-center justify-center text-xl md:text-3xl font-black border-4 border-white shadow-3xl z-20 group-hover:rotate-12 transition-transform uppercase italic">
        {number}
      </div>
      <div className="text-5xl md:text-7xl mb-8 md:mb-12 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tighter text-slate-900 uppercase italic leading-none">{title}</h3>
      <p className="text-sm md:text-lg text-slate-500 font-medium leading-relaxed grow italic">{desc}</p>
      <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-50 flex items-center gap-3 md:gap-4">
        <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#BE1E2D] animate-pulse"></span>
        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400">Security Protocol Alpha</span>
      </div>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    { number: "01", title: "Thermal Audit", desc: "Site mapping to measure energy absorption potential and analyze structural wind-load integrity.", icon: "🔍", delay: "delay-100" },
    { number: "02", title: "Technical Mapping", desc: "Proprietary 3D shadow analysis ensuring 100% harvesting potential based on local solar azimuth.", icon: "📐", delay: "delay-200" },
    { number: "03", title: "Liaison Protocol", desc: "Handling net-metering applications and government solar subsidies with the project desk.", icon: "📄", delay: "delay-300" },
    { number: "04", title: "Rapid Deployment", desc: "Certified industrial teams install Tier-1 arrays and wind-certified mounting within 48-72 hours.", icon: "⚡", delay: "delay-400" },
    { number: "05", title: "Smart Integration", desc: "Grid synchronization and safety tests. Transitioning from consumer to autonomous producer.", icon: "🔌", delay: "delay-500" },
    { number: "06", title: "Cloud Pulse", desc: "Live 24/7 technical diagnostics and performance monitoring with dedicated senior lead support.", icon: "📱", delay: "delay-600" }
  ];

  return (
    <div className="pt-32 md:pt-48 pb-16 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-8 block">The Workflow</span>
          <h1 className="text-4xl sm:text-6xl lg:text-[9.5rem] font-[900] mb-6 md:mb-10 leading-[0.9] lg:leading-[0.85] tracking-tighter uppercase italic">
            ENERGY <span className="text-gradient">AUTONOMY.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 font-medium italic">Transparent, engineered, and built for decades of peak industrial performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {steps.map((step, idx) => (
            <StepCard key={idx} {...step} />
          ))}
        </div>

        <div className="mt-24 md:mt-48 p-8 md:p-20 lg:p-32 bg-black text-white rounded-sm relative overflow-hidden shadow-3xl group border border-white/5">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 text-[15rem] md:text-[35rem] font-black text-white/5 leading-none select-none pointer-events-none -translate-y-1/2 opacity-20 sm:opacity-100">GRID</div>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-8xl font-black mb-8 md:mb-12 tracking-tighter uppercase italic leading-none">The First <br />Pulse.</h2>
              <p className="text-lg md:text-2xl text-slate-400 font-medium mb-10 md:mb-16 leading-relaxed italic">
                Schedule your industrial-grade site audit today. Verified technical advice on your facility's energy potential.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <a href={`tel:+91${PHONE_PRIMARY}`} className="bg-[#BE1E2D] text-white px-8 md:px-16 py-4 md:py-8 rounded-sm font-black text-lg md:text-2xl hover:scale-110 transition-all shadow-3xl shadow-red-900/40 uppercase tracking-widest active:scale-95 w-full sm:w-auto text-center">
                  Book Project Audit
                </a>
              </div>
            </div>
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-3xl aspect-video w-full">
              <img 
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1200" 
                alt="Solar Installation Technical Pulse"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
