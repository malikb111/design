'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side: Logo and Navigation Links */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div>
                <Image
                  src="/logo_sati.svg"
                  alt="Logo SATI"
                  width={165}
                  height={62}
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-x-[30px]">
              <button 
                className="relative text-white px-3 py-2 text-sm font-medium group"
              >
                <span>Nos services</span>
                <span className="absolute bottom-1.5 left-3 w-0 h-[1px] bg-white group-hover:w-[calc(100%-24px)] transition-all duration-500 ease-in-out origin-left"></span>
              </button>
              <button 
                className="relative text-white px-3 py-2 text-sm font-medium group"
              >
                <span>Société</span>
                <span className="absolute bottom-1.5 left-3 w-0 h-[1px] bg-white group-hover:w-[calc(100%-24px)] transition-all duration-500 ease-in-out origin-left"></span>
              </button>
              <button 
                className="relative text-white px-3 py-2 text-sm font-medium group"
              >
                <span>Contact</span>
                <span className="absolute bottom-1.5 left-3 w-0 h-[1px] bg-white group-hover:w-[calc(100%-24px)] transition-all duration-500 ease-in-out origin-left"></span>
              </button>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white">
              <Globe className="h-5 w-5" />
            </button>
            <button 
              className="relative text-white px-3 py-2 text-sm font-medium group"
            >
              <span>Se connecter</span>
              <span className="absolute bottom-1.5 left-3 w-0 h-[1px] bg-white group-hover:w-[calc(100%-24px)] transition-all duration-500 ease-in-out origin-left"></span>
            </button>
            <button 
              className="text-white px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-[#CC1B23] via-[#CA161F] to-[#FF232F] transition-opacity"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}