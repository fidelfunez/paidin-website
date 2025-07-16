import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bitcoin,
  TrendingUp,
  Clock,
  Shield,
  FileText,
  ArrowLeftRight,
  Users,
  BarChart3,
  Globe,
  Zap,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Bitcoin,
    title: "Real Bitcoin Payments",
    description: "Pay your team directly in Bitcoin with automated salary calculations and instant global transfers.",
    color: "from-orange-500 to-amber-500",
    gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
  },
  {
    icon: TrendingUp,
    title: "Live Market Rates",
    description: "Real-time BTC/USD conversion with transparent fee structures and market insights.",
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "Set up recurring payments and never worry about payroll timing again.",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Multi-signature wallets and bank-grade security protocols protect your funds.",
    color: "from-purple-500 to-violet-500",
    gradient: "bg-gradient-to-br from-purple-50 to-violet-50",
  },
  {
    icon: FileText,
    title: "Tax Compliance",
    description: "Automated tax reporting and compliance with local regulations worldwide.",
    color: "from-red-500 to-pink-500",
    gradient: "bg-gradient-to-br from-red-50 to-pink-50",
  },
  {
    icon: ArrowLeftRight,
    title: "Multi-Currency",
    description: "Support for Bitcoin, Lightning Network, and seamless fiat conversions.",
    color: "from-indigo-500 to-blue-500",
    gradient: "bg-gradient-to-br from-indigo-50 to-blue-50",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Onboard employees and manage their Bitcoin wallets with ease.",
    color: "from-teal-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-teal-50 to-cyan-50",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive dashboards with exportable reports and insights.",
    color: "from-yellow-500 to-orange-500",
    gradient: "bg-gradient-to-br from-yellow-50 to-orange-50",
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "Multi-timezone support for distributed teams working worldwide.",
    color: "from-slate-500 to-gray-500",
    gradient: "bg-gradient-to-br from-slate-50 to-gray-50",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-bitcoin rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-bitcoin/20 shadow-lg mb-6">
            <Star className="h-4 w-4 text-bitcoin mr-2" />
            <span className="text-sm font-medium text-gray-700">Complete Bitcoin Payroll Solution</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything you need for{" "}
            <span className="relative">
              <span className="text-bitcoin">Bitcoin payroll</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full opacity-60"></div>
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From salary payments to expense tracking, PaidIn provides all the tools modern teams need to embrace Bitcoin as their primary currency.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={feature.title} className="group">
              <div className="relative h-full">
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <Card className="relative h-full glass-card hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-bitcoin" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-bitcoin transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-bitcoin mr-3" />
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Ready to revolutionize your payroll?
                </h3>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of companies already paying their teams in Bitcoin
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
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}