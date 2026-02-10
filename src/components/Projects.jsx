import React, { useState, useEffect } from "react";
import { Code2, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

// Importação das imagens
import imgLandingPage from "../assets/landing-page.png";
import imgCaixaTreino from "../assets/caixa-treino.png";
import imgLoginChat from "../assets/tela-login-chat.png";
import imgChatTempoReal from "../assets/chat-tempo-real.png";
import imgPainelCopy1 from "../assets/copy-genius1.png";
import imgPainelCopy2 from "../assets/copy-genius2.png";
import imgCadastroUsuarios from "../assets/cadastro-usuarios.png";
import imgLinkHub from "../assets/meu-link-hub.png";
import imgDlCards from "../assets/dl-cards.png";
import imgDlFeedbacks from "../assets/dl-feedbacks.png";
import imgDlWeather from "../assets/dl-weather.png"

const projectResources = {
  1: {
    images: [imgLandingPage],
    github: "https://github.com/danielluiz07/landing-page",
    preview: "https://landing-page-doisl.vercel.app/",
  },
  2: {
    images: [imgCaixaTreino],
    github: "https://github.com/danielluiz07/caixa-treino",
    preview: "https://caixa-treino-segunda.netlify.app",
  },
  3: {
    images: [imgLoginChat, imgChatTempoReal],
    github: "https://github.com/danielluiz07/chat-tempo-real",
    preview: "",
  },
  4: {
    images: [imgPainelCopy1, imgPainelCopy2],
    github: "https://github.com/danielluiz07/painel-copy-dl",
    preview: "",
  },
  5: {
    images: [imgCadastroUsuarios],
    github: "https://github.com/danielluiz07/projeto-cadastro-usuarios",
    preview: "",
  },
  6:{
    images: [imgLinkHub],
    github: "https://github.com/danielluiz07/meu-linkhub",
    preview: "https://meu-link-hub.vercel.app"
  },
  7:{
    images: [imgDlCards],
    github: "https://github.com/danielluiz07/DL_Cards",
    preview: ""
  },
  8:{
    images: [imgDlFeedbacks],
    github: "https://github.com/danielluiz07/dl-feedbacks",
    preview: ""
  },
  9:{
    images: [imgDlWeather],
    github: "https://github.com/danielluiz07/dl-weather",
    preview: ""
  },
};

// --- SUB-COMPONENTE:
function ProjectCard({ project, t }) {
  const resources = projectResources[project.id];
  const images = resources?.images || [];
  
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    let interval;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2500); 
    } else {
      setCurrentImgIndex(0);
    }

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full"
    >
      {/* Área da Imagem com Animação */}
      <div className="h-48 bg-gray-300 dark:bg-gray-700 relative overflow-hidden group">
        {images.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImgIndex} 
              src={images[currentImgIndex]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} 
              className="w-full h-full object-cover absolute top-0 left-0"
            />
          </AnimatePresence>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code2 size={40} className="text-gray-400" />
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImgIndex ? "bg-white scale-125" : "bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">
          {project.tech}
        </span>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
          {project.desc}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          {resources?.github && (
            <a
              href={resources.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <Github size={18} /> GitHub
            </a>
          )}

          {resources?.preview && (
            <a
              href={resources.preview}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <ExternalLink size={18} /> {t.projects.view || "Demo"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export default function Projects({ t }) {
  if (!t || !t.projects || !t.projects.items) return null;

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-10 text-center flex justify-center items-center gap-2">
            {t.projects.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project) => (
              <ProjectCard key={project.id} project={project} t={t} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}