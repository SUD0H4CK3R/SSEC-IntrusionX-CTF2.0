import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const Rules = () => {
  const allowedRules = [
    "Team size must be between 1-4 members",
    "Use of publicly available tools and resources is permitted", 
    "Collaboration within your team is encouraged",
    "Bring your own devices for the competition",
    "Ask organizers for clarification if needed",
    "All team members must belong to the same college"
  ];

  const prohibitedRules = [
    "Attacking competition infrastructure is strictly forbidden",
    "Sharing flags or solutions with other teams",
    "Any form of cheating or unethical behavior",
    "Interfering with other teams' participation",
    "Using AI tools or automated solvers",
    "Compromising the integrity of the competition"
  ];

  const importantNotes = [
    "All participants must provide valid identification",
    "Professional conduct expected at all times",
    "Decisions by organizers and judges are final",
    "Winners will be announced immediately after evaluation"
  ];

  return (
    <section id="rules" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-6">
              Competition <span className="text-primary">Rules</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fair play and ethical hacking are the foundations of our competition. 
              Please review these guidelines carefully.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Allowed Actions */}
            <div className="card-cyber p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-orbitron font-semibold text-primary">
                  Allowed Actions
                </h3>
              </div>
              <ul className="space-y-4">
                {allowedRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prohibited Actions */}
            <div className="card-cyber p-8 rounded-2xl border-destructive/20 hover:border-destructive/40">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-destructive mr-3" />
                <h3 className="text-2xl font-orbitron font-semibold text-destructive">
                  Prohibited Actions
                </h3>
              </div>
              <ul className="space-y-4">
                {prohibitedRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Notes */}
          <div className="card-cyber p-8 rounded-2xl border-amber-500/20 hover:border-amber-500/40">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-500 mr-3" />
              <h3 className="text-2xl font-orbitron font-semibold text-amber-500">
                Important Notes
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {importantNotes.map((note, index) => (
                <div key={index} className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consequences */}
          <div className="mt-8 p-6 bg-destructive/10 border border-destructive/20 rounded-xl">
            <h4 className="font-orbitron font-semibold text-destructive mb-2">
              ⚠️ Violations Result In:
            </h4>
            <p className="text-foreground">
              Immediate disqualification, removal from premises, and potential ban from future events. 
              We maintain a zero-tolerance policy for unethical behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;