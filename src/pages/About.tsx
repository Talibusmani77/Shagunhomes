import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Target, Eye, Users, TrendingUp, Shield, Award } from "lucide-react";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About ShagunHomes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted real estate advisors in Greater Noida — Buy, Sell & Rent with transparency
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded by Rajiv Tewatiya and pramod katewa, ShagunHomes was born from a vision to transform the real estate experience in Greater Noida. With deep local knowledge and years of industry expertise, we recognized the need for a more transparent and client-focused approach to property transactions.
                </p>
                <p>
                  Today, we stand as one of Greater Noida's most trusted real estate advisors, having helped over 500 families find their perfect homes. Our commitment to verified listings, fair pricing, and end-to-end assistance has made us the preferred choice for property seekers across Noida and Greater Noida.
                </p>
                <p>
                  What sets us apart is our local expertise combined with professional service standards. Every property we list undergoes thorough verification, and every client receives personalized attention throughout their property journey.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-xl h-96" />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make property buying & renting in Greater Noida seamless & transparent, becoming the most trusted real estate partner for every family seeking their dream home.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provide verified listings, local expertise & fair pricing while ensuring transparent dealings and exceptional customer service at every step of the property journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes finding your dream property simple
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="font-heading font-bold text-lg">Search & Shortlist</h3>
              <p className="text-sm text-muted-foreground">
                Browse verified properties or tell us your requirements
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="font-heading font-bold text-lg">Site Visits</h3>
              <p className="text-sm text-muted-foreground">
                Free guided visits to shortlisted properties
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="font-heading font-bold text-lg">Paperwork & Legal</h3>
              <p className="text-sm text-muted-foreground">
                Complete assistance with documentation & legal verification
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                4
              </div>
              <h3 className="font-heading font-bold text-lg">Handover</h3>
              <p className="text-sm text-muted-foreground">
                Smooth handover and after-sales support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">10+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">1000+</div>
              <div className="text-sm md:text-base opacity-90">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">4.9</div>
              <div className="text-sm md:text-base opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Guarantees */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Values & Guarantees
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What you can always expect from ShagunHomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-md">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">100% Verified Listings</h3>
              <p className="text-sm text-muted-foreground">
                Every property is personally verified by our team before listing
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Transparent Fees</h3>
              <p className="text-sm text-muted-foreground">
                No hidden charges — clear pricing from the start
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">After-Sales Support</h3>
              <p className="text-sm text-muted-foreground">
                We stay with you even after the deal is closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Work with our experts
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect property in Noida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact" onClick={scrollToTop}>Request Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/gallery" onClick={scrollToTop}>Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;