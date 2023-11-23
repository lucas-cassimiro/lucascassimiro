import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaSass } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJest,
  SiVitest,
  SiTypescript,
  SiJavascript,
  SiPrisma,
  SiStrapi,
} from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";

import { DiCss3, DiHtml5, DiMongodb } from "react-icons/di";

import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";

import React from "react";

import Image from "next/image";

import Avatar from "../assets/profile-avatar.png";
import GraphQL from "../assets/graphql.svg";

import AosAnimate from "@/components/AosAnimate";
import EmailCopied from "@/components/EmailCopied";
import Tooltip from "@/components/Tooltip";

import SmartStore from "../assets/smart-store.png";
import FoodCommerce from "../assets/food-commerce.png";
import Portfolio from "../assets/portfolio.png";
import Snapclima from "../assets/snapclima.png";
import Github from "../assets/github.png";
import AgenciaXYZ from "../assets/agencia-xyz.png";
import StyledComponents from "../assets/styled-components.svg";

import SmartStoreMobile from "../assets/smart-store-mobile.png";
import FoodCommerceMobile from "../assets/food-commerce-mobile.png";
import PortfolioMobile from "../assets/portfolio-mobile.png";
import SnapclimaMobile from "../assets/snapclima-mobile.png";
import GithubMobile from "../assets/github-mobile.png";
import AgenciaMobile from "../assets/agencia-mobile.png";

import Navigation from "@/components/Navigation";
import TypeAnimationn from "@/components/TypeAnimation";


