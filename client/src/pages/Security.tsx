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
  Zap,
  Star,
  ShieldCheck,
} from "lucide-react";

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
      <section className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-500/20 shadow-lg">
                  <ShieldCheck className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Enterprise-grade protection</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="relative">
                    <span className="text-blue-600">Bank-grade</span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-60"></div>
                  </span>{" "}
                  security
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Your Bitcoin and sensitive data are protected by the same security standards used by leading financial institutions. We take security seriously so you can focus on your business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg h-auto shadow-lg"
                  onClick={() => window.open('https://paidin-app.netlify.app/auth', '_blank')}
                >
                  Start Free Trial
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 text-lg h-auto"
                >
                  Security Whitepaper
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* Main Image with Glass Effect */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative glass-card rounded-3xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Advanced cybersecurity and data protection systems"
                    className="rounded-2xl w-full h-auto shadow-2xl"
                  />
                  
                  {/* Floating Security Badge */}
                  <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">SOC 2</div>
                        <div className="text-sm text-gray-500">Certified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-500/20 shadow-lg mb-6">
              <Shield className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Multi-layered protection</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Multi-layered <span className="text-blue-600">security</span> approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of our platform is designed with security in mind, from data encryption to Bitcoin custody.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={feature.title} className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <Card className="relative h-full glass-card hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.details.map((detail) => (
                          <li key={detail} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/10 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry <span className="text-purple-600">certifications</span>
            </h2>
            <p className="text-xl text-gray-600">
              Independently verified security and compliance standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="group">
                <Card className="glass-card hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0 text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="h-10 w-10 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{cert.name}</h3>
                    <p className="text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/10 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Our security <span className="text-blue-600">commitment</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Regular Security Audits",
                    description: "Independent security firms conduct quarterly audits of our systems and processes."
                  },
                  {
                    number: "02", 
                    title: "Employee Security Training",
                    description: "All team members undergo regular security training and background checks."
                  },
                  {
                    number: "03",
                    title: "Incident Response Plan", 
                    description: "Comprehensive incident response procedures ensure rapid detection and resolution."
                  },
                  {
                    number: "04",
                    title: "Continuous Monitoring",
                    description: "24/7 monitoring systems track all platform activity and detect anomalies."
                  }
                ].map((item) => (
                  <div key={item.number} className="flex items-start space-x-4 p-6 glass-card rounded-xl group hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{item.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative glass-card rounded-3xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                    alt="Security team monitoring systems"
                    className="rounded-2xl w-full h-auto shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12">
            <div className="flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ready to secure your Bitcoin payroll?
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of companies who trust PaidIn with their most valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg h-auto shadow-lg"
                onClick={() => window.open('https://paidin-app.netlify.app/auth', '_blank')}
              >
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 text-lg h-auto"
              >
                Schedule Security Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
