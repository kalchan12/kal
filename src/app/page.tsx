import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { MetricsStrip } from '@/components/sections/metrics-strip';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MetricsStrip />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
