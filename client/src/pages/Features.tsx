import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Bitcoin, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  ArrowRight,
  Calculator,
  Receipt,
  Grid3x3,
  CreditCard,
  FileText,
  Settings,
  Lock,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Building2,
  Layers,
  Sparkles,
  BookOpen,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Hash characters for the scrambling effect
const hashChars = "0123456789abcdef";

// Component for hash-to-text animation
function HashToText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const generateScrambled = () =>
    text
      .split("")
      .map((char) => {
        if (!/[A-Za-z0-9]/.test(char)) return char;
        return hashChars[Math.floor(Math.random() * hashChars.length)];
      })
      .join("");

  const [displayText, setDisplayText] = useState(() => generateScrambled());
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isInView || hasStarted) return;

    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      let currentIndex = 0;
      const iterations = 15;
      let iteration = 0;

      const interval = setInterval(() => {
        if (iteration < iterations) {
          const scrambled = generateScrambled();
          setDisplayText(scrambled.length === text.length ? scrambled : text);
          iteration++;
        } else {
          if (currentIndex < text.length) {
            const revealed = text.slice(0, currentIndex + 1);
            const remainingChars = text.slice(currentIndex + 1);
            const remaining = remainingChars
              .split("")
              .map((char) => {
                if (char === " ") return " ";
                return hashChars[Math.floor(Math.random() * hashChars.length)];
              })
              .join("");
            const finalText = revealed + remaining;
            setDisplayText(finalText.length === text.length ? finalText : text);
            currentIndex++;
          } else {
            setDisplayText(text);
            clearInterval(interval);
          }
        }
      }, 45);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [isInView, delay, text, hasStarted]);

  return <span ref={ref} className={className}>{displayText}</span>;
}

const mainFeatures = [
  {
    id: "payroll",
    number: "01",
    title: "Payroll",
    subtitle: "Pay your team in Bitcoin",
    description: "Automated, instant, secure. Set up recurring payments and never worry about delays again.",
    image: "/website-photos/features-payroll.webp",
    bullets: [
      "Instant global payments",
      "Multi-sig security",
      "Auto tax withholding",
      "Automated recurring payments",
      "Multi-currency support",
      "Employee self-service portal"
    ],
    layout: "left" // content left, image right
  },
  {
    id: "accounting",
    number: "02",
    title: "Accounting",
    subtitle: "Complete financial accounting",
    description: "Enterprise-grade accounting infrastructure built for Bitcoin. Track, reconcile, and manage your financial operations with precision.",
    image: "/website-photos/features-accounting.webp",
    bullets: [
      "Real-time transaction tracking",
      "Automatic categorization",
      "Complete financial reconciliation",
      "Export to accounting software",
      "Double-entry bookkeeping",
      "Financial reporting & analytics"
    ],
    layout: "right" // image left, content right
  },
  {
    id: "compliance",
    number: "03",
    title: "Compliance",
    subtitle: "Automated compliance US & Canada",
    description: "Regulatory compliance and reporting for US and Canadian operations. Automated, accurate, always up-to-date.",
    image: "/website-photos/features-compliance.webp",
    bullets: [
      "Automated tax reporting",
      "Audit-ready records",
      "Regulatory compliance",
      "Multi-jurisdiction support",
      "KYC/AML integration",
      "Compliance dashboard"
    ],
    layout: "left"
  },
  {
    id: "tax",
    number: "04",
    title: "Tax & Reporting",
    subtitle: "Automated tax calculation",
    description: "Precise tax calculations and comprehensive reporting. Generate compliance-ready documents with one click.",
    image: "/website-photos/features-taxes.webp",
    bullets: [
      "Precise tax calculations",
      "Compliance-ready documents",
      "Comprehensive reporting",
      "Multi-jurisdiction tax support",
      "Automated filing reminders",
      "Tax optimization insights"
    ],
    layout: "right"
  },
  {
    id: "invoicing",
    number: "05",
    title: "Invoicing",
    subtitle: "Professional invoices",
    description: "Create, send, and track Bitcoin invoices. Streamlined billing in Bitcoin with automated follow-ups.",
    image: "/website-photos/features-invoicing.webp",
    bullets: [
      "Create & send invoices",
      "Track payment status",
      "Automated follow-ups",
      "Customizable templates",
      "Multi-currency invoicing",
      "Payment reminders"
    ],
    layout: "left"
  },
];

