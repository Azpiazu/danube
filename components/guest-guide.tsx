"use client"

import { 
  Key, 
  Wifi, 
  Thermometer, 
  UtensilsCrossed, 
  Car, 
  ShoppingBag, 
  MapPin, 
  AlertCircle, 
  LogOut,
  BookOpen
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function GuestGuide() {
  const { t } = useLanguage()

  const guideItems = [
    { icon: Key, label: t.guestGuide.checkInInstructions },
    { icon: Wifi, label: t.guestGuide.wifiDetails },
    { icon: Thermometer, label: t.apartment.ac },
    { icon: UtensilsCrossed, label: t.apartment.kitchen },
    { icon: Car, label: t.importantInfo.streetParking },
    { icon: ShoppingBag, label: t.guestGuide.localTips },
    { icon: MapPin, label: t.local.restaurants },
    { icon: AlertCircle, label: t.guestGuide.emergencyContacts },
    { icon: LogOut, label: t.checkIn.checkOutTime },
  ]

  return (
    <section id="guest-guide" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
              {t.guestGuide.sectionLabel}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-6">
              {t.guestGuide.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
              {t.guestGuide.description}
            </p>

            {/* Preview Card */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-accent" />
                <span className="font-medium text-foreground">{t.guestGuide.includes}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {guideItems.slice(0, 4).map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <item.icon className="h-4 w-4 text-accent/70 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                {t.guestGuide.description}
              </p>
            </div>
          </div>

          {/* Guide Items List */}
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="font-serif text-xl font-medium text-primary mb-6">
              {t.guestGuide.includes}
            </h3>
            <div className="space-y-4">
              {guideItems.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-background">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">{item.label}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
