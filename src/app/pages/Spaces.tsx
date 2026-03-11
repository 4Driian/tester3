import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Ruler, Layout, Droplets, Sun, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const spaces = [
  { name: "Kitchen Concepts", desc: "Where functionality meets high-end aesthetics. Large format slabs and heat-resistant porcelain.", img: "https://images.unsplash.com/photo-1760072513457-651955c7074d?auto=format&fit=crop&q=80&w=1200", tags: ["Slab Island", "Seamless Backsplash"] },
  { name: "Wellness Bathrooms", desc: "Private sanctuaries defined by low-porosity stones and calming textures.", img: "https://images.unsplash.com/photo-1763485955499-f11dcfdda823?auto=format&fit=crop&q=80&w=1200", tags: ["Anti-Slip Texture", "Water Resistant"] },
  { name: "Living Spaces", desc: "Warm architectural statements through natural wood-look porcelain and marble floors.", img: "https://images.unsplash.com/photo-1707968781591-59ff287a54c6?auto=format&fit=crop&q=80&w=1200", tags: ["Large Format", "Heated Floors"] },
  { name: "Outdoor Living", desc: "Resilient surfaces designed to withstand the elements without losing their vibrance.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200", tags: ["UV Stable", "Frost Resistant"] },
  { name: "Wall Cladding", desc: "Textural vertical surfaces that add depth and character to any architectural volume.", img: "https://images.unsplash.com/photo-1690235758424-2e34a71e68a2?auto=format&fit=crop&q=80&w=1200", tags: ["Lightweight", "Textured Finish"] }
];

export const Spaces = () => {
  return (
    <div className="bg-[#FCFBFA] min-h-screen">
      <header className="pt-24 pb-12 px-6 lg:px-12 max-w-[1536px] mx-auto border-b border-neutral-100 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Contextual Inspiration</span>
            <h1 className="text-6xl font-serif text-neutral-900 leading-tight">Explore by <br /><span className="text-neutral-500 italic">Environment</span></h1>
          </div>
          <div className="max-w-md text-sm text-neutral-500 font-light leading-relaxed">
            Discover how our materials perform in real-world environments. Each space is a curated demonstration of technical excellence and visual harmony.
          </div>
        </div>
      </header>

      <main className="max-w-[1536px] mx-auto px-6 lg:px-12 pb-32 space-y-32">
        {spaces.map((space, idx) => (
          <motion.section 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`lg:col-span-7 relative aspect-video rounded-[4rem] overflow-hidden group shadow-xl ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
               <ImageWithFallback src={space.img} alt={space.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className={`lg:col-span-5 space-y-10 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
               <div className="space-y-4">
                  <h2 className="text-5xl font-serif text-neutral-900 leading-tight">{space.name}</h2>
                  <p className="text-neutral-500 font-light text-lg leading-relaxed">
                    {space.desc}
                  </p>
               </div>

               <div className="flex flex-wrap gap-3">
                 {space.tags.map(tag => (
                   <span key={tag} className="px-4 py-2 bg-neutral-50 border border-neutral-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                     {tag}
                   </span>
                 ))}
               </div>

               <div className="pt-6">
                 <Link to="/catalog" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-900 bg-white border border-neutral-200 px-10 py-5 rounded-full hover:border-neutral-900 transition-all shadow-sm">
                    Explore Materials <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
            </div>
          </motion.section>
        ))}

        {/* Technical Features Section */}
        <section className="py-24 bg-neutral-900 rounded-[4rem] text-white p-12 lg:p-24 overflow-hidden relative">
           <div className="relative z-10 text-center space-y-16">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Architectural Standards</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">Built for Performance <br /><span className="italic text-neutral-400">Designed for Living</span></h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                 {[
                   { icon: Ruler, label: "Precision Cut" },
                   { icon: Layout, label: "Modular Design" },
                   { icon: Droplets, label: "Zero Porosity" },
                   { icon: Sun, label: "UV Stable" }
                 ].map((feat, i) => (
                   <div key={i} className="space-y-4 flex flex-col items-center group">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-500">
                         <feat.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{feat.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>
    </div>
  );
};
