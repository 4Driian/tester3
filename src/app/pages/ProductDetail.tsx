import React from 'react';
import { ProductGallery } from '../components/ProductGallery';
import { ProductInfo } from '../components/ProductInfo';
import { AIVisualizer } from '../components/AIVisualizer';
import { ProductFeatures } from '../components/ProductFeatures';
import { RelatedProducts } from '../components/RelatedProducts';
import mainImg from "figma:asset/a0f32ce2b5c13145d473650dad3a356b334a0f12.png";

export function ProductDetail() {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        {/* Main Product Section */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-start">
          {/* Left: Gallery */}
          <div className="xl:sticky xl:top-32">
            <ProductGallery />
          </div>

          {/* Right: Info & Specs */}
          <div className="xl:py-10">
            <ProductInfo />
          </div>
        </section>

        {/* AI Visualizer Section */}
        <AIVisualizer productImage={mainImg} productName="Onyx Honey" />

        {/* Product Features / Technical Specs */}
        <ProductFeatures />

        {/* Brand/Experience Section (Keep the visual storytelling) */}
        <section className="mt-32 pb-24 text-center space-y-8">
          <header className="space-y-3">
             <span className="text-xs uppercase tracking-[0.4em] font-bold text-neutral-400">Natural Luxury</span>
             <h2 className="text-5xl font-serif text-neutral-900 leading-tight">Crafted by time, <br /><span className="text-neutral-500 italic">perfected for your home</span></h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
            {[
              { title: "Translucent Beauty", desc: "Backlit slabs create a stunning glow that transforms any space." },
              { title: "Unique Patterns", desc: "No two slabs are alike, ensuring your space is truly one-of-a-kind." },
              { title: "Premium Origin", desc: "Sourced from exclusive quarries in the Italian Alps and beyond." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-all group">
                <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <RelatedProducts />
      </main>
    </div>
  );
}
