import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-headline md:text-4xl text-center">About Me</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
             <Card className="p-2 border-primary/50 rounded-lg w-48 h-48">
              <Image
                src="https://picsum.photos/200/200"
                alt="Portrait"
                width={192}
                height={192}
                className="rounded-md object-cover w-full h-full"
                data-ai-hint="professional portrait"
              />
            </Card>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-lg text-muted-foreground">
              I'm a passionate penetration tester and security researcher with a knack for breaking things to make them better. With a background in software development, I bring a unique perspective to security, understanding how to build resilient systems from the ground up.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              When I'm not hunting for vulnerabilities, you can find me participating in CTF competitions, contributing to open-source security tools, or exploring the latest in cybersecurity research. I'm driven by a constant desire to learn and a commitment to making the digital world a safer place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
