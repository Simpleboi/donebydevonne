import manicure from "/assets/images/manicure.png";
import onecolor from "/assets/images/onecolor.png";
import design from "/assets/images/design.png";
import frenchtip from "/assets/images/frenchtip.png";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  description: string;
  likes?: number;
}

export const NailServices: PortfolioItem[] = [
  {
    id: 1,
    title: "Manicure",
    image: manicure,
    description: "Elegant pink marble effect with gold accents",
    likes: 24,
  },
  {
    id: 2,
    title: "Acrylic Set - One Color",
    image: onecolor,
    description: "Stunning ombré with glitter gradient finish",
    likes: 18,
  },
  {
    id: 3,
    title: "Acrylic Set - With Design",
    image: design,
    description: "Sophisticated design with crystal embellishments",
    likes: 32,
  },
  {
    id: 4,
    title: "Acrylic Set - French Tip",
    image: frenchtip,
    description: "Modern twist on classic French with pastel tips",
    likes: 15,
  },
];
