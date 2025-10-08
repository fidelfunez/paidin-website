import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const quotes = [
  "Bitcoin is a swarm of cyber hornets serving the goddess of wisdom, feeding on the fire of truth, exponentially growing ever smarter, faster, and stronger behind a wall of encrypted energy. - Michael Saylor",
  "The root problem with conventional currency is all the trust that's required to make it work. - Satoshi Nakamoto",
  "Running a business that accepts Bitcoin is like having a bank account that the whole world can pay into. - Andreas Antonopoulos",
  "Bitcoin will do to banks what email did to the postal industry. - Hal Finney",
];

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-bitcoin/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-bitcoin/20 shadow-lg">
                <span className="text-sm font-semibold text-gray-800">⚡ The first Bitcoin-native business platform</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.1]">
                <span className="block">Bitcoin Business</span>
                <span className="relative block">
                  <span className="text-bitcoin">Operations</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Everything you need to operate your business in Bitcoin. Payroll. Expenses. Compliance. All in one platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button 
                size="lg" 
                className="btn-primary text-white font-bold px-12 py-6 text-xl h-auto shadow-2xl hover:shadow-bitcoin/50 transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'https://app.paidin.io'}
              >
                Get Started Free
                <Zap className="ml-2 h-6 w-6" />
              </Button>
              <button 
                className="text-lg text-gray-600 hover:text-bitcoin font-semibold underline underline-offset-4 decoration-2 transition-colors"
              >
                Watch Demo →
              </button>
            </div>
            
            {/* Trust Signal */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-medium">
                🚀 Built for the Bitcoin economy  •  🔒 Enterprise-grade security  •  ⚡ Lightning-fast operations
              </p>
            </div>
          </div>

          <div className="relative lg:pl-8">
            {/* Main Image - Clean, minimal */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-bitcoin to-orange-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-orange-500/20 to-amber-500/15 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden p-3 border border-white/40">
                <img
                  src="/website-photos/hero-image.webp"
                  alt="PaidIn - Bitcoin Business Operations Platform"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bitcoin Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-bitcoin text-white py-4 overflow-hidden">
        <motion.div
          className="flex items-center space-x-12 whitespace-nowrap"
          animate={{ x: [-1000, 0] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {quotes.concat(quotes).map((quote, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img 
                src="/app - graphic designs/Bitcoin - logo - yellow.png" 
                alt="Bitcoin" 
                className="h-5 w-5"
              />
              <span className="text-sm">{quote}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
