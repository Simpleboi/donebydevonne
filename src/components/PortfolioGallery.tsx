import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  description: string;
  likes?: number;
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
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className={cn("w-full py-12 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            My{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 pb-2 transition-all duration-300 drop-shadow-sm text-gradient bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Browse through my gallery of stunning nail designs created by
            Devonne and find inspiration for your next appointment.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("all")}
              className={cn(
                "rounded-full",
                activeFilter === "all"
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "border-pink-300 text-pink-600 hover:bg-pink-50"
              )}
            >
              All Designs
            </Button>
            <Button
              variant={activeFilter === "marble" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("marble")}
              className={cn(
                "rounded-full",
                activeFilter === "marble"
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "border-pink-300 text-pink-600 hover:bg-pink-50"
              )}
            >
              Marble
            </Button>
            <Button
              variant={activeFilter === "glitter" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("glitter")}
              className={cn(
                "rounded-full",
                activeFilter === "glitter"
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "border-pink-300 text-pink-600 hover:bg-pink-50"
              )}
            >
              Glitter
            </Button>
            <Button
              variant={activeFilter === "art" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("art")}
              className={cn(
                "rounded-full",
                activeFilter === "art"
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "border-pink-300 text-pink-600 hover:bg-pink-50"
              )}
            >
              Nail Art
            </Button>
          </div>
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
                        <div
                          className="relative aspect-square overflow-hidden cursor-pointer group"
                          onClick={() => setSelectedItem(item)}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white font-medium">
                              {item.title}
                            </p>
                          </div>
                        </div>
                        <div className="p-4 bg-white flex justify-between items-center">
                          <div>
                            <h3 className="font-medium text-gray-800">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              {item.description}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                              "rounded-full",
                              likedItems.includes(item.id)
                                ? "text-pink-500"
                                : "text-gray-400 hover:text-pink-500"
                            )}
                            onClick={(e) => handleLike(item.id, e)}
                          >
                            <Heart
                              className={cn(
                                "h-5 w-5 transition-all",
                                likedItems.includes(item.id)
                                  ? "fill-pink-500"
                                  : ""
                              )}
                            />
                            <span className="sr-only">Like</span>
                          </Button>
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
                  index === currentIndex ? "bg-pink-500 w-4" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Detail Modal */}
          <Dialog
            open={!!selectedItem}
            onOpenChange={(open) => !open && setSelectedItem(null)}
          >
            <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-auto p-0 bg-white">
              <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1 opacity-70 hover:opacity-100">
                <X className="h-5 w-5" />
              </DialogClose>

              {selectedItem && (
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 relative">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {selectedItem.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        DETAILS
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
                          <span>Professional gel polish</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
                          <span>Long-lasting finish (2-3 weeks)</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
                          <span>Custom design available</span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                      onClick={() => {
                        setSelectedItem(null);
                        document
                          .getElementById("booking")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Book This Design
                    </Button>

                    {/* <div className="mt-4 flex justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                          "rounded-full border-pink-300",
                          likedItems.includes(selectedItem.id)
                            ? "text-pink-500"
                            : "text-gray-500"
                        )}
                        onClick={() =>
                          handleLike(selectedItem.id, {} as React.MouseEvent)
                        }
                      >
                        <Heart
                          className={cn(
                            "h-4 w-4 mr-2",
                            likedItems.includes(selectedItem.id)
                              ? "fill-pink-500"
                              : ""
                          )}
                        />
                        {likedItems.includes(selectedItem.id)
                          ? "Saved to Favorites"
                          : "Save to Favorites"}
                      </Button>
                    </div> */}
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

// Default portfolio items if none are provided
const defaultItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Pink Marble",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80",
    description: "Elegant pink marble effect with gold accents",
    likes: 24,
  },
  {
    id: 2,
    title: "Glitter Ombré",
    image:
      "https://images.unsplash.com/photo-1604654894611-6973b376cbde?w=800&q=80",
    description: "Stunning ombré with glitter gradient finish",
    likes: 18,
  },
  {
    id: 3,
    title: "Crystal Accents",
    image:
      "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80",
    description: "Sophisticated design with crystal embellishments",
    likes: 32,
  },
  {
    id: 4,
    title: "Pastel French",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80",
    description: "Modern twist on classic French with pastel tips",
    likes: 15,
  },
  {
    id: 5,
    title: "Floral Art",
    image:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
    description: "Delicate hand-painted floral designs",
    likes: 29,
  },
  {
    id: 6,
    title: "Matte Nude",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80",
    description: "Sophisticated matte nude with minimalist design",
    likes: 21,
  },
  {
    id: 7,
    title: "Geometric Patterns",
    image:
      "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80",
    description: "Modern geometric nail art with metallic details",
    likes: 17,
  },
  {
    id: 8,
    title: "Holographic Shine",
    image:
      "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=800&q=80",
    description: "Eye-catching holographic finish that changes in light",
    likes: 26,
  },
  {
    id: 9,
    title: "Jewel Tones",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80",
    description: "Rich jewel-toned colors with glossy finish",
    likes: 22,
  },
];

export default PortfolioGallery;
