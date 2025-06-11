import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Briefcase, Star, Zap } from "lucide-react";

const jobRoles = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$120k - $180k",
    description: "Join our engineering team to build the future of Bitcoin payroll infrastructure. Work with React, Node.js, and Bitcoin protocols.",
    requirements: ["5+ years full-stack experience", "React/TypeScript expertise", "Bitcoin/blockchain knowledge preferred"],
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York, NY / Remote", 
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Lead product strategy for our Bitcoin payroll platform. Work closely with engineering and design to deliver exceptional user experiences.",
    requirements: ["3+ years product management", "Fintech experience", "Strong analytical skills"],
    color: "from-purple-500 to-violet-500",
    gradient: "bg-gradient-to-br from-purple-50 to-violet-50",
  },
  {
    title: "Bitcoin Security Engineer",
    department: "Security",
    location: "Remote",
    type: "Full-time", 
    salary: "$140k - $200k",
    description: "Design and implement security protocols for Bitcoin custody and transaction processing. Ensure the highest standards of security.",
    requirements: ["Security engineering experience", "Bitcoin/cryptography expertise", "Multi-sig wallet experience"],
    color: "from-red-500 to-pink-500",
    gradient: "bg-gradient-to-br from-red-50 to-pink-50",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Austin, TX / Remote",
    type: "Full-time",
    salary: "$70k - $100k", 
    description: "Help our customers successfully implement Bitcoin payroll. Provide training, support, and strategic guidance.",
    requirements: ["2+ years customer success", "SaaS experience", "Excellent communication skills"],
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-50 to-emerald-50",
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
      <section className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-500/20 shadow-lg">
              <Briefcase className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Join the Bitcoin revolution</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We're <span className="relative">
                <span className="text-purple-600">hiring</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-60"></div>
              </span>!
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our mission to bring Bitcoin payroll to the world. Work with passionate people building the future of money.
            </p>
            
            <div className="glass-card rounded-2xl px-8 py-4 inline-flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">25+</span>
              </div>
              <span className="text-purple-600 font-semibold text-lg">Growing team of Bitcoin enthusiasts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/10 to-white"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Open <span className="text-purple-600">Positions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find your perfect role in the Bitcoin economy
            </p>
          </div>

          <div className="space-y-8">
            {jobRoles.map((job, index) => (
              <div key={job.title} className="group">
                <div className="relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${job.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <Card className="relative glass-card hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0">
                    <CardContent className="p-10">
                      <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                          <div className="flex flex-wrap items-center gap-4">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{job.title}</h3>
                            <Badge className={`${job.gradient} text-purple-600 border-purple-200 font-semibold`}>{job.department}</Badge>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-6 text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                              <span className="font-medium">{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-5 w-5 mr-2 text-purple-600" />
                              <span className="font-medium">{job.type}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 mr-2 text-purple-600" />
                              <span className="font-medium">{job.salary}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 text-lg leading-relaxed">{job.description}</p>
                          
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">Requirements:</h4>
                            <ul className="space-y-3">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-center">
                                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                                  <span className="text-gray-600 font-medium">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl shadow-lg">
                            Apply Now
                            <Zap className="ml-2 h-5 w-5" />
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 rounded-xl"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/10 to-white"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Why work at <span className="text-purple-600">PaidIn</span>?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe in taking care of our team with competitive benefits, flexible work arrangements, and the opportunity to shape the future of money.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-4 glass-card rounded-xl group hover:shadow-lg transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative glass-card rounded-3xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Team collaboration and remote work"
                    className="rounded-2xl w-full h-auto shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just a product—we're fostering a community of Bitcoin advocates who believe in financial sovereignty and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Remote First",
                description: "Work from anywhere in the world. We believe talent is distributed globally.",
                color: "from-blue-500 to-cyan-500",
                gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
              },
              {
                icon: DollarSign,
                title: "Bitcoin Native",
                description: "Optional Bitcoin compensation for employees who want to be paid in the future of money.",
                color: "from-orange-500 to-amber-500",
                gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
              },
              {
                icon: Clock,
                title: "Work-Life Balance", 
                description: "Unlimited PTO and flexible hours. We trust our team to do great work.",
                color: "from-green-500 to-emerald-500",
                gradient: "bg-gradient-to-br from-green-50 to-emerald-50",
              },
            ].map((value, index) => (
              <div key={value.title} className="group">
                <div className="relative h-full">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <Card className="relative h-full glass-card hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0 text-center">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Don't see the perfect role?
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented people who share our vision. Send us your resume and let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg h-auto shadow-lg">
                Send Resume
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-4 text-lg h-auto"
              >
                Learn About PaidIn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}