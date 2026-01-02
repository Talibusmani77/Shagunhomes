import { Dialog, DialogContent } from "./ui/dialog";
import { Property } from "@/data/properties";
import { Button } from "./ui/button";
import { MapPin, Maximize, Bed, Bath, Home as HomeIcon, Phone, User } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";

interface PropertyDetailModalProps {
  property: Property | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestQuote: (property: Property) => void;
}

export const PropertyDetailModal = ({
  property,
  open,
  onOpenChange,
  onRequestQuote,
}: PropertyDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Image Carousel */}
          <div className="relative bg-muted">
            <div className="aspect-[4/3] relative">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                FOR {property.type.toUpperCase()}
              </Badge>
            </div>
            
            {/* Image thumbnails */}
            {property.images.length > 1 && (
              <div className="flex gap-2 p-4 overflow-x-auto">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === idx ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">
                {property.title}
              </h2>
              <p className="text-3xl font-bold text-secondary mb-3">
                ₹{property.price.toLocaleString('en-IN')}
                {property.type === "Rent" && <span className="text-base font-normal text-muted-foreground">/month</span>}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{property.address}</span>
              </div>
            </div>

            {/* Key Facts */}
            <div className="flex flex-wrap gap-4 py-4 border-y border-border">
              <div className="flex items-center gap-2">
                <Maximize className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Area</p>
                  <p className="font-semibold">{property.area_sqft} sq.ft</p>
                </div>
              </div>
              {property.bhk > 0 && (
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Bedrooms</p>
                    <p className="font-semibold">{property.bhk} BHK</p>
                  </div>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Bathrooms</p>
                    <p className="font-semibold">{property.bathrooms}</p>
                  </div>
                </div>
              )}
              {property.balconies > 0 && (
                <div className="flex items-center gap-2">
                  <HomeIcon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Balconies</p>
                    <p className="font-semibold">{property.balconies}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <HomeIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Furnishing</p>
                  <p className="font-semibold">{property.furnishing}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-heading font-semibold mb-2">Description</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-heading font-semibold mb-3">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((amenity) => (
                  <Badge key={amenity} variant="outline" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Agent */}
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Agent</p>
                  <p className="font-semibold">{property.agent.name}</p>
                </div>
              </div>
              <a
                href={`tel:${property.agent.phone}`}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                {property.agent.phone}
              </a>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline-red"
                className="flex-1"
                size="lg"
                onClick={() => onRequestQuote(property)}
              >
                Request Quote
              </Button>
              <Button
                asChild
                variant="default"
                className="flex-1"
                size="lg"
              >
                <a href="tel:+917678121555">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
