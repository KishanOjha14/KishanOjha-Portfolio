import { cn } from '@/lib/utils';

export interface CalloutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export default function Callout({ title, children, className, icon }: CalloutProps) {
  return (
    <div className={cn('callout', className)}>
      {icon || (
        <svg
          className="icon"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      <div>
        {title && (
          <p className="font-semibold text-sm text-[var(--text)] mb-1 tracking-tight">{title}</p>
        )}
        {children}
      </div>
    </div>
  );
}
