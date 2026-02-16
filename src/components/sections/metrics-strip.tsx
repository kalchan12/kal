'use client';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';
import { Award, Briefcase, Zap } from 'lucide-react';

// An array of metrics to be displayed in the metrics strip.
const metrics = [
  { value: 50, label: 'CTF Solved', icon: Award },
  { value: 15, label: 'Projects Completed', icon: Briefcase },
];

/**
 * A component that displays a single metric.
 * It uses the useAnimatedCounter hook to animate the number.
 * @param value The value of the metric.
 * @param label The label of the metric.
 * @param Icon The icon of the metric.
 */
function MetricItem({ value, label, Icon }: { value: number; label: string; Icon: React.ElementType }) {
  const { count, ref } = useAnimatedCounter(value, 2000);
  return (
    <div ref={ref} className="flex flex-col items-center gap-2 px-6 sm:px-8 min-w-[140px]">
      <Icon className="w-8 h-8 text-primary" />
      <p className="text-4xl font-bold font-headline tabular-nums">{count}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

/**
 * A component that displays a strip of metrics.
 * It maps over the metrics array and renders a MetricItem for each one.
 */
export function MetricsStrip() {
  return (
    <section className="py-16 sm:py-20 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-12 sm:gap-16">
          {metrics.map((metric) => (
            <MetricItem key={metric.label} value={metric.value} label={metric.label} Icon={metric.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}