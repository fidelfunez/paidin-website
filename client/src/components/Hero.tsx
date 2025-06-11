import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      {/* Floating elements */}
      <motion.div
        className="absolute top-32 left-10 w-20 h-20 bg-bitcoin/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-64 right-20 w-16 h-16 bg-orange-200/20 rounded-full blur-lg"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInUp" duration={1}>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Future of{" "}
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Bitcoin Payroll
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pay your team in Bitcoin with the first truly Bitcoin-native payroll platform.
              Seamlessly manage salaries, expenses, and benefits while embracing the future of money.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedButton 
                size="lg" 
                className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow"
                glowEffect={true}
                hoverScale={1.05}
              >
                Start Free Trial
              </AnimatedButton>
              <AnimatedButton 
                size="lg" 
                variant="outline" 
                className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
                hoverScale={1.02}
              >
                Contact Sales
              </AnimatedButton>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                "No setup fees",
                "14-day free trial",
                "Cancel anytime"
              ].map((text, index) => (
                <motion.div
                  key={text}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  </motion.div>
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>

          <AnimatedSection animation="slideInRight" delay={0.3} duration={1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern team collaborating on fintech solutions"
                className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-bitcoin/20 to-orange-300/20 rounded-2xl blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
