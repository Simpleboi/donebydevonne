import { Button } from "./ui/button";
import logo from "/assets/images/logo.png";

export const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden aspect-square">
              <img
                src={logo}
                alt="Devonne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 pb-2 transition-all duration-300 drop-shadow-sm text-gradient bg-clip-text text-transparent">
                Devonne
              </span>
            </h2>
            <p className="text-gray-600 mb-4">
              Hi, I'm Devonne! I have over [blank] amount of experience and this is
              just a sample paragraph to express who I am or something like
              that. I don't really know what to put here man I just write code n
              shit.
            </p>
            <p className="text-gray-600 mb-6">
              This is a different paragraph, maybe to talk about specialization
              or something like that. I'm just writing filler text so it looks full but this will be replaced with what Devonne says. Did you know that a group of flamingos is called a flamboyance? Shits tuff 
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/donebydevonne/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-pink-600 text-pink-600 hover:bg-pink-50 flex gap-2"
                >
                  <i className="bx bxl-instagram text-lg"></i> @Personal IG? idk
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
