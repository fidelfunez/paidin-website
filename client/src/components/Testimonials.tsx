import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Tech Startup CEO",
    company: "San Francisco",
    initials: "TK",
    quote: "PaidIn transformed how we think about compensation. Our team loves getting paid in Bitcoin, and the platform makes it seamless.",
  },
  {
    name: "Digital Agency Founder",
    company: "Austin",
    initials: "DF",
    quote: "The real-time BTC/USD conversion and tax reporting features save us hours every month. Couldn't imagine payroll without PaidIn now.",
  },
  {
    name: "Remote Team Leader",
    company: "Berlin",
    initials: "MR",
    quote: "Finally, a payroll solution that understands Bitcoin. The security features and compliance tools give us complete peace of mind.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="gradient-text">forward-thinking</span> companies
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of companies already paying their teams in Bitcoin
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.2}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-bitcoin rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex text-bitcoin">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
