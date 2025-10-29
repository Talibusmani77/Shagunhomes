import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Property } from "@/data/properties";

interface RequestQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property?: Property;
}

export const RequestQuoteModal = ({ open, onOpenChange, property }: RequestQuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = `Hello ShagunHomes,\n\nMy name is ${formData.name}.\nPhone: ${formData.phone}`;
    
    if (property) {
      message += `\n\nI am interested in the property "${property.title}" (₹${property.price.toLocaleString('en-IN')})`;
      message += `\nLocation: ${property.location}`;
    }
    
    if (formData.time) {
      message += `\n\nPreferred time for site visit: ${formData.time}`;
    }
    
    if (formData.message) {
      message += `\n\nAdditional message: ${formData.message}`;
    }
    
    message += `\n\nPlease contact me to discuss further.`;
    
    const whatsappUrl = `https://wa.me/917678121555?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    onOpenChange(false);
    setFormData({ name: "", phone: "", email: "", time: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading">
            {property ? "Request Visit" : "Request Quote"}
          </DialogTitle>
        </DialogHeader>

        {property && (
          <div className="rounded-lg bg-muted p-3 text-sm space-y-1">
            <p className="font-semibold">{property.title}</p>
            <p className="text-secondary font-bold">₹{property.price.toLocaleString('en-IN')}</p>
            <p className="text-muted-foreground">{property.location}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time (Optional)</Label>
            <Input
              id="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              placeholder="e.g., Tomorrow 3 PM"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any specific requirements..."
              rows={3}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            * This will open WhatsApp with a pre-filled message. Click send to submit your request.
          </p>

          <Button type="submit" className="w-full" size="lg">
            Send via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
