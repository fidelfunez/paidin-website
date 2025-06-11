import { Bitcoin, TrendingUp, Clock, Shield, FileText, ArrowLeftRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import AnimatedIcon from "./AnimatedIcon";
import { motion } from "framer-motion";

const features = [
  {
    icon: Bitcoin,
    title: "Real Bitcoin Payroll",
    description: "Pay your team directly in Bitcoin with automated salary calculations and real-time BTC/USD conversion rates.",
  },
  {
    icon: TrendingUp,
    title: "Expense Tracking",
    description: "Track team expenses in Bitcoin and fiat currencies with automated categorization and reporting.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Built-in time tracking and time-off management integrated with your Bitcoin payroll system.",
  },
  {
    icon: Shield,
    title: "Benefits Management",
    description: "Manage health insurance, retirement plans, and other benefits alongside Bitcoin compensation.",
  },
  {
    icon: FileText,
    title: "Tax & Compliance",
    description: "Automated tax calculations and compliance reporting for Bitcoin payments in your jurisdiction.",
  },
  {
    icon: ArrowLeftRight,
    title: "Flexible Withdrawals",
    description: "Employees can withdraw to their Bitcoin wallet or traditional bank account with instant conversion.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need for{" "}
            <span className="text-bitcoin">Bitcoin payroll</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From salary payments to expense tracking, PaidIn provides all the tools modern teams need to embrace Bitcoin as their primary currency.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="staggerChildren" stagger={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  initial: { opacity: 0, y: 30, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-bitcoin/30 group">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bitcoin/20 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <AnimatedIcon 
                        icon={feature.icon} 
                        className="h-6 w-6 text-bitcoin"
                        hoverScale={1.2}
                        hoverRotate={15}
                        delay={index * 0.1}
                      />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
