import React from 'react';
import { Moon, Sun, Globe } from 'lucide-react';

export default function Navbar({ t, lang, toggleLang, darkMode, toggleTheme }) {
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          DL Portifolio
        </span>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-500 transition">{t.nav.home}</a>
          <a href="#about" className="hover:text-blue-500 transition">{t.nav.about}</a>
          <a href="#projects" className="hover:text-blue-500 transition">{t.nav.projects}</a>
          <a href="#certs" className="hover:text-blue-500 transition">{t.nav.certs}</a>
          <a href="#contact" className="hover:text-blue-500 transition">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-1 text-sm font-bold">
            <Globe size={18} /> {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}