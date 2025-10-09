import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const rotatingWords = [
  "Payroll",
  "Compliance",
  "Expenses",
  "Operations",
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-16 overflow-hidden h-screen flex items-start justify-center bg-white">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-amber-100"></div>
        
        {/* Floating gradient orbs - MOVING AROUND */}
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-gradient-to-br from-bitcoin/50 to-orange-400/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-purple-400/30 to-pink-300/25 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/40 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Additional moving orbs for better coverage */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-orange-300/25 to-amber-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-l from-purple-300/20 to-pink-300/15 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        
        {/* Left side orange orbs - different tones and pulsing */}
        <div className="absolute top-1/3 -left-8 w-[450px] h-[450px] bg-gradient-to-br from-orange-400/30 to-orange-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/3 -left-12 w-[380px] h-[380px] bg-gradient-to-tr from-amber-400/35 to-orange-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
        <div className="absolute top-2/3 left-0 w-[320px] h-[320px] bg-gradient-to-r from-orange-500/25 to-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '5s', animationDuration: '5s' }}></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(circle, #f7931a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start w-full">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-bitcoin/20 via-orange-400/10 to-bitcoin/20 rounded-full"></div>
              <div className="w-2 h-2 bg-bitcoin rounded-full animate-pulse mr-3 relative z-10 shadow-sm"></div>
              <span className="text-sm font-bold text-bitcoin relative z-10 drop-shadow-sm">The Bitcoin Business Platform ⚡</span>
            </div>

            {/* Massive Headline with Rotating Words */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1]">
              <span className="block mb-2 text-bitcoin">Bitcoin</span>
              <div className="relative inline-block min-h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-900 inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-normal max-w-xl">
              The complete business operations platform built for the Bitcoin standard. Run payroll, manage expenses, and ensure compliance—all in Bitcoin.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                size="lg"
                className="bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold px-10 py-6 text-lg h-auto shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => window.location.href = 'https://app.paidin.io'}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <button className="text-lg text-gray-700 hover:text-bitcoin font-semibold transition-colors flex items-center gap-2 py-6">
                Watch Demo
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Trust Signal */}
            <p className="text-sm text-gray-500 pt-4">
              Trusted by Bitcoin-forward companies • Enterprise-grade security • Lightning fast
            </p>
          </motion.div>

          {/* Right: Product Screenshot with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-[565px]">
              <img
                src="/website-photos/hero-image.png"
                alt="PaidIn Dashboard - Bitcoin Business Operations"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-bitcoin/20 to-orange-400/20 rounded-3xl blur-3xl -z-10 opacity-30"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Bitcoin Quotes Ticker - Simple like live version */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="bg-bitcoin h-12 flex items-center overflow-hidden">
          <div className="flex items-center space-x-8 animate-scroll">
            {/* Quote 1 - Satoshi Nakamoto (Main) */}
            <div className="flex items-center space-x-3 whitespace-nowrap">
              <img 
                src="/app - graphic designs/Bitcoin - logo - yellow.png?v=2" 
                alt="Bitcoin" 
                className="h-4 w-4"
              />
              <span className="text-white text-sm font-medium">"If you don't believe me or don't get it, I don't have time to try to convince you, sorry." — Satoshi Nakamoto</span>
            </div>
            
            {/* Quote 2 - Hal Finney */}
            <div className="flex items-center space-x-3 whitespace-nowrap">
              <img 
                src="/app - graphic designs/Bitcoin - logo - yellow.png?v=2" 
                alt="Bitcoin" 
                className="h-4 w-4"
              />
              <span className="text-white text-sm font-medium">"Running Bitcoin is the most fun you can have with your computer." — Hal Finney</span>
            </div>
            
            {/* Quote 3 - Michael Saylor */}
            <div className="flex items-center space-x-3 whitespace-nowrap">
              <img 
                src="/app - graphic designs/Bitcoin - logo - yellow.png?v=2" 
                alt="Bitcoin" 
                className="h-4 w-4"
              />
              <span className="text-white text-sm font-medium">"Bitcoin is the first monetary network that is completely digital, completely global, and completely decentralized." — Michael Saylor</span>
            </div>
            
            {/* Quote 4 - Andreas Antonopoulos */}
            <div className="flex items-center space-x-3 whitespace-nowrap">
              <img 
                src="/app - graphic designs/Bitcoin - logo - yellow.png?v=2" 
                alt="Bitcoin" 
                className="h-4 w-4"
              />
              <span className="text-white text-sm font-medium">"Bitcoin is not just a currency, it's a new form of money that is native to the internet." — Andreas Antonopoulos</span>
            </div>
            
            {/* Repeat for seamless loop */}
            <div className="flex items-center space-x-3 whitespace-nowrap">
              <img 
                src="/app - graphic designs/Bitcoin - logo - yellow.png?v=2" 
                alt="Bitcoin" 
                className="h-4 w-4"
              />
              <span className="text-white text-sm font-medium">"If you don't believe me or don't get it, I don't have time to try to convince you, sorry." — Satoshi Nakamoto</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
