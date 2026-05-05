"use client"

import { Star, MapPin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function TrustRatings() {
  const { t } = useLanguage()

  const ratings = [
    {
      platform: t.trust.airbnb,
      rating: "4.91 / 5",
      subtitle: `119 ${t.trust.reviews}`,
      badge: `${t.trust.guestFavorite} · ${t.trust.superhost}`,
      icon: Star,
    },
    {
      platform: t.trust.booking,
      rating: "9.4 / 10",
      subtitle: t.trust.wonderful,
      badge: `59 ${t.trust.verifiedReviews}`,
      icon: Star,
    },
    {
      platform: t.trust.location,
      rating: "9.9 / 10",
      subtitle: t.trust.excellentLocation,
      badge: t.trust.booking,
      icon: MapPin,
    },
    {
      platform: t.trust.communication,
      rating: "5 / 5",
      subtitle: t.trust.guestRating,
      badge: t.trust.greatResponseTime,
      icon: MessageCircle,
    },
  ]

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ratings.map((item) => (
            <div
              key={item.platform}
              className="text-center p-6 rounded-xl bg-background shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 mb-4">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                {item.platform}
              </p>
              <p className="font-serif text-2xl sm:text-3xl font-semibold text-primary">
                {item.rating}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
              <p className="text-xs text-accent mt-2">{item.badge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
