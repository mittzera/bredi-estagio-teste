"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { navLinks } from "@/data";
import menu from "./../public/menu.svg";
import close from "./../public/close.svg";
import logo from "./../public/logo.svg";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-[#1b2628] flex py-2 justify-between items-center navbar border-b-[1px] border-b-[#3F3E45] relative z-[10]">
      <a href={`/`}>
        <div className="flex items-center">
          <Image
            className="inline object-cover ml-10 mt-2"
            src={logo}
            alt="Logo"
          />
        </div>
      </a>
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="hover:text-secondary active:text-green-700 font-poppins font-normal cursor-pointer text-base xl:text-2xl mr-20 text-[#F7D622]"
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
      <div className="md:hidden flex flex-1 justify-end items-center relative z-[10]">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4"
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          ref={menuRef}
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#1b2628] absolute top-20 right-0 mx-0 my-0 w-screen h-auto rounded-xl z-[10]`}
          style={{ backgroundColor: "#1b2628" }}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins hover:text-secondary active:text-green-700 font-normal text-center cursor-pointer text-[22px] mb-4 text-white"
              >
                <a
                  href={nav.link}
                  target={nav.target}
                  className="flex items-center space-x-2"
                >
                  {nav.icon && <nav.icon className="text-xl" />}
                  {!nav.icon && <span>{nav.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
