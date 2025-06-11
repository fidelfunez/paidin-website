import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              The Future of{" "}
              <span className="gradient-text">Bitcoin Payroll</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pay your team in Bitcoin with the first truly Bitcoin-native payroll platform.
              Seamlessly manage salaries, expenses, and benefits while embracing the future of money.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-bitcoin hover:bg-bitcoin-dark text-white"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
              >
                Contact Sales
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              {[
                "No setup fees",
                "14-day free trial",
                "Cancel anytime"
              ].map((text) => (
                <div key={text} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern team collaborating on fintech solutions"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
