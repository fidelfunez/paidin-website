import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  hoverScale?: number;
  tapScale?: number;
  glowEffect?: boolean;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, hoverScale = 1.02, tapScale = 0.98, glowEffect = false, className = "", ...props }, ref) => {
    return (
      <motion.div
        whileHover={{
          scale: hoverScale,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: tapScale,
          transition: { duration: 0.1 },
        }}
        className={glowEffect ? "hover:drop-shadow-lg" : ""}
      >
        <Button
          ref={ref}
          className={`transition-all duration-300 ${className} ${
            glowEffect ? "hover:shadow-xl hover:shadow-bitcoin/25" : ""
          }`}
          {...props}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.span>
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;