import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top Transition Gradient - Seamless from AccessibilitySection (White → White) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none z-10"></div>
      {/* Diagonal Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/40 to-amber-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-cyan-100/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-100/30 to-pink-100/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-40">
        
        {/* Section 1: Payroll - Magazine Style Split */}
        <div className="relative mb-40">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[600px]">
            {/* Left: Large Typography */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Large Number Badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-6xl lg:text-8xl font-black text-bitcoin/10 leading-none">01</span>
                <div className="h-px w-16 bg-bitcoin/30"></div>
                <span className="text-sm font-bold text-bitcoin uppercase tracking-widest">Payroll</span>
            </div>
              
              <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                Pay your team
                <br />
                <span className="text-bitcoin">in Bitcoin,</span>
                <br />
                <span className="text-gray-400">instantly</span>
            </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-lg">
                Set up automated Bitcoin payroll in minutes. Pay employees globally with zero friction, zero bank delays, and complete transparency.
              </p>

              {/* Features - Minimal List */}
              <div className="space-y-3 pt-8">
              {[
                "Automated recurring payments",
                "Multi-signature security",
                "Instant global transfers",
                "Tax withholding automation",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 text-lg text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-bitcoin rounded-full"></div>
                    <span>{feature}</span>
                  </motion.div>
              ))}
            </div>
          </motion.div>

            {/* Right: Visual with Diagonal Flow */}
          <motion.div
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative"
          >
              {/* Diagonal Decorative Element */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-bitcoin/20 to-orange-400/20 rounded-2xl transform rotate-12 blur-xl"></div>
              
              {/* Main Visual Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-orange-50/80 to-amber-50/60 aspect-[4/3] backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-bitcoin/20 to-orange-400/20 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-6">
                      <span className="text-6xl">💰</span>
                    </div>
                    <p className="text-gray-500 font-medium text-lg">Payroll Dashboard</p>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-bitcoin/20 to-orange-400/20 rounded-3xl blur-3xl -z-10 opacity-40"></div>
            </motion.div>
            </div>
        </div>

        {/* Section 2: Expense Management - Reverse Layout */}
        <div className="relative mb-40">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[600px]">
            {/* Left: Visual (Order 2 on mobile) */}
          <motion.div
              initial={{ opacity: 0, x: -50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 order-2 lg:order-1 relative"
          >
              {/* Diagonal Decorative Element */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl transform -rotate-12 blur-xl"></div>
              
              {/* Main Visual Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-blue-50/80 to-cyan-50/60 aspect-[4/3] backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl shadow-2xl flex items-center justify-center transform -rotate-6">
                      <span className="text-6xl">📊</span>
                    </div>
                    <p className="text-gray-500 font-medium text-lg">Expense Management</p>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-3xl -z-10 opacity-40"></div>
          </motion.div>

            {/* Right: Large Typography (Order 1 on mobile) */}
          <motion.div
              initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 space-y-8 text-right lg:text-left"
          >
              {/* Large Number Badge */}
              <div className="inline-flex items-center gap-3 mb-6 lg:justify-start justify-end">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Expenses</span>
                <div className="h-px w-16 bg-blue-600/30"></div>
                <span className="text-6xl lg:text-8xl font-black text-blue-600/10 leading-none">02</span>
            </div>
              
              <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                Track every
                <br />
                <span className="text-blue-600">satoshi,</span>
                <br />
                <span className="text-gray-400">effortlessly</span>
            </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-lg ml-auto lg:ml-0">
                Real-time expense tracking with automatic categorization. Generate reports, export for accounting, and maintain complete visibility.
              </p>

              {/* Features - Minimal List */}
              <div className="space-y-3 pt-8">
              {[
                "Real-time transaction tracking",
                "Automatic categorization",
                "Multi-currency support",
                "Export to accounting software",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 text-lg text-gray-700 lg:justify-start justify-end"
                  >
                    <span>{feature}</span>
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>

        {/* Section 3: Compliance - Centered Focus */}
        <div className="relative">
          <div className="max-w-5xl mx-auto text-center">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >
              {/* Large Number Badge - Centered */}
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-20 bg-purple-600/30"></div>
                <span className="text-6xl lg:text-8xl font-black text-purple-600/10 leading-none">03</span>
                <div className="h-px w-20 bg-purple-600/30"></div>
              </div>
              
              <div>
                <span className="text-sm font-bold text-purple-600 uppercase tracking-widest">Compliance</span>
            </div>
              
              <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              Stay compliant,
                <br />
                <span className="text-purple-600">automatically</span>
            </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
                Automated tax calculations, regulatory reporting, and audit trails. PaidIn handles the complexity so you can focus on building your Bitcoin business.
            </p>
            
              {/* Visual - Centered */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mt-16 max-w-2xl mx-auto"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-purple-50/80 to-pink-50/60 aspect-[4/3] backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-12">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl shadow-2xl flex items-center justify-center">
                        <span className="text-6xl">📋</span>
                      </div>
                      <p className="text-gray-500 font-medium text-lg">Compliance Dashboard</p>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl -z-10 opacity-40"></div>
              </motion.div>

              {/* Features - Centered Grid */}
              <div className="grid md:grid-cols-2 gap-6 pt-12 max-w-2xl mx-auto">
              {[
                "Automated tax reporting",
                "Audit-ready records",
                "Regulatory compliance",
                "Multi-jurisdiction support",
                ].map((feature, index) => (
          <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-center gap-3 text-lg text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </div>
        </div>

      </div>
      
      {/* Bottom Transition Gradient - Seamless to SocialProof (White → White) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none z-10"></div>
    </section>
  );
}
