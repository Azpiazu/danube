"use client"

import { useState } from "react"
import { Coffee, UtensilsCrossed, Wine, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const recommendations = [
  {
    name: "Zërgë Coffeeshop",
    category: "coffee",
    walk: "3–5",
    descriptionKey: "coffee",
  },
  {
    name: "Leo Bistro",
    category: "restaurant",
    walk: "3–5",
    descriptionKey: "restaurant",
  },
  {
    name: "Leo Rooftop",
    category: "rooftop",
    walk: "3–5",
    descriptionKey: "rooftop",
  },
  {
    name: "FELIX Kitchen & Bar",
    category: "restaurant",
    walk: "12–15",
    descriptionKey: "restaurant",
  },
  {
    name: "Déryné",
    category: "restaurant",
    walk: "12–15",
    descriptionKey: "restaurant",
  },
  {
    name: "Espresso Embassy",
    category: "coffee",
    walk: "18–22",
    descriptionKey: "coffee",
  },
]

export function LocalRecommendations() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { t } = useLanguage()

  const categories = [
    { id: "all", label: t.local.all },
    { id: "coffee", label: t.local.coffee, icon: Coffee },
    { id: "restaurant", label: t.local.restaurants, icon: UtensilsCrossed },
    { id: "rooftop", label: t.local.rooftopBars, icon: Wine },
  ]

  const categoryLabels: Record<string, string> = {
    coffee: t.local.coffee,
    restaurant: t.local.restaurants,
    rooftop: t.local.rooftopBars,
  }

  const filteredRecommendations = activeCategory === "all"
    ? recommendations
    : recommendations.filter((r) => r.category === activeCategory)

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.local.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            {t.local.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.local.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-foreground border border-border hover:border-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map((place) => (
            <div
              key={place.name}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-2">
                    {categoryLabels[place.category]}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-primary">
                    {place.name}
                  </h3>
                </div>
                <Sparkles className="h-5 w-5 text-accent/50" />
              </div>
              <p className="text-sm text-accent font-medium mb-3">
                {place.walk} {t.walking.min}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.local.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
