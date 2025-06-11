import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

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
            <span className="text-bitcoin">forward-thinking</span> companies
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of companies already paying their teams in Bitcoin
          </p>
        </AnimatedSection>

        <AnimatedSection animation="staggerChildren" stagger={0.2}>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={{
                  initial: { opacity: 0, y: 40, scale: 0.95 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-gray-100 hover:border-bitcoin/20">
                  <CardContent className="p-8">
                    <motion.div 
                      className="flex items-center mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-bitcoin rounded-full flex items-center justify-center text-white font-bold mr-4"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: "0 0 20px rgba(255, 133, 27, 0.3)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonial.initials}
                      </motion.div>
                      <div>
                        <motion.div 
                          className="font-semibold text-gray-900"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        >
                          {testimonial.name}
                        </motion.div>
                        <motion.div 
                          className="text-sm text-gray-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                          {testimonial.company}
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-600 italic mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                    
                    <motion.div 
                      className="flex text-bitcoin"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + 0.6 + i * 0.05 
                          }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Star className="h-4 w-4 fill-current" />
                        </motion.div>
                      ))}
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
