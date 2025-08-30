import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedTerminal } from '../animated-terminal';
import { TextScramble } from '../text-scramble';

export function Hero() {
  const headline = "Cybersecurity | Computer Science";
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40">
       <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background via-card to-background"></div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
            <TextScramble text={headline} />
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Computer Science major passionate about cybersecurity, with a particular focus on penetration testing and ethical hacking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <AnimatedTerminal />
        </div>
      </div>
    </section>
  );
}