const additionalFeatures = [
  {
    icon: CreditCard,
    title: "Expense Management",
    description: "Track and manage business expenses with automatic categorization and approval workflows.",
    color: "from-orange-400/20 to-orange-500/20"
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description: "Comprehensive financial reports and analytics. Real-time insights into your business operations.",
    color: "from-bitcoin/20 to-orange-500/20"
  },
  {
    icon: Settings,
    title: "API & Integrations",
    description: "Connect with your existing tools. RESTful API and webhooks for seamless integrations.",
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    icon: Lock,
    title: "Multi-Signature Wallets",
    description: "Enterprise-grade security with multi-sig wallets. Your keys, your Bitcoin, always.",
    color: "from-bitcoin/20 to-orange-600/20"
  },
  {
    icon: BookOpen,
    title: "Learning Center",
    description: "Comprehensive Bitcoin education resources. Help your team learn and understand Bitcoin at their own pace.",
    color: "from-orange-400/20 to-orange-600/20"
  },
  {
    icon: MessageSquare,
    title: "Internal Messaging",
    description: "Direct communication between admins, managers, and team members. Built-in messaging for seamless collaboration.",
    color: "from-bitcoin/20 to-orange-400/20"
  },
  {
    icon: Clock,
    title: "Real-Time Sync",
    description: "All transactions sync in real-time. Always up-to-date, always accurate.",
    color: "from-orange-400/20 to-orange-600/20"
  },
  {
    icon: DollarSign,
    title: "Multi-Currency Support",
    description: "Support for multiple currencies with automatic conversion and reporting.",
    color: "from-bitcoin/20 to-orange-400/20"
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant settlements. No waiting days for payments to clear.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Non-custodial architecture. Your keys, your Bitcoin, always.",
  },
  {
    icon: Globe,
    title: "Global by Default",
    description: "Borderless operations. Pay anyone, anywhere, instantly.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description: "Enterprise-grade infrastructure that grows with your business.",
  },
];

