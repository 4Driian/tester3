import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const relatedItems = [
  {
    name: "Bianco Statuario",
    category: "Italian Marble",
    img: "https://images.unsplash.com/photo-1719107647328-dd2134da4fa7?auto=format&fit=crop&q=80&w=800",
    price: "$295 / m²",
    rating: 4.9
  },
  {
    name: "Nero Portoro",
    category: "Exclusive Marble",
    img: "https://images.unsplash.com/photo-1494520787307-9d24ab287b36?auto=format&fit=crop&q=80&w=800",
    price: "$450 / m²",
    rating: 5.0
  },
  {
    name: "Emerald Malachite",
    category: "Gemstone Series",
    img: "https://images.unsplash.com/photo-1673031288723-f198cd527b97?auto=format&fit=crop&q=80&w=800",
    price: "$890 / m²",
    rating: 4.8
  },
  {
    name: "Calacatta Gold",
    category: "Premium Selection",
    img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800",
    price: "$340 / m²",
    rating: 4.9
  }
];

export const RelatedProducts = () => {
  return (
    <section className="py-24 space-y-16">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
           <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-neutral-400">Curated Selection</span>
           <h2 className="text-5xl font-serif text-neutral-900 tracking-tight">Complete your <br /><span className="text-neutral-500 italic">architectural vision</span></h2>
        </div>
        <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-900 group">
          View All Collections
          <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:translate-x-2 transition-all">
            <ArrowRight className="w-4 h-4" />
          </div>
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {relatedItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-[10px] text-white font-bold">{item.rating}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                <button className="w-full py-3 bg-white text-neutral-900 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  Quick View
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">{item.category}</p>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-serif text-neutral-900 group-hover:italic transition-all">{item.name}</h3>
                <p className="text-sm font-medium text-neutral-500">{item.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
