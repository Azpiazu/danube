"use client"

import { Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function MustSeeSights() {
  const { t } = useLanguage()

  const sights = [
    {
      name: t.walking.chainBridge,
      time: `4-6 ${t.walking.min}`,
      description: t.walking.chainBridgeDesc,
    },
    {
      name: t.walking.fishermansBastion,
      time: `8-12 ${t.walking.min}`,
      description: t.walking.fishermansBastionDesc,
    },
    {
      name: t.walking.budaCastle,
      time: `12-18 ${t.walking.min}`,
      description: t.walking.budaCastleDesc,
    },
    {
      name: t.walking.parliament,
      time: `18-25 ${t.walking.min}`,
      description: t.walking.parliamentDesc,
    },
    {
      name: t.walking.gellertBaths,
      time: `18-22 ${t.walking.min}`,
      description: t.walking.gellertBathsDesc,
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.mustSee.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            {t.mustSee.title}
          </h2>
        </div>

        {/* Sights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sights.map((sight) => (
            <div
              key={sight.name}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-accent/30 transition-all"
            >
              <h3 className="font-serif text-xl font-medium text-primary mb-3">
                {sight.name}
              </h3>
              <div className="flex items-center gap-2 text-accent mb-4">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{sight.time}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {sight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
