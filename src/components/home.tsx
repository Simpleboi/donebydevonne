import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioGallery from "./PortfolioGallery";
import BookingForm from "./BookingForm";
import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-pink-600">
            Done by Devonne
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#booking"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Book Now
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              About
            </a>
          </div>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16">
          <HeroSection />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Our Services
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Discover our range of professional nail services designed to make
              you look and feel beautiful
            </p>
            <ServicesSection />
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section id="gallery" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Our Work
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Browse through our portfolio of stunning nail designs and artistry
            </p>
            <PortfolioGallery />
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
                Book an Appointment
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Ready for beautiful nails? Schedule your appointment today
              </p>
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section id="instagram" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Follow Us on Instagram
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Stay updated with our latest designs and promotions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Instagram Feed Placeholders */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gray-200 rounded-md overflow-hidden relative group"
                >
                  <img
                    src={`https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500&q=80&auto=format&fit=crop&crop=entropy&${item}`}
                    alt="Instagram post"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-pink-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram className="text-white w-8 h-8" />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50"
              >
                <Instagram className="mr-2 h-4 w-4" /> Follow @donebydevonne
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                    alt="Devonne"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  About Devonne
                </h2>
                <p className="text-gray-600 mb-4">
                  Hi, I'm Devonne! With over 5 years of experience in nail
                  artistry, I'm passionate about creating beautiful, unique nail
                  designs that express your personality and style.
                </p>
                <p className="text-gray-600 mb-6">
                  I specialize in gel extensions, custom nail art, and creating
                  a relaxing experience for all my clients. My studio is located
                  in the heart of the city, offering a tranquil escape from the
                  urban hustle.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-pink-600 text-pink-600 hover:bg-pink-50"
                  >
                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
}
