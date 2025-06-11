import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control actual video playback
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See PaidIn in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how PaidIn transforms traditional payroll into a seamless Bitcoin experience. 
            From setup to payments, everything is designed for simplicity and security.
          </p>
        </div>

        {/* Video Player */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700">
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-bitcoin hover:bg-bitcoin-dark rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
              </div>
            )}

            {/* Simulated video content when playing */}
            {isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin/20 to-orange-300/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">₿</div>
                  <div className="text-xl font-semibold">PaidIn Demo Video</div>
                  <div className="text-sm opacity-80 mt-2">Bitcoin Payroll Simplified</div>
                </div>
              </div>
            )}

            {/* Video Thumbnail Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Simulated Video Progress */}
            {isPlaying && (
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 rounded-full h-1 overflow-hidden">
                  <div className="bg-bitcoin h-full w-1/3 rounded-full transition-all duration-1000"></div>
                </div>
              </div>
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
        </div>

        {/* Video Features */}
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
            <div key={feature.title} className="text-center">
              <div className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-bitcoin font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to experience it yourself?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
              Schedule Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}