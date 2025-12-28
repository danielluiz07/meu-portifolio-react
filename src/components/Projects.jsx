import React from "react";
import { Code2, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Importação das imagens
import imgLandingPage from "../assets/landing-page.png";
import imgCaixaTreino from "../assets/caixa-treino.png";

const projectResources = {
  1: {
    image: imgLandingPage,
    github: "https://github.com/danielluiz07/landing-page",
    preview: "https://landing-page-doisl.vercel.app/",
  },
  2: {
    image: imgCaixaTreino,
    github: "https://github.com/danielluiz07/caixa-treino",
    preview: "https://caixa-treino-segunda.netlify.app",
  },
};

export default function Projects({ t }) {

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-10 text-center flex justify-center items-center gap-2">
            {t.projects.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project) => {
              const resources = projectResources[project.id];

              return (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col"
                >
                  {/* Área da Imagem */}
                  <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    {resources?.image ? (
                      <img
                        src={resources.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      />
                    ) : (
                      <Code2 size={40} className="text-gray-400" />
                    )}
                  </div>

                  {/* Área do Conteúdo */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">
                      {project.tech}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
                      {project.desc}
                    </p>

                    {/* Botões */}
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
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}