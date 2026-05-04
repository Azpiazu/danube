"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, type Language, type Translations } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check for saved language preference
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "es", "hu"].includes(saved)) {
      setLanguage(saved)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.slice(0, 2)
      if (browserLang === "es") setLanguage("es")
      else if (browserLang === "hu") setLanguage("hu")
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
