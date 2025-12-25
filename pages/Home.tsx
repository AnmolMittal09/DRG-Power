
// Fix: Use namespace import to bypass named export resolution issues in certain environments
import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, TESTIMONIALS, ICONS, PHONE_PRIMARY, BRAND_NAME, TAGLINE, WHATSAPP_LINK } from '../constants';
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
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePos({ x, y });
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

  const parallaxY = scrollY * 0.25;
  const rotX = mousePos.y * -6;
  const rotY = mousePos.x * 6;
  const shadowX = mousePos.x * 30;
  const shadowY = mousePos.y * 30;

  return (
    <section className="relative min-h-screen lg:min-h-[110vh] flex items-center overflow-hidden bg-slate-950 perspective-2000">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out scale-110 will-change-transform"
          style={{ 
            transform: `translateY(${parallaxY}px) scale(${1 + scrollY * 0.00008})`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=90&w=2800"
            alt="Large Premium Solar Panel Installation"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="async"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/40 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(22,163,74,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 lg:pt-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div 
            className="lg:col-span-8 preserve-3d transition-transform duration-700 ease-out will-change-transform"
            style={{ 
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0px)` 
            }}
          >
            <div 
              className="inline-flex items-center gap-3 bg-green-600/20 backdrop-blur-3xl px-5 py-2.5 rounded-full mb-10 border border-green-500/30 shadow-[0_0_50px_rgba(22,163,74,0.2)] animate-in fade-in slide-in-from-left-8 duration-1000 will-change-transform"
              style={{ transform: `translateZ(60px)` }}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_#16a34a]"></span>
              <span className="text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] whitespace-nowrap">Group of Sanduja Enterprises</span>
            </div>

            <h1 
              className="text-6xl sm:text-7xl lg:text-[10rem] font-[900] text-white leading-[0.85] mb-12 tracking-[-0.05em] animate-in fade-in slide-in-from-bottom-12 duration-1000 will-change-transform select-none"
              style={{ 
                transform: `translateZ(120px)`,
                textShadow: `${-shadowX}px ${-shadowY}px 60px rgba(0,0,0,0.8)`
              }}
            >
              POWER <br />
              <span className="text-gradient">FREEDOM.</span>
            </h1>

            <p 
              className="text-lg md:text-3xl text-slate-100 mb-16 leading-relaxed max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200 will-change-transform"
              style={{ transform: `translateZ(80px)` }}
            >
              {TAGLINE} "Looking for Backup? We have the solution for you." Tier-1 solar panels for a greener Haryana.
            </p>

            <div 
              className="flex flex-col sm:flex-row flex-wrap gap-5 lg:gap-8 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300 will-change-transform"
              style={{ transform: `translateZ(100px)`, transformStyle: 'preserve-3d' }}
            >
              <a 
                href={`tel:${PHONE_PRIMARY}`} 
                className="group relative bg-green-600 text-white px-10 lg:px-14 py-5 lg:py-6 rounded-[1.8rem] text-center font-black text-xl lg:text-2xl transition-all hover:scale-110 active:scale-95 shadow-[0_40px_80px_-20px_rgba(22,163,74,0.6)] border-t border-white/30"
              >
                Call Now
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 lg:px-14 py-5 lg:py-6 rounded-[1.8rem] text-center font-black text-xl lg:text-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-5 shadow-2xl active:scale-95"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 perspective-2000 pt-10">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', requirement: 'Residential' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I am interested in solar panel installation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nRequirement: ${formData.requirement}`;
    window.open(`https://wa.me/919211592425?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="glass p-10 rounded-[3rem] shadow-[0_80px_150px_rgba(0,0,0,0.6)] border border-white/20 transition-transform duration-1000 ease-out group overflow-hidden will-change-transform preserve-3d">
      <h3 className="text-white text-2xl font-black mb-6 tracking-tight">Free Solar Audit</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Full Name</label>
          <input 
            required 
            type="text" 
            placeholder="John Doe" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:bg-white/10 transition-all outline-none" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone Number</label>
          <input 
            required 
            type="tel" 
            placeholder="+91 00000 00000" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:bg-white/10 transition-all outline-none" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">City</label>
          <input 
            required 
            type="text" 
            placeholder="Gurugram" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:bg-white/10 transition-all outline-none" 
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Requirement</label>
          <select 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:bg-white/10 transition-all outline-none appearance-none"
            value={formData.requirement}
            onChange={(e) => setFormData({...formData, requirement: e.target.value})}
          >
            <option value="Residential" className="bg-slate-900">Residential Solar</option>
            <option value="Commercial" className="bg-slate-900">Commercial Solar</option>
            <option value="Industrial" className="bg-slate-900">Industrial Solar</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-green-600/20 active:scale-95 mt-4">
          Get WhatsApp Quote
        </button>
      </form>
    </div>
  );
};

const ServiceCard = memo(({ s }: { s: Service }) => (
  <div className="group relative bg-white rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl shadow-slate-200/50 hover-3d transition-all duration-700 border border-slate-100 flex flex-col h-full perspective-1000 overflow-hidden">
    <div className="relative h-64 lg:h-72 overflow-hidden">
      <img 
        src={s.imageUrl} 
        alt={s.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      <div className="absolute bottom-6 left-10">
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white text-green-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          {s.icon}
        </div>
      </div>
    </div>

    <div className="p-10 lg:p-14 pt-4 lg:pt-6 flex flex-col grow">
      <h3 className="text-3xl lg:text-4xl font-black mb-6 lg:mb-8 tracking-tighter text-slate-900 leading-none">{s.title}</h3>
      <p className="text-slate-500 mb-10 lg:mb-16 font-medium leading-relaxed grow text-lg lg:text-xl">{s.description}</p>
      
      <div className="space-y-5 mb-12 lg:mb-16">
        {s.features.slice(0, 3).map((f: string, idx: number) => (
          <div key={idx} className="flex items-center gap-5 text-sm font-bold text-slate-800">
            <div className="w-7 h-7 bg-green-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-green-600/20">
              {ICONS.Check}
            </div>
            {f}
          </div>
        ))}
      </div>
      
      <Link to="/services" className="inline-flex items-center gap-4 text-green-600 font-black text-xs lg:text-sm uppercase tracking-[0.25em] group/btn">
        Specifications 
        <span className="group-hover/btn:translate-x-3 transition-transform duration-300">{ICONS.ChevronRight}</span>
      </Link>
    </div>
  </div>
));

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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`group relative transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute -top-8 -left-4 text-9xl lg:text-[12rem] font-black text-slate-50 leading-none -z-10 transition-colors group-hover:text-green-50/70 select-none">
        0{index + 1}
      </div>

      <div className="relative mb-10 overflow-hidden rounded-[2.5rem] shadow-xl aspect-[4/3] group-hover:shadow-2xl transition-all duration-500">
        <img 
          src={step.img} 
          alt={step.title} 
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        <div className="absolute top-6 left-6 text-5xl lg:text-6xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
          {step.icon}
        </div>
      </div>

      <div className="px-2">
        <h4 className="text-2xl lg:text-3xl font-black mb-4 lg:mb-6 text-slate-900 tracking-tight flex items-center gap-3">
          <span className="w-1 h-8 bg-green-500 rounded-full"></span>
          {step.title}
        </h4>
        <p className="text-slate-500 font-medium text-base lg:text-lg leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
};

const InstallationProcess = memo(() => {
  const steps = useMemo(() => [
    { 
      title: "Consultation", 
      desc: "Site audit and solar panel mapping by technical leads.", 
      icon: "📋",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Design", 
      desc: "Advanced 3D shadow analysis tailored to your specific roof.", 
      icon: "📐",
      img: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Deployment", 
      desc: "Tier-1 solar panel installation by certified professionals.", 
      icon: "⚡",
      img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Connectivity", 
      desc: "Seamless net-metering integration with Haryana utility hubs.", 
      icon: "🔌",
      img: "https://images.unsplash.com/photo-1558444479-c84750339fd0?auto=format&fit=crop&q=80&w=800"
    }
  ], []);

  return (
    <section className="py-24 lg:py-44 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 lg:mb-40">
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter mb-8 italic uppercase">
            THE <span className="text-gradient">PROCESS.</span>
          </h2>
          <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">
            How we bring clean solar energy to your doorstep
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
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
      
      <section className="py-24 lg:py-44 relative bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mb-24 lg:mb-40 text-center lg:text-left">
            <h2 className="text-5xl lg:text-9xl font-[900] mb-8 lg:mb-12 tracking-tighter leading-tight lg:leading-[0.85] uppercase">
              PREMIUM <br className="hidden lg:block" />
              <span className="text-gradient">INSTALLATIONS.</span>
            </h2>
            <p className="text-slate-500 text-xl lg:text-3xl font-medium leading-relaxed max-w-4xl mx-auto lg:mx-0">
              Specialized solar panel ecosystems designed for Haryana's most sophisticated residential complexes and industrial hubs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} s={s} />
            ))}
          </div>
        </div>
      </section>

      <InstallationProcess />

      <section className="py-24 lg:py-44 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-slate-950 rounded-[4rem] lg:rounded-[6rem] p-12 lg:p-40 text-white text-center relative overflow-hidden shadow-[0_120px_200px_-50px_rgba(0,0,0,0.8)] border border-white/5">
            <div className="absolute top-0 right-0 w-[500px] lg:w-[900px] h-[500px] lg:h-[900px] bg-green-600/10 blur-[150px] lg:blur-[250px] rounded-full -mr-60 lg:-mr-[450px] -mt-60 lg:-mt-[450px]"></div>
            <h2 className="text-5xl sm:text-7xl lg:text-[11rem] font-[900] mb-12 lg:mb-16 tracking-tighter relative z-10 leading-tight lg:leading-[0.8] uppercase">
              GO <br className="hidden lg:block" />
              <span className="text-green-500">SOLAR.</span>
            </h2>
            <p className="text-xl lg:text-5xl text-slate-300 mb-14 lg:mb-24 relative z-10 max-w-5xl mx-auto font-medium leading-relaxed">
              DRG Power is scaling up the solar footprint across Gurugram and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-12 relative z-10">
              <Link to="/contact" className="bg-green-600 text-white px-12 lg:px-20 py-6 lg:py-8 rounded-[2rem] lg:rounded-[3rem] font-black text-2xl lg:text-3xl hover:scale-110 transition-all shadow-3xl shadow-green-600/40 active:scale-95">
                Start Savings
              </Link>
              <a href={`tel:${PHONE_PRIMARY}`} className="bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-12 lg:px-20 py-6 lg:py-8 rounded-[2rem] lg:rounded-[3rem] font-black text-2xl lg:text-3xl hover:bg-white/10 transition-all active:scale-95">
                Quick Callback
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
