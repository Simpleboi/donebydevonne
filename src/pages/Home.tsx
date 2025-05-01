import { Nav } from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import BookingForm from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";
import { InstagramFeed } from "@/components/Instafeed";
import { Location } from "@/components/Location";
import BookingCalendar from "@/components/BookingCalendar";
import BookingList from "@/components/BookingList";

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

        {/* Instagram Feed */}
        <InstagramFeed />

        {/* Booking Form */}
        <section id="booking" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 w-full">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center my-2">
                Book an Appointment
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Ready for beautiful nails? Schedule your appointment today
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4 md:mb-6">
                    <h3 className="text-xl font-semibold mb-3 md:mb-4 text-pink-600">
                      Available Dates
                    </h3>
                    <BookingCalendar
                      bookings={[]}
                      selectedDate={undefined}
                      onDateSelect={() => {}}
                    />
                  </div>

                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 md:mb-4 text-pink-600">
                      Today's Bookings
                    </h3>
                    <BookingList bookings={[]} selectedDate={undefined} />
                  </div>
                </div>

                <div className="md:col-span-1 lg:col-span-2 order-1 md:order-2 w-full">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-3 md:mb-4 text-pink-600">
                      Book Your Appointment
                    </h3>
                    <BookingForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location section */}
        <Location />

        {/* About Section */}
        <AboutMe />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
