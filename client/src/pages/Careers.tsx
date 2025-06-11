import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const jobRoles = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$120k - $180k",
    description: "Join our engineering team to build the future of Bitcoin payroll infrastructure. Work with React, Node.js, and Bitcoin protocols.",
    requirements: ["5+ years full-stack experience", "React/TypeScript expertise", "Bitcoin/blockchain knowledge preferred"],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York, NY / Remote", 
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Lead product strategy for our Bitcoin payroll platform. Work closely with engineering and design to deliver exceptional user experiences.",
    requirements: ["3+ years product management", "Fintech experience", "Strong analytical skills"],
  },
  {
    title: "Bitcoin Security Engineer",
    department: "Security",
    location: "Remote",
    type: "Full-time", 
    salary: "$140k - $200k",
    description: "Design and implement security protocols for Bitcoin custody and transaction processing. Ensure the highest standards of security.",
    requirements: ["Security engineering experience", "Bitcoin/cryptography expertise", "Multi-sig wallet experience"],
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Austin, TX / Remote",
    type: "Full-time",
    salary: "$70k - $100k", 
    description: "Help our customers successfully implement Bitcoin payroll. Provide training, support, and strategic guidance.",
    requirements: ["2+ years customer success", "SaaS experience", "Excellent communication skills"],
  },
];

const benefits = [
  "100% remote-friendly culture",
  "Health, dental, and vision insurance",
  "Paid in Bitcoin (optional)",
  "Unlimited PTO policy",
  "Learning & development budget",
  "Top-tier equipment provided",
  "Stock options in a growing company",
  "Quarterly team retreats",
];

export default function Careers() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              We're <span className="text-bitcoin">hiring</span>!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our mission to bring Bitcoin payroll to the world. Work with passionate people building the future of money.
            </p>
            <div className="inline-flex items-center space-x-2 bg-bitcoin/10 rounded-full px-6 py-3">
              <span className="text-bitcoin font-medium">🚀 Growing team of 25+ Bitcoin enthusiasts</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Find your perfect role in the Bitcoin economy
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {jobRoles.map((job, index) => (
              <AnimatedSection key={job.title} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                          <Badge className="bg-bitcoin/10 text-bitcoin">{job.department}</Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">{job.description}</p>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-bitcoin rounded-full mr-3"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <Button className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white mb-3">
                          Apply Now
                        </Button>
                        <Button variant="outline" className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideInLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why work at <span className="text-bitcoin">PaidIn</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in taking care of our team with competitive benefits, flexible work arrangements, and the opportunity to shape the future of money.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-bitcoin rounded-full mr-3"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight" delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Team collaboration and remote work"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're building more than just a product—we're fostering a community of Bitcoin advocates who believe in financial sovereignty and innovation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Remote First",
                description: "Work from anywhere in the world. We believe talent is distributed globally.",
              },
              {
                icon: DollarSign,
                title: "Bitcoin Native",
                description: "Optional Bitcoin compensation for employees who want to be paid in the future of money.",
              },
              {
                icon: Clock,
                title: "Work-Life Balance", 
                description: "Unlimited PTO and flexible hours. We trust our team to do great work.",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.2}>
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-6 w-6 text-bitcoin" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
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
              Don't see the perfect role?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented people who share our vision. Send us your resume and let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow">
                Send Resume
              </Button>
              <Button size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                Learn About PaidIn
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}