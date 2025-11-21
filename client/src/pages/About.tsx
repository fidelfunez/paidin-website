import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Bitcoin, 
  Target, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  Lock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Heart
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

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Non-custodial by design. Your keys, your Bitcoin, always.",
    color: "from-bitcoin/30 to-orange-500/30",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for instant settlements, real-time operations.",
    color: "from-orange-500/30 to-amber-500/30",
  },
  {
    icon: Globe,
    title: "Global by Default",
    description: "Borderless operations. One platform, worldwide reach.",
    color: "from-blue-500/30 to-purple-500/30",
  },
  {
    icon: Target,
    title: "Enterprise Grade",
    description: "Built for scale. Trusted by forward-thinking companies.",
    color: "from-purple-500/30 to-pink-500/30",
  },
];

const milestones = [
  {
    year: "2024",
    title: "The Vision",
    description: "Born from frustration with traditional payment rails. We saw the future: Bitcoin-native business operations.",
    icon: Sparkles,
  },
  {
    year: "2025",
    title: "The Platform",
    description: "Launched the first comprehensive Bitcoin business platform. Payroll, accounting, compliance—all in one.",
    icon: Building2,
  },
  {
    year: "Today",
    title: "The Movement",
    description: "Powering Bitcoin-forward companies worldwide. Building the infrastructure for the next economy.",
    icon: TrendingUp,
  },
];

const stats = [
  { value: "100%", label: "Non-Custodial", icon: Lock },
  { value: "<4s", label: "Average Approval", icon: Zap },
  { value: "99.995%", label: "Uptime", icon: Shield },
  { value: "Global", label: "Coverage", icon: Globe },
];

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    bio: "Former fintech executive. Bitcoin maximalist since 2016. Building the future of business operations.",
    image: "/website-photos/team-alex.webp",
  },
  {
    name: "Sarah Martinez",
    role: "Co-Founder & CTO",
    bio: "Security engineer with 10+ years in enterprise infrastructure. Non-custodial by design.",
    image: "/website-photos/team-sarah.webp",
  },
  {
    name: "James Park",
    role: "Head of Product",
    bio: "Product designer turned builder. Obsessed with making complex systems feel simple.",
    image: "/website-photos/team-james.webp",
  },
  {
    name: "Maya Patel",
    role: "Head of Engineering",
    bio: "Full-stack engineer. Built payment systems at scale. Now building for Bitcoin.",
    image: "/website-photos/team-maya.webp",
  },
  {
    name: "David Kim",
    role: "Head of Security",
    bio: "Cryptography expert. Former security researcher. Your keys, your Bitcoin, always.",
    image: "/website-photos/team-david.webp",
  },
  {
    name: "Emma Wilson",
    role: "Head of Operations",
    bio: "Operations wizard. Makes the impossible happen. Keeps everything running smoothly.",
    image: "/website-photos/team-emma.webp",
  },
];

