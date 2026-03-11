import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronRight, Layout, Sparkles, Box, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const collections = [
  { 
    id: 1,
    name: "Italian Marble", 
    tag: "The Original Essence",
    desc: "Directly from the heart of Tuscany, our marble collection represents the pinnacle of natural elegance. Every vein tells a geological story millions of years in the making.", 
    img: "https://images.unsplash.com/photo-1719107647328-dd2134da4fa7?auto=format&fit=crop&q=80&w=2400", 
    count: "14 Series",
    accent: "bg-[#EAE8E4]",
    textColor: "text-neutral-900",
    features: ["Hand-Selected Blocks", "Mirror Finish", "Custom Cutting"]
  },
  { 
    id: 2,
    name: "Exotic Onyx", 
    tag: "Translucent Mastery",
    desc: "A mesmerizing interplay of light and depth. Our onyx slabs are carefully selected for their translucency and vibrant mineral patterns that transform any vertical surface.", 
    img: "https://images.unsplash.com/photo-1694697438000-4831dd787501?auto=format&fit=crop&q=80&w=2400", 
    count: "8 Series",
    accent: "bg-[#1A1A1A]",
    textColor: "text-white",
    features: ["Backlighting Optimized", "Jewel-Like Clarity", "Book-Matched Potential"]
  },
  { 
    id: 3,
    name: "Digital Porcelain", 
    tag: "Technological Grace",
    desc: "Italian engineering meets architectural vision. Large format porcelain slabs that recreate natural textures with unmatched durability and technical precision.", 
    img: "https://images.unsplash.com/photo-1760072513457-651955c7074d?auto=format&fit=crop&q=80&w=2400", 
    count: "22 Series",
    accent: "bg-[#F5F5F7]",
    textColor: "text-neutral-900",
    features: ["Anti-Stain Technology", "Slab Size 320x160cm", "Zero Porosity"]
  },
  { 
    id: 4,
    name: "Travertine Series", 
    tag: "Eternal Geometry",
    desc: "Classic architectural volumes redefined for modern living. A curated selection of cross-cut and vein-cut stones that bring a sense of history and warmth.", 
    img: "https://images.unsplash.com/photo-1690235758424-2e34a71e68a2?auto=format&fit=crop&q=80&w=2400", 
    count: "12 Series",
    accent: "bg-[#D9D3CC]",
    textColor: "text-neutral-900",
    features: ["Open Pore Natural", "Resin Filled Options", "Slip Resistant"]
  }
];

export const Collections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom horizontal scroll experience
  return (
    <div className="bg-black min-h-screen">
      {/* Horizontal Scroll Wrapper */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar h-screen w-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        {collections.map((col, idx) => (
          <section 
            key={col.id} 
            className={`min-w-full h-screen snap-start relative flex flex-col lg:flex-row items-stretch overflow-hidden ${col.accent}`}
          >
            {/* Split Screen Layout */}
            
            {/* Visual Content */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden">
               <motion.div 
                 initial={{ scale: 1.2, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="w-full h-full"
               >
                 <ImageWithFallback 
                   src={col.img} 
                   alt={col.name} 
                   className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
                 />
                 <div className="absolute inset-0 bg-black/10" />
               </motion.div>
               
               {/* Collection Badge */}
               <motion.div 
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 className="absolute bottom-12 left-12 p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] text-white z-10 hidden md:block"
               >
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">Series Catalog</span>
                 <p className="text-5xl font-serif italic mt-2">{col.count}</p>
               </motion.div>
            </div>

            {/* Narrative Content */}
            <div className={`w-full lg:w-1/2 flex flex-col justify-center px-12 lg:px-24 py-16 lg:py-0 relative ${col.textColor}`}>
               {/* Background Decor */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif opacity-[0.03] pointer-events-none select-none italic whitespace-nowrap">
                 {col.name}
               </div>

               <div className="relative z-10 space-y-12 max-w-xl">
                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50">{col.tag}</span>
                    <h2 className="text-7xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                      {col.name.split(' ')[0]} <br />
                      <span className="italic opacity-60 ml-12">{col.name.split(' ')[1]}</span>
                    </h2>
                  </motion.div>

                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg font-light leading-relaxed opacity-70"
                  >
                    {col.desc}
                  </motion.p>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-black/5"
                  >
                    {col.features.map((feat, i) => (
                      <div key={i} className="space-y-2">
                        <div className="w-8 h-px bg-current opacity-30" />
                        <p className="text-[9px] uppercase tracking-widest font-bold opacity-60">{feat}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="pt-12 flex flex-col sm:flex-row gap-6"
                  >
                    <Link to="/catalog" className={`px-12 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 group transition-all ${col.accent === 'bg-[#1A1A1A]' ? 'bg-white text-neutral-900 hover:bg-neutral-100' : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-2xl'}`}>
                      Explore Series
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
               </div>

               {/* Navigation Controls Overlay */}
               <div className="absolute bottom-12 left-12 lg:left-24 flex items-center gap-6">
                  <div className="flex gap-2">
                    {collections.map((_, i) => (
                      <div key={i} className={`h-1 rounded-full transition-all duration-500 ${idx === i ? 'w-12 bg-current' : 'w-4 bg-current opacity-20'}`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">0{idx + 1} / 0{collections.length}</span>
               </div>
            </div>

            {/* Right/Left Indicators */}
            {idx < collections.length - 1 && (
              <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 text-current opacity-40 group animate-pulse">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] rotate-90 whitespace-nowrap mb-12">Next Collection</span>
                <div className="w-px h-24 bg-current" />
                <ChevronRight className="w-6 h-6" />
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="fixed bottom-12 right-12 z-50">
        <button 
          onClick={() => containerRef.current?.scrollBy({ left: window.innerWidth, behavior: 'smooth' })}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-2xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
