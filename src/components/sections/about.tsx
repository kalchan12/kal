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
                src="https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxoYWNrZXJ8ZW58MHx8fHwxNzU2NTY5NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
              I’m a Computer Science major with a strong focus on cybersecurity, especially penetration testing and ethical hacking. I’m skilled in Linux, Bash scripting, and Python, with a solid foundation in general coding and computer science concepts like networking and AI/ML. I’m familiar with Kali Linux and its tools, and I enjoy applying my knowledge through Capture the Flag (CTF) challenges, hacking labs, and hands-on problem-solving.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              My main interests lie in web and Wi-Fi penetration testing, where I aim to sharpen my skills by constantly experimenting and breaking down systems to understand how they work. I thrive in environments that challenge me to think creatively and approach problems from a hacker’s mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
