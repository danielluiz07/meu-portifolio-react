import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { title } from "framer-motion/client";

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      certs: "Certificados",
      contact: "Contatos",
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Estudante Full Stack",
      cta: "Ver Projetos",
    },
    about: {
      title: "Sobre Mim",
      desc: "Sou estudante de Informática no IFPB e desenvolvedor Full Stack em formação. Tenho foco na criação de aplicações web reais e funcionais, utilizando tecnologias modernas como React, Node.js, Express, Tailwind CSS entre outras tecnologias.Minha experiência vai além da teoria: já desenvolvi desde plataformas de gestão de links e finanças até aplicações integradas com Inteligência Artificial, como o CopyGenius. Também sou entusiasta de IoT e automação, explorando o mundo do hardware com Arduino e ESP para criar soluções inovadoras, como melhora de um protótipo de reuso de águas cinzas e a construçao de um simulador de métoo sismico de reflexão indireta.",
      stats: {
        exp: "Anos Exp.",
        projects: "Projetos",
      },
    },
    projects: {
      title: "Meus Projetos",
      view: "Ver Projeto",
      items: [
        {
          id: 1,
          title: "Landing Page",
          tech: "React & Tailwind CSS",
          desc: "Uma Landing Page desenvolvida com React, focada em performance, design responsivo e animações fluidas.",
        },
        {
          id: 2,
          title: "Caixa do Treino de Futsal",
          tech: "Node.js & Express",
          desc: "Loja virtual com pagamentos e controle de caixa.",
        },
        {
          id: 3,
          title: "Chat tempo real",
          tech: "Node.js & WebSocket",
          desc: "Chat em tempo real com WebSocket, permitindo usuarios de se comunicarem/conversarem."
        },
        {
          id: 4,
          title: "Painel Copy do DL",
          tech: "Node.js & Express",
          desc:"Aplicação web Full Stack que utiliza Inteligência Artificial para gerar textos de marketing instantâneos."
        },
        {
          id: 5,
          title: "Cadastro de Usuários Full-Stack",
          tech: "React, Node.js, Express, Prisma & MongoDB",
          desc:"O objetivo desta aplicação é permitir o cadastro, a visualização e a exclusão de usuários."
        },
        {
          id: 6,
          title: "Meu Link Hub",
          tech: "Node.js, Express, Prisma & MongoDB",
          desc:"Projeto realizado para gerenciar meus Links pessoais."
        },
        {
          id: 7,
          title: "Dl Cards",
          tech: "React.js",
          desc:"Projeto simples apenas para criação de cards de pessoas, com seus nomes, fotos e cargos."
        },
      ],
    },
    certs: {
      title: "Certificados",
      issuedBy: "Emitido por",
      items: [
        {
          id: 1,
          title: "Intensivão de JavaScript",
          issuer: "HashTag Programação",
        },
        {
          id: 2,
          title: "Introdução à Programação Orientada a Objetos (POO)",
          issuer: "Fundação Bradesco",
        },
        {
          id: 3,
          title: "Linguagem de Programação Python",
          issuer: "Fundação Bradesco",
        },
        {
          id: 4,
          title: "Fundamentos de TI: Hardware e Software",
          issuer: "Fundação Bradesco",
        },
        {
          id: 5,
          title: "Jornada Python da Hashtag",
          issuer: "HashTag Programação",
        },
        { id: 6, title: "Programador Web", issuer: "IFRS" },
        { id: 7, title: "Programador em 72 Horas", issuer: "Dev Club" },
        {
          id: 8,
          title:
            "Desenvolvimento Orientado a Objetos utilizando a Linguagem Python",
          issuer: "Fundação Bradesco",
        },
        {
          id: 9,
          title: "TypeScript do Básico ao Avançado (c/ React e Express)",
          issuer: "Udemy, Professor: Matheus basttisti",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      text: "Vamos construir algo incrível juntos?",
    },
    footer: { rights: "Todos os direitos reservados." },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      certs: "Certificates",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I am",
      role: "Full Stack Student",
      cta: "See Projects",
    },
    about: {
      title: "About Me",
      desc: "I am an Informatics student at IFPB and a Full Stack developer in training. My focus is on creating real, functional web applications using modern technologies like React, Node.js, Express, and Tailwind CSS, among others.My experience goes beyond theory: I have developed projects ranging from link and finance management platforms to applications integrated with Artificial Intelligence, such as CopyGenius. I am also an IoT and automation enthusiast, exploring the hardware world with Arduino and ESP to create innovative solutions, such as improving a greywater reuse prototype and building an indirect reflection seismic method simulator.",
      stats: {
        exp: "Years Exp.",
        projects: "Projects",
      },
    },
    skills: { title: "Technologies" },
    projects: {
      title: "My Projects",
      view: "View Project",
      items: [
        {
          id: 1,
          title: "Landing Page",
          tech: "React & Tailwind CSS",
          desc: "A Landing Page developed with React, focused on performance, responsive design, and fluid animations.",
        },
        {
          id: 2,
          title: "Futsal Training Box",
          tech: "Node.js & Express",
          desc: "Virtual store with payments and cash control.",
        },
        {
          id: 3,
          title: "Real-time Chat",
          tech: "Node.js & WebSocket",
          desc: "Real-time chat using WebSocket, allowing users to communicate seamlessly."
        },
        {
          id: 4,
          title: "DL Copy Panel",
          tech: "Node.js & Express",
          desc: "Full Stack web application that uses Artificial Intelligence to generate instant marketing copy."
        },
        {
          id: 5,
          title: "Full-Stack User Registration",
          tech: "React, Node.js, Express, Prisma & MongoDB",
          desc: "The goal of this application is to enable user registration, viewing, and deletion."
        },
        {
          id: 6,
          title: "My Link Hub",
          tech: "Node.js, Express, Prisma & MongoDB",
          desc: "Project created to manage my personal links."
        },
        {
          id: 7,
          title: "DL Cards",
          tech: "React.js",
          desc: "Simple project for creating profile cards with names, photos, and roles."
        },
        
      ],
    },
    certs: {
      title: "Certificates",
      issuedBy: "Issued by",
      items: [
        { id: 1, title: "JavaScript Intensive", issuer: "HashTag Programação" },
        {
          id: 2,
          title: "Introduction to Object-Oriented Programming (OOP)",
          issuer: "Fundação Bradesco",
        },
        {
          id: 3,
          title: "Python Programming Language",
          issuer: "Fundação Bradesco",
        },
        {
          id: 4,
          title: "IT Fundamentals: Hardware and Software",
          issuer: "Fundação Bradesco",
        },
        { id: 5, title: "Python Journey", issuer: "HashTag Programação" },
        { id: 6, title: "Web Developer", issuer: "IFRS" },
        { id: 7, title: "Programmer in 72 Hours", issuer: "Dev Club" },
        {
          id: 8,
          title: "Object-Oriented Development using Python",
          issuer: "Fundação Bradesco",
        },
        {
          id: 9,
          title: "TypeScript from Basic to Advanced (w/ React and Express)",
          issuer: "Udemy, Instructor: Matheus Battisti",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      text: "Let's build something amazing together?",
    },
    footer: { rights: "All rights reserved." },
  },
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("pt");
  const t = translations[lang];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-dark dark:text-gray-100 transition-colors duration-300">
      <Navbar
        t={t}
        lang={lang}
        toggleLang={toggleLang}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      <Hero t={t} />
      <Skills />
      <About t={t} />
      <Projects t={t} />
      <Certificates t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
