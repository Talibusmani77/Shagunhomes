import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "./ui/button";

interface MainNavbarProps {
  isScrolled: boolean;
  topNavVisible: boolean;
}

export const MainNavbar = ({ isScrolled, topNavVisible }: MainNavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Function to scroll to top when clicking any link
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-40 h-18 transition-all duration-300 ${
        topNavVisible ? "top-9" : "top-0"
      } ${
        isScrolled || !isHome
          ? "bg-background shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/Shagunlogo.png" 
            alt="ShagunHomes Logo" 
            className="h-20 md:h-24 lg:h-28 w-auto object-contain max-w-[280px] md:max-w-[350px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            onClick={scrollToTop}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isScrolled || !isHome ? 'text-foreground' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={scrollToTop}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isScrolled || !isHome ? 'text-foreground' : 'text-white'
            }`}
          >
            About Us
          </Link>
          
          {/* Properties Dropdown */}
          <div
            className="relative group"
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors ${
                isScrolled || !isHome ? 'text-foreground' : 'text-white'
              }`}
            >
              Properties
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-lg border border-border py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                to="/gallery"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => {
                  setPropertiesDropdownOpen(false);
                  scrollToTop();
                }}
              >
                Buy
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => {
                  setPropertiesDropdownOpen(false);
                  scrollToTop();
                }}
              >
                Rent
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => {
                  setPropertiesDropdownOpen(false);
                  scrollToTop();
                }}
              >
                Residential
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => {
                  setPropertiesDropdownOpen(false);
                  scrollToTop();
                }}
              >
                Commercial
              </Link>
            </div>
          </div>

          <Link
            to="/gallery"
            onClick={scrollToTop}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isScrolled || !isHome ? 'text-foreground' : 'text-white'
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/testimonials"
            onClick={scrollToTop}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isScrolled || !isHome ? 'text-foreground' : 'text-white'
            }`}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isScrolled || !isHome ? 'text-foreground' : 'text-white'
            }`}
          >
            Contact Us
          </Link>

          <Button asChild size="default">
            <a href="tel:+919268007694" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled || !isHome ? 'text-foreground' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled || !isHome ? 'text-foreground' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              About Us
            </Link>
            
            {/* Mobile Properties Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-primary"
                onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
              >
                Properties
                <ChevronDown className={`w-4 h-4 transition-transform ${mobilePropertiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePropertiesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    to="/gallery"
                    className="block py-2 text-sm font-medium hover:text-primary"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobilePropertiesOpen(false);
                      scrollToTop();
                    }}
                  >
                    Buy Properties
                  </Link>
                  <Link
                    to="/gallery"
                    className="block py-2 text-sm font-medium hover:text-primary"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobilePropertiesOpen(false);
                      scrollToTop();
                    }}
                  >
                    Rent Properties
                  </Link>
                  <Link
                    to="/gallery"
                    className="block py-2 text-sm font-medium hover:text-primary"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobilePropertiesOpen(false);
                      scrollToTop();
                    }}
                  >
                    Residential
                  </Link>
                  <Link
                    to="/gallery"
                    className="block py-2 text-sm font-medium hover:text-primary"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobilePropertiesOpen(false);
                      scrollToTop();
                    }}
                  >
                    Commercial
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              Gallery
            </Link>
            <Link
              to="/testimonials"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              Contact Us
            </Link>
            <Button asChild size="default" className="w-full">
              <a href="tel:+919268007694" className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};