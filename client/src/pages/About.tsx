import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Users, Globe, Bitcoin, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Fidel Fúnez C.",
    role: "CEO & Founder",
    bio: "Former fintech executive with 10+ years building payment systems",
    image: "",
  },
  {
    name: "Placeholder",
    role: "CTO",
    bio: "Blockchain architect and security expert from top tech companies",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Placeholder",
    role: "VP of Product",
    bio: "Product leader focused on user experience and Bitcoin adoption",
    image: "",
  },
];

const values = [
  {
    icon: Bitcoin,
    title: "Bitcoin First",
    description: "We're building the future of money, not just another payment processor.",
    color: "from-orange-500 to-amber-500",
    gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
  },
  {
    icon: Target,
    title: "Mission Focused",
    description: "Every feature we build serves one goal: making Bitcoin payroll seamless.",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    icon: Users,
    title: "People Powered",
    description: "Great teams deserve great tools. We're here to empower human potential.",
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Building borderless financial infrastructure for distributed teams worldwide.",
    color: "from-purple-500 to-violet-500",
    gradient: "bg-gradient-to-br from-purple-50 to-violet-50",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-bitcoin/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Main Image with Glass Effect */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-bitcoin to-orange-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative glass-card rounded-3xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Bitcoin cryptocurrency and modern fintech workspace"
                    className="rounded-2xl w-full h-auto shadow-2xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-bitcoin/20 shadow-lg">
                  <Star className="h-4 w-4 text-bitcoin mr-2" />
                  <span className="text-sm font-medium text-gray-700">Built for Bitcoin-native businesses</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Why we built{" "}
                  <span className="relative">
                    <span className="text-bitcoin">PaidIn</span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full opacity-60"></div>
                  </span>
                </h1>
                
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                  <p>
                    Traditional business platforms weren't built for companies that operate entirely in Bitcoin. We created PaidIn to bridge the gap between conventional business operations and the future of money.
                  </p>
                  <p>
                    Our mission is to make Bitcoin business operations accessible, compliant, and seamless for companies of all sizes. We believe that every business should have the option to run their entire operations in the world's most sound money.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Built by Bitcoin enthusiasts and business operations experts",
                  "Compliant with global financial regulations for Bitcoin businesses",
                  "Trusted by 500+ companies running entirely in Bitcoin",
                ].map((point, index) => (
                  <div key={point} className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                    <div className="w-8 h-8 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-bitcoin">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="group">
                <div className="relative h-full">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <Card className="relative h-full glass-card hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-8 w-8 text-bitcoin" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-bitcoin transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/10 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet the <span className="text-bitcoin">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people building the future of Bitcoin payroll
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="group">
                <Card className="glass-card hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <img
                        src={member.image}
                        alt={`${member.name} headshot`}
                        className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-bitcoin transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-bitcoin font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-bitcoin mr-3" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ready to run your business in <span className="text-bitcoin">Bitcoin</span>?
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Start operating your entire business in Bitcoin today with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-white font-semibold px-8 py-4 text-lg h-auto"
                onClick={() => window.open('https://paidin-app.netlify.app/auth', '_blank')}
              >
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white font-semibold px-8 py-4 text-lg h-auto"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
