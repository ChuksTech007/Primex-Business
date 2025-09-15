// Services.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Shield, Zap, Beaker, GraduationCap, TrendingUp } from "lucide-react";
import { useSpring, useInView, animated } from "@react-spring/web";

const Services = () => {
  const services = [
    {
      title: "Blockchain Development",
      description: "Custom smart contracts, DApps, and blockchain solutions tailored to your business needs.",
      icon: Code,
      features: [
        "Smart Contract Development",
        "DApp Creation",
        "Token Development",
        "Web3 Integration",
      ],
    },
    {
      title: "Web3 Consulting",
      description: "Strategic guidance to navigate the Web3 landscape and transform your business model.",
      icon: TrendingUp,
      features: [
        "Strategy Development",
        "Technology Assessment",
        "Implementation Planning",
        "Risk Analysis",
      ],
    },
    {
      title: "DeFi Solutions",
      description: "Decentralized finance platforms and protocols to revolutionize financial services.",
      icon: Zap,
      features: [
        "DeFi Protocol Design",
        "Yield Farming",
        "Liquidity Solutions",
        "Governance Tokens",
      ],
    },
    {
      title: "Security Audits",
      description: "Comprehensive security reviews and audits to ensure your Web3 projects are bulletproof.",
      icon: Shield,
      features: [
        "Smart Contract Audits",
        "Penetration Testing",
        "Security Best Practices",
        "Compliance Review",
      ],
    },
    {
      title: "Innovation Labs",
      description: "Collaborative innovation spaces where ideas become groundbreaking Web3 solutions.",
      icon: Beaker,
      features: [
        "Proof of Concept",
        "Rapid Prototyping",
        "MVP Development",
        "Technology Research",
      ],
    },
    {
      title: "Learning & Training",
      description: "Comprehensive Web3 education programs to upskill your team and organization.",
      icon: GraduationCap,
      features: [
        "Web3 Workshops",
        "Blockchain Training",
        "Developer Bootcamps",
        "Executive Education",
      ],
    },
  ];

  const [headerRef, headerInView] = useInView({ once: true });
  const headerProps = useSpring({
    opacity: headerInView ? 1 : 0,
    y: headerInView ? 0 : 50,
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const [cardGridRef, cardGridInView] = useInView({ once: true, amount: 0.3 });

  return (
    <section id="services" className="py-24 bg-gray-900 lg:px-12">
      <div className="container mx-auto px-6">
        <animated.div ref={headerRef} style={headerProps} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Web3 Services</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive blockchain solutions designed to drive innovation, collaboration, and measurable impact for your business.
          </p>
        </animated.div>
        
        <div ref={cardGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const cardProps = useSpring({
              opacity: cardGridInView ? 1 : 0,
              y: cardGridInView ? 0 : 50,
              config: { mass: 1, tension: 200, friction: 20 },
              delay: index * 100, // Staggered delay for each card
            });

            const IconComponent = service.icon;
            return (
              <animated.div style={cardProps} key={index}>
                <Card className="bg-gradient-card border-web3-border hover:shadow-card transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-web3-cyan mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-web3-border hover:bg-gradient-cosmic">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </animated.div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;