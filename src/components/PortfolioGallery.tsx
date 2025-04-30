import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface PortfolioGalleryProps {
  items?: PortfolioItem[];
  className?: string;
}

const PortfolioGallery = ({
  items = defaultItems,
  className,
}: PortfolioGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={cn("w-full py-12 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stunning nail designs and find
            inspiration for your next appointment.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-md rounded-xl transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="p-4 bg-white">
                          <h3 className="font-medium text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6 bg-white/90 hover:bg-white" />
            <CarouselNext className="-right-4 md:-right-6 bg-white/90 hover:bg-white" />
          </Carousel>

          <div className="flex justify-center mt-6 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-pink-500 w-4" : "bg-gray-300",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Default portfolio items if none are provided
const defaultItems: PortfolioItem[] = [
  {
    id: 1,
    title: "French Ombré",
    image:
      "https://images.unsplash.com/photo-1604654894611-6973b376cbde?w=800&q=80",
    description: "Classic French manicure with a modern ombré twist",
  },
  {
    id: 2,
    title: "Glitter Accent",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80",
    description: "Elegant design with sparkling glitter accents",
  },
  {
    id: 3,
    title: "Abstract Art",
    image:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
    description: "Bold abstract patterns with vibrant colors",
  },
  {
    id: 4,
    title: "Minimalist Design",
    image:
      "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80",
    description: "Clean, simple lines with a touch of elegance",
  },
  {
    id: 5,
    title: "Floral Pattern",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80",
    description: "Delicate floral designs for a feminine touch",
  },
  {
    id: 6,
    title: "Gemstone Inspired",
    image:
      "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=800&q=80",
    description: "Luxurious designs inspired by precious gemstones",
  },
];

export default PortfolioGallery;
