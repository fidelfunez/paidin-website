import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, HelpCircle, Star, DollarSign } from "lucide-react";
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
      <section className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-bitcoin/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-bitcoin/20 shadow-lg">
              <DollarSign className="h-4 w-4 text-bitcoin mr-2" />
              <span className="text-sm font-medium text-gray-700">Transparent pricing, no hidden fees</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Simple, <span className="relative">
                <span className="text-bitcoin">transparent</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full opacity-60"></div>
              </span> pricing
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your team size and needs. Start with a free trial on any plan.
            </p>
            
            <div className="glass-card rounded-2xl px-8 py-4 inline-flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">%</span>
              </div>
              <span className="text-bitcoin font-semibold text-lg">Save 20% with annual billing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Feature Comparison */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Compare all <span className="text-bitcoin">features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-bitcoin/20">
                    <th className="text-left py-6 px-6 font-bold text-gray-900 text-lg">
                      Features
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-lg">
                      Starter
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-lg">
                      Pro
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-lg">
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
                    <tr key={index} className="hover:bg-bitcoin/5 transition-colors">
                      <td className="py-5 px-6 text-gray-900 font-medium">{feature}</td>
                      <td className="py-5 px-6 text-center">
                        {starter ? (
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                      <td className="py-5 px-6 text-center">
                        {pro ? (
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                      <td className="py-5 px-6 text-center">
                        {enterprise ? (
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/10 to-white"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-bitcoin/20 shadow-lg mb-6">
              <HelpCircle className="h-4 w-4 text-bitcoin mr-2" />
              <span className="text-sm font-medium text-gray-700">Got questions? We've got answers</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked <span className="text-bitcoin">questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about PaidIn pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <Card className="glass-card hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-bitcoin to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">Q</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-bitcoin transition-colors">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-bitcoin mr-3" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Still have questions?
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you choose the right plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-white font-semibold px-8 py-4 text-lg h-auto"
                onClick={() => window.open('https://paidin-app.netlify.app/auth', '_blank')}
              >
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white font-semibold px-8 py-4 text-lg h-auto"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
