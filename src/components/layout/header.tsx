import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CodeXml, Github } from 'lucide-react';

const navLinks = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
            <CodeXml className="h-6 w-6 text-primary" />
            <span>RetroHackerFolio</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-4 text-sm md:flex flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
           <Button asChild variant="outline" className="hidden sm:flex">
             <Link href="/title-generator">Title Generator</Link>
           </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
