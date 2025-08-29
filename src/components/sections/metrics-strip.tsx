'use client';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';
import { Award, Briefcase, Zap } from 'lucide-react';

const metrics = [
  { value: 42, label: 'CTF Wins', icon: Award },
  { value: 120, label: 'Vulnerability Reports', icon: Zap },
  { value: 37, label: 'Projects Shipped', icon: Briefcase },
];

function MetricItem({ value, label, Icon }: { value: number; label: string; Icon: React.ElementType }) {
  const { count, ref } = useAnimatedCounter(value, 2000);
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <Icon className="w-8 h-8 text-primary" />
      <p className="text-4xl font-bold font-headline tabular-nums">{count}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function MetricsStrip() {
  return (
    <section className="py-16 sm:py-20 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <MetricItem key={metric.label} value={metric.value} label={metric.label} Icon={metric.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
