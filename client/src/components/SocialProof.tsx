import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "We went from spending weeks on Bitcoin payroll headaches to clicking 'Pay' and calling it a day. Game changer.",
    author: "Sarah Chen",
    role: "CEO",
    company: "BitFlow Technologies",
    rating: 5,
  },
  {
    quote: "The compliance features alone saved us from hiring two accountants. Everything's automated and audit-ready.",
    author: "Marcus Rodriguez",
    role: "CFO",
    company: "Lightning Labs",
    rating: 5,
  },
  {
    quote: "Finally, a platform that doesn't make me feel like I need a computer science degree. It just works.",
    author: "Elena Ivanova",
    role: "Head of Operations",
    company: "Satoshi Ventures",
    rating: 5,
  },
];

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
      {/* Top Transition Gradient - Midnight Blue to White */}
      <div className="absolute top-0 left-0 right-0 h-56 lg:h-64 bg-gradient-to-b from-[#050a14] via-[#050a14]/80 via-[#050a14]/40 via-gray-900/20 via-gray-100/30 to-white pointer-events-none z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-0 w-96 h-96 bg-bitcoin/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-56 pb-40 w-full">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-8"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight tracking-tight">
            What our{" "}
            <span className="text-bitcoin">early users</span> are saying
          </h2>
        </motion.div>

        {/* Compact Carousel */}
        <div className="relative">
          <div className="relative h-[500px] overflow-hidden">
            {/* Animated Quote Content */}
            <div className="max-w-4xl mx-auto flex items-center justify-center px-8 h-full">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  index === currentTestimonial && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index === currentTestimonial ? 0 : index < currentTestimonial ? -100 : 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: index < currentTestimonial ? 100 : -100 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-1 text-center"
                    >
                      {/* Large Quote Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                      >
                        <Quote className="h-20 w-20 text-bitcoin/20 mx-auto" />
                      </motion.div>

                      {/* Quote Text - Large Typography */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl lg:text-5xl font-light text-gray-900 leading-relaxed mb-12 italic"
                      >
                        "{testimonial.quote}"
                      </motion.p>

                      {/* Author - Minimal */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center justify-center gap-6"
                      >
                        <div className="text-left">
                          <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                          <div className="text-gray-500 text-sm">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-bitcoin fill-bitcoin" />
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`transition-all duration-300 ${
                index === currentTestimonial
                  ? "w-8 h-1.5 bg-bitcoin rounded-full"
                  : "w-1.5 h-1.5 bg-gray-300 rounded-full hover:bg-bitcoin/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Logo Cloud - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gray-300"></div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
              Trusted by Bitcoin-forward companies
            </p>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-30">
            {["🏢 Company A", "🏢 Company B", "🏢 Company C", "🏢 Company D", "🏢 Company E"].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 0.5 }}
                className="text-xl font-bold text-gray-400"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
      
      {/* Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-50/30 via-blue-50/30 via-white/90 to-transparent pointer-events-none z-10"></div>
    </section>
  );
}
