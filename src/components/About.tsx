// About.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSpring, useInView, animated } from "@react-spring/web";

const About = () => {
  const achievements = [
    "50+ Successful Web3 Projects",
    "Industry-Leading Security Standards",
    "Expert Team of Blockchain Developers",
    "24/7 Dedicated Support",
    "Proven Track Record in DeFi",
    "Enterprise-Grade Solutions",
  ];

  const values = [
    {
      title: "Collaboration",
      description: "We believe in the power of partnership. Together, we build stronger, more innovative solutions."
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative approaches to complex challenges."
    },
    {
      title: "Impact",
      description: "Every project is designed to create meaningful, measurable impact in the real world."
    },
  ];

  const [headerRef, headerInView] = useInView({ once: true });
  const headerProps = useSpring({
    opacity: headerInView ? 1 : 0,
    y: headerInView ? 0 : 50,
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const [contentRef, contentInView] = useInView({ once: true });
  const contentProps = useSpring({
    opacity: contentInView ? 1 : 0,
    y: contentInView ? 0 : 50,
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 200,
  });

  const [valuesRef, valuesInView] = useInView({ once: true });
  const valueProps = useSpring({
    opacity: valuesInView ? 1 : 0,
    y: valuesInView ? 0 : 50,
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 400,
  });

  return (
    <section id="about" className="py-24 bg-section lg:px-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <animated.div ref={headerRef} style={headerProps}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Pioneering the{" "}
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Web3 Revolution
                </span>
              </h2>
            </animated.div>

            <animated.div ref={contentRef} style={contentProps} className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Primex Business, we're not just building technology - we're architecting the future. 
                Our innovative approach combines deep blockchain expertise with a collaborative mindset to 
                deliver solutions that drive real impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We empower businesses to embrace the decentralized future through comprehensive consulting, 
                cutting-edge development, and transformative learning opportunities.
              </p>
            </animated.div>

            <animated.div style={contentProps}>
              <Button variant="hero" size="lg" className="mb-8">
                Partner With Us
              </Button>
            </animated.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const [achievementRef, achievementInView] = useInView({ once: true });
                const achievementProps = useSpring({
                  opacity: achievementInView ? 1 : 0,
                  y: achievementInView ? 0 : 20,
                  config: { mass: 1, tension: 200, friction: 20 },
                  delay: index * 50,
                });
                return (
                  <animated.div ref={achievementRef} style={achievementProps} key={index}>
                    <Badge key={index} variant="secondary" className="bg-web3-card text-web3-cyan border-web3-border p-3 text-center hover:text-white">
                      {achievement}
                    </Badge>
                  </animated.div>
                );
              })}
            </div>
          </div>
          
          <animated.div ref={valuesRef} style={valueProps} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Our Core Values</h3>
              <p className="text-muted-foreground mb-8">
                The principles that drive everything we do and guide our mission to transform the digital landscape.
              </p>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <Card key={index} className="bg-gradient-card border-web3-border">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3 text-web3-cyan">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-gradient-card border border-web3-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize access to Web3 technology by providing world-class consulting, development, 
                and education services. We're committed to building a more transparent, collaborative, 
                and innovative digital future where everyone can participate and thrive.
              </p>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default About;