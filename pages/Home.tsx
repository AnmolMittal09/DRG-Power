
import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, ICONS, PHONE_PRIMARY, BRAND_NAME, TAGLINE } from '../constants';
import { Service } from '../types';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to throttle state updates to screen refresh rate
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const parallaxY = scrollY * 0.4;
  const rotateX = mousePos.y * -0.1;
  const rotateY = mousePos.x * 0.1;

  return (
    <section className="relative min-h-screen lg:min-h-[115vh] flex items-center overflow-hidden bg-slate-950 perspective-2000">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out scale-110 will-change-transform"
          style={{ transform: `translateY(${parallaxY}px) scale(${1 + scrollY * 0.0001})` }}
        >
          <img
            src="https://images.unsplash.com/photo-1509391366360-fe5bb5843e03?auto=format&fit=crop&q=90&w=2400"
            alt="Solar Farm Array"
            className="w-full h-full object-cover opacity-50 grayscale-[10%]"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,163,74,0.15)_0%,transparent_70%)]"></div>
      </div>

      {/* Floating 3D "Energy Particles" */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-green-500/10 blur-3xl transition-transform duration-500 ease-out will-change-transform"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              transform: `translate(${mousePos.x * (i + 1) * 0.5}px, ${mousePos.y * (i + 1) * 0.5}px)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 lg:pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 preserve-3d">
            <div 
              className="inline-flex items-center gap-3 bg-green-600/10 backdrop-blur-2xl px-4 py-2 lg:px-5 lg:py-2.5 rounded-full mb-6 lg:mb-8 border border-green-500/20 shadow-[0_0_30px_rgba(22,163,74,0.15)] animate-in fade-in slide-in-from-left-8 duration-1000 will-change-transform"
              style={{ transform: `translateZ(50px)` }}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#16a34a]"></span>
              <span className="text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] whitespace-nowrap">Group of Sanduja Enterprises</span>
            </div>

            <h1 
              className="text-5xl sm:text-7xl lg:text-[10rem] font-[900] text-white leading-[0.85] lg:leading-[0.8] mb-8 lg:mb-10 tracking-[-0.04em] animate-in fade-in slide-in-from-bottom-12 duration-1000 transition-transform will-change-transform"
              style={{ 
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(80px)`,
                textShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            >
              SOLAR <br />
              <span className="text-gradient">EVOLUTION.</span>
            </h1>

            <p 
              className="text-lg md:text-3xl text-slate-300 mb-10 lg:mb-16 leading-relaxed max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200 will-change-transform"
              style={{ transform: `translateZ(40px)` }}
            >
              {TAGLINE} We deliver high-reliability backup and generation for Gurugram’s elite infrastructures.
            </p>

            <div 
              className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-8 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300 will-change-transform"
              style={{ transform: `translateZ(60px)` }}
            >
              <Link 
                to="/contact" 
                className="group relative bg-green-600 text-white px-8 lg:px-14 py-4 lg:py-6 rounded-[1.5rem] lg:rounded-[2rem] text-center font-black text-xl lg:text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_-15px_rgba(22,163,74,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10">Get Expert Audit</span>
              </Link>
              <a 
                href={`tel:${PHONE_PRIMARY}`} 
                className="group bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 lg:px-14 py-4 lg:py-6 rounded-[1.5rem] lg:rounded-[2rem] text-center font-black text-xl lg:text-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95"
              >
                <span className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600/20 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">📞</span>
                {PHONE_PRIMARY}
              </a>
            </div>
          </div>

          {/* Floating Glass Dashboard */}
          <div className="hidden lg:block lg:col-span-4 perspective-2000 pt-20">
            <div 
              className="glass p-10 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white/20 transition-transform duration-500 ease-out group overflow-hidden will-change-transform"
              style={{ transform: `rotateX(${rotateX * 2}deg) rotateY(${rotateY * 2}deg) translateZ(100px)` }}
            >
              <div className="absolute top-0 right-0 w-full h-1/2 -z-10 opacity-20 group-hover:opacity-40 transition-opacity">
                 <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Panel detail" decoding="async" />
              </div>
              
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl group-hover:scale-110 transition-transform">
                  {ICONS.Sun}
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Live Efficiency</p>
                  <p className="text-green-500 text-3xl font-black">98.4%</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-green-600 shadow-[0_0_15px_#16a34a] animate-pulse"></div>
                </div>
                <div className="flex justify-between text-white/60 text-xs font-bold uppercase tracking-widest">
                  <span>Generation</span>
                  <span className="text-white">Active</span>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white text-lg font-black mb-1">Monthly Saving</p>
                  <p className="text-slate-400 text-sm font-medium">Estimated average for 5kWp systems in Haryana region.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:gap-3 opacity-30 animate-in fade-in duration-1000 delay-1000">
        <span className="text-white text-[8px] lg:text-[10px] font-black uppercase tracking-[0.5em]">Scroll</span>
        <div className="w-[1.5px] lg:w-[2px] h-10 lg:h-16 bg-gradient-to-b from-green-600 to-transparent"></div>
      </div>
    </section>
  );
};

// Memoized sub-components to prevent re-renders when Hero state changes
const ServiceCard = memo(({ s }: { s: Service }) => (
  <div className="group relative bg-white rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-14 shadow-2xl shadow-slate-200/50 hover-3d transition-all duration-700 border border-slate-100 flex flex-col h-full perspective-1000 overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-green-50/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
    <div className="relative z-10">
      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-green-50 text-green-600 rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center mb-8 lg:mb-12 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
        {s.icon}
      </div>
      <h3 className="text-3xl lg:text-4xl font-black mb-4 lg:mb-6 tracking-tighter text-slate-900 leading-none">{s.title}</h3>
      <p className="text-slate-500 mb-8 lg:mb-12 font-medium leading-relaxed grow text-lg lg:text-xl">{s.description}</p>
      <div className="space-y-4 lg:space-y-5 mb-10 lg:mb-14">
        {s.features.slice(0, 3).map((f: string, idx: number) => (
          <div key={idx} className="flex items-center gap-4 lg:gap-5 text-sm font-bold text-slate-800">
            <div className="w-6 h-6 lg:w-7 lg:h-7 bg-green-600 text-white rounded-lg lg:rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-green-600/20">
              {ICONS.Check}
            </div>
            {f}
          </div>
        ))}
      </div>
      <Link to="/services" className="inline-flex items-center gap-3 lg:gap-4 text-green-600 font-black text-xs lg:text-sm uppercase tracking-[0.2em] lg:tracking-[0.25em] group/btn">
        Full Specifications 
        <span className="group-hover/btn:translate-x-2 lg:group-hover/btn:translate-x-3 transition-transform duration-300">{ICONS.ChevronRight}</span>
      </Link>
    </div>
  </div>
));

// Fixed StepCard typing to avoid key prop conflict in JSX
const StepCard: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`group relative pt-10 lg:pt-12 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute top-0 left-0 text-8xl lg:text-[10rem] font-black text-slate-50 leading-none -z-10 transition-colors group-hover:text-green-50/50">0{index + 1}</div>
      <div className="text-5xl lg:text-6xl mb-6 lg:mb-10 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 origin-left">{step.icon}</div>
      <h4 className="text-2xl lg:text-3xl font-black mb-4 lg:mb-6 text-slate-900 tracking-tight">{step.title}</h4>
      <p className="text-slate-500 font-medium text-base lg:text-lg leading-relaxed">{step.desc}</p>
    </div>
  );
};

const InstallationProcess = memo(() => {
  const steps = useMemo(() => [
    { title: "Consultation", desc: "Precision site audit and power demand mapping.", icon: "📋" },
    { title: "Design", desc: "Advanced 3D shadow analysis and structural modeling.", icon: "📐" },
    { title: "Deployment", desc: "Tier-1 installation by certified solar technicians.", icon: "⚡" },
    { title: "Connectivity", desc: "Seamless net-metering and cloud grid integration.", icon: "🔌" }
  ], []);

  return (
    <section className="py-24 lg:py-40 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 lg:mb-32">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-4 lg:mb-8 italic uppercase lg:normal-case">THE <span className="text-gradient">PROCESS.</span></h2>
          <p className="text-slate-400 font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs">Four phases to total energy freedom</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      
      {/* Services Overview */}
      <section className="py-24 lg:py-40 relative bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mb-20 lg:mb-32 text-center lg:text-left">
            <h2 className="text-4xl lg:text-8xl font-[900] mb-6 lg:mb-10 tracking-tighter leading-tight lg:leading-[0.9] uppercase lg:normal-case">
              ENGINEERED FOR <br className="hidden lg:block" />
              <span className="text-gradient">PERFORMANCE.</span>
            </h2>
            <p className="text-slate-500 text-lg lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0">
              We design specialized power ecosystems for the NCR’s most sophisticated residential complexes and commercial enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} s={s} />
            ))}
          </div>
        </div>
      </section>

      <InstallationProcess />

      {/* Why Choose Us */}
      <section className="py-24 lg:py-40 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-9xl font-black mb-12 lg:mb-16 tracking-tighter leading-tight lg:leading-[0.8] uppercase lg:normal-case">
                ELITE <br className="hidden lg:block" />
                <span className="text-green-500">TRUST.</span>
              </h2>
              <div className="space-y-8 lg:space-y-12 text-left">
                {[
                  { t: "Global Standard Panels", d: "Using only the world’s most efficient N-Type TopCon technology." },
                  { t: "High-Velocity Integrity", d: "Structures engineered to remain stable during 180km/h gust fronts." },
                  { t: "Concierge net-metering", d: "White-glove coordination with all major Haryana state energy boards." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 lg:gap-10 group">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl lg:rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-all duration-500 shadow-2xl">
                      <span className="text-green-500 group-hover:text-white transition-colors">{ICONS.Check}</span>
                    </div>
                    <div>
                      <h4 className="text-xl lg:text-3xl font-black mb-2 lg:mb-3 tracking-tight">{item.t}</h4>
                      <p className="text-slate-400 font-medium text-base lg:text-xl leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative perspective-2000 hidden lg:block">
              <div className="absolute inset-0 bg-green-600/20 blur-[150px] rounded-full"></div>
              <div className="relative rounded-[5rem] overflow-hidden border border-white/10 shadow-[0_60px_100px_rgba(0,0,0,0.6)] group hover:rotate-y-12 transition-transform duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial solar"
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-16 left-16">
                  <p className="text-green-500 font-black text-xs uppercase tracking-widest mb-2">Live Site</p>
                  <p className="text-white text-3xl font-black">IMT Manesar Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 lg:mb-32">
            <h2 className="text-4xl lg:text-8xl font-[900] tracking-tighter italic leading-none uppercase lg:normal-case">THE <span className="text-gradient">VERDICT.</span></h2>
            <p className="text-slate-400 font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-xs mt-4 lg:mt-6">Unfiltered feedback from our project partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-10 lg:p-16 bg-slate-50 rounded-[3rem] lg:rounded-[4rem] relative hover:bg-slate-100 transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 lg:hover:-translate-y-4">
                <div className="absolute top-10 right-10 lg:top-12 lg:right-16 text-slate-200">
                  {ICONS.Quote}
                </div>
                <div className="flex gap-1.5 lg:gap-2 mb-8 lg:mb-10">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg lg:text-xl">★</span>
                  ))}
                </div>
                <p className="text-xl lg:text-2xl font-bold text-slate-900 italic mb-10 lg:mb-12 leading-[1.6]">"{t.content}"</p>
                <div className="flex items-center gap-5 lg:gap-6">
                  <img src={t.imageUrl} alt={t.name} className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-[1.5rem] object-cover shadow-2xl border-4 border-white" loading="lazy" decoding="async" />
                  <div>
                    <h5 className="font-black text-slate-900 text-lg lg:text-xl tracking-tight">{t.name}</h5>
                    <p className="text-[10px] font-black uppercase text-green-600 tracking-[0.2em] lg:tracking-[0.3em]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-40 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-slate-950 rounded-[3rem] lg:rounded-[5rem] p-10 lg:p-32 text-white text-center relative overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.8)] border border-white/5">
            <div className="absolute top-0 right-0 w-80 lg:w-[600px] h-80 lg:h-[600px] bg-green-600/10 blur-[100px] lg:blur-[180px] rounded-full -mr-40 lg:-mr-80 -mt-40 lg:-mt-80"></div>
            <h2 className="text-4xl sm:text-6xl lg:text-[10rem] font-[900] mb-8 lg:mb-12 tracking-tighter relative z-10 leading-tight lg:leading-[0.8] uppercase lg:normal-case">
              START THE <br className="hidden lg:block" />
              <span className="text-green-500">SAVING.</span>
            </h2>
            <p className="text-lg lg:text-4xl text-slate-400 mb-10 lg:mb-20 relative z-10 max-w-4xl mx-auto font-medium leading-relaxed">
              DRG Power is scaling up Gurugram’s solar footprint. Be part of the transition that pays for itself.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-10 relative z-10">
              <Link to="/contact" className="bg-green-600 text-white px-10 lg:px-20 py-5 lg:py-7 rounded-[1.5rem] lg:rounded-[2.5rem] font-black text-xl lg:text-3xl hover:scale-105 transition-all shadow-3xl shadow-green-600/40 active:scale-95 border-b-4 lg:border-b-8 border-green-800">
                Claim Free Audit
              </Link>
              <a href={`tel:${PHONE_PRIMARY}`} className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 lg:px-20 py-5 lg:py-7 rounded-[1.5rem] lg:rounded-[2.5rem] font-black text-xl lg:text-3xl hover:bg-white/10 transition-all active:scale-95 shadow-2xl">
                Chat Live
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
