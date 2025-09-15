// Hero.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.jpg";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  const [headerProps] = useSpring(() => ({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 200,
  }));

  const [textProps] = useSpring(() => ({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 400,
  }));

  const [buttonsProps] = useSpring(() => ({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 600,
  }));

  const [statsProps] = useSpring(() => ({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 800,
  }));

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-12">
        <animated.div style={headerProps}>
          <Badge variant="secondary" className=" bg-web3-card/50 text-web3-cyan border-web3-border backdrop-blur-sm hover:text-white">
            ✨ Leading Web3 Innovation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Empowering the <br className="hidden md:block" />
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Future of{" "}
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Web3 & Blockchain
            </span>
          </h1>
        </animated.div>

        <animated.p style={textProps} className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          At Primex Business, we drive collaboration, innovation, and impact in the Web3 ecosystem. 
          Transform your business with cutting-edge blockchain solutions and expert consulting.
        </animated.p>

        <animated.div style={buttonsProps} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="hero" size="lg" className="bg-gradient-cosmic text-white font-semibold px-8 py-4 rounded-full hover:shadow-glow transition-all duration-300 text-lg">
            Start Your Web3 Journey →
          </Button>
          <Button variant="outline" size="lg" className="border-web3-border text-foreground hover:bg-web3-card/50 px-8 py-4 rounded-full backdrop-blur-sm text-lg hover:text-white">
            Explore Services
          </Button>
        </animated.div>
        
        <animated.div style={statsProps} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;