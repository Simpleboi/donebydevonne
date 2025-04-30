import { Instagram } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Done by Devonne</h3>
            <p className="text-gray-400 mb-4">
              Creating beautiful nails for beautiful people.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/donebydevonne/"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                target="_blank"
              >
                <Instagram className="h-5 w-5" /> @donebydevonne
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: Xam - Xpm</li>
              <li>Saturday: Xam - Xpm</li>
              <li>Sunday: Closed?</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>123 Ya Mama Street, XYZ City</li>
              <li>Phone: <a href="tel:+">(425) 535-7080</a></li>
              <li className="hover:text-purple-400 transition-all">
                Email: <a href="mailto:devonnefarson1@gmail.com?subject=Inquiry For Devonne">devonnefarson1@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Done by Devonne. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
