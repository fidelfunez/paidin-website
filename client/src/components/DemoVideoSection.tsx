import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control actual video playback
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See PaidIn in <span className="gradient-text">action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how easy it is to set up Bitcoin payroll for your team in just a few minutes.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div 
            className="relative bg-black rounded-2xl shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              {/* Play Button Overlay */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={handlePlayPause}
                  className="absolute z-10 w-20 h-20 rounded-full bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow transition-all duration-300"
                >
                  <motion.div
                    key={isPlaying ? 'pause' : 'play'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8 ml-1" />
                    )}
                  </motion.div>
                </Button>
              </motion.div>

              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Bitcoin Payroll Demo</h3>
                  <p className="text-gray-300">3:45 minute overview</p>
                </div>
              </div>

              {/* Video Thumbnail Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Simulated Video Progress */}
              {isPlaying && (
                <motion.div 
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/20 rounded-full h-1 overflow-hidden">
                    <motion.div 
                      className="bg-bitcoin h-full rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "33%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Video Controls Bar */}
            <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePlayPause}
                  className="text-white hover:text-bitcoin"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <span className="text-white text-sm">
                  {isPlaying ? "Now Playing" : "Ready to Play"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">3:45</span>
                <Button variant="ghost" size="sm" className="text-white hover:text-bitcoin">
                  Full Screen
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Video Features */}
        <AnimatedSection delay={0.4} animation="staggerChildren" stagger={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Setup Walkthrough",
                description: "See how to configure your first Bitcoin payroll in under 5 minutes",
              },
              {
                title: "Employee Onboarding",
                description: "Watch how employees can easily set up their Bitcoin wallets and preferences",
              },
              {
                title: "Payment Processing",
                description: "Learn how automatic payments work with real-time Bitcoin conversion",
              },
            ].map((feature, index) => (
              <motion.div 
                key={feature.title} 
                className="text-center"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "hsl(24, 94%, 53%, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.span 
                    className="text-bitcoin font-bold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.span>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-16">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to experience it yourself?
            </motion.h3>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedButton size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow" glowEffect={true}>
                Start Free Trial
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                Schedule Live Demo
              </AnimatedButton>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}