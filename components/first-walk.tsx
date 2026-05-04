"use client"

import { Route, Clock, Sunset } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function FirstWalk() {
  const { t } = useLanguage()

  const walks = [
    {
      title: "Short walk",
      duration: "30–45 min",
      route: `Danube → ${t.walking.chainBridge} → ${t.walking.clarkAdam}`,
      icon: Route,
    },
    {
      title: "Classic walk",
      duration: "1.5–2 h",
      route: `${t.walking.chainBridge} → ${t.walking.basilica} → ${t.walking.parliament}`,
      icon: Clock,
    },
    {
      title: "Sunset walk",
      duration: "60–90 min",
      route: `${t.walking.chainBridge} → ${t.walking.budaCastle} → ${t.walking.fishermansBastion}`,
      icon: Sunset,
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
              {t.firstWalk.sectionLabel}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-6">
              {t.firstWalk.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.firstWalk.description}
            </p>
          </div>

          {/* Walk Cards */}
          <div className="space-y-4">
            {walks.map((walk) => (
              <div
                key={walk.title}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <walk.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-lg font-medium text-primary">
                        {walk.title}
                      </h3>
                      <span className="text-sm text-accent font-medium">
                        {walk.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {walk.route}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
