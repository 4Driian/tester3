import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronDown, ArrowRight, Grid, List, FileText, Download, X } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const products = [
  { id: 'onyx-honey', name: 'Onyx Honey', series: 'Exotic Gemstone', finish: 'Polished', img: 'figma:asset/a0f32ce2b5c13145d473650dad3a356b334a0f12.png' },
  { id: 'statuario', name: 'Bianco Statuario', series: 'Italian Marble', finish: 'Silk Matte', img: 'https://images.unsplash.com/photo-1719107647328-dd2134da4fa7?auto=format&fit=crop&q=80&w=800' },
  { id: 'nero-portoro', name: 'Nero Portoro', series: 'Exclusive Black', finish: 'High Gloss', img: 'https://images.unsplash.com/photo-1494520787307-9d24ab287b36?auto=format&fit=crop&q=80&w=800' },
  { id: 'calacatta', name: 'Calacatta Gold', series: 'Premium Selection', finish: 'Polished', img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800' },
  { id: 'emerald', name: 'Emerald Malachite', series: 'Gemstone Series', finish: 'Natural', img: 'https://images.unsplash.com/photo-1673031288723-f198cd527b97?auto=format&fit=crop&q=80&w=800' },
  { id: 'travertine', name: 'Silver Travertine', series: 'Natural Stone', finish: 'Honed', img: 'https://images.unsplash.com/photo-1690235758424-2e34a71e68a2?auto=format&fit=crop&q=80&w=800' },
  { id: 'basalt', name: 'Vulcano Basalt', series: 'Volcanic Series', finish: 'Textured', img: 'https://images.unsplash.com/photo-1643750897188-aa9fd6461097?auto=format&fit=crop&q=80&w=800' },
  { id: 'quartz', name: 'Pure Quartzite', series: 'Architectural Specs', finish: 'Matte', img: 'https://images.unsplash.com/photo-1763485955499-f11dcfdda823?auto=format&fit=crop&q=80&w=800' },
];

const catalogs = [
  { name: 'Luxury Stone 2026', size: '12.4 MB', type: 'Premium Series' },
  { name: 'Technical Surfaces', size: '8.2 MB', type: 'Industrial Specs' },
  { name: 'Architectural Concepts', size: '15.1 MB', type: 'Design Inspiration' },
];

export const Catalog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#FCFBFA] min-h-screen">
      {/* Editorial Header */}
      <header className="pt-32 pb-16 px-6 lg:px-12 max-w-[1536px] mx-auto border-b border-neutral-100 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-neutral-400 block">Digital Catalog</span>
            <h1 className="text-7xl font-serif text-neutral-900 leading-[0.9] tracking-tighter">Master <br /><span className="text-neutral-500 italic">Library</span></h1>
          </div>
          <div className="max-w-md space-y-8">
            <p className="text-lg text-neutral-500 font-light leading-relaxed">
              Discover our comprehensive collection of architectural surfaces. Filter by material, texture, or finish to find the perfect expression for your next project.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-900 border-b-2 border-neutral-900 pb-2 hover:opacity-60 transition-all"
            >
              Request Full PDF Catalog <FileText className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">
        
        {/* Sidebar Filters - Elegant & Compact */}
        <aside className="lg:col-span-3 space-y-12 lg:sticky lg:top-32 h-fit">
          <div className="space-y-10">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-900">Filters</span>
              <button className="text-[10px] uppercase tracking-widest font-bold text-neutral-300 hover:text-neutral-900 transition-colors">Clear All</button>
            </div>
            
            {['Material', 'Finish', 'Color', 'Application'].map((filter) => (
              <div key={filter} className="space-y-6">
                <button className="w-full flex justify-between items-center group">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">{filter}</span>
                  <ChevronDown className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </button>
                <div className="space-y-3 pl-1">
                   {['Selection A', 'Selection B', 'Selection C'].map(item => (
                     <label key={item} className="flex items-center gap-4 cursor-pointer group">
                       <div className="w-5 h-5 border border-neutral-100 rounded-lg group-hover:border-neutral-900 transition-all flex items-center justify-center">
                          <div className="w-2 h-2 bg-neutral-900 rounded-sm opacity-0 group-hover:opacity-10 transition-opacity" />
                       </div>
                       <span className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-all">{item}</span>
                     </label>
                   ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-[3rem] bg-neutral-900 text-white space-y-6 relative overflow-hidden group shadow-2xl">
             <div className="relative z-10">
               <h4 className="text-2xl font-serif italic mb-3 text-white">Project Support</h4>
               <p className="text-xs opacity-50 leading-relaxed mb-8">Need technical specifications or custom sizing? Our team of material experts is here to help.</p>
               <Link to="/contact" className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 group/btn">
                 Speak to Expert <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
               </Link>
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          </div>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-9 space-y-12">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 bg-white/50 backdrop-blur-sm p-6 rounded-[2.5rem] border border-neutral-100 shadow-sm">
             <div className="relative flex-1 w-full sm:max-w-sm">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Search series or material..." 
                  className="w-full pl-14 pr-6 py-4 bg-neutral-50 rounded-2xl text-[10px] font-bold tracking-widest uppercase placeholder:text-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all"
                />
             </div>
             <div className="flex items-center gap-6">
               <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">View:</span>
               <div className="flex bg-neutral-50 p-1.5 rounded-xl">
                 <button className="p-2.5 bg-white shadow-sm rounded-lg text-neutral-900"><Grid className="w-4 h-4" /></button>
                 <button className="p-2.5 text-neutral-300 hover:text-neutral-900 transition-colors"><List className="w-4 h-4" /></button>
               </div>
               <div className="h-4 w-px bg-neutral-100 mx-2" />
               <span className="text-[10px] font-bold text-neutral-900 uppercase tracking-widest">Relevance</span>
               <ChevronDown className="w-4 h-4 text-neutral-400" />
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
            {products.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
                className="group"
              >
                <Link to="/products/onyx-honey">
                  <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 shadow-lg group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-700 group-hover:-translate-y-3">
                    <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors" />
                    
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-2xl">
                        <ArrowRight className="w-6 h-6 -rotate-45" />
                      </div>
                    </div>

                    <div className="absolute inset-x-8 bottom-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                      <div className="bg-white/20 backdrop-blur-2xl border border-white/20 p-5 rounded-3xl flex justify-between items-center text-white">
                         <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Series</span>
                         <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 px-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-neutral-400">{item.series}</p>
                        <h3 className="text-2xl font-serif text-neutral-900 group-hover:italic transition-all duration-500">{item.name}</h3>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest px-4 py-1.5 bg-neutral-50 border border-neutral-100 rounded-full text-neutral-400">{item.finish}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="pt-20 text-center">
            <button className="px-16 py-6 border border-neutral-100 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all shadow-sm hover:shadow-2xl">
              Load More Materials
            </button>
          </div>
        </main>
      </div>

      {/* Catalog PDF Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
               <div className="lg:w-1/2 bg-neutral-900 p-12 lg:p-20 text-white flex flex-col justify-between overflow-hidden relative">
                  <div className="relative z-10 space-y-8">
                    <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center border border-white/20">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h2 className="text-5xl font-serif leading-tight">Digital <br /><span className="italic text-neutral-400">Masterpieces</span></h2>
                    <p className="text-lg text-white/50 font-light leading-relaxed">Our digital catalogs are more than just lists; they are curated journeys through the world's most exclusive architectural surfaces.</p>
                  </div>
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
               </div>

               <div className="lg:w-1/2 p-12 lg:p-20 space-y-12">
                  <header className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Available PDF Downloads</span>
                    <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all">
                      <X className="w-5 h-5" />
                    </button>
                  </header>

                  <div className="space-y-6">
                    {catalogs.map((cat, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-center justify-between p-6 rounded-3xl border border-neutral-50 hover:border-neutral-900 transition-all cursor-pointer shadow-sm hover:shadow-xl"
                      >
                         <div className="space-y-1">
                            <p className="text-[8px] uppercase tracking-widest font-bold text-neutral-400">{cat.type}</p>
                            <h4 className="text-xl font-medium text-neutral-900">{cat.name}</h4>
                            <p className="text-[10px] text-neutral-400">{cat.size} • PDF</p>
                         </div>
                         <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                           <Download className="w-5 h-5" />
                         </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-neutral-50">
                    <button className="w-full bg-neutral-900 text-white py-6 rounded-3xl font-bold text-[10px] uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl">
                      Download Full Collection (ZIP)
                    </button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
