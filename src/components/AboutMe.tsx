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
              Hello! Welcome to my nail page, I look forward to working with
              you!
              <br />
              My name is Devonne Farson, and I am 19 years old. I have been
              doing nails for about two years now, and I am fully self-taught. I
              currently have two clients, four days a week. Originally from
              Seattle, Washington, I recently moved to Houston, Texas, to
              advance my nail business and pursue my license.
            </p>
            <p className="text-gray-600 mb-6">
              I love making people feel beautiful and giving them the
              opportunity to express themselves through their nails. Building
              personal relationships with all my clients is one of my favorite
              parts of what I do, and I hope to get the chance to do so with
              each and every one of you reading this!
              <br />
              P.S. There will always be snacks available for you to choose from
              at your appointment {":)"}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/devonnefarson?igsh=MXdta28xdnM0cmx1cQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-pink-600 text-pink-600 hover:bg-pink-50 flex gap-2"
                >
                  <i className="bx bxl-instagram text-lg"></i> @devonnefarson
                </Button>
              </a>
              <a
                href="https://www.tiktok.com/@ilydevonne?_t=ZP-8wvtBfhcwAg&_r=1"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-pink-600 text-pink-600 hover:bg-pink-50 flex gap-2"
                >
                  TT @ilydevonne
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
