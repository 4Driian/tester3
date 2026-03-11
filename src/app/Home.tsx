import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronRight, Play, Globe, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const collections = [
  { name: "Marble Selection", tag: "Curated Stone", img: "https://images.unsplash.com/photo-1694697438000-4831dd787501?auto=format&fit=crop&q=80&w=1200" },
  { name: "Kitchen Concepts", tag: "Functional Design", img: "https://images.unsplash.com/photo-1760072513457-651955c7074d?auto=format&fit=crop&q=80&w=1200" },
  { name: "Architectural Walls", tag: "Texture Library", img: "https://images.unsplash.com/photo-1690235758424-2e34a71e68a2?auto=format&fit=crop&q=80&w=1200" }
];

const spaces = [
  { name: "Living Spaces", img: "https://images.unsplash.com/photo-1707968781591-59ff287a54c6?auto=format&fit=crop&q=80&w=800", size: "col-span-2 row-span-2" },
  { name: "Modern Kitchen", img: "https://images.unsplash.com/photo-1760072513457-651955c7074d?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-1" },
  { name: "Wellness Bath", img: "https://images.unsplash.com/photo-1763485955499-f11dcfdda823?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-1" },
  { name: "Outdoor Living", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-1" },
  { name: "Wall Cladding", img: "https://images.unsplash.com/photo-1690235758424-2e34a71e68a2?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-1" }
];

const heroImages = [
  "https://images.unsplash.com/photo-1707968781591-59ff287a54c6?auto=format&fit=crop&q=80&w=2400",
  "https://images.unsplash.com/photo-1694697438000-4831dd787501?auto=format&fit=crop&q=80&w=2400",
  "https://images.unsplash.com/photo-1760072513457-651955c7074d?auto=format&fit=crop&q=80&w=2400",
  "https://images.unsplash.com/photo-1763485955499-f11dcfdda823?auto=format&fit=crop&q=80&w=2400"
];

export function Home() {
  const [currentHero, setCurrentHero] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[100vh] w-full overflow-hidden bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ImageWithFallback 
              src={heroImages[currentHero]} 
              alt="Hero" 
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 max-w-5xl"
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "1em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 1.5 }}
              className="text-[10px] uppercase font-bold text-white/70 block"
            >
              Architectural Mastery
            </motion.span>
            
            <h1 className="text-7xl md:text-9xl font-serif text-white leading-[0.9] tracking-tighter">
              Timeless <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="italic opacity-80"
              >
                Surfaces
              </motion.span>
            </h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-8 pt-12 items-center justify-center"
            >
              <Link to="/catalog" className="bg-white text-neutral-900 px-12 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-neutral-100 transition-all flex items-center gap-4 group shadow-2xl">
                Explore Catalog
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/showrooms" className="text-white border border-white/20 backdrop-blur-md px-12 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                The Experience
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentHero(i)}
              className={`h-1 transition-all duration-500 rounded-full ${currentHero === i ? 'w-12 bg-white' : 'w-6 bg-white/20 hover:bg-white/40'}`} 
            />
          ))}
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-12 text-white/40"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Collections Section with Enhanced Animations */}
      <section className="relative py-40 px-6 lg:px-12 max-w-[1536px] mx-auto overflow-hidden">
        {/* Soft transition at top */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
        
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-neutral-400">The Selection</span>
            <h2 className="text-6xl font-serif text-neutral-900">Curated <br /><span className="text-neutral-500 italic">Excellence</span></h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/collections" className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-900 flex items-center gap-4 group pb-2 border-b border-neutral-100 hover:border-neutral-900 transition-all">
              Discover All Series <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </header>

        <div className="flex gap-10 overflow-x-auto pb-16 snap-x scrollbar-hide no-scrollbar">
          {collections.map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="min-w-[480px] snap-start group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 relative shadow-lg group-hover:shadow-3xl transition-all duration-700">
                <ImageWithFallback src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                  <ArrowRight className="w-6 h-6 -rotate-45" />
                </div>
              </div>
              <motion.div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 block">{col.tag}</span>
                <h3 className="text-3xl font-serif text-neutral-900 group-hover:italic transition-all duration-500">{col.name}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explore by Space Grid */}
      <section className="relative py-40 bg-neutral-50 border-y border-neutral-100 transition-all duration-1000">
        {/* Soft transition between sections */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

        <div className="max-w-[1536px] mx-auto px-6 lg:px-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="lg:col-span-5 space-y-6"
             >
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Contextual Exploration</span>
               <h2 className="text-6xl font-serif text-neutral-900 leading-[1.1]">Design Without <br /><span className="text-neutral-500 italic">Limits</span></h2>
               <p className="text-neutral-500 font-light text-lg leading-relaxed max-w-md">
                 Explore how our materials transform spaces from residential retreats to grand architectural statements. Each environment curated for inspiration.
               </p>
               <div className="pt-6">
                 <Link to="/spaces" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-900 pb-2 hover:opacity-60 transition-opacity">
                    View All Spaces <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
             </motion.div>
             
             <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[220px]">
                {spaces.map((space, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    whileHover={{ y: -5 }}
                    className={`${space.size} relative rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500`}
                  >
                    <ImageWithFallback src={space.img} alt={space.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                       <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">{space.name}</span>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Visit Our Showrooms Integration */}
      <section className="relative">
        <div className="bg-neutral-900 min-h-[80vh] w-full relative flex items-center">
          <div className="absolute inset-0 w-full h-full">
             <ImageWithFallback src="https://images.unsplash.com/photo-1643750897188-aa9fd6461097?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover grayscale opacity-40" />
             <div className="absolute inset-0 bg-neutral-900/60" />
          </div>
          
          <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-32 flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-10"
            >
               <div className="space-y-4">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50">Experience in Person</span>
                 <h2 className="text-5xl lg:text-8xl font-serif text-white leading-tight">Visit Our <br /><span className="italic text-neutral-400">Galleries</span></h2>
               </div>
               <p className="text-white/60 font-light text-xl leading-relaxed max-w-xl">
                 Our showrooms are designed as interactive laboratories where you can feel the textures, see the scale, and consult with our material experts.
               </p>
               <div className="flex flex-col sm:flex-row gap-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-widest">Global Network</h4>
                      <p className="text-xs text-white/40">NYC, Miami, LA, Chicago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-widest">Exclusive Concierge</h4>
                      <p className="text-xs text-white/40">Personalized consultations</p>
                    </div>
                  </div>
               </div>
               <div className="pt-6">
                  <Link to="/showrooms" className="bg-white text-neutral-900 px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-100 transition-all inline-flex items-center gap-3">
                    Find a Showroom <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-5/12 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative"
            >
               <ImageWithFallback src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
               <div className="absolute bottom-12 left-12 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-bold">New York Showroom</span>
                  <p className="text-2xl font-serif">5th Avenue flagship</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Follow Inspiration Gallery */}
      <section className="relative py-32 bg-white">
        {/* Soft transition at top */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-50 to-transparent pointer-events-none z-10" />

        <div className="max-w-[1536px] mx-auto px-6 lg:px-12 relative z-20">
          <header className="text-center mb-20 space-y-4">
             <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-neutral-400">Visual Journal</span>
             <h2 className="text-4xl font-serif text-neutral-900">Follow Our Inspiration</h2>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
             {[
               "https://images.unsplash.com/photo-1694697438000-4831dd787501",
               "https://images.unsplash.com/photo-1760072513457-651955c7074d",
               "https://images.unsplash.com/photo-1763485955499-f11dcfdda823",
               "https://images.unsplash.com/photo-1690235758424-2e34a71e68a2",
               "https://images.unsplash.com/photo-1643750897188-aa9fd6461097",
               "https://images.unsplash.com/photo-1707968781591-59ff287a54c6"
             ].map((url, i) => (
               <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative shadow-sm">
                  <ImageWithFallback src={url} alt="Inspo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors" />
                  <Instagram className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
