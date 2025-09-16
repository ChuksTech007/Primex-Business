// Contact.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 lg:px-12">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help you navigate the Web3 landscape and achieve your blockchain goals.
          </p>
        </motion.div>

        {/* Top Row: Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { icon: Mail, title: "Email Us", desc: "Get in touch for any inquiries", text: "hello@primexbusiness.com" },
            { icon: Phone, title: "Call Us", desc: "Speak directly with our experts", text: "+1 (555) 123-4567" },
            { icon: MapPin, title: "Visit Us", desc: "Our headquarters location", text: "San Francisco, CA" },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-gradient-card border border-web3-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
              <p className="text-web3-cyan font-medium">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 lg:col-span-1"
          >
            <motion.div variants={itemVariants} className="p-8 rounded-xl border border-web3-border bg-gradient-card text-center">
              <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute consultation with our Web3 experts to discuss your project needs.
              </p>
              <Button variant="outline" size="lg" className="border-web3-border hover:bg-gradient-cosmic">
                Book Consultation
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 rounded-xl border border-web3-border bg-gradient-card text-center">
              <h3 className="text-2xl font-bold mb-4">Why Choose Primex Business?</h3>
              <ul className="text-left space-y-2 mb-6 text-muted-foreground">
                <li>• Industry-leading expertise</li>
                <li>• Proven track record</li>
                <li>• End-to-end solutions</li>
                <li>• 24/7 support</li>
              </ul>
              <Button variant="hero" size="lg">
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="bg-gradient-card border border-web3-border rounded-xl lg:p-8 p-4 w-full max-w-2xl">
              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
              <form className="space-y-6">
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
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;