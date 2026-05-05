"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function BudapestMap() {
  const { t } = useLanguage()

  return (
    <section id="neighbourhood" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.map.title}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            {t.walking.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.map.subtitle}
          </p>
        </div>

        {/* Location Score Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-accent/10 rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <Star className="h-5 w-5 fill-accent text-accent" />
              <Star className="h-5 w-5 fill-accent text-accent" />
              <Star className="h-5 w-5 fill-accent text-accent" />
              <Star className="h-5 w-5 fill-accent text-accent" />
            </div>
            <span className="font-serif text-lg font-medium text-primary">
              {t.map.locationScore}: 10/10
            </span>
            <span className="text-sm text-muted-foreground">
              {t.map.fromBooking}
            </span>
          </div>
        </div>

        {/* Map Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/20 bg-card">
          <div className="relative w-full" style={{ paddingBottom: '64.29%' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yCXo1FIfmbKEWpcNt3Gfr9DB6pFpmB.png"
              alt="Illustrated map of Budapest showing walking distances from the apartment to major landmarks including Chain Bridge, Parliament, Buda Castle, Fisherman's Bastion, and more"
              fill
              className="object-contain"
              quality={100}
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>

        {/* Map Caption */}
        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          {t.walking.description}
        </p>
      </div>
    </section>
  )
}
