'use client';

import { CONTACT, SOCIALS, RESUMES } from '@/data/content';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleEmail = () => {
    window.location.href = `mailto:${CONTACT.email}?subject=Portfolio inquiry&body=Hi Kishan, I came across your portfolio and would like to connect.`;
  };

  return (
    <section
      id="contact"
      className="section border-t border-[var(--border)]"
      aria-labelledby="contact-title"
    >
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionHeader title="Let's Connect" subtitle={CONTACT.subtitle} />
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <ScrollReveal delay={2}>
            <div className="space-y-5" id="resume">
              <div className="card p-7">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  <p className="font-semibold text-[var(--text)] text-sm">Download Resume</p>
                </div>
                <div className="grid gap-3">
                  {RESUMES.map((r) => (
                    <a
                      key={r.label}
                      href={r.file}
                      className="flex items-center justify-between btn btn-outline px-4 py-3.5 text-sm"
                    >
                      <div>
                        <span className="text-[var(--text)]">{r.label}</span>
                        <p className="text-[0.7rem] text-[var(--text-muted)]">{r.description}</p>
                      </div>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div className="card p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <p className="font-semibold text-[var(--text)] text-sm">{CONTACT.emailLabel}</p>
                </div>
                <a
                  href="mailto:work.kishanojha@gmail.com"
                  className="text-[var(--text-body)] text-sm hover:text-accent transition-colors"
                >
                  work.kishanojha@gmail.com
                </a>
              </div>
              <div className="card p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <p className="font-semibold text-[var(--text)] text-sm">{CONTACT.phoneLabel}</p>
                </div>
                <a
                  href="tel:+918739047520"
                  className="text-[var(--text-body)] text-sm hover:text-accent transition-colors"
                >
                  +91 8739047520
                </a>
              </div>
              <div className="card p-7">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <p className="font-semibold text-[var(--text)] text-sm">
                    {CONTACT.locationLabel}
                  </p>
                </div>
                <p className="text-[var(--text-body)] text-sm">{CONTACT.location}</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="card p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <Send className="w-4 h-4 text-accent" />
                <p className="font-semibold text-[var(--text)] text-sm">Send a message</p>
              </div>
              <p className="text-[var(--text-body)] text-sm leading-relaxed mb-6">
                This is a static site with no form backend, so clicking below opens your mail client
                with a pre-filled subject — a real email, no fake form.
              </p>
              <button
                onClick={handleEmail}
                className="w-full flex items-center justify-center gap-2 btn btn-primary px-6 py-3.5 text-sm"
              >
                <Send className="w-3 h-3" /> Email Kishan
              </button>
              <div className="mt-10">
                <h4 className="font-semibold text-[var(--text)] text-sm mb-4">Elsewhere</h4>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map((s) => {
                    let Icon: React.ElementType = Mail;
                    if (s.icon === 'github') {
                      Icon = (props: React.SVGProps<SVGSVGElement>) => (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" {...props}>
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      );
                    } else if (s.icon === 'linkedin') {
                      Icon = (props: React.SVGProps<SVGSVGElement>) => (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" {...props}>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.029-.03.042h.03v-.042c.418-.645 1.162-1.571 2.828-1.571 2.065 0 3.613 1.347 3.613 4.253v5.616zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.963-1.704 1.192 0 1.915.753 1.938 1.704 0 .946-.746 1.704-1.986 1.704zm-2.007 11.019h3.954v-9.646H3.33v9.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      );
                    } else if (s.icon === 'kaggle') {
                      Icon = (props: React.SVGProps<SVGSVGElement>) => (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" {...props}>
                          <path d="M20 0H4C1.9 0 0 1.9 0 4v16c0 2.1 1.9 4 4 4h16c2.1 0 4-1.9 4-4V4c0-2.1-1.9-4-4-4zm0 2v11h-8V2h8zm-9 0v11H4V2h7z" />
                        </svg>
                      );
                    }
                    return (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-body)] hover:text-accent hover:border-accent transition-all focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
                        aria-label={s.label}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
