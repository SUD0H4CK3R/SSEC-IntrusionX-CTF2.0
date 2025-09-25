import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Clock, CreditCard } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Registration = () => {
  return (
    <section id="register" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-6">
              Ready to <span className="text-primary">Compete?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure your place in this premier cybersecurity competition. 
              Register your team today and join the community of security professionals!
            </p>
          </div>

          {/* Registration Requirements */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="card-cyber p-6 rounded-xl">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-semibold text-primary mb-2">Team Size</h3>
              <p className="text-sm text-muted-foreground">1-4 members per team</p>
              <p className="text-xs text-muted-foreground mt-1">Professional collaboration</p>
            </div>
            
            <div className="card-cyber p-6 rounded-xl">
              <CreditCard className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-semibold text-primary mb-2">Entry Fee</h3>
              <p className="text-sm text-muted-foreground">₹250 Per Head</p>
              <p className="text-xs text-muted-foreground mt-1">All inclusive</p>
            </div>
            
            <div className="card-cyber p-6 rounded-xl">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-semibold text-primary mb-2">Deadline</h3>
              <p className="text-sm text-muted-foreground">October 15, 2025</p>
              <p className="text-xs text-muted-foreground mt-1">11:59 PM</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-2xl font-orbitron font-semibold text-primary mb-8">
              Registration Closes In:
            </h3>
            <CountdownTimer targetDate="2025-08-07T23:59:59" />
          </div>

          {/* Registration Steps */}
          <div className="card-cyber p-8 rounded-2xl mb-12 text-left">
            <h3 className="text-2xl font-orbitron font-semibold text-primary text-center mb-8">
              How to Register
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold text-primary mb-2">Fill Form</h4>
                <p className="text-sm text-muted-foreground">
                  Complete the registration form with team details
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold text-primary mb-2">Pay Fee</h4>
                <p className="text-sm text-muted-foreground">
                  Submit ₹250 entry fee via provided payment link
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold text-primary mb-2">Confirmation</h4>
                <p className="text-sm text-muted-foreground">
                  Receive confirmation email with event details
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              className="btn-cyber text-xl px-12 py-6 rounded-xl group"
              onClick={() => window.open('https://forms.gle/diq5t9XoTMDCZDiv7', '_blank')}
            >
              Register Your Team Now
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Limited slots available • First come, first served
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-xl">
            <h4 className="font-orbitron font-semibold text-accent mb-2">
              Need Help with Registration?
            </h4>
            <p className="text-foreground">
              Contact us at: <span className="text-primary font-semibold">emtrondet@gmail.com</span> | 
              Call: <span className="text-primary font-semibold">+91 6381206466,+91 8015602264</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;