import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact({ t }) {
  return (
    <section id="contact" className="py-20 px-6 mb-20">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">{t.contact.text}</p>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/danielluiz07" target="_blank" rel="noreferrer" className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:text-blue-500 hover:scale-110 transition border border-gray-100 dark:border-gray-700">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-luiz1607/" target="_blank" rel="noreferrer" className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:text-blue-600 hover:scale-110 transition border border-gray-100 dark:border-gray-700">
              <Linkedin size={24} />
            </a>
            <a href="mailto:danielluiz1607@gmail.com" className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:text-red-500 hover:scale-110 transition border border-gray-100 dark:border-gray-700">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}