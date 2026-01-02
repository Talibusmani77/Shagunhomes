import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "@/data/properties";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal, X, MapPin, Home, Bed, Bath, Maximize, Phone } from "lucide-react";

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: "all",
    category: "all",
    location: "all",
    bhk: "any",
    minBudget: "",
    maxBudget: "",
  });

  // Initialize filters from URL parameters
  useEffect(() => {
    const urlType = searchParams.get('type');
    const urlLocation = searchParams.get('location');
    const urlMaxPrice = searchParams.get('maxPrice');

    const newFilters = { ...filters };
    
    if (urlType) {
      newFilters.type = urlType;
    }
    
    if (urlLocation) {
      // Map location values from QuickSearch to Gallery format
      const locationMap = {
        'sector-18': 'sector 18',
        'sector-62': 'sector 62',
        'sector-27': 'sector 27',
        'extension': 'extension',
        'all': 'all'
      };
      newFilters.location = locationMap[urlLocation] || urlLocation;
    }
    
    if (urlMaxPrice) {
      // Convert price abbreviations to actual numbers
      const priceMap = {
        '50L': '5000000',
        '1Cr': '10000000',
        '2Cr': '20000000',
        '5Cr': '50000000'
      };
      newFilters.maxBudget = priceMap[urlMaxPrice] || '';
    }

    // Only update if we have URL params
    if (urlType || urlLocation || urlMaxPrice) {
      setFilters(newFilters);
      setShowFilters(true); // Show filters when coming from search
    }
  }, [searchParams]);

  const contactPhone = "+917678121555";

  // Filter properties (not images) and exclude featured properties
  const filteredProperties = properties.filter((property) => {
    return (
      !property.featured && // Exclude featured properties
      (filters.type === "all" || property.type === filters.type) &&
      (filters.category === "all" || property.category === filters.category) &&
      (filters.location === "all" || (property.location && property.location.toLowerCase().includes(filters.location.toLowerCase()))) &&
      (filters.bhk === "any" || (property.bhk && property.bhk.toString() === filters.bhk)) &&
      (!filters.minBudget || (property.price && property.price >= Number(filters.minBudget))) &&
      (!filters.maxBudget || (property.price && property.price <= Number(filters.maxBudget)))
    );
  });

  const formatPrice = (price) => {
    if (!price) return 'Price on Request';
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const handleContactAgent = () => {
    window.location.href = `tel:${contactPhone}`;
  };

  return (
    <div className="pt-44 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of premium properties across Noida
          </p>
        </motion.div>

        {/* Filter Toggle Button */}
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full md:w-auto"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl p-6 shadow-md mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-heading font-bold text-lg">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <Select value={filters.type} onValueChange={(val) => setFilters({ ...filters, type: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Buy">Buy</SelectItem>
                      <SelectItem value="Rent">Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={filters.category} onValueChange={(val) => setFilters({ ...filters, category: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select value={filters.location} onValueChange={(val) => setFilters({ ...filters, location: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="sector 18">Sector 18</SelectItem>
                      <SelectItem value="sector 62">Sector 62</SelectItem>
                      <SelectItem value="sector 27">Sector 27</SelectItem>
                      <SelectItem value="extension">Noida Extension</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Bedrooms</Label>
                  <Select value={filters.bhk} onValueChange={(val) => setFilters({ ...filters, bhk: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1 BHK</SelectItem>
                      <SelectItem value="2">2 BHK</SelectItem>
                      <SelectItem value="3">3 BHK</SelectItem>
                      <SelectItem value="4">4+ BHK</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Budget Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label>Min Budget (₹)</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 5000000"
                    value={filters.minBudget}
                    onChange={(e) => setFilters({ ...filters, minBudget: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Max Budget (₹)</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 20000000"
                    value={filters.maxBudget}
                    onChange={(e) => setFilters({ ...filters, maxBudget: e.target.value })}
                  />
                </div>
              </div>

              <div className="mt-4">
                <Button
                  variant="outline"
                  onClick={() => setFilters({ type: "all", category: "all", location: "all", bhk: "any", minBudget: "", maxBudget: "" })}
                >
                  Clear Filters
                </Button>
              </div>

              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredProperties.length} properties
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted"
              onClick={() => setSelectedProperty(property)}
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold text-sm">{property.title}</p>
                  <p className="text-xs opacity-90">{property.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No properties found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProperty && (
            <div className="space-y-6">
              {/* Property Images */}
              <div className="grid grid-cols-1 gap-4">
                {selectedProperty.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProperty.title} - ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Property Title & Price */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-2">
                  {selectedProperty.title}
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProperty.location}</span>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {formatPrice(selectedProperty.price)}
                </div>
              </div>

              {/* Property Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold">Type</span>
                  </div>
                  <p className="text-lg font-bold">{selectedProperty.type}</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Bed className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold">Bedrooms</span>
                  </div>
                  <p className="text-lg font-bold">{selectedProperty.bhk} BHK</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Bath className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold">Bathrooms</span>
                  </div>
                  <p className="text-lg font-bold">{selectedProperty.bathrooms || 'N/A'}</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Maximize className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold">Area</span>
                  </div>
                  <p className="text-lg font-bold">{selectedProperty.area || 'N/A'} sq.ft</p>
                </div>
              </div>

              {/* Category Badge */}
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
                  {selectedProperty.category}
                </span>
              </div>

              {/* Description */}
              {selectedProperty.description && (
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button className="flex-1" onClick={handleContactAgent}>
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Agent
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;