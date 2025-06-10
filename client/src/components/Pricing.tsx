import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams",
    price: "$29",
    period: "/month",
    employees: "Up to 10 employees",
    features: [
      "Bitcoin payroll processing",
      "Basic expense tracking",
      "Time tracking",
      "Email support",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    description: "For growing companies",
    price: "$99",
    period: "/month",
    employees: "Up to 50 employees",
    features: [
      "Everything in Starter",
      "Advanced expense tracking",
      "Benefits management",
      "Tax & compliance reporting",
      "Priority support",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "",
    employees: "Unlimited employees",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "24/7 phone support",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your team size and needs
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.2}>
              <Card className={`h-full relative ${plan.popular ? "border-2 border-bitcoin shadow-xl" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-bitcoin text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-500">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{plan.employees}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.buttonVariant === "default"
                        ? "bg-bitcoin hover:bg-bitcoin-dark text-white"
                        : "border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
                    }`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
