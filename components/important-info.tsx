"use client"

import { Clock, Info, Car } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ImportantInfo() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.importantInfo.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            {t.importantInfo.title}
          </h2>
        </div>

        {/* Info Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Check-in */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.checkIn.checkInTime}</p>
                  <p className="font-serif text-2xl font-medium text-primary">{t.checkIn.from} 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Check-out */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.checkIn.checkOutTime}</p>
                  <p className="font-serif text-2xl font-medium text-primary">10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* House Rules */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border mb-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Info className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">{t.importantInfo.houseRules}</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>{t.importantInfo.noSmoking}</li>
                  <li>{t.importantInfo.noParties}</li>
                  <li>{t.importantInfo.quietHours}</li>
                  <li>{t.importantInfo.maxGuests}</li>
                  <li>{t.importantInfo.noPets}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Good to Know */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Car className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">{t.importantInfo.goodToKnow}</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>{t.importantInfo.firstFloor}</li>
                  <li>{t.importantInfo.streetParking}</li>
                  <li>{t.importantInfo.historicBuilding}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
