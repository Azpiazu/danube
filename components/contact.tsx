"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.contact.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty">
            {t.contact.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 w-full sm:w-auto" asChild>
              <a href="https://www.airbnb.com/rooms/783059292361852024?unique_share_id=4a1bcc2d-6b7b-4aef-a34f-40e1c0ace11f&viralityEntryPoint=1&s=76&source_impression_id=p3_1777891487_P3Knm7EEsvBkA_Zo" target="_blank" rel="noopener noreferrer">
                {t.contact.bookAirbnb}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-10 w-full sm:w-auto" asChild>
              <a href="https://www.booking.com/hotel/hu/brand-new-panoramic-flat-at-chain-bridge-with-gorgeous-view.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaGeIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AqXe5c8GwAIB0gIkYjczNmM2NjItMzc5Yi00OThjLTgyNDgtMzg4YTBkOWFhZjU52AIB4AIB&aid=304142&ucfs=1&arphpl=1&checkin=2026-05-19&checkout=2026-05-22" target="_blank" rel="noopener noreferrer">
                {t.contact.bookBooking}
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">{t.contact.orContact}</p>
            <a
              href="mailto:hello@danubewaterfrontview.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>{t.contact.contactUs}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
