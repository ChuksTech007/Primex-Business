import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-web3-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-cosmic"></div>
          <span className="text-xl font-bold text-foreground">Primex Business</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-web3-cyan transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-web3-cyan transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-web3-cyan transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-web3-cyan transition-colors">Contact</a>
        </div>
        
        <Button variant="hero" className="bg-gradient-cosmic text-white font-semibold px-6 py-2 rounded-full hover:shadow-glow transition-all duration-300">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;