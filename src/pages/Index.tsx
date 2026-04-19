import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Problems } from "@/components/site/Problems";
import { Services } from "@/components/site/Services";
import { Differentiators } from "@/components/site/Differentiators";
import { Team } from "@/components/site/Team";
import { Work } from "@/components/site/Work";
import { Insights } from "@/components/site/Insights";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Problems />
      <Services />
      <Differentiators />
      <Team />
      <Work />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
