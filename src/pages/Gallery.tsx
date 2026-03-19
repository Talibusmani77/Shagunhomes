import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { properties, Property } from "@/data/properties";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bath,
  Bed,
  Home,
  MapPin,
  Maximize,
  Phone,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Gallery = () => {
  const [searchParams] = useSearchParams();

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    type: "all",
    category: "all",
    location: "all",
    bhk: "any",
    minBudget: "",
    maxBudget: "",
  });

  // ✅ URL FILTER
  useEffect(() => {
    const urlType = searchParams.get("type");
    const urlLocation = searchParams.get("location");
    const urlMaxPrice = searchParams.get("maxPrice");

    setFilters((prev) => {
      const updated = { ...prev };

      if (urlType) updated.type = urlType;

      if (urlLocation) {
        const locationMap: Record<string, string> = {
          "sector-18": "sector 18",
          "sector-62": "sector 62",
          "sector-27": "sector 27",
          extension: "extension",
        };
        updated.location = locationMap[urlLocation] || urlLocation;
      }

      if (urlMaxPrice) {
        const priceMap: Record<string, string> = {
          "50L": "5000000",
          "1Cr": "10000000",
          "2Cr": "20000000",
          "5Cr": "50000000",
        };
        updated.maxBudget = priceMap[urlMaxPrice] || "";
      }

      return updated;
    });

    // setShowFilters(true);
  }, [searchParams]);

  // ✅ FILTER LOGIC FIXED
  const filteredProperties = properties.filter((property) => {
    const locationText = `${property.location.city} ${property.location.sector}`.toLowerCase();

    return (
      !property.featured &&
      (filters.type === "all" || property.type === filters.type) &&
      (filters.category === "all" || property.category === filters.category) &&
      (filters.location === "all" ||
        locationText.includes(filters.location.toLowerCase())) &&
      (filters.bhk === "any" ||
        property.bhk.toString() === filters.bhk ||
        (filters.bhk === "4" && property.bhk >= 4)) &&
      (!filters.minBudget || property.price >= Number(filters.minBudget)) &&
      (!filters.maxBudget || property.price <= Number(filters.maxBudget))
    );
  });

  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} Lac`;
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <div className="pt-44 pb-16">
      <div className="container mx-auto px-4 md:px-8">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
<p className="text-center text-muted-foreground mb-8">
  Explore our collection of premium properties across Greater Noida
</p>

        {/* FILTER BUTTON */}
        <Button onClick={() => setShowFilters(!showFilters)} className="mt-4 mb-4">
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
        </Button>

        {/* FILTERS */}
        <AnimatePresence>
          {showFilters && (
            <motion.div className="bg-card p-6 rounded-xl mt-4 mb-6">
              <div className="grid md:grid-cols-4 gap-4">

                <Select
                  value={filters.type}
                  onValueChange={(val) =>
                    setFilters((p) => ({ ...p, type: val }))
                  }
                >
                  <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Buy">Buy</SelectItem>
                    <SelectItem value="Rent">Rent</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={filters.category}
                  onValueChange={(val) =>
                    setFilters((p) => ({ ...p, category: val }))
                  }
                >
                  <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Residential">Residential</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={filters.location}
                  onValueChange={(val) =>
                    setFilters((p) => ({ ...p, location: val }))
                  }
                >
                  <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Sector 150">Sector 150</SelectItem>
                  <SelectItem value="Sector 137">Sector 137</SelectItem>
                  <SelectItem value="Sector 36">Sector 36</SelectItem>
                  <SelectItem value="Sector 1">Greater Noida West</SelectItem>
                  <SelectItem value="Sector 22D">Sector 22D</SelectItem>
                  <SelectItem value="Sector Zeta 1">Zeta 1</SelectItem>
                  <SelectItem value="Yamuna Expressway">
                    Yamuna Expressway
                  </SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={filters.bhk}
                  onValueChange={(val) =>
                    setFilters((p) => ({ ...p, bhk: val }))
                  }
                >
                  <SelectTrigger><SelectValue placeholder="BHK" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Input
                  placeholder="Min Price"
                  type="number"
                  value={filters.minBudget}
                  onChange={(e) =>
                    setFilters((p) => ({ ...p, minBudget: e.target.value }))
                  }
                />
                <Input
                  placeholder="Max Price"
                  type="number"
                  value={filters.maxBudget}
                  onChange={(e) =>
                    setFilters((p) => ({ ...p, maxBudget: e.target.value }))
                  }
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="cursor-pointer"
              onClick={() => setSelectedProperty(property)}
            >
              <img
                src={property.images[0]}
                className="w-full h-52 object-cover rounded-lg"
              />
              <h3 className="font-semibold mt-2">{property.title}</h3>
              <p className="text-sm text-muted-foreground">
                {property.location.city}, {property.location.sector}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
  <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">

    {selectedProperty && (
      <div className="space-y-6">

        {/* ✅ IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={selectedProperty.images[0]}
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src={selectedProperty.images[1] || selectedProperty.images[0]}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold">
          {selectedProperty.title}
        </h2>

        {/* LOCATION */}
        <p className="text-muted-foreground">
          {selectedProperty.location.city}, {selectedProperty.location.sector}
        </p>

        {/* PRICE */}
        <p className="text-xl font-bold text-primary">
          ₹{selectedProperty.price.toLocaleString("en-IN")}
        </p>

        {/* DETAILS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm">Type</p>
            <p className="font-bold">{selectedProperty.type}</p>
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm">Category</p>
            <p className="font-bold">{selectedProperty.category}</p>
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm">BHK</p>
            <p className="font-bold">{selectedProperty.bhk}</p>
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm">Bathrooms</p>
            <p className="font-bold">{selectedProperty.bathrooms}</p>
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm">Area</p>
            <p className="font-bold">{selectedProperty.area_sqft} sq.ft</p>
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm">Furnishing</p>
            <p className="font-bold">{selectedProperty.furnishing}</p>
          </div>

        </div>

        {/* DESCRIPTION */}
        <div>
          <h3 className="font-semibold">Description</h3>
          <p>{selectedProperty.description}</p>
        </div>

        {/* AGENT */}
        <div className="bg-muted p-4 rounded-lg">
          <p>{selectedProperty.agent.name}</p>
          <p>{selectedProperty.agent.phone}</p>
        </div>

        <Button
  className="w-full mt-4"
  onClick={() =>
    (window.location.href = `tel:${selectedProperty.agent.phone}`)
  }
>
  <Phone className="w-4 h-4 mr-2" />
  Call Agent
</Button>

      </div>
    )}

  </DialogContent>
</Dialog>
    </div>
  );
};

export default Gallery;