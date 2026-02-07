import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./ui/tooltip";

export default function Hero({ t }) {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-blue-500 font-semibold tracking-wider text-lg">
          {t.hero.greeting}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
          Daniel Luiz <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.hero.role}
          </span>
        </h1>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition shadow-lg hover:shadow-blue-500/25"
          >
            {t.hero.cta}
          </a>
          <Tooltip showArrow content="Veja meus principais contatos">
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {t.nav.contact}
            </a>
          </Tooltip>
        </div>
      </motion.div>
    </section>
  );
}
