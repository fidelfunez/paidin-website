import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
  delay?: number;
}

export default function AnimatedIcon({
  icon: Icon,
  className = "",
  hoverScale = 1.1,
  hoverRotate = 0,
  delay = 0,
}: AnimatedIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { duration: 0.3 },
      }}
      className={`inline-flex ${className}`}
    >
      <Icon />
    </motion.div>
  );
}