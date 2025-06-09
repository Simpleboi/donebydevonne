import React from "react";
import { motion } from "framer-motion";
import { Brush, Droplet, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  duration: string;
}

const Service = ({
  icon,
  title,
  description,
  price,
  duration,
}: ServiceProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full"
    >
      <Card className="h-full bg-white border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <motion.div
            whileHover={{ rotate: 5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 rounded-full bg-pink-50 text-pink-500">
              {icon}
            </div>
          </motion.div>
          <CardTitle className="text-center text-xl font-medium text-gray-800">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-gray-600 mb-4">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col items-center pt-0">
          <p className="text-2xl font-semibold text-pink-600 mb-1">{price}</p>
          <p className="text-sm text-gray-500">{duration}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Brush size={24} />,
      title: "Acrylic Full Set - Plain One Color",
      description:
        "A sleek and durable Acrylic Full Set in a single solid color, perfect for a clean and timeless look.",
      price: "$40",
      duration: "1 hour, 15 minutes",
    },
    {
      icon: <Droplet size={24} />,
      title: "Acrylic Full Set - French Tip",
      description:
        "A classic French Tip Acrylic Full Set, offering a clean and elegant look with timeless white tips and a smooth, flawless finish.",
      price: "$55",
      duration: "1 hour, 45 minutes",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Acrylic Full Set - With Design",
      description:
        "Personalized designs created just for you. From simple accents to elaborate patterns, make a statement with custom art.",
      price: "$45 - $80",
      duration: "1 hour, 45 minutes - 3 hours",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Manicure",
      description:
        "A refreshing manicure that includes nail shaping, cuticle care, and a flawless polish application for beautifully groomed nails.",
      price: "$25",
      duration: "45 minutes - 1 hour",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-white to-pink-50"
      id="services"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            My{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 pb-2 transition-all duration-300 drop-shadow-sm text-gradient bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the range of professional nail services designed to keep
            your hands looking beautiful and well-maintained.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Service
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                duration={service.duration}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic mb-6">
            All services include nail preparation, shaping, and cuticle care.
            Base prices can vary on length of nails. <br />
            All products are gel + shellac products.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg">
            View Full Price List
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
