
import React from 'react';
import { COMPANY_NAME, GROUP_NAME, ICONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="perspective-1000">
            <span className="text-green-600 font-black uppercase tracking-widest text-xs mb-4 block">The Heritage</span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[0.95] tracking-tighter">
              Legacy of <span className="text-gradient">Engineering</span> Excellence
            </h1>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                {COMPANY_NAME} is a proud member of the <span className="text-slate-900 font-bold">{GROUP_NAME}</span>. For over a decade, we have been at the forefront of the renewable energy revolution in North India.
              </p>
              <p>
                Based in Gurugram, we specialize in end-to-end solar EPC services. Our journey began with a focus on high-reliability backup solutions, which has now evolved into a comprehensive sustainable power ecosystem.
              </p>
              <p>
                We believe that every roof is an untapped power plant. Our mission is to convert this potential into measurable savings for homeowners and industrial leaders alike.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-10">
              <div className="text-center">
                <p className="text-4xl font-black text-green-600 mb-1 tracking-tighter">10+</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Years Active</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-green-600 mb-1 tracking-tighter">500+</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Projects Done</p>
              </div>
            </div>
          </div>
          
          <div className="relative perspective-1000 group">
            <div className="absolute inset-0 bg-green-600 rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-10 blur-xl"></div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200"
                alt="Sanduja Enterprises Headquarters"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl shadow-2xl border border-slate-100 animate-float">
              <div className="text-green-600 mb-4">{ICONS.Sun}</div>
              <p className="text-2xl font-black text-slate-900 leading-none">Gurugram's</p>
              <p className="text-sm font-bold text-slate-500">Solar Pioneers</p>
            </div>
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32 perspective-1000">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-xl hover:translate-y-[-8px] transition-transform">
            <h2 className="text-3xl font-black mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              To drive energy independence for every household in NCR through affordable, cutting-edge solar technology and uncompromising installation standards.
            </p>
          </div>
          <div className="bg-green-600 text-white p-12 rounded-[3rem] shadow-xl hover:translate-y-[-8px] transition-transform shadow-green-900/10">
            <h2 className="text-3xl font-black mb-6 tracking-tight">Our Vision</h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed">
              To become North India's most trusted name in solar energy, known for our 'Backup Ready' philosophy and engineering that lasts for generations.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4">Core <span className="text-gradient">Values</span></h2>
          <p className="text-slate-500 font-medium">What makes DRG Power different.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Transparency", desc: "Honest generation estimates and clear ROI timelines. No hidden costs or gimmicks.", icon: "💎" },
            { title: "Resilience", desc: "Our structures are built to withstand North India's toughest dust storms and heat waves.", icon: "🏗️" },
            { title: "Service", desc: "Lifetime monitoring and local support based out of Gurugram for rapid response.", icon: "⚡" }
          ].map((v, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] text-center border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:translate-y-[-4px]">
              <div className="text-5xl mb-6">{v.icon}</div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
