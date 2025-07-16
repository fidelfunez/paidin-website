import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle, Zap, Send, Star } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

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
      <section className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-500/20 shadow-lg">
              <MessageCircle className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">We'd love to hear from you</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ready to get <span className="relative">
                <span className="text-green-600">started</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-60"></div>
              </span>?
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Contact our team to learn more or start your free trial today. We're here to help you transition to Bitcoin payroll.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/10 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-xl opacity-20"></div>
              <Card className="relative glass-card border-0 shadow-2xl">
                <CardContent className="p-10">
                  <div className="flex items-center mb-8">
                    <Send className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Send us a message</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-900 font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="John"
                          className="mt-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-900 font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Doe"
                          className="mt-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-900 font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        className="mt-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-gray-900 font-medium">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Company Name"
                        className="mt-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="teamSize" className="text-gray-900 font-medium">Team Size</Label>
                      <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                        <SelectTrigger className="mt-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl">
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
                      <Label htmlFor="message" className="text-gray-900 font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your needs..."
                        rows={4}
                        className="mt-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Have questions about Bitcoin payroll? Our team of experts is here to help you transition to the future of compensation.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Email</p>
                        <p className="text-gray-600">hello@paidin.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Location</p>
                        <p className="text-gray-600">San Francisco, CA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8">
                <p className="text-gray-600 mb-4 font-medium">Follow us</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-600 hover:to-emerald-600 hover:text-white text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-600 hover:to-emerald-600 hover:text-white text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-600 hover:to-emerald-600 hover:text-white text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Additional Contact Cards */}
              <div className="grid gap-6 pt-8">
                <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-green-600 transition-colors">Sales Inquiries</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Interested in learning more about our pricing and features?
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl font-semibold"
                    >
                      Schedule Demo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-green-600 transition-colors">Technical Support</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Need help with your existing account or implementation?
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl font-semibold"
                    >
                      Support Center
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ready to start your Bitcoin payroll journey?
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of companies already using PaidIn for their payroll needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 text-lg h-auto shadow-lg"
                onClick={() => window.open('https://paidin-app.netlify.app/auth', '_blank')}
              >
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-4 text-lg h-auto"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}