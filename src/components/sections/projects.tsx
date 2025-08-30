import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const projects = [
  {
    title: 'Cybersec notes and CTF writeups',
    description: 'A stealthy C2 framework built with Go and gRPC for red team operations.',
    image: 'https://images.unsplash.com/photo-1719253479576-46c24a216c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHwlMkZoYWNraW5nfGVufDB8fHx8MTc1NjU2NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'abstract network',
    stack: ['Go', 'gRPC', 'Python', 'React'],
    metrics: ['High Performance', 'Low Detection Rate'],
    link: '#',
  },
  {
    title: 'Ghost Query',
    description: 'An end-to-end encrypted password manager with multi-factor authentication.',
    image: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0fGVufDB8fHx8MTc1NjU2Nzg1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'cyber security',
    stack: ['TypeScript', 'Next.js', 'Tailwind', 'HTML'],
    metrics: ['E2E Encrypted', 'Audited'],
    link: '#',
  },
  {
    title: 'Sudo Make me a Sandwitch',
    description: 'Automated security scanner for AWS and GCP configurations.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsaW51eHxlbnwwfHx8fDE3NTY1NjgwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'cloud infrastructure',
    stack: ['Python', 'Terraform', 'Docker', 'AWS Lambda'],
    metrics: ['CI/CD Integrated', 'Real-time Alerts'],
    link: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-headline md:text-4xl text-center">My Work</h2>
        <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one was an opportunity to learn and grow.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 opacity-90 hover:opacity-100">
              <CardHeader>
                <div className="aspect-[3/2] relative">
                    <Image src={project.image} alt={project.title} fill className="object-cover rounded-t-lg" data-ai-hint={project.aiHint}/>
                </div>
                <CardTitle className="pt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.metrics.map(metric => (
                      <div key={metric} className="flex items-center text-xs text-muted-foreground">
                          <ShieldCheck className="w-4 h-4 mr-2 text-primary" />
                          <span>{metric}</span>
                      </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary" className="w-full">
                  <Link href={project.link}>
                    See Writeup <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
