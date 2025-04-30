import { Nav } from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import logo from "/assets/images/logo.png";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16">
          <HeroSection />
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio Gallery */}
        <PortfolioGallery />

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
              Follow Us on <span>Instagram</span>
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
                  <a href="https://www.instagram.com/donebydevonne/" target="_blank">
                    <div className="absolute inset-0 bg-pink-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Instagram className="text-white w-8 h-8" />
                    </div>
                  </a>
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
        <AboutMe />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