export default function Features() {
  return (
    <div className="relative">
      {/* Hero Section - Dark with Hash Animation */}
      <section className="relative overflow-hidden bg-[#050a14] min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(70,130,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(70,130,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "120px 120px",
              mixBlendMode: "screen",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(120,170,255,0.18) 1px, transparent 1px)
              `,
              backgroundSize: "160px 160px",
              mixBlendMode: "screen",
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-0 w-96 h-96 bg-bitcoin/25 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-0 w-96 h-96 bg-orange-500/25 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 w-full z-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-6 px-6 py-2 rounded-full border border-white/15 bg-white/5 text-white/60 text-xs uppercase tracking-[0.35em]"
            >
              <Grid3x3 className="h-4 w-4 text-bitcoin" />
              Features
              <span className="text-white/20">│</span>
              Everything You Need
            </motion.div>

            <div className="relative inline-block mb-10">
              <span className="absolute -inset-x-12 -top-10 text-[5rem] sm:text-[5.5rem] lg:text-[7.5rem] font-black uppercase tracking-[0.4em] text-white/8 blur-[3px] pointer-events-none select-none">
                FEATURES
              </span>
              <h1 className="relative text-[2.9rem] sm:text-[3.5rem] lg:text-[5.2rem] font-black text-white leading-[1.05] tracking-tight max-w-6xl mx-auto px-4">
                <span className="block text-[3.4rem] sm:text-[4.2rem] lg:text-[6rem] xl:text-[6.6rem] leading-[1.05] whitespace-nowrap">
                  <HashToText
                    text="The complete platform"
                    delay={0.2}
                  />
                </span>
                <span className="block text-[3.4rem] sm:text-[4.2rem] lg:text-[6rem] xl:text-[6.6rem] leading-[1.05] whitespace-nowrap mt-2">
                  <HashToText
                    text="for Bitcoin business"
                    delay={0.6}
                  />
                </span>
              </h1>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 -bottom-4 h-px w-[70%] -translate-x-1/2 origin-left bg-gradient-to-r from-transparent via-bitcoin to-transparent"
              />
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light">
              Everything you need to run your business operations entirely on Bitcoin. No compromises, no shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-bitcoin/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-bitcoin/30"></div>
              <Layers className="h-5 w-5 text-bitcoin" />
              <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">Platform Overview</span>
              <div className="h-px w-12 bg-bitcoin/30"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight max-w-4xl">
              One platform,{" "}
              <span className="text-bitcoin">infinite possibilities</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/70 max-w-3xl leading-relaxed font-light">
              A unified dashboard that brings all your business operations together. See everything at a glance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img
                src="/website-photos/features-banner-image-hq.webp"
                alt="PaidIn Dashboard - Complete Business Operations Platform"
                className="w-full h-full object-cover"
                style={{ 
                  transform: 'scale(1.1) translateX(1%) translateY(-2%)',
                  transformOrigin: 'center center',
                  objectPosition: '50% center',
                  imageRendering: '-webkit-optimize-contrast'
                }}
                loading="eager"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-bitcoin/20 to-orange-500/20 rounded-3xl blur-2xl -z-10 opacity-50"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Features - Detailed */}
      {mainFeatures.map((feature, index) => {
        const isLeft = feature.layout === "left";
        return (
          <section key={feature.id} className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-bitcoin/20 rounded-full blur-[120px]"
              />
              <motion.div
                animate={{
                  x: [0, -80, 0],
                  y: [0, -60, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[100px]"
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full z-10">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isLeft ? '' : 'lg:grid-flow-dense'}`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className={isLeft ? '' : 'lg:col-start-2'}
                >
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className="text-6xl lg:text-8xl font-black text-orange-400/15 leading-none">{feature.number}</span>
                    <div className="h-px w-16 bg-orange-400/30"></div>
                    <span className="text-bitcoin text-sm font-bold tracking-[0.2em] uppercase">{feature.title}</span>
                  </div>
                  
                  <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 tracking-tight">
                    {feature.subtitle.split(' ').map((word, i) => (
                      <span key={i}>
                        {word === 'Bitcoin' || word.includes('Bitcoin') ? (
                          <span className="text-bitcoin">{word}</span>
                        ) : i === 0 ? (
                          <span>{word}</span>
                        ) : (
                          <span className="text-white/60">{word}</span>
                        )}
                        {i < feature.subtitle.split(' ').length - 1 && ' '}
                      </span>
                    ))}
                  </h2>
                  
                  <p className="text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light">
                    {feature.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <motion.div
                        key={bullet}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + bulletIndex * 0.05 }}
                        className="flex items-center gap-3 text-lg text-white/70"
                      >
                        <CheckCircle2 className="h-5 w-5 text-bitcoin flex-shrink-0" />
                        <span>{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 60 : -60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className={isLeft ? '' : 'lg:col-start-1 lg:row-start-1'}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-bitcoin/10 to-orange-500/10 backdrop-blur-sm shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={feature.image}
                        alt={`${feature.title} Dashboard`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Features Grid */}
      <section className="relative overflow-hidden bg-[#050a14] min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `linear-gradient(rgba(70,130,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(70,130,255,0.22) 1px, transparent 1px)`,
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full z-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-bitcoin/30"></div>
              <Sparkles className="h-5 w-5 text-bitcoin" />
              <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">And More</span>
              <div className="h-px w-12 bg-bitcoin/30"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight max-w-4xl mx-auto">
              Everything else you{" "}
              <span className="text-bitcoin">need</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light">
              Additional features that make PaidIn the complete platform for Bitcoin business operations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/5 px-8 py-8 backdrop-blur-[2px] transition-all duration-500 hover:border-bitcoin/40 hover:bg-white/8"
                >
                  <div className="relative flex flex-col gap-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-[22px] border border-white/15 bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-bitcoin leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
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
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-32 pb-48 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 lg:mb-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-xs text-gray-400 font-light tracking-[0.4em] uppercase">
                Why PaidIn
              </span>
              <div className="h-px flex-1 max-w-24 bg-gray-300"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.95] tracking-tight max-w-5xl">
              Built for{" "}
              <span className="text-bitcoin">enterprise</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-bitcoin to-orange-500 mb-6 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-black min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-bitcoin/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight max-w-5xl mx-auto">
              Ready to get{" "}
              <span className="text-bitcoin">started?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Join forward-thinking companies running their operations entirely on Bitcoin.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-bitcoin to-orange-500 hover:from-orange-500 hover:to-bitcoin text-white font-black px-12 py-6 text-lg lg:text-xl h-auto shadow-2xl hover:shadow-bitcoin/40 hover:scale-105 transition-all duration-300 rounded-full"
              onClick={() => window.location.href = 'https://app.paidin.io'}
            >
              Start Building on Bitcoin
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
