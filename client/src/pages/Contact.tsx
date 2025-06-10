import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      teamSize: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Ready to get <span className="gradient-text">started</span>?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Contact our team to learn more or start your free trial today. We're here to help you transition to Bitcoin payroll.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection animation="slideInLeft">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="John"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Doe"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Company Name"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="teamSize">Team Size</Label>
                      <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="200+">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your needs..."
                        rows={4}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="slideInRight" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
                  <p className="text-gray-600 mb-8">
                    Have questions about Bitcoin payroll? Our team of experts is here to help you transition to the future of compensation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-bitcoin" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">hello@paidin.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-bitcoin" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-bitcoin/10 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-bitcoin" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-sm text-gray-500 mb-4">Follow us</p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-bitcoin/10 hover:bg-bitcoin hover:text-white text-bitcoin rounded-lg flex items-center justify-center transition-all duration-200"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-bitcoin/10 hover:bg-bitcoin hover:text-white text-bitcoin rounded-lg flex items-center justify-center transition-all duration-200"
                    >
                      <FaLinkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-bitcoin/10 hover:bg-bitcoin hover:text-white text-bitcoin rounded-lg flex items-center justify-center transition-all duration-200"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Additional Contact Cards */}
                <div className="grid gap-4 pt-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Sales Inquiries</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Interested in learning more about our pricing and features?
                      </p>
                      <Button variant="outline" size="sm" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                        Schedule Demo
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Need help with your existing account or implementation?
                      </p>
                      <Button variant="outline" size="sm" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                        Support Center
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to start your Bitcoin payroll journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of companies already using PaidIn for their payroll needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin hover:bg-bitcoin-dark text-white bitcoin-glow">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                View Pricing
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
