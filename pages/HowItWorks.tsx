
import React from 'react';
import { ICONS, PHONE_PRIMARY } from '../constants';

const StepCard: React.FC<{ number: string; title: string; desc: string; icon: string; delay: string }> = ({ number, title, desc, icon, delay }) => (
  <div className={`group perspective-1000 animate-in fade-in slide-in-from-bottom-12 duration-1000 ${delay}`}>
    <div className="relative bg-white p-8 lg:p-12 rounded-[3rem] border border-slate-100 shadow-xl transition-all duration-700 hover:rotate-y-6 hover:-translate-y-4 hover:shadow-2xl hover:border-green-200 h-full flex flex-col">
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-black border-4 border-white shadow-xl z-20 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div className="text-6xl mb-8 group-hover:animate-float">{icon}</div>
      <h3 className="text-2xl lg:text-3xl font-black mb-4 tracking-tighter text-slate-900">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed grow">{desc}</p>
      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phase Verified</span>
      </div>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    { number: "01", title: "Site Assessment", desc: "Our engineers visit your location to measure roof space, check structural integrity, and analyze shadow patterns using 3D mapping software.", icon: "🔍", delay: "delay-100" },
    { number: "02", title: "Custom Design", desc: "We create a tailored solar layout designed to maximize solar harvesting based on Haryana's sun path and your specific energy needs.", icon: "📐", delay: "delay-200" },
    { number: "03", title: "Approval & Subsidy", desc: "We handle the entire net-metering application with DHBVN/UHBVN and help you secure available government solar subsidies.", icon: "📄", delay: "delay-300" },
    { number: "04", title: "Swift Installation", desc: "Our certified team installs Tier-1 panels and robust mounting structures rated for 150km/h wind speeds within 48-72 hours.", icon: "⚡", delay: "delay-400" },
    { number: "05", title: "Grid Sync", desc: "After safety tests, we coordinate the net-metering sync. Watch your meter run backwards as you start generating profit!", icon: "🔌", delay: "delay-500" },
    { number: "06", title: "Live Monitoring", desc: "Access our mobile app to track your energy generation and savings in real-time, 24/7, with lifetime support from DRG Power.", icon: "📱", delay: "delay-600" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-600 font-black uppercase tracking-[0.4em] text-xs mb-4 block">The Roadmap</span>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.95] tracking-tighter">
            Your Journey to <span className="text-gradient">Energy Independence</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium">Simple, transparent, and engineered for long-term performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <StepCard key={idx} {...step} />
          ))}
        </div>

        <div className="mt-32 p-12 lg:p-24 bg-slate-950 rounded-[4rem] text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 blur-[120px] rounded-full"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">Ready for the first step?</h2>
              <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
                Schedule your free site assessment today. No obligations, just expert advice on how much you can save.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href={`tel:${PHONE_PRIMARY}`} className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-green-600/20">
                  Book Free Audit
                </a>
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1200" 
                alt="Installation team at work"
                className="w-full h-80 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
