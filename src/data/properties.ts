
export interface Property {
  id: string;
  title: string;
  price: number;
  type: "Buy" | "Rent";
  category: "Residential" | "Commercial";
  location: {
    city: string;
    sector: string;
  };
  address: string;
  area_sqft: number;
  bhk: number;
  bathrooms: number;
  balconies: number;
  furnishing: "Furnished" | "Semi-Furnished" | "Unfurnished";
  amenities: string[];
  description: string;
  images: string[];
  agent: {
    name: string;
    phone: string;
  };
  posted_date: string;
  featured: boolean;
}
export const properties: Property[] = [
  // 🔥 Featured
  {
    id: "prop-001",
    title: "3BHK Luxury Apartment",
    price: 8500000,
    type: "Buy",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 137" },
    address: "Sector 137, Greater Noida",
    area_sqft: 1250,
    bhk: 3,
    bathrooms: 2,
    balconies: 1,
    furnishing: "Furnished",
    amenities: ["Gym", "Pool", "Parking"],
    description: "North-facing 3BHK with modular kitchen, premium marble flooring, and spacious balcony offering garden views. Located in a gated society with modern amenities and excellent connectivity.",
    images: ["/List-img-1.jpg", "/List-img-2.jpg"],
    agent: { name: "Rajiv Tewatiya", phone: "+919871035001" },
    posted_date: "2025-09-15",
    featured: true,
  },

  {
    id: "prop-002",
    title: "4BHK Builder Floor",
    price: 12500000,
    type: "Buy",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 36" },
    address: "Sector 36, Greater Noida",
    area_sqft: 1800,
    bhk: 4,
    bathrooms: 3,
    balconies: 2,
    furnishing: "Furnished",
    amenities: ["Parking", "Garden"],
    description: "Spacious builder floor with independent entry, private terrace, and modern interiors. Located in a premium area with seamless connectivity to major hubs.",
    images: ["/List-img-3.jpg", "/List-img-4.jpg"],
    agent: { name: "Pramod Katewa", phone: "+917678121555" },
    posted_date: "2025-09-10",
    featured: true,
  },

  {
    id: "prop-003",
    title: "2BHK Apartment for Rent",
    price: 25000,
    type: "Rent",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 150" },
    address: "Sector 150, Greater Noida",
    area_sqft: 950,
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    furnishing: "Furnished",
    amenities: ["Gym", "Club House"],
    description: "Fully furnished 2BHK apartment with AC, modular kitchen, and modern appliances. Ideal for working professionals and small families.",
    images: ["/List-img-5.jpg", "/List-img-6.jpg"],
    agent: { name: "Rajiv Tewatiya", phone: "+919871035001" },
    posted_date: "2025-09-20",
    featured: true,
  },

  // 🔥 Gallery Properties
  {
    id: "prop-004",
    title: "ATS Dolce",
    price: 5500000,
    type: "Buy",
    category: "Commercial",
    location: { city: "Greater Noida", sector: "Sector Zeta 1" },
    address: "Zeta 1, Greater Noida",
    area_sqft: 800,
    bhk: 0,
    bathrooms: 1,
    balconies: 0,
    furnishing: "Unfurnished",
    amenities: ["Parking", "Security"],
    description: "Prime commercial space in a high-demand location, ideal for offices or retail with modern infrastructure and strong connectivity.",
    images: ["/Ats-Greens-1.jpg", "/Ats-Greens-2.jpg"],
    agent: { name: "Pramod Katewa", phone: "+917678121555" },
    posted_date: "2025-09-05",
    featured: false,
  },

  {
    id: "prop-005",
    title: "ATS Happy Trails",
    price: 25000000,
    type: "Buy",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 10" },
    address: "Sector 10, Greater Noida West",
    area_sqft: 3200,
    bhk: 5,
    bathrooms: 5,
    balconies: 3,
    furnishing: "Furnished",
    amenities: ["Pool", "Gym"],
    description: "Ultra-luxury penthouse featuring private terrace, jacuzzi, and premium interiors with panoramic city views.",
    images: ["/Ats-happy-trails-1.jpg", "/Ats-happy-trails-2.webp"],
    agent: { name: "Rajiv Tewatiya", phone: "+919871035001" },
    posted_date: "2025-08-28",
    featured: false,
  },

  {
    id: "prop-006",
    title: "ATS Allure Apartment",
    price: 15000,
    type: "Rent",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 22D" },
    address: "Sector 22D, Greater Noida",
    area_sqft: 550,
    bhk: 1,
    bathrooms: 1,
    balconies: 1,
    furnishing: "Furnished",
    amenities: ["Parking"],
    description: "Compact and stylish studio apartment perfect for bachelors or couples with easy access to metro and offices.",
    images: ["/Ats-allure-1.jpg", "/Ats-allure-2.jpg"],
    agent: { name: "Pramod Katewa", phone: "+917678121555" },
    posted_date: "2025-09-18",
    featured: false,
  },

  {
    id: "prop-007",
    title: "Gaur Yamuna City",
    price: 15000000,
    type: "Buy",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Yamuna Expressway" },
    address: "Yamuna Expressway",
    area_sqft: 2100,
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    furnishing: "Semi-Furnished",
    amenities: ["Garden"],
    description: "Modern villa with private garden and spacious interiors in a secure gated community with excellent ventilation.",
    images: ["/Gaur-Yamuna-City-1.webp", "/Gaur-Yamuna-City-2.jpg"],
    agent: { name: "Rajiv Tewatiya", phone: "+919871035001" },
    posted_date: "2025-09-12",
    featured: false,
  },

  {
    id: "prop-008",
    title: "Gaur Atulyam",
    price: 7500000,
    type: "Buy",
    category: "Commercial",
    location: { city: "Greater Noida", sector: "Sector 36" },
    address: "Sector 36, Greater Noida",
    area_sqft: 600,
    bhk: 0,
    bathrooms: 1,
    balconies: 0,
    furnishing: "Unfurnished",
    amenities: ["Parking"],
    description: "Retail space in a high-footfall commercial area, ideal for showrooms and businesses seeking visibility.",
    images: ["/Gaur-Atulyam-1.jpg", "/Gaur-Atulyam-2.jpg"],
    agent: { name: "Pramod Katewa", phone: "+917678121555" },
    posted_date: "2025-09-08",
    featured: false,
  },

  {
    id: "prop-009",
    title: "ACE TERRA",
    price: 6500000,
    type: "Buy",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 22D" },
    address: "Sector 22D",
    area_sqft: 1100,
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    furnishing: "Semi-Furnished",
    amenities: ["Gym"],
    description: "Well-designed 2BHK with modern amenities and great connectivity near shopping centers and metro access.",
    images: ["/Ace-Tera-1.webp", "/Ace-Tera-2.webp"],
    agent: { name: "Rajiv Tewatiya", phone: "+919871035001" },
    posted_date: "2025-09-14",
    featured: false,
  },

  {
    id: "prop-010",
    title: "ACE Parkway",
    price: 18500000,
    type: "Buy",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 150" },
    address: "Sector 150",
    area_sqft: 2500,
    bhk: 4,
    bathrooms: 4,
    balconies: 3,
    furnishing: "Furnished",
    amenities: ["Pool", "Gym"],
    description: "Premium duplex with elegant interiors, double-height living area, and top-class fittings in a prime location.",
    images: ["/Ace-parkway-1.jpg", "/Ace-parkway-2.jpg"],
    agent: { name: "Pramod Katewa", phone: "+917678121555" },
    posted_date: "2025-09-06",
    featured: false,
  },

  {
    id: "prop-011",
    title: "Gaur Saundaryam",
    price: 35000,
    type: "Rent",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 1" },
    address: "Greater Noida West (Sector 1)",
    area_sqft: 1400,
    bhk: 3,
    bathrooms: 2,
    balconies: 2,
    furnishing: "Furnished",
    amenities: ["WiFi"],
    description: "Serviced apartment with housekeeping and modern facilities, perfect for corporate and long-term stays.",
    images: ["/Gaur-saundaryam-2.jpg", "/Gaur-saundaryam-1.jpeg"],
    agent: { name: "Rajiv Tewatiya", phone: "+919871035001" },
    posted_date: "2025-09-16",
    featured: false,
  },

  {
    id: "prop-012",
    title: "ATS Pristine",
    price: 12000000,
    type: "Buy",
    category: "Commercial",
    location: { city: "Greater Noida", sector: "Sector 150" },
    address: "Sector 150",
    area_sqft: 5000,
    bhk: 0,
    bathrooms: 2,
    balconies: 0,
    furnishing: "Unfurnished",
    amenities: ["Loading Dock"],
    description: "Spacious warehouse with high ceiling and loading facilities, ideal for logistics and storage.",
    images: ["/Ats-pristine-1.jpg", "/Ats-pristine-2.jpg"],
    agent: { name: "Pramod Katewa", phone: "+917678121555" },
    posted_date: "2025-09-04",
    featured: false,
  },

  {
    id: "prop-013",
    title: "Ace Golfshire",
    price: 22000,
    type: "Rent",
    category: "Residential",
    location: { city: "Greater Noida", sector: "Sector 150" },
    address: "Sector 150",
    area_sqft: 1050,
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    furnishing: "Furnished",
    amenities: ["Garden"],
    description: "Peaceful 2BHK apartment with garden views in a well-maintained and family-friendly society.",
    images: ["/Ace-golfshire-1.jpg", "/Ace-golfshire-2.webp"],
    agent: { name: "Rajiv Tewatiya", phone: "+919871035001" },
    posted_date: "2025-09-17",
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    quote: "Very smooth experience, highly recommended!",
    
  },
  {
    id: 2,
    name: "Priya Verma",
    rating: 4,
    quote: "Got best deal in Greater Noida. Great support!",
    
  },
  {
    id: 3,
    name: "Amit Singh",
    rating: 5,
    quote: "Professional team and verified properties.",
    
  },
  {
    id: 4,
    name: "Neha Gupta",
    rating: 5,
    quote: "Loved the service and guidance throughout.",
  },
];