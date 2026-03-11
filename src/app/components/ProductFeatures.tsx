import React from 'react';
import { Ruler, Thermometer, Droplets, Shield, Sun, Sparkles } from 'lucide-react';

export const ProductFeatures = () => {
  const specs = [
    { 
      icon: Ruler, 
      label: "Custom Sizing", 
      value: "Available in custom dimensions up to 120 x 260 cm",
      desc: "Precision laser cutting for perfect architectural fit."
    },
    { 
      icon: Thermometer, 
      label: "Heat Resistance", 
      value: "High Thermal Stability",
      desc: "Resistant to temperature changes, ideal for underfloor heating."
    },
    { 
      icon: Droplets, 
      label: "Low Porosity", 
      value: "Water Absorption < 0.1%",
      desc: "Dense molecular structure prevents staining and bacteria growth."
    },
    { 
      icon: Shield, 
      label: "High Durability", 
      value: "MOHS Hardness 6-7",
      desc: "Exceptional resistance to scratches and mechanical impact."
    },
    { 
      icon: Sun, 
      label: "UV Stable", 
      value: "Non-Yellowing Formula",
      desc: "Color remains vibrant even under direct exposure to sunlight."
    },
    { 
      icon: Sparkles, 
      label: "Mirror Polish", 
      value: "95+ Gloss Units",
      desc: "Achieved through hand-buffed traditional finishing techniques."
    }
  ];

  return (
    <section className="py-24 border-y border-neutral-100 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-6">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-neutral-400">Technical Details</span>
          <h2 className="text-5xl font-serif text-neutral-900 leading-tight">Superior <br /><span className="text-neutral-500 italic">Engineering</span></h2>
          <p className="text-neutral-500 font-light leading-relaxed">
            Beyond its natural beauty, our Onyx Honey series meets the highest standards of architectural performance, ensuring a lifetime of elegance and resilience.
          </p>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {specs.map((spec, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500 flex-shrink-0">
                <spec.icon className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900">{spec.label}</h3>
                <p className="text-lg font-serif italic text-neutral-600">{spec.value}</p>
                <p className="text-xs text-neutral-400 leading-relaxed font-medium">{spec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
