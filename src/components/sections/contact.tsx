import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Github, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-headline md:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm currently available for freelance work and open to discussing new projects.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="mt-12 max-w-sm mx-auto">
           <Card className="text-left">
             <CardHeader>
                <CardTitle>Contact Details</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                 <Button asChild className="w-full justify-start gap-3" variant="outline">
                    <Link href="mailto:chaladimtsekal@gmail.com">
                        <Mail className="w-4 h-4 text-primary"/>
                        <span>chaladimtsekal@gmail.com</span>
                    </Link>
                 </Button>
                 <Button asChild className="w-full justify-start gap-3" variant="outline">
                    <Link href="https://github.com" target="_blank">
                        <Github className="w-4 h-4 text-primary"/>
                        <span>GitHub Profile</span>
                    </Link>
                 </Button>
                 <Button asChild className="w-full justify-start gap-3" variant="secondary">
                    <Link href="#">
                        <Calendar className="w-4 h-4"/>
                        <span>Schedule a Call</span>
                    </Link>
                 </Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </section>
  );
}
