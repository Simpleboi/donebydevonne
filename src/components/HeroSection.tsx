import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Sparkles, Star } from "lucide-react";
import Banner from "../../public/assets/images/donebydevonne.png"; 

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Done by Devonne",
  subtitle = "Luxury nail services for the modern woman",
  ctaText = "Book Now",
  onCtaClick = () => console.log("Book Now clicked"),
  backgroundImage = Banner,
}: HeroSectionProps) => {
  return (
    <div className="relative h-[600px] sm:h-[650px] md:h-[700px] w-full bg-white overflow-hidden">
      {/* Background Image with Enhanced Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ y: [0, -20, 0], scale: 1.05 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "brightness(0.95)",
        }}
      />

      {/* Gradient Overlay with enhanced mobile appearance */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-pink-900/40 z-10" />

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/70"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Animated Stars - New Visual Element */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-pink-200/60"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Star className="w-4 h-4 md:w-6 md:h-6" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            className="mb-4 sm:mb-6 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, 0] }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl"><Sparkles className="h-12 w-12 text-white/90"/></span>
          </motion.div>

          <motion.h1
            className="sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-pink-400 to-purple-500 pb-2 transition-all duration-300 drop-shadow-sm text-gradient bg-clip-text text-transparent text-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 font-light px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.7,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-t from-white to-transparent z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Floating Nail Polish Drops - New Visual Element */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:block">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 opacity-70"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="absolute bottom-20 left-10 z-10 hidden md:block">
        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-70"
          animate={{
            y: [0, -10, 0],
            x: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
