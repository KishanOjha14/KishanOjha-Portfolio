import { cn } from '@/lib/utils';

export interface KOBrandProps {
  className?: string;
  size?: number;
}

export function KOBrand({ className, size = 32 }: KOBrandProps) {
  return (
    <svg
      className={cn('shrink-0', className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="koGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="currentColor" />
          <stop offset="100%" stop-color="currentColor" />
        </linearGradient>
      </defs>
      <path
        d="M8 30V16H5V2M5 16h9l-5 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="24"
        cy="16"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 23a9 9 0 01-9-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
