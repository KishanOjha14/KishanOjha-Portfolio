'use client';

import { ABOUT } from '@/data/content';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { Code2, Layers, MapPin } from 'lucide-react';

function InfoCard({
  icon: Icon,
  value,
  sub,
}: {
  icon?: React.ElementType;
  value: string;
  sub: string;
}) {
  return (
    <div className="card p-6 hover:border-accent/40 transition-colors group">
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
          <Icon className="w-5 h-5 text-accent" />
        </div>
      )}
      <p className="text-[0.75rem] font-semibold text-[var(--text)] leading-tight">{value}</p>
      <p className="text-[0.75rem] text-[var(--text-muted)] leading-relaxed">{sub}</p>
    </div>
  );
}

export default function About() {
  const ICON_MAP: Record<string, React.ElementType> = {
    Education: Code2,
    Focus: Layers,
    Location: MapPin,
  };

  return (
    <section
      id="about"
      className="section border-t border-[var(--border)]"
      aria-labelledby="about-title"
    >
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionHeader title="About Me" subtitle={ABOUT.subtitle} />
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start gap-10">
            <div className="order-2 lg:order-1 space-y-7">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className="text-[body] text-[var(--text-body)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              {ABOUT.leftColumn.map((item) => {
                const Icon = ICON_MAP[item.label];
                return <InfoCard key={item.label} icon={Icon} value={item.value} sub={item.sub} />;
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
