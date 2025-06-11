import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams",
    price: "$29",
    period: "/month",
    employees: "Up to 10 employees",
    features: [
      "Bitcoin payroll processing",
      "Basic expense tracking",
      "Time tracking",
      "Email support",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    description: "For growing companies",
    price: "$99",
    period: "/month",
    employees: "Up to 50 employees",
    features: [
      "Everything in Starter",
      "Advanced expense tracking",
      "Benefits management",
      "Tax & compliance reporting",
      "Priority support",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "",
    employees: "Unlimited employees",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "24/7 phone support",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, <span className="text-bitcoin">transparent</span> pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your team size and needs
          </p>
        </AnimatedSection>

        <AnimatedSection animation="staggerChildren" stagger={0.2}>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={{
                  initial: { opacity: 0, y: 50, scale: 0.95 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className={`h-full relative transition-all duration-500 hover:shadow-2xl ${
                  plan.popular 
                    ? "border-2 border-bitcoin shadow-xl animate-pulse-glow" 
                    : "border border-gray-200 hover:border-bitcoin/30"
                }`}>
                  {plan.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <Badge className="bg-bitcoin text-white animate-float">Most Popular</Badge>
                    </motion.div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {plan.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                    >
                      {plan.description}
                    </motion.p>
                    
                    <motion.div 
                      className="text-4xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      {plan.price}
                      <span className="text-lg font-normal text-gray-500">
                        {plan.period}
                      </span>
                    </motion.div>
                    
                    <motion.p 
                      className="text-sm text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {plan.employees}
                    </motion.p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + 0.4 + featureIndex * 0.05 
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    >
                      <AnimatedButton
                        className={`w-full ${
                          plan.buttonVariant === "default"
                            ? "bg-bitcoin hover:bg-bitcoin-dark text-white"
                            : "border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
                        }`}
                        variant={plan.buttonVariant}
                        glowEffect={plan.popular}
                        hoverScale={1.05}
                      >
                        {plan.buttonText}
                      </AnimatedButton>
                    </motion.div>
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
