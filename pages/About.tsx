import React from 'react';
import { COMPANY_NAME, GROUP_NAME, ICONS, VISION, MISSION, ESTABLISHED_YEAR, PARTNERSHIP_YEAR, PARTNER_BRAND, LEADERSHIP, CORE_VALUES } from '../constants';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-40 lg:pt-48 pb-24">
      <SEO 
        title="About Us" 
        description={`DRG Power Technology, established in ${ESTABLISHED_YEAR}, is a forward-looking solar energy firm under the umbrella of ${GROUP_NAME}. Partnered with ${PARTNER_BRAND} since ${PARTNERSHIP_YEAR}.`}
      />
      <div className="container mx-auto px-4">
        {/* Company Overview Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="perspective-1000">
            <span className="text-green-600 font-black uppercase tracking-widest text-xs mb-4 block">Company Overview</span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[0.95] tracking-tighter">
              DRG Power <span className="text-gradient">Technology</span>
            </h1>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Established in <span className="text-slate-900 font-bold">{ESTABLISHED_YEAR}</span> and headquartered in Gurugram, <span className="text-slate-900 font-bold">{COMPANY_NAME}</span> is a forward-looking solar energy firm under the umbrella of <span className="text-slate-900 font-bold">{GROUP_NAME}</span>.
              </p>
              <p>
                We are dedicated to bringing sustainable, cost-effective solar power solutions to homes and commercial establishments. We specialize in end-to-end solar solutions — from site evaluation and system design to supply, installation, and after-sales support.
              </p>
              <p>
                Since <span className="text-green-600 font-bold">{PARTNERSHIP_YEAR}</span>, <span className="text-slate-900 font-bold">{GROUP_NAME}</span> has proudly partnered with <span className="text-slate-900 font-bold">{PARTNER_BRAND}</span> — one of India's leading energy storage and power solutions brands. Over the years, we have successfully managed a complete distribution network, ensuring timely supply and exceptional customer service.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-10">
              <div className="text-center">
                <p className="text-4xl font-black text-green-600 mb-1 tracking-tighter">{ESTABLISHED_YEAR}</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Founded</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-green-600 mb-1 tracking-tighter">India</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Wide reach</p>
              </div>
            </div>
          </div>
          
          <div className="relative perspective-1000 group">
            <div className="absolute inset-0 bg-green-600 rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-10 blur-xl"></div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200"
                alt="Solar Technology Overview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl shadow-2xl border border-slate-100 animate-float">
              <div className="text-green-600 mb-4">{ICONS.Sun}</div>
              <p className="text-2xl font-black text-slate-900 leading-none">Pan-India</p>
              <p className="text-sm font-bold text-slate-500">Solar Partner</p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4 italic uppercase">Our <span className="text-gradient">Leadership.</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Blending technical expertise with strategic vision to guide DRG Power Technology toward a greener future.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {LEADERSHIP.map((leader, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl hover:translate-y-[-8px] transition-transform flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">👤</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{leader.name}</h3>
                <p className="text-green-600 font-black uppercase tracking-widest text-[10px] mb-4">{leader.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision/Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32 perspective-1000">
          <section className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-xl hover:translate-y-[-8px] transition-transform">
            <h2 className="text-3xl font-black mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              {MISSION}
            </p>
          </section>
          <section className="bg-green-600 text-white p-12 rounded-[3rem] shadow-xl hover:translate-y-[-8px] transition-transform shadow-green-900/10">
            <h2 className="text-3xl font-black mb-6 tracking-tight">Our Vision</h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed">
              {VISION}
            </p>
          </section>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 italic uppercase">Core <span className="text-gradient">Values.</span></h2>
          <p className="text-slate-500 font-medium">The values that drive our commitment to excellence and sustainability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CORE_VALUES.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] text-center border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:translate-y-[-4px]">
              <div className="text-4xl mb-6">{v.icon}</div>
              <h3 className="text-xl font-black mb-4 tracking-tight leading-tight">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-xs">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
