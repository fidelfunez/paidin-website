import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  Key,
  ShieldX,
  IdCard,
  Database,
  Shield,
  Eye,
  FileText,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 encryption standards.",
    details: [
      "256-bit AES encryption",
      "TLS 1.3 for data in transit",
      "Encrypted database storage",
      "Zero-knowledge architecture",
    ],
  },
  {
    icon: Key,
    title: "Multi-Signature Wallets",
    description: "Bitcoin funds are secured using multi-signature technology requiring multiple approvals.",
    details: [
      "2-of-3 multisig wallets",
      "Hardware security modules",
      "Distributed key management",
      "Cold storage for reserves",
    ],
  },
  {
    icon: ShieldX,
    title: "Two-Factor Authentication",
    description: "Enhanced account security with TOTP-based 2FA and biometric options.",
    details: [
      "TOTP authenticator apps",
      "SMS backup codes",
      "Biometric authentication",
      "Hardware security keys",
    ],
  },
  {
    icon: IdCard,
    title: "SOC 2 Compliance",
    description: "Audited and certified for security, availability, and confidentiality controls.",
    details: [
      "Annual SOC 2 Type II audits",
      "ISO 27001 certification",
      "GDPR compliance",
      "PCI DSS standards",
    ],
  },
  {
    icon: Database,
    title: "Secure Infrastructure",
    description: "Enterprise-grade cloud infrastructure with multiple layers of protection.",
    details: [
      "AWS enterprise infrastructure",
      "DDoS protection",
      "Network segmentation",
      "Regular penetration testing",
    ],
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "24/7 security monitoring and threat detection systems.",
    details: [
      "Real-time threat detection",
      "Automated incident response",
      "Security information and event management",
      "Anomaly detection algorithms",
    ],
  },
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Security, availability, and confidentiality",
    icon: IdCard,
  },
  {
    name: "ISO 27001",
    description: "Information security management",
    icon: Shield,
  },
  {
    name: "PCI DSS",
    description: "Payment card industry standards",
    icon: Lock,
  },
  {
    name: "GDPR",
    description: "Data protection and privacy",
    icon: FileText,
  },
];

export default function Security() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideInLeft">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">Bank-grade</span> security
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your Bitcoin and sensitive data are protected by the same security standards used by leading financial institutions. We take security seriously so you can focus on your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                  Security Whitepaper
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight" delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Advanced cybersecurity and data protection systems"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-layered <span className="gradient-text">security</span> approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of our platform is designed with security in mind, from data encryption to Bitcoin custody.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="h-6 w-6 text-bitcoin" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-bitcoin rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry certifications
            </h2>
            <p className="text-lg text-gray-600">
              Independently verified security and compliance standards
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="h-8 w-8 text-bitcoin" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideInLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our security <span className="gradient-text">commitment</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1 border-bitcoin text-bitcoin">
                    01
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Regular Security Audits</h3>
                    <p className="text-gray-600">
                      Independent security firms conduct quarterly audits of our systems and processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1 border-bitcoin text-bitcoin">
                    02
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Employee Security Training</h3>
                    <p className="text-gray-600">
                      All team members undergo regular security training and background checks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1 border-bitcoin text-bitcoin">
                    03
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Incident Response Plan</h3>
                    <p className="text-gray-600">
                      Comprehensive incident response procedures ensure rapid detection and resolution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1 border-bitcoin text-bitcoin">
                    04
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
                    <p className="text-gray-600">
                      24/7 monitoring systems track all platform activity and detect anomalies.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight" delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                alt="Security team monitoring systems"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to secure your Bitcoin payroll?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of companies who trust PaidIn with their most valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                Schedule Security Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
