// Footer.tsx
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-web3-border/50 py-12 lg:px-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-cosmic"></div>
              <span className="text-xl font-bold text-foreground">Primex Business</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm mt-4">
              Architecting the decentralized future with comprehensive Web3 solutions and expert consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-web3-cyan transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-web3-cyan transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-web3-cyan transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-web3-cyan transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-foreground">Connect With Us</h4>
            <div className="space-y-2 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-web3-cyan" />
                <span>hello@primexbusiness.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {/* Facebook Icon with Link */}
              <a href="https://www.facebook.com/share/1BL1W4iMQY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white transition-colors hover:bg-web3-cyan">
                  <Facebook className="w-6 h-6" />
                </Button>
              </a>
              {/* Twitter Icon with Link */}
              <a href="https://x.com/primexconsults?s=21&t=sbMUrJf2d3swpnhJx-YttQ" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white transition-colors hover:bg-web3-cyan">
                  <Twitter className="w-6 h-6" />
                </Button>
              </a>
              {/* Instagram Icon with Link */}
              <a href="https://www.instagram.com/primexbusiness.agency?igsh=MWY5eHVhdWVzNWw3NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white transition-colors hover:bg-web3-cyan">
                  <Instagram className="w-6 h-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground border-t border-grey-800 pt-8">
          <p>&copy; {currentYear} Primex Business. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;