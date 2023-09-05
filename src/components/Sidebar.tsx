import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

import ButtonMenu from "./ButtonMenu";

export default function Sidebar() {
  return (
    <ButtonMenu>
      <nav className="flex-1 w-full h-full ">
        <ul className="h-full flex flex-col justify-center gap-6 md:flex-row md:items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/lucasocassimiro/"
              target="_blank"
              className="w-fit relative px-7 flex items-center gap-8 text-white md:flex-col md:p-0  md:w-auto"
            >
              <BsLinkedin size="2rem" />
              <span className="md:hidden">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lucas-cassimiro"
              target="_blank"
              className="w-fit relative px-7 flex items-center gap-8 text-white md:flex-col md:p-0 md:w-auto"
            >
              <BsGithub size="2rem" />
              <span className="md:hidden">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-fit relative px-7 flex items-center gap-8 text-white md:flex-col md:p-0  md:w-auto"
            >
              <BsWhatsapp size="2rem" />
              <span className="md:hidden">WhatsApp</span>
            </a>
          </li>
        </ul>
      </nav>
    </ButtonMenu>
  );
}
