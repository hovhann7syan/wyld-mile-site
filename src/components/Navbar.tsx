"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживаем скролл страницы
  useEffect(() => {
    const handleScroll = () => {
      // Если прокрутили больше 50 пикселей вниз, меняем стиль
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl backdrop-blur-2xl px-6 py-3 rounded-full flex justify-between items-center transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 shadow-lg shadow-slate-200/50 border border-slate-200' // Стили при скролле (светлый фон)
          : 'bg-white/10 shadow-2xl border border-white/20' // Стили на самом верху (прозрачный)
      }`}
    >
      
      {/* Логотип */}
      <Link href="/" className="flex items-center hover:opacity-70 active:scale-95 transition-all cursor-pointer">
        <img 
          src="/logo.png" 
          alt="WYLD MILE" 
          // Класс invert автоматически делает белый логотип черным при скролле!
          className={`h-8 md:h-10 w-auto object-contain transition-all duration-500 ${isScrolled ? 'invert opacity-80' : ''}`} 
        />
      </Link>
      
      {/* Ссылки меню */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/#destinations" className={`text-sm font-semibold transition-all hover:scale-105 ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}>
          Destinations
        </Link>
        <Link href="/blog" className={`text-sm font-semibold transition-all hover:scale-105 ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}>
          Blog
        </Link>
        <Link href="/about" className={`text-sm font-semibold transition-all hover:scale-105 ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}>
          About
        </Link>
        <Link href="/#contact" className={`text-sm font-semibold transition-all hover:scale-105 ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}>
          Contact
        </Link>
      </div>

      {/* Кнопка */}
      <a 
        href="https://t.me/wyldmile" 
        target="_blank"
        rel="noopener noreferrer"
        className={`font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5 active:scale-95 ${
          isScrolled
            ? 'bg-slate-900 text-white hover:bg-yellow-400 hover:text-black hover:shadow-yellow-400/50' // Темная кнопка на светлом фоне
            : 'bg-white text-slate-900 hover:bg-yellow-400 hover:text-black hover:shadow-yellow-400/50' // Светлая кнопка на темном фоне
        }`}
      >
        Book Trip
      </a>
    </nav>
  );
}