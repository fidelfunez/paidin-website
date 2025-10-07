import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, TrendingUp, Bitcoin } from "lucide-react";
import BtcPriceCard from "./BtcPriceCard";
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
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-bitcoin/20 shadow-lg">
                <span className="text-sm font-semibold text-gray-800"> The first Bitcoin-native business platform ⚡</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                <span className="block">Run Your Business</span>
                <span className="relative block">
                  <span className="text-bitcoin">100% in Bitcoin</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                The bridge to the Bitcoin standard. PaidIn is the complete business operations platform for any company ready to embrace Bitcoin. From payroll to compliance, everything in the world's soundest money.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary text-white font-semibold px-8 py-4 text-lg h-auto"
                onClick={() => window.location.href = 'https://app.paidin.io'}
              >
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white font-semibold px-8 py-4 text-lg h-auto transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: CheckCircle, text: "Complete operations", color: "text-green-500" },
                { icon: Shield, text: "Enterprise security", color: "text-blue-500" },
                { icon: TrendingUp, text: "Real-time Bitcoin rates", color: "text-bitcoin" }
              ].map((item) => (
                <div key={item.text} className="flex items-center space-x-2 group">
                  <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            {/* Main Image with Glass Effect */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-bitcoin to-orange-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-orange-500/30 to-amber-500/25 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden p-2">
                <img
                  src="/website-photos/hero-image.webp"
                  alt="PaidIn - Bitcoin Business Operations Platform"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Real-time BTC Price Card */}
              <BtcPriceCard />
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
              <Bitcoin className="h-5 w-5" />
              <span className="text-sm">{quote}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
