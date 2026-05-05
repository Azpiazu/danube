"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"
import { languages, type Language } from "@/lib/translations"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.apartment, href: "#apartment" },
    { label: t.nav.neighbourhood, href: "#neighbourhood" },
    { label: t.nav.checkIn, href: "#check-in" },
    { label: t.nav.guestGuide, href: "#guest-guide" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getFlagImage = (code: Language) => {
    const flags: Record<Language, { src: string; alt: string }> = {
      en: { src: "https://flagcdn.com/w40/gb.png", alt: "English" },
      es: { src: "https://flagcdn.com/w40/es.png", alt: "Español" },
      hu: { src: "https://flagcdn.com/w40/hu.png", alt: "Magyar" },
    }
    return flags[code] || flags.en
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center">
            <div className="bg-white rounded-lg p-1.5 shadow-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yA3b7lgcaB1DZcxlOaG9Swb0P9BHMJ.png"
                alt="Danube Waterfront at Chain Bridge"
                width={140}
                height={70}
                className="h-12 w-auto sm:h-14"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-accent" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons and Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`gap-2 transition-colors ${
                    isScrolled ? "" : "text-white hover:bg-white/20"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={getFlagImage(language).src} 
                    alt={getFlagImage(language).alt}
                    className="rounded-sm shadow-sm w-6 h-4"
                  />
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "bg-accent/10" : ""}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={getFlagImage(lang.code).src} 
                      alt={getFlagImage(lang.code).alt}
                      className="rounded-sm shadow-sm mr-2 w-6 h-4"
                    />
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Booking Logos */}
            <a 
              href="https://www.booking.com/hotel/hu/brand-new-panoramic-flat-at-chain-bridge-with-gorgeous-view.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaGeIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AqXe5c8GwAIB0gIkYjczNmM2NjItMzc5Yi00OThjLTgyNDgtMzg4YTBkOWFhZjU52AIB4AIB&aid=304142&ucfs=1&arphpl=1&checkin=2026-05-19&checkout=2026-05-22" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-2 rounded-lg transition-all hover:scale-105 ${
                isScrolled ? "bg-muted/50 hover:bg-muted" : "bg-white/90 hover:bg-white"
              }`}
              aria-label="Book on Booking.com"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg"
                alt="Booking.com"
                className="h-5 w-auto"
              />
            </a>
            <a 
              href="https://www.airbnb.com/rooms/783059292361852024?unique_share_id=4a1bcc2d-6b7b-4aef-a34f-40e1c0ace11f&viralityEntryPoint=1&s=76&source_impression_id=p3_1777891487_P3Knm7EEsvBkA_Zo" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-2 rounded-lg transition-all hover:scale-105 ${
                isScrolled ? "bg-muted/50 hover:bg-muted" : "bg-white/90 hover:bg-white"
              }`}
              aria-label="Book on Airbnb"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                alt="Airbnb"
                className="h-5 w-auto"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`gap-1 px-2 transition-colors ${
                    isScrolled ? "" : "text-white hover:bg-white/20"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={getFlagImage(language).src} 
                    alt={getFlagImage(language).alt}
                    className="rounded-sm shadow-sm w-6 h-4"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "bg-accent/10" : ""}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={getFlagImage(lang.code).src} 
                      alt={getFlagImage(lang.code).alt}
                      className="rounded-sm shadow-sm mr-2 w-6 h-4"
                    />
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className={`p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.booking.com/hotel/hu/brand-new-panoramic-flat-at-chain-bridge-with-gorgeous-view.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaGeIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AqXe5c8GwAIB0gIkYjczNmM2NjItMzc5Yi00OThjLTgyNDgtMzg4YTBkOWFhZjU52AIB4AIB&aid=304142&ucfs=1&arphpl=1&checkin=2026-05-19&checkout=2026-05-22" target="_blank" rel="noopener noreferrer">
                  {t.hero.bookBooking}
                </a>
              </Button>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="https://www.airbnb.com/rooms/783059292361852024?unique_share_id=4a1bcc2d-6b7b-4aef-a34f-40e1c0ace11f&viralityEntryPoint=1&s=76&source_impression_id=p3_1777891487_P3Knm7EEsvBkA_Zo" target="_blank" rel="noopener noreferrer">
                  {t.hero.bookAirbnb}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
