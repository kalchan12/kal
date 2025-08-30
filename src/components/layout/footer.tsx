import { Github, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} kal@psycho. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/kalchan12" target="_blank" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:chaladimtsekal@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
