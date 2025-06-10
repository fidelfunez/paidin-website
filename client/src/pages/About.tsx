import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former fintech executive with 10+ years building payment systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Blockchain architect and security expert from top tech companies",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Product",
    bio: "Product leader focused on user experience and Bitcoin adoption",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideInLeft">
              <img
                src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Bitcoin cryptocurrency and modern fintech workspace"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </AnimatedSection>
            <AnimatedSection animation="slideInRight">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Why we built <span className="gradient-text">PaidIn</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional payroll systems weren't built for the Bitcoin economy. We created PaidIn to bridge the gap between conventional business operations and the future of money.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to make Bitcoin payroll accessible, compliant, and seamless for companies of all sizes. We believe that every business should have the option to pay their team in the world's most sound money.
              </p>

              <div className="space-y-4">
                {[
                  "Built by Bitcoin enthusiasts and fintech experts",
                  "Compliant with global financial regulations",
                  "Trusted by 500+ companies worldwide",
                ].map((point) => (
                  <div key={point} className="flex items-center">
                    <div className="w-3 h-3 bg-bitcoin rounded-full mr-4"></div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600">
              The passionate people building the future of Bitcoin payroll
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.2} className="text-center">
                <img
                  src={member.image}
                  alt={`${member.name} headshot`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-bitcoin font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to join the <span className="gradient-text">Bitcoin economy</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start paying your team in Bitcoin today with our simple, secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
