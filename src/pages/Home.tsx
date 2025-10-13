import { useState } from "react";
import { motion } from "framer-motion";
import { HeroCarousel } from "@/components/HeroCarousel";
import { QuickSearch } from "@/components/QuickSearch";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyDetailModal } from "@/components/PropertyDetailModal";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";
import { properties, testimonials } from "@/data/properties";
import { Property } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, Users, MapPin, Star } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const Home = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setDetailModalOpen(true);
  };

  const handleRequestVisit = (property: Property) => {
    setSelectedProperty(property);
    setQuoteModalOpen(true);
  };

  const handleRequestQuote = (property: Property) => {
    setDetailModalOpen(false);
    setSelectedProperty(property);
    setQuoteModalOpen(true);
  };

  const whyChooseItems = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "Each listing verified by our local team",
    },
    {
      icon: TrendingUp,
      title: "Best Market Deals",
      description: "We negotiate the best price for you",
    },
    {
      icon: Users,
      title: "Trusted by 500+ Families",
      description: "Transparent paperwork & timely updates",
    },
    {
      icon: MapPin,
      title: "Prime Locations in Noida",
      description: "Handpicked neighbourhoods across Noida",
    },
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Quick Search */}
      <QuickSearch />

      {/* Featured Properties */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured Properties
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked premium properties across Noida's prime locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard
                  property={property}
                  onViewDetails={handleViewDetails}
                  onRequestVisit={handleRequestVisit}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" variant="default">
              <Link to="/gallery" onClick={scrollToTop}>View More Properties</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose ShagunHomes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in Noida real estate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 shadow-md text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from happy homeowners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 shadow-md space-y-4"
              >
                <div className="flex gap-1 text-yellow-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="w-10 h-10">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials" onClick={scrollToTop}>View All Testimonials</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-20 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Looking for your dream home?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Talk to our Noida experts — Free consultation & guided site visits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/gallery" onClick={scrollToTop}>View Properties</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Modals */}
      <PropertyDetailModal
        property={selectedProperty}
        open={detailModalOpen}
        onOpenChange={setDetailModalOpen}
        onRequestQuote={handleRequestQuote}
      />
      <RequestQuoteModal
        property={selectedProperty || undefined}
        open={quoteModalOpen}
        onOpenChange={setQuoteModalOpen}
      />
    </div>
  );
};

export default Home;