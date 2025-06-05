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
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                target="_blank"
              >
                <Instagram className="h-5 w-5" /> @donebydevonne
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                target="_blank"
              >
                <i className="bx bxl-twitter h-full"></i> @donebydevonne
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                target="_blank"
              >
                <i className="bx bxl-youtube h-full"></i> @donebydevonne
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: 10:00 am - 5:00 pm</li>
              <li>Saturday: 1:00 pm - 5:00 pm</li>
              <li>Sunday: 1:00 pm - 5:00 pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <a
                href="https://www.google.com/maps/place/Houston+House+Apartments,+1617+Fannin+St,+Houston,+TX+77002/@29.7514996,-95.3702912,17z/data=!3m1!4b1!4m6!3m5!1s0x8640bf3dde8f46a7:0xaffafb388149f735!8m2!3d29.751495!4d-95.3677163!16s%2Fg%2F11bc8x0bh3?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <li className="hover:text-purple-400 transition-all">
                  <i className="bx bx-home"></i> 1617 Fannin St, Houston, TX 77002
                </li>
              </a>
              <li className="hover:text-purple-400 transition-all">
                <i className="bx bx-phone"></i> Phone:{" "}
                <a href="tel:+">(425) 535-7080</a>
              </li>
              <div className="flex items-center justify-start">
                <li className="hover:text-purple-400 transition-all">
                  <i className="bx bx-envelope h-full"></i>{" "}
                  <a href="mailto:devonnefarson1@gmail.com?subject=Inquiry For Devonne">
                    devonnefarson1@gmail.com
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <p className="w-full text-center text-gray-300 mt-6">
          This website and relevant software was created by Nate, click{" "}
          <a
            href="https://n8jsx.com/"
            target="_blank"
            className="bg-gradient-to-r from-pink-400 to-purple-500 pb-2 transition-all duration-300 drop-shadow-sm text-gradient bg-clip-text text-transparent"
          >
            Here
          </a>{" "}
          to learn more.
        </p>
        <Separator className="my-4 bg-gray-800" />
        <div className="text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Done by Devonne. All rights reserved.
          </p>
          <Link to="/admin" className="hover:text-purple-400 transition-all">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};
