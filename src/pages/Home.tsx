import { Nav } from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import logo from "/assets/images/logo.png";
import { Footer } from "@/components/Footer";

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
                    Hi, I'm Devonne! I have over xyz amount of experience and this
                    is just a sample about page to express who I am or something
                    like that. I don't really know what to put here man I just
                    write code n shit.
                  </p>
                  <p className="text-gray-600 mb-6">
                    This is a different paragraph, maybe to talk about
                    specialization or something like that. I'll figure it out
                    eventually. Just writing sample prompts here to make it seem
                    like there's something here.
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
                       <i className='bx bxl-instagram text-lg'></i>  @personal IG? idk
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  }
  