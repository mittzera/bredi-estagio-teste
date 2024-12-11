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
  { id: 2, name: "Noticias", link: "#cards" },
  { id: 3, name: "Rodapé", link: "#footer" },
  {
    id: 4,
    name: "Facebook",
    link: "https://www.facebook.com/BrediTecnologia",
    icon: FaFacebookF,
    target: "_blank",
  },
  {
    id: 5,
    name: "Instagram",
    link: "https://www.instagram.com/breditecnologia/",
    icon: FaInstagram,
    target: "_blank",
  },
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
];
interface BannerData {
  src: string;
  content: string;
}
  export const banners: BannerData[] = [
    {
      src: "/banner.png",
      content:
        "Com ele profissionas e residentes tem acesso a um amplo banco de dados de desafios em diversas subespecialidades de uma forma divertida. Seu desempenho pode ser acompanhado através de diversas métricas presentes no app",
    },
    {
      src: "/banner2.png",
      content:
        "O UNIO é o novo modelo de atendimento médico em Belém. Com reservas de consultórios inteligentes de alta qualidade, que trazem economia aos profissionais.",
    },
  ];
