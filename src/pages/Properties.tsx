import { useState } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyDetailModal } from "@/components/PropertyDetailModal";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";
import { properties, Property } from "@/data/properties";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface PropertiesPageProps {
  filterType?: "Buy" | "Rent" | "Residential" | "Commercial";
}

const Properties = ({ filterType }: PropertiesPageProps) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  
  const [filters, setFilters] = useState({
    type: filterType === "Buy" || filterType === "Rent" ? filterType : "",
    category: filterType === "Residential" || filterType === "Commercial" ? filterType : "",
    location: "",
    minPrice: "",
    maxPrice: "",
    bhk: "",
    furnishing: "",
    amenities: [] as string[],
    sort: "newest",
  });

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

  // Filter properties
  const filteredProperties = properties.filter((prop) => {
    if (filters.type && prop.type !== filters.type) return false;
    if (filters.category && prop.category !== filters.category) return false;
    if (filters.location && !prop.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.bhk && prop.bhk.toString() !== filters.bhk) return false;
    if (filters.furnishing && prop.furnishing !== filters.furnishing) return false;
    return true;
  });

  const getPageTitle = () => {
    if (filterType === "Buy") return "Properties for Sale";
    if (filterType === "Rent") return "Properties for Rent";
    if (filterType === "Residential") return "Residential Properties";
    if (filterType === "Commercial") return "Commercial Properties";
    return "All Properties";
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {getPageTitle()}
          </h1>
          <p className="text-muted-foreground">
            Showing {filteredProperties.length} properties
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-card rounded-xl p-6 shadow-md sticky top-24 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-lg">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden"
                >
                  Close
                </Button>
              </div>

              {!filterType && (
                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <Select value={filters.type} onValueChange={(val) => setFilters({ ...filters, type: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Types</SelectItem>
                      <SelectItem value="Buy">Buy</SelectItem>
                      <SelectItem value="Rent">Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {!filterType && (
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={filters.category} onValueChange={(val) => setFilters({ ...filters, category: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label>Location</Label>
                <Select value={filters.location} onValueChange={(val) => setFilters({ ...filters, location: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
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
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="1">1 BHK</SelectItem>
                    <SelectItem value="2">2 BHK</SelectItem>
                    <SelectItem value="3">3 BHK</SelectItem>
                    <SelectItem value="4">4+ BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Furnishing</Label>
                <Select value={filters.furnishing} onValueChange={(val) => setFilters({ ...filters, furnishing: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="Furnished">Furnished</SelectItem>
                    <SelectItem value="Semi-Furnished">Semi-Furnished</SelectItem>
                    <SelectItem value="Unfurnished">Unfurnished</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Sort By</Label>
                <Select value={filters.sort} onValueChange={(val) => setFilters({ ...filters, sort: val })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setFilters({
                  type: filterType === "Buy" || filterType === "Rent" ? filterType : "",
                  category: filterType === "Residential" || filterType === "Commercial" ? filterType : "",
                  location: "",
                  minPrice: "",
                  maxPrice: "",
                  bhk: "",
                  furnishing: "",
                  amenities: [],
                  sort: "newest",
                })}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 lg:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(true)}
                className="w-full"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Show Filters
              </Button>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No properties found matching your criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onViewDetails={handleViewDetails}
                    onRequestVisit={handleRequestVisit}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

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

export default Properties;
