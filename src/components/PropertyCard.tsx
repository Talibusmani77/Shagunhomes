import { motion } from "framer-motion";
import { MapPin, Maximize, Bed, Bath, Home as HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Property } from "@/data/properties";
import { Badge } from "./ui/badge";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  onRequestVisit: (property: Property) => void;
}

export const PropertyCard = ({ property, onViewDetails, onRequestVisit }: PropertyCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge
          className="absolute top-3 left-3 bg-secondary text-secondary-foreground"
        >
          FOR {property.type.toUpperCase()}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-heading font-bold text-lg mb-2 line-clamp-1">
            {property.title}
          </h3>
          <p className="text-2xl font-bold text-secondary mb-2">
            ₹{property.price.toLocaleString('en-IN')}
            {property.type === "Rent" && <span className="text-sm font-normal text-muted-foreground">/month</span>}
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Details */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{property.area_sqft} sq.ft</span>
          </div>
          {property.bhk > 0 && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{property.bhk} BHK</span>
              </div>
            </>
          )}
          {property.bathrooms > 0 && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{property.bathrooms}</span>
              </div>
            </>
          )}
          <span>•</span>
          <span>{property.furnishing}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="default"
            className="flex-1"
            onClick={() => onViewDetails(property)}
          >
            View Details
          </Button>
          <Button
            variant="outline-red"
            className="flex-1"
            onClick={() => onRequestVisit(property)}
          >
            Request Visit
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
