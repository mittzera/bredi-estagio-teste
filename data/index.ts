import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

type NavLink = {
  id: number;
  name: string;
  link: string;
  icon?: IconType;
  target?: string;
};

export const navLinks: NavLink[] = [
  { id: 1, name: "Início", link: "/" },
  { id: 2, name: "Noticias", link: "/" },
  { id: 3, name: "Rodapé", link: "#footer" },
  { id: 4, name: "Facebook", link: "/", icon: FaFacebookF, target: "_blank"},
  { id: 5, name: "Instagram", link: "/", icon: FaInstagram, target: "_blank"},
];

interface CardData {
  titulo: string;
  descricao: string;
  imagem: string;
}
export const cards: CardData[] = [
  {
    titulo: "Aplicativos",
    descricao: "E-Commerces, Games, Institucionais e Quiz",
    imagem: "/app.png",
  },
  {
    titulo: "Websites",
    descricao: "Institucionais, E-Commerces, Blogs e Sites",
    imagem: "/site.png",
  },
  {
    titulo: "Sistemas Online",
    descricao: "Sistemas online e intranets",
    imagem: "/sistema.png",
  },
  {
    titulo: "Back e Front-end",
    descricao: "Vagas para estagiários nas áreas de Back-end e Front-end",
    imagem: "/back.png",
  },
  // Adicione outros objetos conforme necessário
];
interface BannerData {
  src: string;
  content: string;
  classes: string;
}
  export const banners: BannerData[] = [
    {
      src: "/banner.png",
      content:
        "Com ele profissionas e residentes tem acesso a um amplo banco de dados de desafios em diversas subespecialidades de uma forma divertida. Seu desempenho pode ser acompanhado através de diversas métricas presentes no app",
      classes:
        "absolute top-1/2 left-0 transform -translate-y-1/2 text-white md:text-2xl text-xs sm:text-base font-extralight stext-wrap md:w-[30vw] w-[75vw] pl-4 break-normal ml-10",
    },
    {
      src: "/banner2.png",
      content:
        "O UNIO é o novo modelo de atendimento médico em Belém. Com reservas de consultórios inteligentes de alta qualidade, que trazem economia aos profissionais.",
      classes:
        "absolute top-1/2 left-[10vw] md:left-[55vw] transform -translate-y-1/2 text-white md:text-xl text-xs sm:text-base font-bold text-right md:w-[30vw] w-[70vw] p-4 break-words whitespace-normal bg-black/40 rounded-xl",
    },
  ];
