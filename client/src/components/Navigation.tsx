import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bitcoin } from "lucide-react";
import BtcPriceTicker from "./BtcPriceTicker";
import LanguageSwitcher from "./LanguageSwitcher";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Bitcoin className="h-8 w-8 text-bitcoin" />
            </motion.div>
            <motion.span 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              PaidIn
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-bitcoin"
                    : "text-gray-700 hover:text-bitcoin"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-l border-gray-200 pl-6">
              <BtcPriceTicker />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <AnimatedButton variant="ghost" className="text-bitcoin hover:text-bitcoin-dark">
              Login
            </AnimatedButton>
            <AnimatedButton className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow" glowEffect={true}>
              Get Started
            </AnimatedButton>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-bitcoin"
                        : "text-gray-700 hover:text-bitcoin"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button variant="ghost" className="text-bitcoin hover:text-bitcoin-dark justify-start">
                    Login
                  </Button>
                  <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white justify-start">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
