import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in SSEC CTF 2025?",
      answer: "The competition is open exclusively to students from any degree program. Participants of all skill levels are welcome, whether you're a beginner or experienced in cybersecurity."
    },
    {
      question: "What is the team size requirement?",
      answer: "Teams can have between 1 to 4 members. Solo participation is allowed, but teamwork is encouraged for the best experience. All team members must be from the same college and should carry valid identification."
    },
    {
      question: "What should I bring to the competition?",
      answer: "Bring your own laptop/device, chargers, valid identification, and any cybersecurity tools you prefer. We'll provide high-speed internet, power outlets, and refreshments throughout the day."
    },
    {
      question: "Do I need cybersecurity experience to participate?",
      answer: "Not at all! This competition is designed for all skill levels. We have challenges ranging from beginner to advanced, so everyone can contribute and learn."
    },
    {
      question: "What types of challenges will be included?",
      answer: "Expect challenges in Web Security, Cryptography, Network Security, Digital Forensics, Reverse Engineering, and more. Each category will have multiple difficulty levels."
    },
    {
      question: "How will the scoring work?",
      answer: "Teams earn points by solving challenges. Each challenge has a point value based on difficulty. The team with the highest total points at the end wins."
    },
    {
      question: "Is there any preparation material available?",
      answer: "We will not be providing separate preparation material. Participants are encouraged to utilize freely available platforms such as OverTheWire, PicoCTF, and TryHackMe to practice ahead of time."
    },
    {
      question: "What if I need help during the competition?",
      answer: "Organizers will be available throughout the event for technical support and clarifications. However, we cannot provide hints for solving specific challenges."
    },
    {
      question: "Can I use online resources during the competition?",
      answer: "Yes, you can use publicly available tools, documentation, and resources. However, AI tools, automated solvers, and collaboration with other teams is strictly prohibited."
    },
    {
      question: "Is lunch provided?",
      answer: "No, lunch is not included. However, food stalls are arranged at the venue."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions? We've got answers! Find everything you need to know 
              about participating in SSEC IntrusionX CTF 2.0 2k25.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="card-cyber p-8 rounded-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-primary/20 rounded-lg px-6 data-[state=open]:border-primary/40 transition-colors duration-300"
                >
                  <AccordionTrigger className="hover:no-underline group py-6">
                    <div className="flex items-center text-left">
                      <HelpCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 group-data-[state=open]:text-accent transition-colors duration-300" />
                      <span className="font-semibold text-foreground group-data-[state=open]:text-primary transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="ml-8 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact for More Questions */}
          <div className="mt-12 text-center">
            <div className="card-cyber p-6 rounded-xl inline-block">
              <h3 className="font-orbitron font-semibold text-primary mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help you succeed in the competition.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground">
                  📧 Email: <span className="text-primary font-semibold">emtrondet@gmail.com</span>
                </p>
                <p className="text-foreground">
                  📞 Phone: <span className="text-primary font-semibold">+91 6381206466 ,+91 8015602264</span>
                </p>
                <p className="text-foreground">
                  💬 WhatsApp: <span className="text-primary font-semibold">+91 6381206466 ,+91 8015602264</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;