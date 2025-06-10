import { Bitcoin, TrendingUp, Clock, Shield, FileText, ArrowLeftRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Bitcoin,
    title: "Real Bitcoin Payroll",
    description: "Pay your team directly in Bitcoin with automated salary calculations and real-time BTC/USD conversion rates.",
  },
  {
    icon: TrendingUp,
    title: "Expense Tracking",
    description: "Track team expenses in Bitcoin and fiat currencies with automated categorization and reporting.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Built-in time tracking and time-off management integrated with your Bitcoin payroll system.",
  },
  {
    icon: Shield,
    title: "Benefits Management",
    description: "Manage health insurance, retirement plans, and other benefits alongside Bitcoin compensation.",
  },
  {
    icon: FileText,
    title: "Tax & Compliance",
    description: "Automated tax calculations and compliance reporting for Bitcoin payments in your jurisdiction.",
  },
  {
    icon: ArrowLeftRight,
    title: "Flexible Withdrawals",
    description: "Employees can withdraw to their Bitcoin wallet or traditional bank account with instant conversion.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need for{" "}
            <span className="gradient-text">Bitcoin payroll</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From salary payments to expense tracking, PaidIn provides all the tools modern teams need to embrace Bitcoin as their primary currency.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mb-6">
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
  );
}
