import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Find Your Dream Home in Noida",
    subtitle: "Buy, Sell & Rent Premium Properties with ShagunHomes",
    image: "/Bg-img-3.jpg",
  },
  {
    id: 2,
    title: "Luxury Living Awaits You",
    subtitle: "Discover Premium Apartments & Builder Floors in Noida",
    image: "/Bg-img-2.jpg",
  },
  {
    id: 3,
    title: "Your Trusted Property Partner",
    subtitle: "Verified Listings • Expert Guidance • Transparent Deals",
    image: "/Bg-img-1.jpg",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image with Continuous Zoom In/Out Animation */}
          <div className="absolute inset-0 bg-muted overflow-hidden">
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              animate={{ 
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          {/* Overlay Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.25) 60%, transparent 100%)",
            }}
          />

          {/* Content - Added top padding to avoid navbar overlap */}
          <div className="relative h-full container mx-auto px-4 md:px-8 flex items-center pt-32 md:pt-24">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-2xl space-y-4 md:space-y-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.95 }}
                transition={{ delay: 0.5 }}
                className="text-white font-medium text-sm md:text-base lg:text-lg"
              >
                Discover Greater Noida Yamuna Expressway best properties
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.7 }}
                className="text-white text-base md:text-lg lg:text-xl max-w-xl"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
              >
                <Button asChild size="lg" variant="default">
                  <Link to="/gallery" onClick={scrollToTop}>View Properties</Link>
                </Button>
                <Button asChild size="lg" className="bg-red-600 text-white hover:bg-white hover:text-red-600 border-2 border-red-600 transition-all">
                  <Link to="/contact" onClick={scrollToTop}>Request Quote</Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap items-center gap-3 md:gap-4 pt-4 md:pt-6 text-white text-xs md:text-sm"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span>Free site visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span>Verified listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span>Expert local agents</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};