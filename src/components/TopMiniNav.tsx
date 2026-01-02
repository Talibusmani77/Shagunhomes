import { Facebook, Instagram, Linkedin, Youtube, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { RequestQuoteModal } from "./RequestQuoteModal";

interface TopMiniNavProps {
  visible: boolean;
}

export const TopMiniNav = ({ visible }: TopMiniNavProps) => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-10 bg-background border-b border-primary/10 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between text-sm">
          {/* Social icons - Left */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Contact info & CTA - Right */}
          <div className="hidden md:flex items-center gap-5 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Mon–Sat: 10 AM – 7 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@shagunhomes.in</span>
            </div>
            <span>|</span>
            <a href="tel:+917678121555" className="hover:text-primary transition-colors">
              +91 7678121555
            </a>
            <Button
              size="sm"
              variant="default"
              onClick={() => setQuoteModalOpen(true)}
              className="h-8 px-4 text-sm"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>

      <RequestQuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  );
};