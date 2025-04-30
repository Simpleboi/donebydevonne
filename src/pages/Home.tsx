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
import { InstagramFeed } from "@/components/Instafeed";

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
        <InstagramFeed />

        {/* About Section */}
        <AboutMe />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
