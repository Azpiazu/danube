"use client"

import { useState } from "react"
import { 
  Home, 
  Users, 
  Bed, 
  Bath, 
  Key, 
  Wifi, 
  Wind, 
  UtensilsCrossed,
  Tv,
  Mountain,
  Sofa,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function Apartment() {
  const { t } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [galleryPage, setGalleryPage] = useState(0)
  const imagesPerPage = 8

  const features = [
    { icon: Home, label: t.apartment.sectionLabel },
    { icon: Users, label: `5 ${t.apartment.guests}` },
    { icon: Bed, label: `2 ${t.apartment.bedrooms}` },
    { icon: Bed, label: `3 ${t.apartment.beds}`, sublabel: `(${t.apartment.sofaBed})` },
    { icon: Bath, label: `1 ${t.apartment.bathrooms}` },
  ]

  const amenities = [
    { icon: Bed, label: `${t.apartment.bedroom} 1: ${t.apartment.kingBed}` },
    { icon: Bed, label: `${t.apartment.bedroom} 2: ${t.apartment.queenBed}` },
    { icon: Sofa, label: `${t.apartment.livingRoom}: ${t.apartment.sofaBedDesc}` },
    { icon: Key, label: t.checkIn.selfCheckIn },
    { icon: Wifi, label: t.apartment.wifi },
    { icon: Wind, label: t.apartment.ac },
    { icon: UtensilsCrossed, label: t.apartment.kitchen },
    { icon: Tv, label: t.apartment.netflix },
    { icon: Mountain, label: t.apartment.danubeViews },
  ]

  const galleryImages = [
    // Page 1 - Views & Living spaces
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qX9n4yJ9zLGSCYUg3XtFGnLFLvnAPU.png",
      alt: "View of Chain Bridge from the apartment with a boat passing on the Danube",
      label: t.apartment.chainBridgeView
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7nKxaK8q5bxs2BtUyVKfKyealSUhFr.png",
      alt: "View of Hungarian Parliament building from the apartment across the Danube",
      label: t.apartment.parliamentView
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xF8XtGVjlrhdlf9DE4gsM7mLpQd76S.png",
      alt: "Bright living room with beige sofa, polka dot pillows, TV, and tall windows overlooking the city",
      label: t.apartment.livingRoom
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cep8PUpl9daJ6ij1nH5iBfLAzzp41Z.png",
      alt: "Spacious bedroom with white bed, desk area and pendant lamp",
      label: `${t.apartment.bedroom} 1`
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qxhNbMl4U4xwWjvD66s0Y8BMervqd9.png",
      alt: "Cozy bedroom with wooden bed frame, white linens and art prints",
      label: `${t.apartment.bedroom} 2`
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m3gMjdUE3dkwqcrmCRGkVpMBolrXjG.png",
      alt: "Modern kitchen with light blue cabinets, wooden countertop and gas stove",
      label: t.apartment.kitchen
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XcFVRP47MmD4FIohGL07pyWVrmVgcC.png",
      alt: "Modern white bathroom with glass shower enclosure and vanity",
      label: t.apartment.bathroom
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yePUtYaJdadtpedoAupHwhUTtVwhjz.png",
      alt: "Charming hallway with patterned tile floor and white doors",
      label: t.apartment.hallway
    },
    // Page 2 - More details
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WdPgx6LfbKT3Vfw78mgIX6b1e7LSww.png",
      alt: "Building entrance with white door and number 4",
      label: t.apartment.entrance
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dUFUQndz4gfv4Q50altlUz6RGzqyji.png",
      alt: "Minimalist workspace with white desk, mirror and chair",
      label: t.apartment.workspace
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QaefDjLtymcD9n6SNu9H6zhR0DMV2c.png",
      alt: "Bedroom detail with cozy lamp and plant",
      label: t.apartment.bedroom
    },
  ]
  
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage)
  const currentImages = galleryImages.slice(galleryPage * imagesPerPage, (galleryPage + 1) * imagesPerPage)

  return (
    <section id="apartment" className="py-20 sm:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.apartment.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            {t.apartment.title}
          </h2>
        </div>

        {/* Main Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t.apartment.description1}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6 text-pretty">
            {t.apartment.description2}
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-sm border border-border"
            >
              <feature.icon className="h-6 w-6 mx-auto text-accent mb-3" />
              <p className="text-sm font-medium text-foreground">{feature.label}</p>
              {feature.sublabel && (
                <p className="text-xs text-muted-foreground mt-1">{feature.sublabel}</p>
              )}
            </div>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-background rounded-lg px-4 py-3"
            >
              <amenity.icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <p className="text-sm text-foreground">{amenity.label}</p>
            </div>
          ))}
        </div>

        {/* Image Gallery - Clean Aligned Grid with Navigation */}
        <div className="relative">
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentImages.map((image, index) => {
              const globalIndex = galleryPage * imagesPerPage + index
              return (
                <button 
                  key={globalIndex} 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setCurrentImageIndex(globalIndex)
                    setLightboxOpen(true)
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-sm font-medium">{image.label}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Gallery Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={() => setGalleryPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border hover:bg-background transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>
              <button
                onClick={() => setGalleryPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border hover:bg-background transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
            </>
          )}
        </div>

        {/* Gallery Navigation */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {/* Page Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setGalleryPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === galleryPage ? "bg-accent" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          {/* Image Counter */}
          <span className="text-sm text-muted-foreground">
            {galleryPage * imagesPerPage + 1}-{Math.min((galleryPage + 1) * imagesPerPage, galleryImages.length)} / {galleryImages.length} {t.apartment.photos || "photos"}
          </span>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-50 p-2"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
            }}
            className="absolute left-4 text-white/80 hover:text-white z-50 p-2"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium">
                {galleryImages[currentImageIndex].label}
              </p>
              <p className="text-white/70 text-sm mt-1">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
            }}
            className="absolute right-4 text-white/80 hover:text-white z-50 p-2"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  )
}
