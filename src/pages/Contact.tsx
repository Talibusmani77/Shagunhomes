import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    contactMethod: "whatsapp",
  });

  // Google Maps location - FF-32, Hemisphere Galleria, Sector-27, Greater Noida
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=FF-32+Hemisphere+Galleria+Opp+Delta+Metro+Station+Sector-27+Greater+Noida+Uttar+Pradesh+201310";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello ShagunHomes,

My name is ${formData.name}.
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ""}
Subject: ${formData.subject}

Message: ${formData.message}

Preferred contact method: ${formData.contactMethod}

Please get back to me at your earliest convenience.`;

    const whatsappUrl = `https://wa.me/919268007694?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      contactMethod: "whatsapp",
    });
  };

  return (
    <div className="pt-44 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our property experts. We're here to help you find your dream home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-heading font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="subject">Subject *</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(val) => setFormData({ ...formData, subject: val })}
                  required
                >
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Query">General Query</SelectItem>
                    <SelectItem value="Buy Property">Buy Property</SelectItem>
                    <SelectItem value="Rent Property">Rent Property</SelectItem>
                    <SelectItem value="Sell Property">Sell Property</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  minLength={20}
                />
              </div>

              <div className="space-y-2">
                <Label>Preferred Contact Method</Label>
                <RadioGroup
                  value={formData.contactMethod}
                  onValueChange={(val) => setFormData({ ...formData, contactMethod: val })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="call" id="call" />
                    <Label htmlFor="call" className="font-normal cursor-pointer">Call</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="whatsapp" />
                    <Label htmlFor="whatsapp" className="font-normal cursor-pointer">WhatsApp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-radio" />
                    <Label htmlFor="email-radio" className="font-normal cursor-pointer">Email</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send via WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                This will open WhatsApp with your message pre-filled. Click send to submit.
              </p>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-card rounded-xl p-6 shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Office Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    FF-32, Hemisphere Galleria<br />
                    Opp. Delta Metro Station<br />
                    Sector-27, Greater Noida<br />
                    Uttar Pradesh - 201310
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-xl p-6 shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Phone Numbers</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>
                      <a href="tel:+919268007694" className="hover:text-primary transition-colors">
                        +91 9268007694
                      </a>
                    </p>
                    <p className="text-sm">Rajiv Kumar: <a href="tel:+919540408051" className="hover:text-primary transition-colors">+91 9540408051</a></p>
                    <p className="text-sm">Pramod Kumar: <a href="tel:+919540400172" className="hover:text-primary transition-colors">+91 9540400172</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card rounded-xl p-6 shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:info@shagunhomes.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@shagunhomes.com
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-card rounded-xl p-6 shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Working Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Saturday</p>
                    <p className="font-semibold text-foreground">10:00 AM - 7:00 PM</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-xl p-6 shadow-md">
              <h3 className="font-heading font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4!2d77.43!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzEyLjAiTiA3N8KwMjUnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ShagunHomes Office Location"
              />
              <div className="p-4 text-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View Larger Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;