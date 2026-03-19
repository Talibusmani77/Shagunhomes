import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const QuickSearch = () => {
  const navigate = useNavigate(); // ✅ FIX

  const [filters, setFilters] = useState({
    type: "",
    sector: "",
    maxPrice: "",
  });

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (filters.type) params.append("type", filters.type);
    if (filters.sector) params.append("sector", filters.sector);
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);

    navigate(`/gallery?${params.toString()}`);
  };

  return (
    <div className="relative py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 max-w-5xl mx-auto border border-border">
          <h3 className="text-xl font-heading font-bold mb-6 text-center">
            Find Your Perfect Property
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Property Type */}
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">
                Property Type
              </Label>
              <Select
                value={filters.type}
                onValueChange={(value) =>
                  setFilters({ ...filters, type: value })
                }
              >
                <SelectTrigger>
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

            {/* Sector (Location) */}
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">
                Location (Sector)
              </Label>
              <Select
                value={filters.sector}
                onValueChange={(value) =>
                  setFilters({ ...filters, sector: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
                <SelectContent>
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
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">
                Max Price
              </Label>
              <Select
                value={filters.maxPrice}
                onValueChange={(value) =>
                  setFilters({ ...filters, maxPrice: value })
                }
              >
                <SelectTrigger>
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

            {/* Button */}
            <div className="flex items-end">
              <Button onClick={handleSearch} size="lg" className="w-full">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};