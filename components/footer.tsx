"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = [
    { label: t.footer.apartment, href: "#apartment" },
    { label: t.footer.neighbourhood, href: "#neighbourhood" },
    { label: t.footer.checkIn, href: "#check-in" },
    { label: t.footer.guestGuide, href: "#guest-guide" },
    { label: t.footer.reviews, href: "#reviews" },
    { label: t.contact.sectionLabel, href: "#contact" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="bg-white rounded-lg p-3 inline-block shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yA3b7lgcaB1DZcxlOaG9Swb0P9BHMJ.png"
                  alt="Danube Waterfront at Chain Bridge"
                  width={160}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p>{t.footer.budaRiverside}</p>
                <p>{t.footer.budapest}</p>
                <p className="text-sm mt-1 text-primary-foreground/50">
                  {t.footer.responseTime}
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">{t.footer.quickLinks}</h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Danube Waterfront at Chain Bridge. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
