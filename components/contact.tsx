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
              <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
                {t.contact.bookAirbnb}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-10 w-full sm:w-auto" asChild>
              <a href="https://booking.com" target="_blank" rel="noopener noreferrer">
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
