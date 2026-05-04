"use client"

import { Clock, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WalkingDistances() {
  const { t } = useLanguage()

  const places = [
    {
      name: t.walking.chainBridge,
      time: `4–6 ${t.walking.min}`,
      description: t.walking.chainBridgeDesc,
    },
    {
      name: t.walking.clarkAdam,
      time: `3–5 ${t.walking.min}`,
      description: t.walking.clarkAdamDesc,
    },
    {
      name: t.walking.fishermansBastion,
      time: `8–12 ${t.walking.min}`,
      description: t.walking.fishermansBastionDesc,
    },
    {
      name: t.walking.matthiasChurch,
      time: `10–12 ${t.walking.min}`,
      description: t.walking.matthiasChurchDesc,
    },
    {
      name: t.walking.budaCastle,
      time: `12–18 ${t.walking.min}`,
      description: t.walking.budaCastleDesc,
    },
    {
      name: t.walking.varkertBazar,
      time: `12–15 ${t.walking.min}`,
      description: t.walking.varkertBazarDesc,
    },
    {
      name: t.walking.parliament,
      time: `18–25 ${t.walking.min}`,
      description: t.walking.parliamentDesc,
    },
    {
      name: t.walking.basilica,
      time: `20–25 ${t.walking.min}`,
      description: t.walking.basilicaDesc,
    },
    {
      name: t.walking.shoesMemorial,
      time: `18–22 ${t.walking.min}`,
      description: t.walking.shoesMemorialDesc,
    },
    {
      name: t.walking.gellertBaths,
      time: `18–22 ${t.walking.min}`,
      description: t.walking.gellertBathsDesc,
    },
    {
      name: t.walking.margaretIsland,
      time: `35–45 ${t.walking.min}`,
      description: t.walking.margaretIslandDesc,
    },
    {
      name: t.walking.ruinBars,
      time: `25–30 ${t.walking.min}`,
      description: t.walking.ruinBarsDesc,
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.walking.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            {t.walking.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t.walking.description}
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {places.map((place) => (
            <div
              key={place.name}
              className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-medium text-foreground">{place.name}</h3>
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-center gap-2 text-accent mb-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{place.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
