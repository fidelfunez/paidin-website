import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bitcoin,
  TrendingUp,
  Clock,
  Shield,
  FileText,
  ArrowLeftRight,
  Users,
  BarChart3,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const mainFeatures = [
  {
    icon: Bitcoin,
    title: "Real Bitcoin Payroll",
    description: "Pay your team directly in Bitcoin with automated salary calculations and real-time BTC/USD conversion rates.",
    benefits: [
      "Automated Bitcoin payments",
      "Real-time exchange rates",
      "Multi-signature security",
      "Instant global transfers",
    ],
  },
  {
    icon: TrendingUp,
    title: "Advanced Expense Tracking",
    description: "Comprehensive expense management with Bitcoin and fiat currency support.",
    benefits: [
      "Receipt scanning & OCR",
      "Automated categorization",
      "Multi-currency support",
      "Real-time reporting",
    ],
  },
  {
    icon: Clock,
    title: "Time & Attendance",
    description: "Integrated time tracking with seamless payroll integration.",
    benefits: [
      "Clock in/out tracking",
      "PTO management",
      "Overtime calculations",
      "Mobile time tracking",
    ],
  },
  {
    icon: Shield,
    title: "Benefits Administration",
    description: "Manage comprehensive benefits packages alongside Bitcoin compensation.",
    benefits: [
      "Health insurance",
      "Retirement plans",
      "Stock options",
      "Custom benefits",
    ],
  },
  {
    icon: FileText,
    title: "Tax & Compliance",
    description: "Automated tax calculations and compliance reporting for Bitcoin payments.",
    benefits: [
      "Tax form generation",
      "Compliance tracking",
      "Audit trails",
      "Regulatory updates",
    ],
  },
  {
    icon: ArrowLeftRight,
    title: "Flexible Withdrawals",
    description: "Multiple withdrawal options for maximum employee flexibility.",
    benefits: [
      "Bitcoin wallet withdrawals",
      "Bank account transfers",
      "Instant conversions",
      "Fee transparency",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Team Management",
    description: "Role-based access control and team hierarchy management.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive dashboards and exportable reports.",
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "Multi-currency and multi-timezone support for distributed teams.",
  },
];

export default function Features() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Powerful <span className="gradient-text">Bitcoin payroll</span> features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to transition your team to Bitcoin compensation, from basic payroll to advanced compliance and reporting.
            </p>
            <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow">
              Start Free Trial
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <AnimatedSection
                  animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <div className="w-16 h-16 bg-bitcoin/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-bitcoin" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center">
                        <div className="w-2 h-2 bg-bitcoin rounded-full mr-3"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                <AnimatedSection
                  animation={index % 2 === 0 ? "slideInRight" : "slideInLeft"}
                  delay={0.2}
                  className={index % 2 === 1 ? "lg:col-start-1" : ""}
                >
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index % 2 === 0 ? "1551434678-e076c223a692" : "1640340434855-6084b1f4901c"
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
                    alt={`${feature.title} illustration`}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              And so much more
            </h2>
            <p className="text-lg text-gray-600">
              Additional features to power your Bitcoin-native business
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-6 w-6 text-bitcoin" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to experience the future of payroll?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of companies already using PaidIn for their Bitcoin payroll needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                Schedule Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
