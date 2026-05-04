"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_2691187215-tT8QAnlUH5QeIsvOhMe7oSyiupQCyE.jpg"
          alt="Panoramic view of Chain Bridge and Buda Castle illuminated at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Airbnb Badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          {/* Guest Favorite Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur-sm px-4 py-2 shadow-sm border border-border">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FF385C]" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-sm font-medium text-foreground">{t.trust.guestFavorite}</span>
          </div>

          {/* Superhost Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur-sm px-4 py-2 shadow-sm border border-border">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FF385C]" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-sm font-medium text-foreground">{t.trust.superhost}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-primary text-balance leading-tight drop-shadow-sm">
          {t.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-lg sm:text-xl text-foreground/90 max-w-3xl mx-auto text-pretty leading-relaxed">
          {t.hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8" asChild>
            <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
              {t.hero.bookAirbnb}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-background/80 backdrop-blur-sm" asChild>
            <a href="https://booking.com" target="_blank" rel="noopener noreferrer">
              {t.hero.bookBooking}
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 sm:mt-24 animate-bounce">
          <div className="mx-auto h-12 w-6 rounded-full border-2 border-foreground/30 bg-background/50 backdrop-blur-sm flex items-start justify-center pt-2">
            <div className="h-2 w-1 rounded-full bg-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
