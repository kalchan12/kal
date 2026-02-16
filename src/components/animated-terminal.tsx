'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

const lines = [
  'nmap -sV -A target.local',
  '// Found open port: 22 (SSH)',
  'hydra -l user -P rockyou.txt ssh://target.local',
  '// Access granted',
  'cat /etc/passwd',
  '> Top Skills:',
  '>- Penetration Testing',
  '>- Web App Security',
  '>- Forensic Analysis',
  '>- Python & Go',
  '>- Cloud Security (AWS, GCP)',
  '// Mission complete.',
];

export function AnimatedTerminal() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const line = lines[currentLineIndex];
      if (currentText.length < line.length) {
        const timeout = setTimeout(() => {
          setCurrentText(line.slice(0, currentText.length + 1));
        }, 50 + Math.random() * 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedLines((prev) => [...prev, line]);
          setCurrentText('');
          setCurrentLineIndex((prev) => prev + 1);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentLineIndex]);

  return (
    <Card className="font-code text-sm w-full max-w-md h-[300px] bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10">
      <CardHeader className="flex flex-row items-center justify-between p-2 border-b border-border">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <p className="text-xs text-muted-foreground">/bin/zsh</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
      </CardHeader>
      <CardContent className="p-4 text-xs h-full overflow-y-auto">
        {typedLines.map((line, index) => (
          <div key={index}>
            <span className="text-primary mr-2">$</span>
            <span className={line.startsWith('//') ? 'text-muted-foreground italic' : ''}>{line}</span>
          </div>
        ))}
        <div>
          <span className="text-primary mr-2">$</span>
          <span className={lines[currentLineIndex]?.startsWith('//') ? 'text-muted-foreground italic' : ''}>{currentText}</span>
          <span className="inline-block w-2 h-3 bg-primary animate-pulse ml-1"></span>
        </div>
      </CardContent>
    </Card>
  );
}
