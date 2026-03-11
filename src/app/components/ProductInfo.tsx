import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Share2, Heart, ShieldCheck, Mail, Globe } from 'lucide-react';

export const ProductInfo: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('Honey');

  const colors = [
    { name: 'Honey', hex: '#E6D3B1' },
    { name: 'Amber', hex: '#C69460' },
    { name: 'Gold', hex: '#D4AF37' },
  ];

  const specs = [
    { label: 'Material', value: 'Natural Onyx' },
    { label: 'Finish', value: 'High Gloss Polished' },
    { label: 'Dimensions', value: '120 × 260 cm' },
    { label: 'Application', value: 'Wall, Feature, Interior' },
  ];

  return (
    <div className="space-y-10 max-w-xl">
      {/* Header Info */}
      <div className="space-y-8">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Luxury Stone Series</span>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-all hover:bg-neutral-50">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-red-500 transition-all hover:bg-neutral-50">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
          <h1 className="text-7xl font-serif text-neutral-900 tracking-tight leading-none">Onyx Honey</h1>
        </header>

        <p className="text-xl text-neutral-500 leading-relaxed font-light">
          The crown jewel of natural stone. Our <span className="text-neutral-900 font-medium italic">Onyx Honey</span> slabs reveal nature's artistry with dramatic veining and warm, translucent tones. When backlit, these exceptional pieces become luminous focal points of unparalleled beauty.
        </p>
      </div>

      {/* Simplified Specifications - Clear & Informative */}
      <div className="py-10 border-y border-neutral-100/60 space-y-6">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-900">Technical Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {specs.map((spec, idx) => (
            <div key={idx} className="flex justify-between items-baseline border-b border-neutral-50 pb-2">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">{spec.label}</span>
              <span className="text-sm font-medium text-neutral-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-6">
        <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Available Variations</p>
        <div className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`group flex items-center gap-4 pr-6 pl-2 py-2 rounded-full border transition-all duration-500 ${
                selectedColor === color.name 
                  ? 'border-neutral-900 bg-neutral-900 text-white shadow-2xl scale-105' 
                  : 'border-neutral-100 bg-white text-neutral-900 hover:border-neutral-300'
              }`}
            >
              <span 
                className={`w-10 h-10 rounded-full border border-black/5 shadow-inner transition-transform duration-500 ${selectedColor === color.name ? 'scale-90' : 'group-hover:scale-110'}`} 
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs font-bold uppercase tracking-widest">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-5 pt-4">
        <button className="flex-1 bg-neutral-900 text-white py-6 px-10 rounded-[2rem] font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-neutral-800 transition-all shadow-2xl hover:-translate-y-1">
          <MapPin className="w-4 h-4" />
          <span>See In Showroom</span>
        </button>
        <button className="flex-1 bg-white text-neutral-900 border border-neutral-200 py-6 px-10 rounded-[2rem] font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-4 hover:border-neutral-900 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
          <Mail className="w-4 h-4" />
          <span>Request Sample</span>
        </button>
      </div>

      {/* Trust Badges - Text-only for clarity as requested */}
      <div className="flex flex-col gap-3 pt-6">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          5-Year Manufacturer Warranty
        </div>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Global Premium Distribution
        </div>
      </div>
    </div>
  );
};
