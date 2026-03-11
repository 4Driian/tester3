import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar, ArrowUpRight, Navigation, ChevronRight, Globe, Layers } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Using the map asset provided in the image context
import mapNyc from 'figma:asset/593b27832bfc9095407ee87baddaa4d80efb41ef.png';

interface ShowroomData {
  id: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    week: string;
    weekend: string;
  };
  desc: string;
  tags: string[];
  image: string;
  mapImage: string;
}

const showrooms: ShowroomData[] = [
  {
    id: 'nyc',
    city: 'New York',
    district: 'SoHo Design District',
    address: '123 Design District, SoHo, New York, NY 10012',
    phone: '+1 (212) 555-0101',
    email: 'nyc@ramstack.com',
    hours: {
      week: 'Mon-Fri: 10:00 AM - 7:00 PM',
      weekend: 'Sat: 10:00 AM - 6:00 PM, Sun: 12:00 PM - 5:00 PM'
    },
    desc: 'Our flagship showroom in the heart of SoHo, featuring three floors of premium surfaces and an exclusive designer consultation lounge.',
    tags: ['Designer Consultations', 'Material Library', 'Sample Service'],
    image: 'https://images.unsplash.com/photo-1643750897188-aa9fd6461097?auto=format&fit=crop&q=80&w=1200',
    mapImage: mapNyc
  },
  {
    id: 'la',
    city: 'Los Angeles',
    district: 'West Hollywood',
    address: '8400 Melrose Ave, West Hollywood, CA 90069',
    phone: '+1 (323) 555-0202',
    email: 'la@ramstack.com',
    hours: {
      week: 'Mon-Fri: 9:00 AM - 6:00 PM',
      weekend: 'Sat: 10:00 AM - 5:00 PM, Sun: Closed'
    },
    desc: 'An open-air architectural concept space showcasing how our stones interact with the iconic California sunlight.',
    tags: ['Outdoor Gallery', 'Project Management', 'Tech Center'],
    image: 'https://images.unsplash.com/photo-1770381142493-075344e6fc9b?auto=format&fit=crop&q=80&w=1200',
    mapImage: 'https://images.unsplash.com/photo-1542736667-069246bdf6d7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'miami',
    city: 'Miami',
    district: 'Design District',
    address: '3841 NE 2nd Ave, Miami, FL 33137',
    phone: '+1 (305) 555-0303',
    email: 'miami@ramstack.com',
    hours: {
      week: 'Mon-Fri: 10:00 AM - 7:00 PM',
      weekend: 'Sat: 11:00 AM - 6:00 PM, Sun: Closed'
    },
    desc: 'A vibrant, light-filled showroom focusing on exotic marbles and translucent onyx collections.',
    tags: ['Exotic Collection', 'Sample Bar', 'Boutique Service'],
    image: 'https://images.unsplash.com/photo-1745301558339-44eb3217d5da?auto=format&fit=crop&q=80&w=1200',
    mapImage: 'https://images.unsplash.com/photo-1542736667-069246bdf6d7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'chicago',
    city: 'Chicago',
    district: 'River North',
    address: '222 W Hubbard St, Chicago, IL 60654',
    phone: '+1 (312) 555-0404',
    email: 'chicago@ramstack.com',
    hours: {
      week: 'Mon-Fri: 9:00 AM - 6:00 PM',
      weekend: 'Sat: 10:00 AM - 4:00 PM, Sun: Closed'
    },
    desc: 'Housed in a historic industrial building, this space highlights large-format slabs and architectural integration.',
    tags: ['Slab Gallery', 'Architectural Specs', 'Historic Space'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    mapImage: 'https://images.unsplash.com/photo-1542736667-069246bdf6d7?auto=format&fit=crop&q=80&w=1200'
  }
];

export const Showrooms = () => {
  const [selected, setSelected] = useState<ShowroomData>(showrooms[0]);

  return (
    <div className="bg-[#FCFBFA] min-h-screen overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 py-10">
        {/* Header - More Compact */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-100 pb-10">
           <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Our Network</span>
              <h1 className="text-5xl font-serif text-neutral-900 leading-tight">
                Global <span className="text-neutral-500 italic">Showrooms</span>
              </h1>
           </div>
           <p className="max-w-md text-sm text-neutral-500 font-light leading-relaxed">
             Experience our premium surfaces in person at our curated design spaces across the globe. Professional consultations available by appointment.
           </p>
        </header>

        {/* Main Integrated Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch min-h-[700px]">
          
          {/* Left Panel: Navigation & Direct Info (Predictive & Clear) */}
          <aside className="lg:col-span-4 flex flex-col space-y-12">
            
            {/* Compact Location Picker */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 mb-4">Select Experience</p>
              <div className="flex flex-col gap-1">
                {showrooms.map((showroom) => (
                  <button
                    key={showroom.id}
                    onClick={() => setSelected(showroom)}
                    className={`group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 text-left ${
                      selected.id === showroom.id 
                        ? 'bg-neutral-900 text-white shadow-xl translate-x-2' 
                        : 'bg-transparent text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className={`text-xl font-serif ${selected.id === showroom.id ? 'italic' : ''}`}>{showroom.city}</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-60">{showroom.district}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${selected.id === showroom.id ? 'rotate-90 scale-110' : 'opacity-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Persistent & Direct Information Panel */}
            <div className="bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-sm flex-1 space-y-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-10"
                >
                  {/* Address Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Location</span>
                    </div>
                    <p className="text-neutral-900 font-medium text-lg leading-snug">{selected.address}</p>
                    <button className="text-[10px] font-bold text-neutral-900 uppercase tracking-widest flex items-center gap-2 group underline underline-offset-4 decoration-neutral-200 hover:decoration-neutral-900 transition-all">
                      Directions <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Hours Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Hours</span>
                    </div>
                    <div className="space-y-1 text-sm text-neutral-600">
                      <p className="flex justify-between"><span>Mon-Fri</span> <span className="font-medium text-neutral-900">{selected.hours.week.split(': ')[1]}</span></p>
                      <p className="flex justify-between"><span>Weekend</span> <span className="font-medium text-neutral-900">{selected.hours.weekend.split(': ')[1]}</span></p>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="pt-8 border-t border-neutral-50 flex flex-col gap-3">
                    <button className="w-full bg-neutral-900 text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all">
                      <Calendar className="w-4 h-4" />
                      Book Visit
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <a href={`tel:${selected.phone}`} className="flex items-center justify-center gap-2 py-3 border border-neutral-100 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:border-neutral-900 transition-all">
                        <Phone className="w-3 h-3" /> Call
                      </a>
                      <a href={`mailto:${selected.email}`} className="flex items-center justify-center gap-2 py-3 border border-neutral-100 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:border-neutral-900 transition-all">
                        <Mail className="w-3 h-3" /> Email
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </aside>

          {/* Right Panel: Hero Map & Visuals (The Main Focus) */}
          <main className="lg:col-span-8 relative rounded-[3rem] overflow-hidden bg-neutral-100 group shadow-2xl min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Visual Background: Interactive Map with overlay image */}
                <ImageWithFallback src={selected.mapImage} alt="Map View" className="w-full h-full object-cover grayscale brightness-95 contrast-110" />
                <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
                
                {/* Floating Image Peek (Small interior view to keep context) */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-10 right-10 w-72 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group/peek"
                >
                  <ImageWithFallback src={selected.image} alt="Interior" className="w-full h-full object-cover group-hover/peek:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[9px] text-white font-bold uppercase tracking-widest">Gallery Preview</span>
                </motion.div>

                {/* Main Dynamic Map Pin */}
                <motion.div 
                  initial={{ scale: 0, y: -20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.6, type: 'spring', damping: 12 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="relative group/pin cursor-pointer">
                    <div className="absolute -inset-10 bg-neutral-900/10 rounded-full animate-ping" />
                    <div className="absolute -inset-6 bg-neutral-900/20 rounded-full scale-110 group-hover/pin:scale-150 transition-transform duration-500" />
                    <div className="relative w-16 h-16 bg-neutral-900 rounded-full border-4 border-white shadow-2xl flex items-center justify-center group-hover/pin:bg-neutral-800 transition-colors">
                      <Navigation className="w-6 h-6 text-white" />
                    </div>
                    {/* Tooltip Label */}
                    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-xl border border-neutral-100 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">{selected.city} Flagship</span>
                    </div>
                  </div>
                </motion.div>

                {/* Description Overlay (Elegant & Subtle) */}
                <div className="absolute bottom-10 left-10 right-10 z-20 pointer-events-none">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] space-y-4"
                  >
                    <p className="text-white text-xl font-serif italic leading-relaxed">
                      "{selected.desc}"
                    </p>
                    <div className="flex gap-2">
                      {selected.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-[8px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Interactive Map Controls Overlay */}
                <div className="absolute bottom-10 right-10 flex flex-col gap-3">
                   <button className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all">
                     <Globe className="w-5 h-5" />
                   </button>
                   <button className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all">
                     <Layers className="w-5 h-5" />
                   </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};
