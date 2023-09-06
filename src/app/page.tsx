import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaSass } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJest,
  SiVitest,
  SiTypescript,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";

import React from "react";

import Image from "next/image";

import Avatar from "../assets/profile-avatar.png";

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

import Navigation from "@/components/Navigation";

import TypeAnimationn from "@/components/TypeAnimation";

export default function Home() {
  return (
    <div className="w-full">
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
            <p className="min-w-[320px] max-w-[1500px] text-xl text-white lg:text-sm mobilinho:text-[13px] md:pt-3">
              Meu nome é Lucas e estou em busca da minha primeira oportunidade
              como Desenvolvedor Frontend. Sou apaixonado por criar interfaces
              atraentes e intuitivas e busco integrar uma equipe criativa para
              impactar positivamente a experiência do usuário. Sempre atualizado
              com as tecnologias modernas do mercado, ofereço soluções
              inovadoras e estou em busca de uma oportunidade de crescimento em
              projetos desafiadores. Minhas especialidades são
              <strong className="ml-[6px]">
                Next.JS, React.JS, TypeScript, JavaScript, TailwindCSS, SASS,
                Context API,Redux e GIT / GitHub.
              </strong>
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
        <div className="grid grid-cols-2 grid-rows-3 h-full md:grid-cols-1 md:grid-rows-6 bg-[url('../assets/bolinha.jpeg')] bg-cover bg-center">
          <div
            className="p-4 flex flex-col items-center justify-evenly text-white"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="font-medium desktopLittle:text-2xl">Smart Store</h1>
            <Image
              src={SmartStore}
              alt="Projeto Smart Store"
              className="z-20"
            />
            <span className="w-[430px] text-xl desktopLittle:text-base p-7 desktopLittle:p-16 tabletLittle:text-xs tabletLittle:p-20">
              A Smart Store é um projeto de e-commerce que conta com um design
              moderno e intuitivo, visando uma ótima experiência do usuário.
              Fácil de mexer, o projeto conta com funcionalidades como:
              carrosséis de itens, filtrar de itens por preço, cor,
              armazenamento, ordenação, exibição e busca por nome, carrinho de
              compras e busca por CEP com cálculo automático de frete, além de
              salvar as informações da busca por CEP e os itens do carrinho em
              Local Storage.
            </span>
            <div className="flex items-center gap-8 text-[4rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <TbBrandNextjs />
              <FaReact />
              <SiTypescript />
              <Image
                src={StyledComponents}
                alt="Styled components"
                className="w-[90px] h-[90px] desktopLittle:w-[75px] desktopLittle:h-[75px]"
              />
              <BsGit />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center justify-evenly text-white"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="font-medium desktopLittle:text-2xl">
              Food Commerce
            </h1>
            <Image src={FoodCommerce} alt="Food commerce" />
            <span className="w-[430px] text-xl desktopLittle:text-base p-7 desktopLittle:p-16 tabletLittle:text-xs tabletLittle:p-20">
              O projeto Food Commerce é um sistema de aplicativo de comida
              online. O projeto conta com um design moderno e intuitivo, visando
              uma ótima experiência do usuário. O projeto foi desenvolvido com
              as ferramentas: React.JS, TypeScript, Styled-components e Context
              API. Foi também inteiramente desenvolvido com responsividade. O
              projeto conta com a funcionalidade de adicionar itens ao carrinho
              de compras.
            </span>
            <div className="flex items-center gap-8 text-[4rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <FaReact />
              <SiTypescript />
              <Image
                src={StyledComponents}
                alt="Styled components"
                className="w-[90px] h-[90px] desktopLittle:w-[75px] desktopLittle:h-[75px]"
              />
              <BsGit />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center justify-evenly text-white"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="font-medium desktopLittle:text-2xl">
              Portfólio Lucas
            </h1>
            <Image src={Portfolio} alt="Portfolio" />
            <span className="w-[430px] text-xl desktopLittle:text-base p-7 desktopLittle:p-16 tabletLittle:text-xs tabletLittle:p-20">
              Esse é o meu projeto de Portfólio, sem dúvidas um dos projetos
              mais bonitos que eu já desenvolvi e juntando as tecnologias mais
              modernas que temos hoje no mercado, por assim dizer: Next.JS,
              React, TypeScript e TailwindCSS. Neste projeto eu aproveitei para
              aprender Tailwind e aprimorar mais ainda os meus conhecimentos em
              Next.JS.
            </span>
            <div className="flex gap-8 text-[4rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <TbBrandNextjs />
              <FaReact />
              <SiTypescript />
              <SiTailwindcss />
              <BsGit />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center justify-evenly text-white"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="font-medium desktopLittle:text-2xl">Snapclima</h1>
            <Image src={Snapclima} alt="Snapclima" />
            <span className="w-[430px] text-xl desktopLittle:text-base p-7 desktopLittle:p-16 tabletLittle:text-xs tabletLittle:p-20">
              Snapclima é um projeto de previsão do tempo, que consiste em pedir
              a autorização do usuário para acessar sua localização atual e
              trazer os dados da cidade do usuário, também podemos acessar
              através de um campo de busca no qual deve ser inserido o nome da
              cidade cuja previsão do tempo se deseja consultar. Ao clicar no
              botão Buscar ou na tecla Enter, o sistema faz uma busca utilizando
              a API do Open Weather API. Também foram feitas validações no campo
              de input, caso o usuário busque o nome de uma cidade que não
              existe, será apresentado uma mensagem de erro. E caso o usuário
              tente validar o campo de input sem que haja qualquer valor nele,
              aparecerá uma mensagem de erro mostrando que o campo está vazio.
            </span>
            <div className="flex gap-8 text-[4rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <IoLogoHtml5 />
              <SiCss3 />
              <SiJavascript />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center justify-evenly text-white"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="font-medium desktopLittle:text-2xl">GitHub</h1>
            <Image src={Github} alt="GitHub" />
            <span className="w-[430px] text-xl desktopLittle:text-base p-7 desktopLittle:p-16 tabletLittle:text-xs tabletLittle:p-20">
              Este projeto é o resultado de um desafio do módulo de JavaScript
              avançado proposto pelo curso de desenvolvimento front-end
              DevQuest. Ele consiste em um campo de busca no qual deve ser
              inserido o nome do usuário cujo perfil se deseja consultar. Ao
              clicar no botão Buscar ou na tecla Enter, o sistema faz uma busca
              utilizando a API do GitHub.
            </span>
            <div className="flex gap-8 text-[4rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <IoLogoHtml5 />
              <SiCss3 />
              <SiJavascript />
            </div>
          </div>
          <div
            className="p-4 flex flex-col items-center justify-evenly text-white"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="font-medium desktopLittle:text-2xl">Agência XYZ</h1>
            <Image src={AgenciaXYZ} alt="Agência XYZ" />
            <span className="w-[430px] text-xl desktopLittle:text-base p-7 desktopLittle:p-16 tabletLittle:text-xs tabletLittle:p-20">
              A Agência XYZ é uma landing page de agência de modelo.
            </span>
            <div className="flex gap-8 text-[4rem] desktopLittle:text-[2.5rem] desktopLittle:gap-5">
              <IoLogoHtml5 />
              <SiCss3 />
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-screen px-20 flex justify-center items-center gap-16 bg-[url('../assets/last-background-image.jpeg')] bg-cover bg-center md:flex-col md:gap-4 md:px-5 border-t-4"
        id="section3"
      >
        <div className="flex flex-col gap-7 pl-11 md:pl-0">
          <h1 className="self-center text-white md:text-2xl md:mt-3">Skills</h1>
          <span className="font-medium text-xl tablet:hidden text-white">
            *passe o cursor por cima do card para ler*
          </span>
        </div>
        <div
          className="grid grid-cols-4 grid-rows-3 gap-10 border-4 border-white p-10 rounded-lg xl:grid-cols-2 md:mb-[90px] md:p-5 md:gap-6"
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
          <Tooltip text="Vitest é um framework de teste de unidade para JavaScript.">
            <div className="flex flex-col items-center cursor-pointer tablet:cursor-default text-white">
              <div className="text-[4rem] xl:text-[2.5rem] md:text-[3rem]">
                <SiVitest />
              </div>
              <span className="xl:text-sm">Vitest</span>
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
