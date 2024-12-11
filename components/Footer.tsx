import { navLinks } from "@/data";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1B2629] text-white py-4 px-6" id="footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-10 md:mb-0">
          <a
            href="/"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              className=""
              width={150}
              height={250}
            />
          </a>
        </div>

        <div className="text-sm text-[#707070]">
          <div>
            <ul className="list-none flex justify-end flex-col min-[400px]:flex-row items-center flex-1 mb-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`hover:text-secondary mb-2  font-poppins font-normal cursor-pointer text-xs min-[400px]:mr-10 mr-0 text-[#707070]`}
                >
                  <a
                    href={nav.link}
                    target={nav.target}
                    className="flex items-center space-x-2"
                  >
                    {nav.icon && <nav.icon className="text-lg" />}
                    {!nav.icon && <span>{nav.name}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-4 text-center md:text-right">
            Rua Domingos Marreiros 49, sala 1308 Umarizal • Belém-PA • Brasil{" "}
          </p>
          <a
            className="mb-4 text-center md:text-right"
            href="mailto:contato@bredi.com.br"
            target="_blank"
          >
            contato@bredi.com.br
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
