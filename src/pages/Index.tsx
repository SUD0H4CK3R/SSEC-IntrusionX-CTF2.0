import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import Registration from "@/components/Registration";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Schedule />
      <Prizes />
      <Rules />
      <Registration />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
