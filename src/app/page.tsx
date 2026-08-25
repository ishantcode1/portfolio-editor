import { Hero } from "@/components/hero/Hero";
import { Navigation } from "@/components/ui/Navigation";
import { Work } from "@/components/work/Work";
import { BeforeAfter } from "@/components/before-after/BeforeAfter";
import { Rhythm } from "@/components/rhythm/Rhythm";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Work />
      <BeforeAfter />
      <Rhythm />
      <About />
      <Contact />
    </main>
  );
}
