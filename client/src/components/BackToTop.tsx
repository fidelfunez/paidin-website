import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Back to top"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-bitcoin/40 to-orange-400/40 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Main button */}
            <div className="relative bg-gradient-to-br from-bitcoin to-orange-500 text-white rounded-full p-3.5 shadow-xl hover:shadow-2xl hover:shadow-bitcoin/40 transition-all duration-300 border border-white/10 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
              </motion.div>
            </div>

            {/* Subtle pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-bitcoin/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

