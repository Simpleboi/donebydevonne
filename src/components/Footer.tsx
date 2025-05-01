import { Instagram } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

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
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/donebydevonne/"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 border border-red-500"
                target="_blank"
              >
                <Instagram className="h-5 w-5" /> @donebydevonne
              </a>
              <p>
                This website was created by Nate, click{" "}
                <a
                  href="https://n8jsx.com/"
                  target="_blank"
                  className="bg-gradient-to-r from-pink-400 to-purple-500 pb-2 transition-all duration-300 drop-shadow-sm text-gradient bg-clip-text text-transparent"
                >
                  here
                </a>{" "}
                to learn more.
              </p>
              <a
                href="https://www.instagram.com/donebydevonne/"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 border border-red-500"
                target="_blank"
              >
                <Instagram className="h-5 w-5" /> @n8.jsx
              </a>
              <a href="">yo</a>
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
              <li className="hover:text-purple-400 transition-all">
                Phone: <a href="tel:+">(425) 535-7080</a>
              </li>
              <li className="hover:text-purple-400 transition-all">
                Email:{" "}
                <a href="mailto:devonnefarson1@gmail.com?subject=Inquiry For Devonne">
                  devonnefarson1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Done by Devonne. All rights reserved.
          </p>
          <Link to="/admin" className="hover:text-purple-400 transition-all">Admin</Link>
        </div>
      </div>
    </footer>
  );
};
