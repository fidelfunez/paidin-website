import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import DemoVideoSection from "@/components/DemoVideoSection";
import BitcoinEcosystemSection from "@/components/BitcoinEcosystemSection";
import BitcoinPartnersSection from "@/components/BitcoinPartnersSection";
import { motion } from "framer-motion";
import { Bitcoin } from "lucide-react";

const quotes = [
  "Bitcoin is a swarm of cyber hornets serving the goddess of wisdom, feeding on the fire of truth, exponentially growing ever smarter, faster, and stronger behind a wall of encrypted energy. - Michael Saylor",
  "The root problem with conventional currency is all the trust that's required to make it work. - Satoshi Nakamoto",
  "Running a business that accepts Bitcoin is like having a bank account that the whole world can pay into. - Andreas Antonopoulos",
  "Bitcoin will do to banks what email did to the postal industry. - Hal Finney",
];

function BitcoinTicker() {
  return (
    <section className="bg-bitcoin text-white py-4 overflow-hidden">
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
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <BitcoinTicker />
      <Features />
      <DemoVideoSection />
      <BitcoinEcosystemSection />
      <Testimonials />
      <BitcoinPartnersSection />
    </>
  );
}
