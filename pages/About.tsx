
import React from 'react';
import { COMPANY_NAME, GROUP_NAME, ICONS, VISION, MISSION, ESTABLISHED_YEAR, GROUP_LEGACY_YEAR, PARTNER_BRAND, LEADERSHIP, CORE_VALUES } from '../constants';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-white">
      <SEO 
        title="Industrial Heritage" 
        description={`DRG Power Technology, established in ${ESTABLISHED_YEAR}, is an industrial solar energy firm under the umbrella of ${GROUP_NAME}. Partnered with ${PARTNER_BRAND} since ${GROUP_LEGACY_YEAR}.`}
      />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="space-y-12">
            <div>
              <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Corporate Foundation</span>
              <h1 className="text-6xl lg:text-9xl font-bold tracking-tight text-slate-900 leading-[0.9] italic uppercase italic">The Energy <br /> Umbrella.</h1>
            </div>
            <div className="space-y-8 text-2xl text-slate-500 font-medium leading-relaxed italic">
              <p>
                DRG Power Technology Pvt Ltd is a forward-looking solar energy firm under the umbrella of <span className="text-slate-900 font-bold">{GROUP_NAME}</span>, dedicated to bringing sustainable, cost-effective solutions to Gurugram and beyond.
              </p>
              <p>
                Since <span className="text-[#BE1E2D] font-bold">{GROUP_LEGACY_YEAR}</span>, our group has proudly partnered with <span className="text-slate-900 font-bold">{PARTNER_BRAND}</span>, one of India's leading power solution brands, managing a complete distribution network with professional excellence.
              </p>
            </div>
            <div className="flex gap-16 pt-8">
              <div>
                <span className="text-6xl font-black text-slate-900 italic block">2021</span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Founded DRG</span>
              </div>
              <div>
                <span className="text-6xl font-black text-[#BE1E2D] italic block">2012</span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Group Legacy</span>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-16 bg-red-600/5 blur-[150px] rounded-full opacity-60" />
             <div className="relative rounded-[4rem] overflow-hidden shadow-3xl border border-slate-100">
               <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
             </div>
          </div>
        </div>

        {/* Vision/Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-48">
          <div className="bg-slate-900 text-white p-20 rounded-[4rem] shadow-3xl relative overflow-hidden group border border-white/5">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter uppercase italic text-[#BE1E2D]">The Mission</h2>
            <p className="text-3xl text-white/80 font-medium leading-tight italic">
              {MISSION}
            </p>
            <div className="absolute -bottom-16 -right-16 text-[18rem] font-black text-white/5 select-none pointer-events-none">M</div>
          </div>
          <div className="bg-slate-50 p-20 rounded-[4rem] shadow-xl relative overflow-hidden group border border-slate-100">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter uppercase italic text-slate-900">The Vision</h2>
            <p className="text-3xl text-slate-500 font-medium leading-tight italic">
              {VISION}
            </p>
            <div className="absolute -bottom-16 -right-16 text-[18rem] font-black text-slate-900/5 select-none pointer-events-none">V</div>
          </div>
        </div>

        {/* Leadership Section (PDF Page 5) */}
        <div className="mb-48">
          <div className="text-center mb-24">
            <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Leadership</span>
            <h2 className="text-6xl font-bold tracking-tight text-slate-900 italic uppercase italic">The Technical Core.</h2>
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto font-medium italic">
              Blending technical expertise with strategic vision toward sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {LEADERSHIP.map((member, i) => (
              <div key={i} className="bg-white p-16 rounded-[3rem] border border-slate-100 shadow-2xl hover:shadow-red-900/5 transition-all group">
                <div className="flex items-center gap-8 mb-10">
                   <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-4xl shadow-xl group-hover:rotate-6 transition-transform">
                      {member.name.charAt(0)}
                   </div>
                   <div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">{member.name}</h3>
                      <p className="text-[#BE1E2D] font-black uppercase tracking-widest text-xs mt-3 italic">{member.role}</p>
                   </div>
                </div>
                <p className="text-2xl text-slate-500 font-medium leading-relaxed italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section (PDF Page 4) */}
        <div className="text-center mb-24">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Operational Ethics</span>
          <h2 className="text-6xl font-bold tracking-tight text-slate-900 italic uppercase italic">Foundation Pillars.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl">
          {CORE_VALUES.map((v, i) => (
            <div key={i} className="bg-white p-14 text-center hover:bg-slate-50 transition-all duration-500 group">
              <div className="text-6xl mb-10 group-hover:scale-110 transition-transform">{v.icon}</div>
              <h3 className="text-sm font-black mb-6 tracking-[0.2em] leading-tight uppercase text-slate-900">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-xs italic">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
