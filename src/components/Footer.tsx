import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  // Function to scroll to top when clicking any link
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/Shagunlogo.png" 
                alt="ShagunHomes Logo" 
                className="h-24 md:h-28 lg:h-32 w-full max-w-[180px] md:max-w-[210px] lg:max-w-[250px] object-fill"
              />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Your trusted real estate partner in Noida. We provide verified listings, local expertise, and transparent dealings for all your property needs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className="hover:text-secondary transition-colors opacity-90 hover:opacity-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={scrollToTop}
                  className="hover:text-secondary transition-colors opacity-90 hover:opacity-100"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  onClick={scrollToTop}
                  className="hover:text-secondary transition-colors opacity-90 hover:opacity-100"
                >
                  Buy Properties
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  onClick={scrollToTop}
                  className="hover:text-secondary transition-colors opacity-90 hover:opacity-100"
                >
                  Rent Properties
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  onClick={scrollToTop}
                  className="hover:text-secondary transition-colors opacity-90 hover:opacity-100"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/testimonials" 
                  onClick={scrollToTop}
                  className="hover:text-secondary transition-colors opacity-90 hover:opacity-100"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={scrollToTop}
                  className="hover:text-secondary transition-colors opacity-90 hover:opacity-100"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 opacity-90">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>FF-32, Hemisphere Galleria, Opp. Delta Metro Station, Sector-27, Gr. Noida - 201310</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+919268007694" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100 block">
                    +91 9268007694
                  </a>
                  <a href="tel:+919540408051" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100 block">
                    +91 9540408051
                  </a>
                  <a href="tel:+919540400172" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100 block">
                    +91 9540400172
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@shagunhomes.com" className="hover:text-secondary transition-colors hover:opacity-100">
                  info@shagunhomes.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-heading font-bold mb-4">Working Hours</h3>
            <div className="text-sm space-y-2 opacity-90">
              <p>Monday - Saturday</p>
              <p className="font-semibold text-base">10:00 AM - 7:00 PM</p>
              <p className="text-xs mt-4">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
          <p>© 2025 ShagunHomes | Designed by Nexbern Technologies</p>
        </div>
      </div>
    </footer>
  );
};