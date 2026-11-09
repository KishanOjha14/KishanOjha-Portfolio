import { cn } from "@/lib/utils"

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
}

export default function SectionHeader({ title, subtitle, className, titleClassName }: SectionHeaderProps) {
  return (
    <div className={cn(className, "mb-12")}>
      <div className="flex items-baseline gap-3 mb-4">
        <h2 className={cn("section-title", titleClassName)}>{title}</h2>
        <span className="w-1 h-6 bg-accent rounded-full hidden md:block" />
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
