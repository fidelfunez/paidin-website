import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import AnimatedSection from "@/components/AnimatedSection";
import Pricing from "@/components/Pricing";

const faqs = [
  {
    question: "How does Bitcoin payroll work?",
    answer: "Employees set up Bitcoin wallets, you fund your PaidIn account, and we handle the rest - calculating salaries, converting currencies, and sending payments securely.",
  },
  {
    question: "What about tax compliance?",
    answer: "PaidIn automatically generates all necessary tax forms and reports. We handle the complexity of Bitcoin taxation so you don't have to.",
  },
  {
    question: "Can employees choose between Bitcoin and fiat?",
    answer: "Yes! Employees can choose to receive their salary in Bitcoin, convert to fiat automatically, or split between both options.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees for any plan. You only pay the monthly subscription and transaction fees, which are clearly outlined in your plan.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that fits your team size and needs. Start with a free trial on any plan.
            </p>
            <div className="inline-flex items-center space-x-2 bg-bitcoin/10 rounded-full px-6 py-3">
              <span className="text-bitcoin font-medium">💰 Save 20% with annual billing</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare all features
            </h2>
            <p className="text-lg text-gray-600">
              See exactly what's included in each plan
            </p>
          </AnimatedSection>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Bitcoin payroll processing", true, true, true],
                  ["Employee self-service portal", true, true, true],
                  ["Basic expense tracking", true, true, true],
                  ["Time tracking", true, true, true],
                  ["Email support", true, true, true],
                  ["Advanced expense tracking", false, true, true],
                  ["Benefits management", false, true, true],
                  ["Tax & compliance reporting", false, true, true],
                  ["Priority support", false, true, true],
                  ["Custom integrations", false, false, true],
                  ["Dedicated account manager", false, false, true],
                  ["SLA guarantees", false, false, true],
                  ["24/7 phone support", false, false, true],
                ].map(([feature, starter, pro, enterprise], index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      {starter ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {pro ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {enterprise ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about PaidIn pricing
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you choose the right plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
