"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className, delay = 1 }: ScrollRevealProps) {
  const { ref, revealed } = useScrollReveal()
  if (revealed) {
    return <div ref={ref} className={cn(className, "opacity-100 translate-y-0")}>
      {children}
    </div>
  }
  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        `reveal-delay-${delay}`,
        "opacity-0 translate-y-[30px]",
        className,
      )}
    >
      {children}
    </div>
  )
}
