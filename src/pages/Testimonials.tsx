import { testimonials } from "@/data/properties";
import { Star } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const Testimonials = () => {
  return (
    <div className="pt-44 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Client Testimonials
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from happy homeowners who found their dream properties with ShagunHomes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow space-y-6"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <Avatar className="w-12 h-12">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">4.9</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">1000+</div>
              <div className="text-sm opacity-90">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
