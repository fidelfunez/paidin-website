import { motion } from "framer-motion";

export default function BtcQuotesSeparator() {
  const quotes = [
    {
      text: "If you don't believe me or don't get it, I don't have time to try to convince you, sorry.",
      author: "Satoshi Nakamoto"
    },
    {
      text: "Running Bitcoin is the most fun you can have with your computer.",
      author: "Hal Finney"
    },
    {
      text: "Bitcoin is the first monetary network that is completely digital, completely global, and completely decentralized.",
      author: "Michael Saylor"
    },
    {
      text: "Bitcoin is not just a currency, it's a new form of money that is native to the internet.",
      author: "Andreas Antonopoulos"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-bitcoin overflow-hidden"
    >
      {/* Bottom Transition - Bridge to Features (Orange → Black) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-gray-900/30 to-black pointer-events-none z-0"></div>
      
      {/* Quotes Container - Above transition */}
      <div className="relative z-20 h-14 flex items-center overflow-hidden">
        <div className="flex items-center space-x-10 animate-scroll">
          {/* Render quotes twice for seamless loop */}
          {[...quotes, ...quotes].map((quote, index) => (
            <div key={index} className="flex items-center space-x-2.5 whitespace-nowrap">
              <img 
                src="/app - graphic designs/Bitcoin - logo - yellow.webp" 
                alt="Bitcoin" 
                className="h-4 w-4 flex-shrink-0"
              />
              <span 
                className="text-white text-sm font-semibold"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)'
                }}
              >
                "{quote.text}" — {quote.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
