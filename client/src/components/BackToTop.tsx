import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverWhite, setIsOverWhite] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const checkBackgroundColor = () => {
      if (!buttonRef.current) return;

      // Get button position
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Get element at button position
      const elementBelow = document.elementFromPoint(centerX, centerY);
      if (!elementBelow) return;

      // Walk up the DOM tree to find an element with a background color
      let currentElement: Element | null = elementBelow;
      let bgColor: string | null = null;

      while (currentElement && currentElement !== document.body) {
        const styles = window.getComputedStyle(currentElement);
        const backgroundColor = styles.backgroundColor;
        
        // Check if background is not transparent
        if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
          bgColor = backgroundColor;
          break;
        }
        currentElement = currentElement.parentElement;
      }

      // Parse RGB and determine if it's a light/white background
      if (bgColor) {
        const rgbMatch = bgColor.match(/\d+/g);
        if (rgbMatch && rgbMatch.length >= 3) {
          const r = parseInt(rgbMatch[0]);
          const g = parseInt(rgbMatch[1]);
          const b = parseInt(rgbMatch[2]);
          
          // Calculate luminance (perceived brightness)
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          
          // If luminance is high (light background), set isOverWhite to true
          setIsOverWhite(luminance > 0.7);
        }
      }
    };

    const handleScroll = () => {
      toggleVisibility();
      
      // Check background after visibility is updated
      requestAnimationFrame(() => {
        setTimeout(() => {
          // Only check if button is now visible
          if (window.pageYOffset > 400) {
            checkBackgroundColor();
          }
        }, 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    // Also check on resize
    window.addEventListener("resize", checkBackgroundColor);
    
    // Initial check
    toggleVisibility();
    if (window.pageYOffset > 400) {
      setTimeout(checkBackgroundColor, 100);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkBackgroundColor);
    };
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
          ref={buttonRef}
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
            {/* Glow effect - conditional based on background */}
            <div className={`absolute inset-0 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 ${
              isOverWhite 
                ? 'bg-gradient-to-r from-gray-900/30 to-gray-700/30' 
                : 'bg-gradient-to-r from-bitcoin/40 to-orange-400/40'
            }`}></div>
            
            {/* Main button - conditional styling */}
            <div className={`relative rounded-full p-3.5 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm ${
              isOverWhite
                ? 'bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400 hover:shadow-gray-900/20'
                : 'bg-gradient-to-br from-bitcoin to-orange-500 text-white border border-white/10 hover:shadow-bitcoin/40'
            }`}>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {isOverWhite ? (
                  <ChevronUp className="h-6 w-6 text-gray-900" strokeWidth={3} stroke="#111827" fill="none" />
                ) : (
                  <ChevronUp className="h-6 w-6 text-white" strokeWidth={2.5} stroke="currentColor" fill="none" />
                )}
              </motion.div>
            </div>

            {/* Subtle pulse ring - conditional */}
            <motion.div
              className={`absolute inset-0 rounded-full border-2 ${
                isOverWhite ? 'border-gray-400/30' : 'border-bitcoin/30'
              }`}
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

