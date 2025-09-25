import { Button } from "@/components/ui/button";
import { Shield, Zap, Users, Award } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Real-world Challenges",
      description: "Face authentic cybersecurity scenarios used by professionals"
    },
    {
      icon: Zap,
      title: "Hands-on Learning",
      description: "Practical experience with cutting-edge security tools and techniques"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together to solve complex multi-layered security puzzles"
    },
    {
      icon: Award,
      title: "Recognition & Prizes",
      description: "Win certificates, prizes, and build your cybersecurity portfolio"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-6">
              About The <span className="text-primary">Event</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to SSEC IntrusionX CTF 2.0 2k25 — an elite cybersecurity competition 
              that brings together talented enthusiast and students from across the region.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-orbitron font-semibold text-primary mb-4">
                Professional Cybersecurity Challenge
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                This isn't just a CTF — it's a <span className="text-primary font-semibold">
                prestigious cybersecurity competition</span> designed to identify and celebrate 
                the next generation of security professionals and industry experts.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Open to <span className="text-accent font-semibold"> students from any degree program,</span>
                the event welcomes participants at every skill level. Whether you're an experienced 
                security expert or just beginning your cybersecurity journey, this event welcomes 
                participants at every skill level.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Compete in our state-of-the-art <span className="text-primary font-semibold">
                facilities</span> and tackle real-world scenarios that mirror actual cybersecurity 
                challenges faced by organizations and enterprises worldwide.
              </p>
              
              <Button 
                className="btn-cyber mt-6"
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Competition
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="card-cyber p-2 rounded-2xl">
                <img 
                  src={teamImage} 
                  alt="CTF Team Collaboration" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-cyber rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="card-cyber p-6 rounded-xl text-center group hover:scale-[1.02] transition-transform duration-200">
                <highlight.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <h4 className="font-orbitron font-semibold text-primary mb-3">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;