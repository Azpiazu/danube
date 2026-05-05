"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const reviews = [
    {
      quote: t.reviews.review1,
      author: t.reviews.review1Author,
      platform: "Booking.com",
    },
    {
      quote: t.reviews.review2,
      author: t.reviews.review2Author,
      location: t.reviews.review2Location,
      platform: "Airbnb",
    },
    {
      quote: t.reviews.review3,
      author: t.reviews.review3Author,
      location: t.reviews.review3Location,
      platform: "Airbnb",
    },
    {
      quote: t.reviews.review4,
      author: t.reviews.review4Author,
      location: t.reviews.review4Location,
      platform: "Airbnb",
    },
    {
      quote: t.reviews.review5,
      author: t.reviews.review5Author,
      location: t.reviews.review5Location,
      platform: "Airbnb",
    },
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            {t.reviews.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            {t.reviews.title}
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border"
            >
              <Quote className="h-8 w-8 text-accent/30 mb-6" />
              <p className="text-foreground leading-relaxed mb-6 text-pretty">
                {`"${review.quote}"`}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-primary">
                  {review.author}
                  {review.location && `, ${review.location}`}
                </p>
                <p className="text-sm text-muted-foreground">{review.platform}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional reviews row */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {reviews.slice(3).map((review, index) => (
            <div
              key={index + 3}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border"
            >
              <Quote className="h-8 w-8 text-accent/30 mb-6" />
              <p className="text-foreground leading-relaxed mb-6 text-pretty">
                {`"${review.quote}"`}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-primary">
                  {review.author}
                  {review.location && `, ${review.location}`}
                </p>
                <p className="text-sm text-muted-foreground">{review.platform}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <Quote className="h-8 w-8 text-accent/30 mb-6" />
            <p className="text-foreground leading-relaxed mb-6 text-pretty min-h-[120px]">
              {`"${reviews[currentIndex].quote}"`}
            </p>
            <div className="border-t border-border pt-4">
              <p className="font-medium text-primary">
                {reviews[currentIndex].author}
                {reviews[currentIndex].location && `, ${reviews[currentIndex].location}`}
              </p>
              <p className="text-sm text-muted-foreground">
                {reviews[currentIndex].platform}
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prevReview} aria-label={t.reviews.previousReview || "Previous review"}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2" role="tablist" aria-label={t.reviews.sectionLabel || "Review navigation"}>
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`${t.reviews.goToReview || "Go to review"} ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-accent"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextReview} aria-label={t.reviews.nextReview || "Next review"}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
