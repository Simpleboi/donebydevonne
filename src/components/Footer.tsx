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
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: 10am - 7pm</li>
              <li>Saturday: 9am - 5pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>123 Nail Street, Beauty City</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@donebydevonne.com</li>
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