export default function About() {
  return (
    <div className="relative">
      {/* Hero Section - Editorial/Magazine Style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white min-h-screen flex items-center">
        {/* Background Video */}
        <video
          src="/website-videos/about-page-hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/80 pointer-events-none z-0"></div>
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Floating gradient orbs - Very subtle */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 -left-4 w-[600px] h-[600px] bg-gradient-to-br from-bitcoin/8 to-orange-400/6 rounded-full blur-3xl"
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
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-purple-400/5 to-pink-300/4 rounded-full blur-3xl"
          />
          
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle, #f7931a 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-32 pb-40 w-full z-10">
          {/* Editorial Layout - Split */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Title Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Editorial Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px w-12 bg-gray-300"></div>
                <span className="text-xs text-gray-400 font-light tracking-[0.4em] uppercase">
                  About PaidIn
                </span>
                <div className="h-px flex-1 max-w-24 bg-gray-300"></div>
              </motion.div>

              {/* Large Editorial Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.95] tracking-tight">
                Building the{" "}
                <span className="text-bitcoin">future</span> of{" "}
                <span className="text-gray-400">Business</span> on{" "}
                <span className="text-bitcoin">Bitcoin</span>
              </h1>

              {/* Elegant Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-32 bg-gradient-to-r from-bitcoin via-orange-400/50 to-transparent origin-left mt-8"
              />
            </motion.div>

            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 aspect-[4/4.3] bg-gray-100">
                <img
                  src="/website-photos/about-page-hero-image.webp"
                  alt="PaidIn Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Editorial Style */}
      <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 -left-4 w-[600px] h-[600px] bg-gradient-to-br from-bitcoin/45 to-orange-400/40 rounded-full blur-3xl"
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
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-purple-400/25 to-pink-300/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-32 pb-48 w-full z-10">
          {/* Mission Content - Magazine Layout */}
          <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 lg:gap-20 xl:gap-28 items-center mb-32">
            {/* Left: Large Editorial Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="text-[6rem] sm:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-serif text-gray-900/8 leading-none -mb-6 -ml-2 lg:-ml-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                "
              </div>
              <div className="pl-4 lg:pl-8 space-y-4">
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.2] tracking-[-0.01em]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 300 }}>
                  Traditional payment rails are broken. They're slow, expensive, and exclude billions.
                </p>
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.2] tracking-[-0.01em]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 300 }}>
                  Bitcoin fixes this. We're building the platform that makes it accessible to every business.
                </p>
              </div>
            </motion.div>

            {/* Right: Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="h-px w-20 bg-gray-900 origin-left"></div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Our Mission
              </div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-light">
                To enable every business to operate entirely on Bitcoin. No compromises on security. No technical knowledge required. No custodial risks.
              </p>
            </motion.div>
          </div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Target className="h-5 w-5 text-bitcoin" />
              <span className="text-bitcoin text-sm font-bold tracking-[0.2em] uppercase">Our Vision</span>
              <div className="h-px w-12 bg-bitcoin/30"></div>
            </div>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-6">
              A world where Bitcoin is{" "} <br />
              <span className="text-bitcoin">The default</span>
            </h3>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              We envision a future where businesses choose Bitcoin not because it's novel, but because it's superior. Faster, cheaper, more secure, and truly global. That's the future we're building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Blueprint Style */}
      <section className="relative overflow-hidden bg-[#050a14] min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `linear-gradient(rgba(70,130,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(70,130,255,0.22) 1px, transparent 1px)`,
              backgroundSize: "120px 120px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(120,170,255,0.25) 1px, transparent 1px)`,
              backgroundSize: "160px 160px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 w-full z-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-6 px-6 py-2 rounded-full border border-white/15 bg-white/5 text-white/60 text-xs uppercase tracking-[0.35em]"
            >
              <Heart className="h-4 w-4 text-bitcoin" />
              Our Values
              <span className="text-white/20">│</span>
              What Drives Us
            </motion.div>

            <h2 className="text-[2.9rem] sm:text-[3.5rem] lg:text-[5.2rem] font-black text-white leading-[1.05] tracking-tight max-w-6xl mx-auto mb-6">
              Principles that{" "}
              <span className="text-bitcoin">guide us</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light">
              Every decision we make is rooted in these core values.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/5 px-8 py-8 backdrop-blur-[2px] transition-all duration-500 hover:border-bitcoin/40 hover:bg-white/8"
                >
                  <div className="relative flex flex-col gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-white/15 bg-gradient-to-br from-bitcoin to-orange-500 text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-bitcoin leading-tight">
                      {value.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section - Timeline Style */}
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
                Our Story
              </span>
              <div className="h-px flex-1 max-w-24 bg-gray-300"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.95] tracking-tight max-w-5xl">
              How we got{" "}
              <span className="text-bitcoin">here</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative mb-16 last:mb-0"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bitcoin to-orange-500 flex items-center justify-center shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-24 bg-gradient-to-b from-bitcoin/50 to-transparent mx-auto mt-4"></div>
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="inline-flex items-center gap-3 mb-3">
                        <span className="text-bitcoin text-sm font-bold tracking-[0.2em] uppercase">{milestone.year}</span>
                        <div className="h-px w-12 bg-bitcoin/30"></div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team Section - Editorial Style */}
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-32 pb-48 w-full z-10">
          {/* Editorial Title */}
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
                The Team
              </span>
              <div className="h-px flex-1 max-w-24 bg-gray-300"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.95] tracking-tight max-w-5xl">
              Meet the{" "}
              <span className="text-bitcoin">people</span> behind PaidIn
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mt-8 leading-relaxed font-light">
              A diverse team of builders, thinkers, and Bitcoin believers. We're here to make Bitcoin business operations accessible to everyone.
            </p>
          </motion.div>

          {/* Team Grid - Editorial Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-bitcoin/30 transition-all duration-500 hover:shadow-2xl">
                  {/* Photo Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-bitcoin/10 to-orange-500/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f7931a&color=fff&size=400&bold=true`;
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="mb-2">
                      <h3 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight mb-1">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-bitcoin/30"></div>
                        <span className="text-xs text-gray-500 font-medium tracking-[0.15em] uppercase">
                          {member.role}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-bitcoin/0 to-orange-500/0 group-hover:from-bitcoin/10 group-hover:to-orange-500/10 transition-all duration-500 rounded-bl-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-20 lg:mt-32"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Users className="h-5 w-5 text-bitcoin" />
              <span className="text-bitcoin text-sm font-bold tracking-[0.2em] uppercase">We're Hiring</span>
              <div className="h-px w-12 bg-bitcoin/30"></div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Want to join us?
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-light max-w-2xl mx-auto">
              We're always looking for talented people who share our vision. Check out our open positions.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-black px-8 py-5 text-base h-auto transition-all duration-300 rounded-full group"
              onClick={() => window.location.href = '/careers'}
            >
              View Open Positions
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Dark with Glow */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-bitcoin/30"></div>
              <TrendingUp className="h-5 w-5 text-bitcoin" />
              <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">By The Numbers</span>
              <div className="h-px w-12 bg-bitcoin/30"></div>
            </div>
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight max-w-6xl mx-auto">
              <span className="block text-white/70">Built for</span>
              <span className="block text-bitcoin">enterprise</span>
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-bitcoin to-orange-500 mb-6 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-5xl lg:text-6xl font-black text-white mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/60 font-light">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-20"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-bitcoin to-orange-500 hover:from-orange-500 hover:to-bitcoin text-white font-black px-10 py-6 text-lg h-auto shadow-2xl hover:shadow-bitcoin/40 hover:scale-105 transition-all duration-300 rounded-full"
              onClick={() => window.location.href = 'https://app.paidin.io'}
            >
              Join Us
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
