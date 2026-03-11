import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-24 pb-12">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl font-serif tracking-tight uppercase">Ramstack</h2>
            <p className="text-neutral-500 font-light leading-relaxed max-w-sm">
              Defining architectural elegance through premium surfaces and curated materials for the modern home.
            </p>
            <div className="flex gap-6">
              {[Instagram, Linkedin, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">Collections</h4>
              <ul className="space-y-4 text-sm text-neutral-500 font-light">
                <li><Link to="/collections" className="hover:text-neutral-900 transition-colors">Italian Marble</Link></li>
                <li><Link to="/collections" className="hover:text-neutral-900 transition-colors">Exotic Onyx</Link></li>
                <li><Link to="/collections" className="hover:text-neutral-900 transition-colors">Architectural Stone</Link></li>
                <li><Link to="/collections" className="hover:text-neutral-900 transition-colors">Digital Porcelain</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">Experience</h4>
              <ul className="space-y-4 text-sm text-neutral-500 font-light">
                <li><Link to="/spaces" className="hover:text-neutral-900 transition-colors">Residential Spaces</Link></li>
                <li><Link to="/showrooms" className="hover:text-neutral-900 transition-colors">Global Showrooms</Link></li>
                <li><Link to="/catalog" className="hover:text-neutral-900 transition-colors">Digital Catalog</Link></li>
                <li><Link to="/showrooms" className="hover:text-neutral-900 transition-colors">Virtual Tour</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">Inquiry</h4>
              <ul className="space-y-4 text-sm text-neutral-500 font-light">
                <li><Link to="/contact" className="hover:text-neutral-900 transition-colors">Contact Us</Link></li>
                <li><Link to="/contact" className="hover:text-neutral-900 transition-colors">Request Catalog</Link></li>
                <li><Link to="/contact" className="hover:text-neutral-900 transition-colors">Project Support</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-neutral-50 gap-6">
          <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
            © 2026 Ramstack Surfaces. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-900">
            <a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
