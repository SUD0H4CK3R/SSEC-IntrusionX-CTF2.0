import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#rules', label: 'Rules' },
    { href: '#faq', label: 'FAQ' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-orbitron font-bold text-xl text-primary">
              SSEC IntrusionX CTF 2.0
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button 
              className="btn-cyber"
              onClick={() => window.open('https://forms.gle/diq5t9XoTMDCZDiv7', '_blank')}
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-primary/20">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                className="btn-cyber w-full mt-4"
                onClick={() => {
                  window.open('https://forms.gle/SzwEoutq1D6ktTyb9', '_blank');
                  setIsOpen(false);
                }}
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;