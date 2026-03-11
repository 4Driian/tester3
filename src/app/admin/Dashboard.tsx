import React from 'react';
import { 
  TrendingUp, 
  Package, 
  Image as ImageIcon, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight, 
  Box,
  Layout
} from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Total Products', value: '1,284', icon: Package, change: '+12%', color: 'bg-blue-500' },
  { label: 'Active Items', value: '1,120', icon: CheckCircle2, change: '+5%', color: 'bg-green-500' },
  { label: 'Low Stock Items', value: '14', icon: AlertCircle, change: '-2%', color: 'bg-red-500' },
  { label: 'Active Showrooms', value: '8', icon: CheckCircle2, change: '0%', color: 'bg-purple-500' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-serif text-neutral-900 leading-tight">Dashboard Overview</h1>
        <p className="text-neutral-500 text-sm font-light">Welcome back, here's what's happening with Ramstack today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-2xl ${stat.color} bg-opacity-10 flex items-center justify-center text-current`}>
                <stat.icon className="w-6 h-6" style={{ color: stat.color.replace('bg-', '') }} />
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</h3>
              <p className="text-3xl font-serif text-neutral-900 leading-none">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Quick Actions */}
        <div className="lg:col-span-4 space-y-6">
           <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-widest px-2 flex items-center gap-3">
             <ArrowUpRight className="w-4 h-4 text-neutral-400" />
             Quick Actions
           </h2>
           <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Add New Product', icon: Box, color: 'bg-neutral-900 text-white' },
                { label: 'Update Inventory', icon: AlertCircle, color: 'bg-white text-neutral-900 border border-neutral-200' },
                { label: 'Site Content', icon: Layout, color: 'bg-white text-neutral-900 border border-neutral-200' },
                { label: 'Upload PDFs', icon: FileText, color: 'bg-white text-neutral-900 border border-neutral-200' },
              ].map((action, i) => (
                <button key={i} className={`flex items-center gap-4 p-5 rounded-3xl transition-all hover:shadow-2xl hover:-translate-y-1 group ${action.color}`}>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${action.color.includes('neutral-900') ? 'bg-white/10' : 'bg-neutral-100'}`}>
                    <action.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">{action.label}</span>
                </button>
              ))}
           </div>
        </div>

        {/* Recent Updates Table - Simple list */}
        <div className="lg:col-span-8 space-y-6">
           <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-widest px-2 flex items-center gap-3">
             <AlertCircle className="w-4 h-4 text-neutral-400" />
             Pending Tasks
           </h2>
           <div className="bg-white rounded-[3rem] border border-neutral-100 shadow-sm overflow-hidden p-4">
              <div className="space-y-4">
                 {[
                   { type: 'image', label: '8 Products missing images', action: 'Upload images' },
                   { type: 'pdf', label: '12 Items without technical specs', action: 'Upload PDFs' },
                   { type: 'inventory', label: 'Critical stock for Onyx Honey', action: 'Restock' },
                   { type: 'showroom', label: 'New showroom in Miami', action: 'Register location' },
                 ].map((task, i) => (
                   <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] border border-neutral-50 hover:bg-neutral-50 transition-all group">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 transition-colors">
                           {task.type === 'image' && <ImageIcon className="w-5 h-5" />}
                           {task.type === 'pdf' && <FileText className="w-5 h-5" />}
                           {task.type === 'inventory' && <TrendingUp className="w-5 h-5" />}
                           {task.type === 'showroom' && <MapPin className="w-5 h-5" />}
                        </div>
                        <span className="text-sm font-medium text-neutral-900">{task.label}</span>
                      </div>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors bg-white px-6 py-3 rounded-full border border-neutral-100">
                        {task.action}
                      </button>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
