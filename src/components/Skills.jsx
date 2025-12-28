import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Java", "Python", "PyAutoGui", "Express.js", "Prisma", "JavaScript", "React", "Node.js", "TailwindCss", "Node.js", "MySQL", "MongoDB", "BootStrap", "Git", "Figma", "GitHub", "Render"
];

export default function Skills() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 py-6 overflow-hidden relative">
      {/* Gradientes laterais para efeito de fade */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 dark:from-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 dark:from-dark to-transparent z-10" />
      
      <motion.div 
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {/* Duplicamos a lista para o loop infinito ficar perfeito */}
        {[...skills, ...skills].map((skill, index) => (
          <span key={index} className="text-2xl md:text-4xl font-bold text-gray-400 dark:text-gray-600 uppercase select-none">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}