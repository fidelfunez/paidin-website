import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bitcoin, Zap, Shield, Globe } from "lucide-react";

const integrations = [
  {
    name: "Lightning Network",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    position: { top: "10%", left: "15%" },
    description: "Instant Bitcoin payments"
  },
  {
    name: "Coinbase",
    icon: "🏦",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    position: { top: "25%", right: "20%" },
    description: "Enterprise custody"
  },
  {
    name: "Strike",
    icon: "⚡",
    color: "from-purple-500 to-purple-600", 
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    position: { top: "60%", left: "10%" },
    description: "Bitcoin-native payments"
  },
  {
    name: "BitPay",
    icon: "💳",
    color: "from-green-500 to-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    position: { bottom: "20%", right: "15%" },
    description: "Payment processing"
  },
  {
    name: "Kraken",
    icon: "🐙",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    position: { top: "45%", right: "25%" },
    description: "Professional trading"
  },
  {
    name: "Casa",
    icon: "🏠",
    color: "from-red-500 to-red-600",
    bgColor: "bg-gradient-to-br from-red-50 to-red-100",
    position: { bottom: "35%", left: "25%" },
    description: "Self-custody solutions"
  }
];

export default function BitcoinEcosystemSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Background Effects */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-500/20 shadow-lg mb-6">
            <Globe className="h-4 w-4 text-orange-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Connected ecosystem</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seamless Bitcoin <span className="text-orange-600">integrations</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with the leading Bitcoin infrastructure providers to create a complete payroll solution for the digital economy.
          </p>
        </div>

        {/* Integration Ecosystem */}
        <div className="relative">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full blur-xl opacity-30"></div>
              <Card className="relative w-32 h-32 glass-card border-0 shadow-2xl">
                <CardContent className="p-0 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Bitcoin className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">PaidIn</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Integration Nodes */}
          <div className="relative h-96 lg:h-[600px]">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="absolute group cursor-pointer"
                style={integration.position}
              >
                {/* Connection Line */}
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  width="200"
                  height="200"
                  style={{ zIndex: 1 }}
                >
                  <motion.line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="100"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>

                <Card className="w-20 h-20 lg:w-24 lg:h-24 glass-card border-0 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative z-10">
                  <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                    <div className={`w-8 h-8 lg:w-10 lg:h-10 ${integration.bgColor} rounded-lg flex items-center justify-center mb-1 group-hover:scale-110 transition-transform`}>
                      <span className="text-lg lg:text-xl">{integration.icon}</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-gray-900 text-center leading-tight">
                      {integration.name}
                    </span>
                  </CardContent>
                </Card>

                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                    {integration.description}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-20 blur-xl"
          />
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-10 left-10 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-15 blur-lg"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Process Bitcoin payments instantly with Lightning Network integration for immediate settlement."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Multi-signature wallets and institutional-grade custody solutions protect your Bitcoin assets."
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Pay employees anywhere in the world with Bitcoin's borderless, 24/7 payment network."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold px-8 py-4 text-lg h-auto shadow-lg"
          >
            Explore Integrations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}