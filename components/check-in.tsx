"use client"

import { Key, FileText, MessageCircle, Lock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CheckIn() {
  const { t } = useLanguage()

  const checkInSteps = [
    {
      icon: Key,
      title: t.checkIn.selfCheckIn,
      description: t.checkIn.selfCheckInDesc,
    },
    {
      icon: FileText,
      title: t.checkIn.flexibleCheckIn,
      description: t.checkIn.flexibleCheckInDesc,
    },
    {
      icon: MessageCircle,
      title: t.trust.communication,
      description: t.trust.responseTime,
    },
    {
      icon: Lock,
      title: t.checkIn.luggageStorage,
      description: t.checkIn.luggageStorageDesc,
    },
  ]

  return (
    <section id="check-in" className="py-20 sm:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.checkIn.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            {t.checkIn.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.checkIn.selfCheckInDesc}
          </p>
        </div>

        {/* Check-in Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {checkInSteps.map((step) => (
            <div
              key={step.title}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                <step.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-medium text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
