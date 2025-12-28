import React from 'react';
import { User } from 'lucide-react';
import Reveal from './Reveal';
import fotoPerfil from '../assets/my_photo.jpeg'

export default function About({ t }) {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Espaço da Foto */}
          <div className="w-full md:w-1/2 aspect-square bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition duration-500 p-1">
            <div className="w-full h-full bg-gray-300 dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={fotoPerfil} alt="Minha foto de perfil" />
            </div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="text-blue-500">#</span> {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {t.about.desc}
            </p>
            
            {/* Cards de estatísticas rápidas */}
            <div className="flex gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-xl text-blue-500">1+</h3>
                <p className="text-sm text-gray-500">{t.about.stats.exp}</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-xl text-purple-500">7+</h3>
                <p className="text-sm text-gray-500">{t.about.stats.projects}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}