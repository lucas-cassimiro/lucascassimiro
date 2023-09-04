import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

import ButtonMenu from "./ButtonMenu";

export default function Sidebar() {
  return (
    <ButtonMenu>
      <nav className="flex-1 w-full h-full">
        <ul className="h-full flex flex-col justify-center gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/lucasocassimiro/"
              target="_blank"
              className="w-fit relative px-7 flex items-center gap-8 text-white"
            >
              <BsLinkedin size="2rem" />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lucas-cassimiro"
              target="_blank"
              className="w-fit relative px-7 flex items-center gap-8 text-white"
            >
              <BsGithub size="2rem" />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-fit relative px-7 flex items-center gap-8 text-white"
            >
              <BsWhatsapp size="2rem" />
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>
      </nav>
    </ButtonMenu>
  );
}