export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="p-6 flex justify-between items-center h-16 bg-[#4B0082] w-full fixed z-10 md:relative md:bg-[url('../assets/background-image.jpeg')]">
        <div className="relative ml-48 md:ml-0">
          <EmailCopied />
        </div>
        <div className="relative">
          <Navigation />
        </div>
      </div>
      <div className="flex items-center justify-center pt-[67px] pl-20 h-screen flex-wrap bg-[url('../assets/background-image.jpeg')] bg-cover bg-center md:pl-0 md:pt-0 md:pb-[80px]">
        <div className="flex flex-col w-[950px]">
          <div>
            <span className="text-6xl font-medium 4xl:text-5xl text-white mobilinho:text-3xl">
              Welcome,{" "}
            </span>
            <span className="text-4xl font-medium 4xl:text-3xl text-white mobilinho:text-xl">
              I am
            </span>
          </div>
          <span className=" text-[86px] self-center text-[#4B0082] 4xl:text-[60px] mobilinho:text-[45px] mobilemax:text-[35px]">
            Lucas Cassimiro
          </span>
          <TypeAnimationn />
        </div>
      </div>
      <section
        className="h-screen w-auto flex items-center ml-20 justify-center bg-[url('../assets/mid-background-image.jpeg')] bg-cover bg-center md:ml-0 border-t-4"
        id="section1"
      >
        <AosAnimate>
          <div
            className="flex items-center mx-20 aos-init aos-animate lg:block lg:my-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="min-w-[320px] max-w-[1500px] text-lg text-white lg:text-sm mobilinho:text-[13px] md:pt-3">
              Sou um profissional versátil com experiência abrangente em
              diversas linguagens e frameworks, incluindo{" "}
              <span className="text-lg font-semibold text-white lg:text-sm mobilinho:text-[13px] md:pt-3">
                NextJS, ReactJS, Typescript, Javascript e NodeJS. Minha
                expertise se estende a bibliotecas CSS como Styled-components,
                TailwindCSS, MaterialUI, SASS e NextUI. No âmbito do Back-end,
                estou familiarizado com PostgreSQL, MySQL, NodeJS, Express,
                Prisma ORM, APIs Rest, GraphQL, Strapi e MongoDB.
              </span>{" "}
              <br />
              Além das habilidades técnicas, destaco minha aptidão na gestão de
              equipes, resolução de conflitos e desenvolvimento de
              relacionamentos interpessoais. Sou um profissional aberto e
              flexível a mudanças, comprometido com a constante atualização e
              aprimoramento das minhas habilidades.
            </p>
            <Image
              src={Avatar}
              alt="Avatar"
              className="h-[450px] w-[500px] lg:self-end lg:mx-auto md:w-[350px] md:h-[300px] md:mt-4"
            />
          </div>
        </AosAnimate>
      </section>
      <section
        className="h-3/4 pl-20 overflow-hidden md:pl-0 border-t-4"
        id="section2"
      >
        <div className="grid grid-cols-2 grid-rows-3 h-full pt-8 md:grid-cols-1 md:grid-rows-6 bg-[url('../assets/bolinha.jpeg')] bg-cover bg-center">
          <div
            className="p-4 flex flex-col items-center gap-8 text-white mb-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="desktopLittle:text-2xl text-2xl">
              Smart store - Loja online completa
            </h1>
            <h3 className="text-xl font-medium">Projeto Full-stack</h3>
            <a
              href="https://smartstore-next-react-ts-76yi-eujjthbuw-lucas-cassimiro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              Link do projeto
            </a>
            <div className="flex relative">
              <Image
                src={SmartStore}
                alt="Projeto Smart Store"
                className="z-20"
              />
              <div className="h-auto absolute z-30 bottom-0">
                <Image
                  src={SmartStoreMobile}
                  alt="Smart store"
                  className="w-1/3 h-auto"
                />
              </div>
            </div>
            <div className="flex items-center gap-8 text-[3rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <TbBrandNextjs />
              <FaReact />
              <SiTypescript />
              <SiTailwindcss />
              <BsGit />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center gap-8 text-white mb-4"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="desktopLittle:text-2xl text-2xl">
              Food Commerce - Aplicativo de comida
            </h1>
            <h3 className="text-xl font-medium">Projeto Full-stack</h3>
            <a
              href="https://food-commerce-react-830fyzpqr-lucas-cassimiro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              Link do projeto
            </a>
            <div className="flex relative">
              <Image src={FoodCommerce} alt="Food commerce" />
              <div className="h-auto absolute z-30 bottom-0">
                <Image
                  src={FoodCommerceMobile}
                  alt="Food commerce"
                  className="w-1/3 h-auto"
                />
              </div>
            </div>
            <div className="flex items-center gap-8 text-[3rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <FaReact />
              <SiTypescript />
              <Image
                src={StyledComponents}
                alt="Styled components"
                className="w-[80px] h-[90px] desktopLittle:w-[75px] desktopLittle:h-[75px]"
              />
              <BsGit />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center gap-8 text-white mb-3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="desktopLittle:text-2xl text-2xl">Portfólio Lucas</h1>
            <h3 className="text-xl font-medium">Projeto Front-end</h3>
            <a
              href="https://portfolio-next-react-ts-tailwind-6p2nlk5hb-lucas-cassimiro.vercel.app/"
              target="_blank"
              className="italic"
              rel="noopener noreferrer"
            >
              Link do projeto
            </a>
            <div className="flex relative">
              <Image src={Portfolio} alt="Portfolio" />
              <div className="h-auto absolute z-30 bottom-0">
                <Image
                  src={PortfolioMobile}
                  alt="Food commerce"
                  className="w-1/3 h-auto"
                />
              </div>
            </div>
            <div className="flex gap-8 text-[3rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <TbBrandNextjs />
              <FaReact />
              <SiTypescript />
              <SiTailwindcss />
              <BsGit />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center gap-8 text-white mb-3"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="desktopLittle:text-2xl text-2xl">Snapclima</h1>
            <h3 className="text-xl font-medium">Projeto Front-end</h3>
            <a
              href="https://lucas-cassimiro.github.io/snapclima/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              Link do projeto
            </a>
            <div className="flex relative">
              <Image src={Snapclima} alt="Snapclima" />
              <div className="h-auto absolute z-30 bottom-0">
                <Image
                  src={SnapclimaMobile}
                  alt="Snapclima"
                  className="w-1/3 h-auto"
                />
              </div>
            </div>
            <div className="flex gap-8 text-[3.5rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <DiHtml5 />
              <DiCss3 />
              <BiLogoJavascript />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center gap-8 text-white"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="desktopLittle:text-2xl text-2xl">GitHub</h1>
            <h3 className="text-xl font-medium">Projeto Front-end</h3>
            <a
              href="https://lucas-cassimiro.github.io/buscando-api-github/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              Link do projeto
            </a>
            <div className="flex relative">
              <Image src={Github} alt="GitHub" />
              <div className="h-auto absolute z-30 bottom-0">
                <Image
                  src={GithubMobile}
                  alt="GitHub"
                  className="w-1/3 h-auto"
                />
              </div>
            </div>
            <div className="flex gap-8 text-[3.5rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <DiHtml5 />
              <DiCss3 />
              <BiLogoJavascript />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center gap-8 text-white"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="desktopLittle:text-2xl text-2xl">Agência XYZ</h1>
            <h3 className="text-xl font-medium">Projeto Front-end</h3>
            <a
              href="https://lucas-cassimiro.github.io/agencia-xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              Link do projeto
            </a>
            <div className="flex relative">
              <Image src={AgenciaXYZ} alt="Agência XYZ" />
              <div className="h-auto absolute z-30 bottom-0">
                <Image
                  src={AgenciaMobile}
                  alt="Agência XYZ"
                  className="w-1/3 h-auto"
                />
              </div>
            </div>
            <div className="flex gap-8 text-[3.5rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <DiHtml5 />
              <DiCss3 />
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-screen px-20 flex justify-center items-center gap-16 bg-[url('../assets/last-background-image.jpeg')] bg-cover bg-center md:flex-col md:gap-4 md:px-5 border-t-4"
        id="section3"
      >
        <div className="flex flex-col gap-7 pl-11 md:pl-0">
          <h1 className="self-center text-white md:text-2xl md:mt-10">
            Skills
          </h1>
          <span className="font-medium text-xl tablet:hidden text-white">
            *passe o cursor por cima do card para ler*
          </span>
        </div>
        <div
          className="grid grid-cols-4 grid-rows-3 gap-10 border-4 border-white p-10 rounded-lg xl:grid-cols-2 md:mb-[110px] md:p-5 md:gap-6"
          data-aos="flip-down"
        >
          <Tooltip text="Next.JS é um framework que podemos utilizar para a criação de sites simples ou até mesmo para criarmos back-end de aplicações. Ele possui algumas características, como os conceitos de server-side rendering (SSR) e static site generation (SSG).">
            <div className="flex flex-col items-center justify-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <TbBrandNextjs />
              </div>
              <span className="xl:text-sm">Next.JS</span>
            </div>
          </Tooltip>
          <Tooltip text="React.JS é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componentizada.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <FaReact />
              </div>
              <span className="xl:text-sm">React</span>
            </div>
          </Tooltip>
          <Tooltip text="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <SiTypescript />
              </div>
              <span className="xl:text-sm">TypeScript</span>
            </div>
          </Tooltip>
          <Tooltip text="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <SiJavascript />
              </div>
              <span className="xl:text-sm">JavaScript</span>
            </div>
          </Tooltip>
          <Tooltip text="Node.JS é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <IoLogoNodejs />
              </div>
              <span className="xl:text-sm">Node.JS</span>
            </div>
          </Tooltip>
          <Tooltip text="PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <BiLogoPostgresql />
              </div>
              <span className="xl:text-sm">PostgreSQL</span>
            </div>
          </Tooltip>
          <Tooltip text="O Prisma é um ORM (Object-Relational Mapping) que ajuda os desenvolvedores a criar aplicações mais rapidamente e cometer menos erros com um kit de ferramentas de banco de dados opensource, como PostgreSQL e MySQL. Além disso, o Prisma também suporta as seguintes linguagens: Javascript e Typescript.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <SiPrisma />
              </div>
              <span className="xl:text-sm">Prisma ORM</span>
            </div>
          </Tooltip>
          <Tooltip text="GraphQL é uma linguagem de consulta e ambiente de execução voltada a servidores para as interfaces de programação de aplicações (APIs) cuja prioridade é fornecer exatamente os dados que os clientes solicitam e nada além.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <Image
                  src={GraphQL}
                  alt="Ícone do GraphQL"
                  className="w-16 h-16"
                />
              </div>
              <span className="xl:text-sm">GraphQL</span>
            </div>
          </Tooltip>

          <Tooltip text="O MongoDB é um banco de dados não-relacional orientado a documentos — ou seja, que não se utiliza de tabelas e colunas pré-definidas, mas armazena documentos em formato JSON, que por sua vez, trazem a definição da própria estrutura.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <DiMongodb />
              </div>
              <span className="xl:text-sm">MongoDB</span>
            </div>
          </Tooltip>

          <Tooltip text="O Strapi é uma ferramenta que visa facilitar a criação de serviços REST através de um painel administrativo totalmente funcional. Desenvolvido em node. js, o Strap.io é open-source e bem simples de se utilizar.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <SiStrapi />
              </div>
              <span className="xl:text-sm">Strapi</span>
            </div>
          </Tooltip>

          <Tooltip text="TailwindCSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas WEB.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <SiTailwindcss />
              </div>
              <span className="xl:text-sm">TailwindCSS</span>
            </div>
          </Tooltip>
          <Tooltip text="O SASS é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <FaSass />
              </div>
              <span className="xl:text-sm">SASS</span>
            </div>
          </Tooltip>
          <Tooltip text="GIT é um sistema de controle de versões distribuído, usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <BsGit />
              </div>
              <span className="xl:text-sm">GIT</span>
            </div>
          </Tooltip>
          <Tooltip text="GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o GIT. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <BsGithub />
              </div>
              <span className="xl:text-sm">GitHub</span>
            </div>
          </Tooltip>
          <Tooltip text="Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade. Funciona com projetos usando: Babel, TypeScript, Node, React, Angular, Vue e muito mais!">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <SiJest />
              </div>
              <span className="xl:text-sm">Jest</span>
            </div>
          </Tooltip>
          <Tooltip text="O HTML é uma linguagem de marcação que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <IoLogoHtml5 />
              </div>
              <span className="xl:text-sm">HTML5</span>
            </div>
          </Tooltip>
        </div>
      </section>
    </div>
  );
}
