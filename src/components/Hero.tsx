import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Cosmic overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge variant="secondary" className="mb-8 bg-web3-card/50 text-web3-cyan border-web3-border backdrop-blur-sm">
          ✨ Leading Web3 Innovation
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Empowering the{" "}
          <br className="hidden md:block" />
          Future of{" "}
          <span className="bg-gradient-cosmic bg-clip-text text-transparent">
            Web3 & Blockchain
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          At Primex Business, we drive collaboration, innovation, and impact in the Web3 ecosystem. 
          Transform your business with cutting-edge blockchain solutions and expert consulting.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            variant="hero" 
            size="lg"
            className="bg-gradient-cosmic text-white font-semibold px-8 py-4 rounded-full hover:shadow-glow transition-all duration-300 text-lg"
          >
            Start Your Web3 Journey →
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-web3-border text-foreground hover:bg-web3-card/50 px-8 py-4 rounded-full backdrop-blur-sm text-lg"
          >
            Explore Services
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-web3-cyan mb-2">50+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-web3-purple mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-web3-blue mb-2">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;