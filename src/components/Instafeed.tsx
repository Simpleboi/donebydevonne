import { Button } from "./ui/button";
import { Instagram } from "lucide-react";
import img1 from "../../public/assets/images/sample-pic-one.png";
import img2 from "../../public/assets/images/sample-pic-two.png";
import img3 from "../../public/assets/images/sample-pic-three.png";

const instagramFeed = [
  {
    imageSrc: img1,
    link: "https://www.instagram.com/p/DFBNNHVyWkR/?img_index=1",
  },
  {
    imageSrc: img2,
    link: "https://www.instagram.com/p/DCNiMs9S4jU/?img_index=1",
  },
  {
    imageSrc: img3,
    link: "https://www.instagram.com/p/C_EZEHVy9hk/?img_index=1",
  },
];

export const InstagramFeed = () => {
  return (
    <section id="instagram" className="py-22">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 mt-6">
          Follow Us on{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 pb-2 transition-all duration-300 drop-shadow-sm text-gradient bg-clip-text text-transparent">
            Instagram
          </span>
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Stay updated with our latest designs and promotions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramFeed.map(({ imageSrc, link }, index) => (
            // 2. Wrap the entire card in an <a>
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-md overflow-hidden relative group block"
            >
              <img
                src={imageSrc}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-pink-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8 mb-8">
          <Button
            variant="outline"
            className="border-pink-600 text-pink-600 hover:bg-pink-50"
          >
            <Instagram className="mr-2 h-4 w-4" /> Follow @donebydevonne
          </Button>
        </div>
      </div>
    </section>
  );
};
