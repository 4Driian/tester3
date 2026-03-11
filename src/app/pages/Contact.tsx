import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Contact = () => {
  return (
    <div className="bg-[#FCFBFA] min-h-screen">
      <header className="pt-24 pb-12 px-6 lg:px-12 max-w-[1536px] mx-auto border-b border-neutral-100 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Collaborate</span>
            <h1 className="text-6xl font-serif text-neutral-900 leading-tight">Start a <br /><span className="text-neutral-500 italic">Conversation</span></h1>
          </div>
          <div className="max-w-md text-sm text-neutral-500 font-light leading-relaxed">
            Our material specialists and architectural consultants are ready to assist you in selecting the perfect finishes for your architectural vision.
          </div>
        </div>
      </header>

      <main className="max-w-[1536px] mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
          
          {/* Form Side */}
          <section className="lg:col-span-7 space-y-12 bg-white p-12 lg:p-16 rounded-[4rem] border border-neutral-100 shadow-sm">
             <div className="space-y-4">
               <h2 className="text-3xl font-serif text-neutral-900">Project Inquiry</h2>
               <p className="text-neutral-500 text-sm font-light leading-relaxed">Please provide some details about your project and our specialized team will contact you within 24 hours.</p>
             </div>
             
             <form className="space-y-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 group">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-900 transition-colors">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-neutral-100 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-all placeholder:text-neutral-200" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-900 transition-colors">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-neutral-100 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-all placeholder:text-neutral-200" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 group">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-900 transition-colors">Phone Number</label>
                    <input type="tel" placeholder="+1 (234) 567 890" className="w-full bg-transparent border-b border-neutral-100 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-all placeholder:text-neutral-200" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-900 transition-colors">Project Type</label>
                    <select className="w-full bg-transparent border-b border-neutral-100 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-all appearance-none">
                       <option>Residential Interior</option>
                       <option>Commercial Space</option>
                       <option>Architectural Cladding</option>
                       <option>Landscape / Outdoor</option>
                    </select>
                  </div>
               </div>

               <div className="space-y-2 group">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 group-focus-within:text-neutral-900 transition-colors">Message / Request Details</label>
                  <textarea rows={4} placeholder="Tell us more about your vision..." className="w-full bg-transparent border-b border-neutral-100 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-all placeholder:text-neutral-200 resize-none" />
               </div>

               <button className="w-full bg-neutral-900 text-white py-6 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all shadow-xl group">
                 <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                 Send Inquiry
               </button>
             </form>
          </section>

          {/* Info Side */}
          <aside className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            <div className="bg-neutral-50 p-12 rounded-[4rem] border border-neutral-100 shadow-sm flex-1 space-y-12">
               <div className="space-y-6">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">Direct Contact</h3>
                 <div className="space-y-8">
                    <div className="flex items-center gap-6 group cursor-pointer">
                       <div className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 transition-all shadow-sm">
                         <Phone className="w-4 h-4" />
                       </div>
                       <div>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Call Us</p>
                         <p className="text-lg font-serif italic text-neutral-900">+1 (800) RAMSTACK</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 group cursor-pointer">
                       <div className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 transition-all shadow-sm">
                         <Mail className="w-4 h-4" />
                       </div>
                       <div>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Direct Email</p>
                         <p className="text-lg font-serif italic text-neutral-900">hello@ramstack.com</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 group cursor-pointer">
                       <div className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 transition-all shadow-sm">
                         <MessageCircle className="w-4 h-4" />
                       </div>
                       <div>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">WhatsApp Concierge</p>
                         <p className="text-lg font-serif italic text-neutral-900">+1 (234) 567 890</p>
                       </div>
                    </div>
                 </div>
               </div>

               <div className="space-y-6">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">Flagship Studio</h3>
                 <div className="space-y-4">
                    <div className="flex items-start gap-4 text-neutral-500 font-light text-sm leading-relaxed">
                       <MapPin className="w-4 h-4 mt-1 text-neutral-900" />
                       <span>123 Design District, SoHo <br /> New York, NY 10012, USA</span>
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 underline underline-offset-8 decoration-neutral-100 hover:decoration-neutral-900 transition-all">
                      View All Showrooms
                    </button>
                 </div>
               </div>
            </div>

            <div className="relative rounded-[4rem] overflow-hidden aspect-video shadow-xl group">
               <ImageWithFallback src="https://images.unsplash.com/photo-1707968781591-59ff287a54c6?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="text-center p-8">
                     <h4 className="text-white font-serif text-2xl italic mb-4">Visit our NY Studio</h4>
                     <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-bold text-[9px] uppercase tracking-widest hover:-translate-y-1 transition-transform">Get Directions</button>
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
