import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  Box, 
  Warehouse, 
  Image as ImageIcon, 
  FileText, 
  Layers, 
  MapPin, 
  Settings, 
  LogOut,
  Bell,
  Search,
  User
} from 'lucide-react';
import { motion } from 'motion/react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Box, label: 'Products', href: '/admin/products' },
  { icon: Warehouse, label: 'Inventory', href: '/admin/inventory' },
  { icon: ImageIcon, label: 'Images', href: '/admin/images' },
  { icon: FileText, label: 'PDFs', href: '/admin/pdfs' },
  { icon: Layers, label: 'Collections', href: '/admin/collections' },
  { icon: MapPin, label: 'Showrooms', href: '/admin/showrooms' },
  { icon: Settings, label: 'Site Content', href: '/admin/content' },
];

export const AdminLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-50 flex font-sans">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-neutral-200 transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-20'} flex flex-col`}>
        <div className="p-8 flex items-center gap-3 border-b border-neutral-100">
          <div className="w-8 h-8 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-bold shrink-0">R</div>
          {isSidebarOpen && <span className="font-serif tracking-widest text-lg font-bold text-neutral-900">ADMIN</span>}
        </div>

        <nav className="flex-1 py-8 px-4 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
                  isActive 
                    ? 'bg-neutral-900 text-white shadow-lg' 
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-900'}`} />
                {isSidebarOpen && <span className="text-sm font-semibold">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-neutral-100">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="text-sm font-semibold">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-neutral-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-6 flex-1">
             <div className="relative max-w-md w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Global search..." 
                  className="w-full pl-12 pr-6 py-2.5 bg-neutral-50 rounded-xl text-sm border-transparent focus:bg-white focus:border-neutral-200 transition-all outline-none"
                />
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-500 hover:bg-neutral-100 transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-neutral-200" />
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-neutral-900 leading-tight">Admin User</p>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Manager</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden">
                <User className="w-6 h-6 text-neutral-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Content View */}
        <div className="p-8 max-w-[1600px] mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
