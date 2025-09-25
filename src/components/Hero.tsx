import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Matrix Background Effect */}
      <div className="matrix-bg" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-bold font-orbitron mb-6 text-glitch"
            data-text="SSEC IntrusionX CTF 2.0"
          >
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              SSEC IntrusionX CTF 2.0
            </span>
          </h1>
        
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Join an elite cybersecurity competition designed to challenge and showcase 
            the skills of tomorrow's security professionals. Test your expertise, 
            compete with the best, and advance your career in cybersecurity.
          </p>
          
          {/* Event Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card-cyber p-6 rounded-xl">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-orbitron font-semibold text-primary mb-2">Date</h3>
              <p className="text-sm text-muted-foreground">October 24, 2025</p>
              <p className="text-sm text-muted-foreground">Friday</p>
            </div>
            
            <div className="card-cyber p-6 rounded-xl">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-orbitron font-semibold text-primary mb-2">Venue</h3>
              <p className="text-sm text-muted-foreground">CC Labs</p>
              <p className="text-sm text-muted-foreground">SSEC Campus</p>
            </div>
            
            <div className="card-cyber p-6 rounded-xl">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-orbitron font-semibold text-primary mb-2">Team Size</h3>
              <p className="text-sm text-muted-foreground">1-4 Members</p>
              <p className="text-sm text-muted-foreground">Per Team</p>
            </div>
            
            <div className="card-cyber p-6 rounded-xl">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-orbitron font-semibold text-primary mb-2">Entry Fee</h3>
              <p className="text-sm text-muted-foreground">₹250</p>
              <p className="text-sm text-muted-foreground">Per participant</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-cyber text-lg px-8 py-6 rounded-xl"
              onClick={() => window.open('https://forms.gle/diq5t9XoTMDCZDiv7', '_blank')}
            >
              Register Your Team
            </Button>
            <Button 
              variant="outline" 
              className="btn-ghost-cyber text-lg px-8 py-6 rounded-xl"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;