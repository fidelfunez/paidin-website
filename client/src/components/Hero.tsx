import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import BtcPriceCard from "./BtcPriceCard";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-bitcoin/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-bitcoin/20 shadow-lg">
                <Zap className="h-4 w-4 text-bitcoin mr-2" />
                <span className="text-sm font-medium text-gray-700"> The first Bitcoin-native business platform ⚡</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Your Business{" "}
                <span className="relative">
                  <span className="text-bitcoin">Entirely in Bitcoin</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                PaidIn is the complete business operations platform for companies who embrace Bitcoin as their primary currency. From payroll to expenses, compliance to analytics - everything in Bitcoin.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary text-white font-semibold px-8 py-4 text-lg h-auto"
                onClick={() => window.open('https://paidin-app.netlify.app/auth', '_blank')}
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
              <div className="relative glass-card rounded-3xl p-6">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Modern team collaborating on Bitcoin business operations"
                  className="rounded-2xl w-full h-auto shadow-2xl"
                />
                
                {/* Real-time BTC Price Card */}
                <BtcPriceCard />
                
                {/* Floating Payment Card */}
                <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Business Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
