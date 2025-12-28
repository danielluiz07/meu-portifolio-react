import React from 'react';
import { Award } from 'lucide-react';
import Reveal from './Reveal';

export default function Certificates({ t }) {

  return (
    <section id="certs" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10 text-center flex justify-center items-center gap-2">
          <Award className="text-purple-500"/> {t.certs.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Aqui fazemos o loop na lista que vem do App.jsx */}
          {t.certs.items.map((cert) => (
            <div 
              key={cert.id} 
              className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition hover:border-blue-500/30"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg shrink-0">
                <Award size={32} />
              </div>
              
              <div>
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.certs.issuedBy} {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}