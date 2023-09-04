"use client";

import {
  BsFillFileEarmarkSpreadsheetFill,
  BsGit,
  BsGithub,
} from "react-icons/bs";

import { AiOutlineCloudDownload, AiOutlineClose } from "react-icons/ai";

import { FiMenu } from "react-icons/fi";

import { TbBrandNextjs } from "react-icons/tb";
import { FaUserAlt, FaReact, FaSass, FaTools } from "react-icons/fa";

import {
  SiTailwindcss,
  SiJest,
  SiVitest,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

import { IoLogoHtml5, IoLogoNodejs } from "react-icons/io";

import { TypeAnimation } from "react-type-animation";

import React, { useState } from "react";

import Image from "next/image";

import Avatar from "../assets/profile-avatar.png";

import AosAnimate from "@/components/AosAnimate";
import EmailCopied from "@/components/EmailCopied";
import SmoothScroolLink from "@/components/SmoothScrollLink";
import Tooltip from "@/components/Tooltip";

import SmartStore from "../assets/smartstore.gif";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      <div className="p-6 flex justify-between h-16 bg-[#4B0082] w-full fixed z-10 md:relative md:z-0 md:bg-[#9370DB]">
        <div className="flex gap-10 justify-end w-[500px]">
          <div className="relative flex">
            <EmailCopied />
          </div>
        </div>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="hidden 2xl:block text-[#fff7df] z-50 opacity-100 absolute right-3"
          >
            {!menuOpen ? <FiMenu size="2rem" /> : <AiOutlineClose size="2rem"/>}
          </button>

          <div
            className={`gap-9 ${
              menuOpen
                ? "flex flex-col items-center justify-center w-[250px] h-screen top-0 right-0 fixed bg-black"
                : "hidden"
            } 3xl:flex`}
          >
            <SmoothScroolLink to="#section1">
              <div className="flex gap-2 text-[#fff7df]">
                <FaUserAlt size="1.5rem" />
                <p onClick={() => setMenuOpen(false)}>Resume</p>
              </div>
            </SmoothScroolLink>
            <SmoothScroolLink to="#section2">
              <div className="flex gap-2 text-[#fff7df]">
                <BsFillFileEarmarkSpreadsheetFill size="1.5rem" />
                <p onClick={() => setMenuOpen(false)}>Works</p>
              </div>
            </SmoothScroolLink>
            <SmoothScroolLink to="#section3">
              <div className="flex gap-2 text-[#fff7df]">
                <FaTools size="1.5rem" />
                <p onClick={() => setMenuOpen(false)}>Skills</p>
              </div>
            </SmoothScroolLink>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center pt-[67px] pl-20 h-screen flex-wrap bg-[#9370DB]">
        <div className="flex flex-col w-[950px]">
          <div>
            <span className="text-7xl font-semibold">Welcome, </span>
            <span className="text-4xl font-medium">I am</span>
          </div>
          <span className=" text-[86px] self-center text-[#4B0082]">
            Lucas Cassimiro
          </span>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Next.JS Developer",
              1000,
              "React Developer",
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: "4.5rem" }}
            repeat={Infinity}
            className="text-end"
          />
        </div>
      </div>
      <section className="pl-20 bg-red-400"></section>

      <section
        className="h-screen w-auto flex items-center ml-20 justify-center bg-[#fff7df]"
        id="section1"
      >
        <AosAnimate>
          <div
            className="flex items-center mx-20 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="max-w-[1500px] text-xl">
              Meu nome é Lucas e estou em busca da minha primeira oportunidade
              como Desenvolvedor Frontend. Sou apaixonado por criar interfaces
              atraentes e intuitivas e busco integrar uma equipe criativa para
              impactar positivamente a experiência do usuário. Sempre atualizado
              com as tecnologias modernas do mercado, ofereço soluções
              inovadoras e estou em busca de uma oportunidade de crescimento em
              projetos desafiadores. Minhas especialidades são
              <strong>
                Next.JS, React.JS, TypeScript, JavaScript, TailwindCSS, SASS,
                Context API,Redux e GIT / GitHub.
              </strong>
            </p>
            {/* <Image src={Avatar} alt="Avatar" className="h-[450px] w-[500px]" /> */}
          </div>
        </AosAnimate>
      </section>
      <section className="h-3/4 pl-20  overflow-hidden" id="section2">
        <div className="grid grid-cols-2 grid-rows-3 h-full">
          <div
            className=" p-4 flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <Image
              src={SmartStore}
              alt="Projeto Smart Store"
              className="z-20"
            />
          </div>
          <div
            className="bg-green-500 p-4 flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <span>Food Commerce</span>
          </div>
          <div
            className="bg-red-500 p-4 flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <span>Portfólio</span>
          </div>
          <div
            className="bg-yellow-500 p-4 flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <span>Snapclima</span>
          </div>
          <div
            className="bg-orange-400 p-4 flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <span>API do GitHub</span>
          </div>
          <div
            className="bg-pink-600 p-4 flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <span>Agência XYZ</span>
          </div>
        </div>
      </section>
      <section
        className="h-screen mx-20 flex justify-center items-center gap-16"
        id="section3"
      >
        <div className="flex flex-col gap-7 pl-11">
          <h1 className="self-center">Skills</h1>
          <span className="font-medium text-xl">
            *passe o cursor por cima do card para ler*
          </span>
        </div>
        <div
          className="grid grid-cols-4 grid-rows-3 gap-10 border-4 border-black p-10 my-7 rounded-lg"
          data-aos="flip-down"
        >
          <Tooltip text="Next.JS é um framework que podemos utilizar para a criação de sites simples ou até mesmo para criarmos back-end de aplicações. Ele possui algumas características, como os conceitos de server-side rendering (SSR) e static site generation (SSG).">
            <div className="flex flex-col items-center cursor-pointer">
              <TbBrandNextjs size="4rem" />
              <span>Next.JS</span>
            </div>
          </Tooltip>
          <Tooltip text="React.JS é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componentizada.">
            <div className="flex flex-col items-center cursor-pointer">
              <FaReact size="4rem" />
              <span>React</span>
            </div>
          </Tooltip>
          <Tooltip text="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.">
            <div className="flex flex-col items-center cursor-pointer">
              <SiTypescript size="4rem" />
              <span>TypeScript</span>
            </div>
          </Tooltip>
          <Tooltip text="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.">
            <div className="flex flex-col items-center cursor-pointer">
              <SiJavascript size="4rem" />
              <span>JavaScript</span>
            </div>
          </Tooltip>
          <Tooltip text="Node.JS é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.">
            <div className="flex flex-col items-center cursor-pointer">
              <IoLogoNodejs size="4rem" />
              <span>Node.JS</span>
            </div>
          </Tooltip>
          <Tooltip text="TailwindCSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas WEB.">
            <div className="flex flex-col items-center cursor-pointer">
              <SiTailwindcss size="4rem" />
              <span>TailwindCSS</span>
            </div>
          </Tooltip>
          <Tooltip text="O SASS é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa.">
            <div className="flex flex-col items-center cursor-pointer">
              <FaSass size="4rem" />
              <span>SASS</span>
            </div>
          </Tooltip>
          <Tooltip text="GIT é um sistema de controle de versões distribuído, usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho.">
            <div className="flex flex-col items-center cursor-pointer">
              <BsGit size="4rem" />
              <span>GIT</span>
            </div>
          </Tooltip>
          <Tooltip text="GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o GIT. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.">
            <div className="flex flex-col items-center cursor-pointer">
              <BsGithub size="4rem" />
              <span>GitHub</span>
            </div>
          </Tooltip>
          <Tooltip text="Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade. Funciona com projetos usando: Babel, TypeScript, Node, React, Angular, Vue e muito mais!">
            <div className="flex flex-col items-center cursor-pointer">
              <SiJest size="4rem" />
              <span>Jest</span>
            </div>
          </Tooltip>
          <Tooltip text="Vitest é um framework de teste de unidade para JavaScript.">
            <div className="flex flex-col items-center cursor-pointer">
              <SiVitest size="4rem" />
              <span>Vitest</span>
            </div>
          </Tooltip>
          <Tooltip text="O HTML é uma linguagem de marcação que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento.">
            <div className="flex flex-col items-center cursor-pointer">
              <IoLogoHtml5 size="4rem" />
              <span>HTML5</span>
            </div>
          </Tooltip>
        </div>
      </section>
    </div>
  );
}
