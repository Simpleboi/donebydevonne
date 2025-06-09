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
    description: "The Manicure service includes nail shaping, cuticle care, and a smooth polish finish to give you naturally beautiful, well-groomed nails.",
    likes: 24,
  },
  {
    id: 2,
    title: "Acrylic Set - One Color",
    image: onecolor,
    description: "This acrylic full set in one color provides strong, seamless nail extensions topped with a flawless, uniform shade of your choice",
    likes: 18,
  },
  {
    id: 3,
    title: "Acrylic Set - With Design",
    image: design,
    description: "The acrylic full set with custom design adds durable extensions embellished with custom patterns, glitter, or artwork to match your personal style.",
    likes: 32,
  },
  {
    id: 4,
    title: "Acrylic Set - French Tip",
    image: frenchtip,
    description: "This acrylic full set features elegant nail extensions with crisp white French tips and a natural nude base for a classic, sophisticated look.",
    likes: 15,
  },
];
