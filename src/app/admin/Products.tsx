import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Eye, 
  ChevronDown,
  Box,
  Layout,
  Tag,
  Box as BoxIcon,
  Layers,
  Archive,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const products = [
  { id: 'onyx-honey', sku: 'ONYX-001', name: 'Onyx Honey', category: 'Exotic Gemstone', stock: 124, status: 'Active', img: 'figma:asset/a0f32ce2b5c13145d473650dad3a356b334a0f12.png', featured: true },
  { id: 'statuario', sku: 'MARB-042', name: 'Bianco Statuario', category: 'Italian Marble', stock: 42, status: 'Active', img: 'https://images.unsplash.com/photo-1719107647328-dd2134da4fa7?auto=format&fit=crop&q=80&w=800', featured: false },
  { id: 'nero-portoro', sku: 'MARB-089', name: 'Nero Portoro', category: 'Exclusive Black', stock: 0, status: 'Out of Stock', img: 'https://images.unsplash.com/photo-1494520787307-9d24ab287b36?auto=format&fit=crop&q=80&w=800', featured: true },
  { id: 'calacatta', sku: 'MARB-102', name: 'Calacatta Gold', category: 'Premium Selection', stock: 12, status: 'Low Stock', img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800', featured: false },
];

export const Products = () => {
  const [isAddingNew, setIsAddingNew] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-serif text-neutral-900 leading-tight">Product Catalog</h1>
          <p className="text-neutral-500 text-sm font-light">Manage your entire stone collection, variants, and specifications.</p>
        </div>
        <button 
          onClick={() => setIsAddingNew(true)}
          className="bg-neutral-900 text-white px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1"
        >
          <Plus className="w-4 h-4" />
          Add New Product
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-[2.5rem] border border-neutral-100 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input 
            type="text" 
            placeholder="Search by name, SKU or category..." 
            className="w-full pl-14 pr-6 py-4 bg-neutral-50 rounded-[2rem] text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-4 bg-neutral-50 rounded-[2rem] text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-6 py-4 bg-neutral-50 rounded-[2rem] text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">
            Sort By
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table-like List */}
      <div className="bg-white rounded-[3rem] border border-neutral-100 shadow-sm overflow-hidden p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
                <th className="px-6 py-2">Product</th>
                <th className="px-6 py-2">SKU</th>
                <th className="px-6 py-2">Category</th>
                <th className="px-6 py-2">Inventory</th>
                <th className="px-6 py-2">Status</th>
                <th className="px-6 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <motion.tr 
                  key={product.id}
                  layout
                  className="group hover:bg-neutral-50 transition-colors rounded-[2rem]"
                >
                  <td className="px-6 py-4 rounded-l-[2rem]">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0">
                        <ImageWithFallback src={product.img} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-neutral-900">{product.name}</p>
                          {product.featured && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
                        </div>
                        <p className="text-[10px] font-medium text-neutral-400">Natural Luxury</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest bg-neutral-100 px-3 py-1.5 rounded-lg">{product.sku}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-neutral-500">{product.category}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-neutral-900">{product.stock} units</p>
                      <div className="w-24 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                        <div className={`h-full ${product.stock > 100 ? 'bg-green-500' : product.stock > 0 ? 'bg-orange-500' : 'bg-red-500'}`} style={{ width: `${Math.min(product.stock, 100)}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
                      product.status === 'Active' ? 'bg-green-50 text-green-600' : 
                      product.status === 'Low Stock' ? 'bg-orange-50 text-orange-600' : 
                      'bg-red-50 text-red-600'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 rounded-r-[2rem] text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-3 bg-white rounded-xl shadow-sm text-neutral-400 hover:text-neutral-900 transition-colors border border-neutral-100"><Eye className="w-4 h-4" /></button>
                      <button className="p-3 bg-white rounded-xl shadow-sm text-neutral-400 hover:text-neutral-900 transition-colors border border-neutral-100"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-3 bg-white rounded-xl shadow-sm text-neutral-400 hover:text-red-500 transition-colors border border-neutral-100"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Product Modal - Simple Overlay */}
      <AnimatePresence>
        {isAddingNew && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsAddingNew(false)}
               className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
             />
             <motion.div 
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="relative w-full max-w-2xl h-screen bg-white shadow-2xl overflow-y-auto"
             >
                <div className="p-12 space-y-12">
                   <header className="flex justify-between items-center">
                      <div className="space-y-1">
                        <h2 className="text-3xl font-serif text-neutral-900">New Product</h2>
                        <p className="text-sm text-neutral-400">Fill in the details to add a new stone to the catalog.</p>
                      </div>
                      <button onClick={() => setIsAddingNew(false)} className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all">
                        <Plus className="w-6 h-6 rotate-45" />
                      </button>
                   </header>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Product Name</label>
                        <input type="text" placeholder="e.g. Royal Quartzite" className="w-full p-5 bg-neutral-50 rounded-2xl border-none focus:ring-1 focus:ring-neutral-200 outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">SKU / Code</label>
                        <input type="text" placeholder="e.g. RQ-001" className="w-full p-5 bg-neutral-50 rounded-2xl border-none focus:ring-1 focus:ring-neutral-200 outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Category</label>
                        <select className="w-full p-5 bg-neutral-50 rounded-2xl border-none focus:ring-1 focus:ring-neutral-200 outline-none appearance-none">
                          <option>Italian Marble</option>
                          <option>Exotic Gemstone</option>
                          <option>Quartzite</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Finish</label>
                        <input type="text" placeholder="e.g. Polished, Matte" className="w-full p-5 bg-neutral-50 rounded-2xl border-none focus:ring-1 focus:ring-neutral-200 outline-none" />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Description</label>
                        <textarea rows={4} placeholder="Describe the material's origin, characteristics and beauty..." className="w-full p-5 bg-neutral-50 rounded-2xl border-none focus:ring-1 focus:ring-neutral-200 outline-none" />
                      </div>
                   </div>

                   <div className="pt-12 border-t border-neutral-100 flex gap-4">
                      <button className="flex-1 bg-neutral-900 text-white py-6 rounded-3xl font-bold text-[10px] uppercase tracking-widest hover:shadow-2xl transition-all">
                        Create Product
                      </button>
                      <button onClick={() => setIsAddingNew(false)} className="px-12 py-6 border border-neutral-100 rounded-3xl font-bold text-[10px] uppercase tracking-widest hover:bg-neutral-50 transition-all">
                        Cancel
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
