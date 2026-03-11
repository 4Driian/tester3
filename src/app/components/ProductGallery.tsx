import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, ZoomIn, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Main image from the user prompt
import mainProductImg from "figma:asset/a0f32ce2b5c13145d473650dad3a356b334a0f12.png";

const images = [
  mainProductImg,
  "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800"
];

export const ProductGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Thumbnails - Vertical strip like in the image */}
      <div className="flex lg:flex-col gap-6 order-2 lg:order-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-3xl overflow-hidden flex-shrink-0 transition-all duration-500 border-2 ${
              selectedIndex === idx ? 'border-neutral-900 shadow-2xl scale-110 z-10' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'
            }`}
          >
            <ImageWithFallback src={img} alt={`Stone view ${idx}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image Container */}
      <div className="flex-1 order-1 lg:order-2 relative aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-[4rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-neutral-50 border border-neutral-100/50">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback src={images[selectedIndex]} alt="Main product view" className="w-full h-full object-cover" />
        </motion.div>
        
        {/* Floating Controls Overlay */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center items-center gap-6 z-20">
          <button
            onClick={() => setSelectedIndex(prev => (prev > 0 ? prev - 1 : images.length - 1))}
            className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 text-neutral-900 flex items-center justify-center hover:bg-white transition-all shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="bg-white/40 backdrop-blur-xl border border-white/40 px-6 py-2 rounded-full text-[10px] font-bold tracking-widest text-neutral-900 shadow-lg">
            {selectedIndex + 1} / {images.length}
          </div>

          <button
            onClick={() => setSelectedIndex(prev => (prev < images.length - 1 ? prev + 1 : 0))}
            className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 text-neutral-900 flex items-center justify-center hover:bg-white transition-all shadow-lg active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Action icons like in image */}
        <div className="absolute top-10 right-10 flex flex-col gap-4 z-20">
           <button className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 text-neutral-900 flex items-center justify-center hover:bg-white transition-all shadow-lg group">
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 text-neutral-900 flex items-center justify-center hover:bg-white transition-all shadow-lg group">
            <Maximize2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
