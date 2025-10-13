import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickSearch = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    maxPrice: "",
  });

  const handleSearch = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Build query parameters from filters
    const params = new URLSearchParams();
    
    if (filters.type) {
      params.append('type', filters.type);
    }
    if (filters.location) {
      params.append('location', filters.location);
    }
    if (filters.maxPrice) {
      params.append('maxPrice', filters.maxPrice);
    }
    
    // Navigate to gallery with filters
    navigate(`/gallery?${params.toString()}`);
  };

  return (
    <div className="relative -mt-20 z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-card rounded-xl shadow-lg p-6 md:p-8 max-w-5xl mx-auto">
          <h3 className="text-xl font-heading font-bold mb-6 text-center">
            Find Your Perfect Property
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="property-type" className="text-xs text-muted-foreground">
                Property Type
              </Label>
              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger id="property-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Buy">Buy</SelectItem>
                  <SelectItem value="Rent">Rent</SelectItem>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-xs text-muted-foreground">
                Location
              </Label>
              <Select
                value={filters.location}
                onValueChange={(value) => setFilters({ ...filters, location: value })}
              >
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Noida</SelectItem>
                  <SelectItem value="sector-18">Sector 18</SelectItem>
                  <SelectItem value="sector-62">Sector 62</SelectItem>
                  <SelectItem value="sector-27">Sector 27</SelectItem>
                  <SelectItem value="extension">Noida Extension</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-price" className="text-xs text-muted-foreground">
                Max Price
              </Label>
              <Select
                value={filters.maxPrice}
                onValueChange={(value) => setFilters({ ...filters, maxPrice: value })}
              >
                <SelectTrigger id="max-price">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50L">₹50 Lakhs</SelectItem>
                  <SelectItem value="1Cr">₹1 Crore</SelectItem>
                  <SelectItem value="2Cr">₹2 Crores</SelectItem>
                  <SelectItem value="5Cr">₹5 Crores+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={handleSearch}
                size="lg"
                className="w-full"
              >
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};