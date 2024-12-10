import { cards } from "@/data";
import Image from "next/image";
import React from "react";

const Cards: React.FC = () => {
  return (
    <div className=" mt-10 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-5 justify-center" id="cards">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-5 flex flex-col items-center md:items-start"
        >
          <Image src={card.imagem} alt={card.titulo} width={300} height={300} />
          <h1 className="mt-2 font-bold text-black text-xl text-left">
            {card.titulo}
          </h1>
          <p className="mt-2 mx-4 md:mx-0 font-extralight text-[#707070] text-base  text-left">
            {card.descricao}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
