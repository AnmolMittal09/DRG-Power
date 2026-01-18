
import React from 'react';
import { GROUP_NAME, VISION, MISSION, ESTABLISHED_YEAR, GROUP_LEGACY_YEAR, PARTNER_BRAND, LEADERSHIP, CORE_VALUES } from '../constants';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-56 md:pt-64 pb-16 md:pb-32 bg-[#050505]">
      <SEO 
        title="Industrial Heritage" 
        description={`SOLAR FLARE, established in ${ESTABLISHED_YEAR}, is an industrial solar energy firm under the umbrella of ${GROUP_NAME}. Partnered with ${PARTNER_BRAND} since ${GROUP_LEGACY_YEAR}.`}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-48">
          <div className="space-y-10 md:space-y-12">
            <div>
              <span className="text-[#DC2626] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Corporate Foundation</span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] italic uppercase font-heading">The Energy <br /><span className="text-[#DC2626]">Umbrella.</span></h1>
            </div>
            <div className="space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic">
              <p>
                SOLAR FLARE is an industrial-focused solar engineering firm under the umbrella of <span className="text-white font-black">{GROUP_NAME}</span>, dedicated to bringing high-yield solutions to the Indian landscape.
              </p>
              <p>
                Since <span className="text-[#DC2626] font-black">{GROUP_LEGACY_YEAR}</span>, our group has maintained professional excellence in power solution distribution, collaborating with top-tier brands like <span className="text-white font-black">{PARTNER_BRAND}</span>.
              </p>
            </div>
            <div className="flex gap-10 md:gap-16 pt-8 border-t border-white/5">
              <div>
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic block font-heading">2021</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Founded Flare</span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#DC2626] italic block font-heading">{GROUP_LEGACY_YEAR}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Group Legacy</span>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-16 bg-red-600/5 blur-[150px] rounded-full opacity-60" />
             <div className="relative rounded-sm overflow-hidden shadow-3xl border border-white/5 bg-black">
               <img 
                 src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 brightness-50 hover:brightness-100" 
                 alt="SOLAR FLARE Industrial Context"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-48">
          <div className="glass p-10 sm:p-14 md:p-20 rounded-sm shadow-3xl relative overflow-hidden group">
            <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-tighter uppercase italic text-[#DC2626] font-heading">The Mission</h2>
            <p className="text-xl sm:text-2xl md:text-4xl text-white font-medium leading-tight italic relative z-10">
              {MISSION}
            </p>
            <div className="absolute -bottom-16 -right-16 text-[18rem] font-black text-white/5 select-none pointer-events-none italic">M</div>
          </div>
          <div className="bg-black border border-white/5 p-10 sm:p-14 md:p-20 rounded-sm shadow-3xl relative overflow-hidden group">
            <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-tighter uppercase italic text-white font-heading">The Vision</h2>
            <p className="text-xl sm:text-2xl md:text-4xl text-slate-400 font-medium leading-tight italic relative z-10">
              {VISION}
            </p>
            <div className="absolute -bottom-16 -right-16 text-[18rem] font-black text-white/5 select-none pointer-events-none italic">V</div>
          </div>
        </div>

        <div className="mb-24 md:mb-48">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-[#DC2626] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Leadership</span>
            <h2 className="text-4xl md:text-8xl font-black tracking-tight text-white italic uppercase font-heading">THE CORE DESK.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {LEADERSHIP.map((member: any, i) => (
              <div key={i} className="glass p-10 sm:p-14 md:p-20 rounded-sm border border-white/5 shadow-2xl hover:border-[#DC2626]/20 transition-all group">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
                   <div className="w-24 h-24 md:w-40 md:h-40 bg-black rounded-sm overflow-hidden shadow-2xl group-hover:rotate-3 transition-transform shrink-0 border border-white/10">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-110 transition-all duration-700" 
                      />
                   </div>
                   <div>
                      <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none italic font-heading">{member.name}</h3>
                      <p className="text-[#DC2626] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mt-4 italic">{member.role}</p>
                   </div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-20 md:mb-32">
          <span className="text-[#DC2626] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Operational Ethics</span>
          <h2 className="text-4xl md:text-8xl font-black tracking-tight text-white italic uppercase font-heading">PILLAR ASSETS.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden shadow-2xl mb-16 md:mb-32">
          {CORE_VALUES.map((v, i) => (
            <div key={i} className="bg-black p-10 md:p-16 text-center hover:bg-[#111] transition-all duration-500 group">
              <div className="text-5xl md:text-6xl mb-10 group-hover:scale-110 group-hover:rotate-12 transition-transform grayscale group-hover:grayscale-0">{v.icon}</div>
              <h3 className="text-[11px] md:text-sm font-black mb-6 tracking-[0.3em] leading-tight uppercase text-white font-heading">{v.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-[11px] md:text-xs italic group-hover:text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
