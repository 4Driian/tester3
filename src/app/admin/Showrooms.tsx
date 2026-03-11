import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Plus, 
  Phone, 
  Clock, 
  Search, 
  Trash2, 
  Edit2, 
  Eye, 
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';

const showrooms = [
  { id: 1, name: 'NYC Flagship', address: '5th Avenue, Manhattan, NY', phone: '+1 212 555 0198', hours: 'Mon-Sat 10:00 - 19:00', status: 'Active', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Miami Design District', address: 'NE 39th St, Miami, FL', phone: '+1 305 555 0122', hours: 'Mon-Sat 09:00 - 18:00', status: 'Active', img: 'https://images.unsplash.com/photo-1643750897188-aa9fd6461097?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'LA Gallery', address: 'Melrose Ave, West Hollywood, CA', phone: '+1 310 555 0145', hours: 'Tue-Sat 11:00 - 20:00', status: 'Inactive', img: 'https://images.unsplash.com/photo-1707968781591-59ff287a54c6?auto=format&fit=crop&q=80&w=800' },
];

export const Showrooms = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-serif text-neutral-900 leading-tight">Gallery Locations</h1>
          <p className="text-neutral-500 text-sm font-light">Manage physical showrooms, operating hours, and contact details.</p>
        </div>
        <button className="bg-neutral-900 text-white px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-neutral-800 transition-all shadow-xl">
          <Plus className="w-4 h-4" />
          Add Showroom
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {showrooms.map((showroom, i) => (
          <motion.div 
            key={showroom.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white rounded-[3.5rem] border border-neutral-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full"
          >
            <div className="aspect-video relative overflow-hidden shrink-0">
               <img src={showroom.img} alt={showroom.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute top-6 right-6">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 backdrop-blur-md ${
                    showroom.status === 'Active' ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
                  }`}>
                    {showroom.status}
                  </span>
               </div>
            </div>
            
            <div className="p-10 space-y-8 flex-1 flex flex-col justify-between">
               <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-neutral-900 group-hover:italic transition-all">{showroom.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-medium text-neutral-500 leading-relaxed pt-2">{showroom.address}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-medium text-neutral-500 leading-relaxed pt-2">{showroom.phone}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-medium text-neutral-500 leading-relaxed pt-2">{showroom.hours}</p>
                    </div>
                  </div>
               </div>

               <div className="pt-8 border-t border-neutral-50 flex items-center gap-3">
                  <button className="flex-1 px-4 py-3 bg-neutral-50 rounded-xl text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:bg-neutral-900 hover:text-white transition-all">
                    Edit Gallery
                  </button>
                  <button className="p-3 bg-neutral-50 rounded-xl text-neutral-400 hover:text-red-500 transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
