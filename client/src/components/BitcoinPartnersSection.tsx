import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bitcoin, Shield, Zap, Globe } from "lucide-react";
import { SiBitcoin, SiLightning } from "react-icons/si";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Strike",
    description: "Lightning payments infrastructure",
    logo: SiLightning,
    badge: "Lightning Network",
    color: "text-yellow-500",
  },
  {
    name: "Casa",
    description: "Bitcoin custody solutions",
    logo: Shield,
    badge: "Security Partner",
    color: "text-blue-500",
  },
  {
    name: "River Financial",
    description: "Bitcoin financial services",
    logo: SiBitcoin,
    badge: "Exchange Partner",
    color: "text-bitcoin",
  },
  {
    name: "Blockstream",
    description: "Bitcoin infrastructure",
    logo: Bitcoin,
    badge: "Infrastructure",
    color: "text-green-500",
  },
  {
    name: "BTCPay Server",
    description: "Open-source payment processor",
    logo: Zap,
    badge: "Payment Rails",
    color: "text-purple-500",
  },
  {
    name: "Voltage",
    description: "Lightning node hosting",
    logo: Globe,
    badge: "Node Infrastructure",
    color: "text-indigo-500",
  },
];

const certifications = [
  "Bitcoin-only Company",
  "Lightning Network Ready",
  "Open Source Friendly",
  "Circular Economy Supporter",
];

export default function BitcoinPartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powered by the <span className="gradient-text">Bitcoin ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with the most trusted names in Bitcoin to provide you with enterprise-grade infrastructure and security.
          </p>
        </AnimatedSection>

        {/* Bitcoin-friendly badges */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {certifications.map((cert, index) => (
              <Badge
                key={cert}
                variant="outline"
                className="border-bitcoin text-bitcoin px-4 py-2 text-sm font-medium"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </AnimatedSection>

        {/* Partners Grid */}
        <AnimatedSection animation="staggerChildren" stagger={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                variants={{
                  initial: { opacity: 0, y: 30, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-gray-100 hover:border-bitcoin/20 group">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-bitcoin/5 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <partner.logo className={`h-8 w-8 ${partner.color}`} />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {partner.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {partner.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge className="bg-bitcoin/10 text-bitcoin border-bitcoin/20">
                        {partner.badge}
                      </Badge>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Circular Economy Statement */}
        <AnimatedSection delay={0.8}>
          <div className="mt-20 text-center bg-bitcoin/5 rounded-2xl p-12">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-bitcoin rounded-full flex items-center justify-center mx-auto mb-6">
                <Bitcoin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Building the Circular Bitcoin Economy
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                PaidIn is committed to fostering a circular Bitcoin economy where value flows seamlessly between Bitcoin-native businesses and their employees. By choosing Bitcoin payroll, you're not just adopting new technology—you're participating in the future of money.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bitcoin rounded-full mr-2"></div>
                  100% Bitcoin reserves
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bitcoin rounded-full mr-2"></div>
                  Lightning Network enabled
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bitcoin rounded-full mr-2"></div>
                  Open source contributions
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bitcoin rounded-full mr-2"></div>
                  Bitcoin education initiatives
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}