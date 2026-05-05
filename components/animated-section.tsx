"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale" | "blur"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  "fade": {
    initial: "opacity-0",
    visible: "opacity-100",
  },
  "scale": {
    initial: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "blur": {
    initial: "opacity-0 blur-sm",
    visible: "opacity-100 blur-0",
  },
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })
  const { initial, visible } = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Stagger container for multiple animated items
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  animation?: AnimationType
  duration?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
  animation = "fade-up",
  duration = 600,
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const { initial, visible } = animationClasses[animation]

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all ease-out",
                isVisible ? visible : initial
              )}
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
