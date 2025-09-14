import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help you navigate the Web3 landscape and achieve your blockchain goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-web3-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
                <CardDescription>Get in touch for any inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-web3-cyan font-semibold">hello@primexbusiness.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-web3-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
                <CardDescription>Speak directly with our experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-web3-cyan font-semibold">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-web3-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Visit Us</CardTitle>
                <CardDescription>Our headquarters location</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-web3-cyan font-semibold">San Francisco, CA</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-web3-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-input border-web3-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-input border-web3-border" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-input border-web3-border" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" className="bg-input border-web3-border" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select>
                    <SelectTrigger className="bg-input border-web3-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-web3-border">
                      <SelectItem value="blockchain">Blockchain Development</SelectItem>
                      <SelectItem value="consulting">Web3 Consulting</SelectItem>
                      <SelectItem value="defi">DeFi Solutions</SelectItem>
                      <SelectItem value="audit">Security Audits</SelectItem>
                      <SelectItem value="training">Learning & Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    rows={5}
                    className="bg-input border-web3-border" 
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Additional CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-web3-border text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute consultation with our Web3 experts to discuss your project needs.
              </p>
              <Button variant="outline" size="lg" className="border-web3-border hover:bg-web3-card/50">
                Book Consultation
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-web3-border text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Primex Business?</h3>
              <ul className="text-left space-y-2 mb-6 text-muted-foreground">
                <li>• Industry-leading expertise</li>
                <li>• Proven track record</li>
                <li>• End-to-end solutions</li>
                <li>• 24/7 support</li>
              </ul>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Join 50+ companies already transforming their business with Web3
                </p>
                <Button variant="hero" size="lg">
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;